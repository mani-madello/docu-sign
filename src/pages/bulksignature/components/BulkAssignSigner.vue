<script lang="ts" setup>
import { collection, doc, getDocs, getFirestore, updateDoc } from 'firebase/firestore';
import { computed, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';

interface Signer {
  role: string;
  email: string;
}

interface FileItem {
  docId: string;
  fileName: string;
  uploadedAt: Date;
  signers: Signer[];
  selectedForSigning: boolean;
}

const db = getFirestore();

const router = useRouter();
const files = ref<FileItem[]>([]);
const loading = ref(false);
const error = ref<string | null>(null);

function formatDate(timestamp: any) {
  if (!timestamp) return '';
  const date = timestamp instanceof Date ? timestamp : timestamp.toDate?.() || new Date();
  return date.toLocaleString();
}

async function fetchFiles() {
  loading.value = true;
  error.value = null;
  try {
    const querySnapshot = await getDocs(collection(db, 'contracts'));
    const loadedFiles: FileItem[] = [];
    querySnapshot.forEach(docSnap => {
      const data = docSnap.data();
      loadedFiles.push({
        docId: docSnap.id,
        fileName: data.fileName || 'Unnamed file',
        uploadedAt: data.uploadedAt ? data.uploadedAt.toDate() : new Date(),
        signers: data.signers?.length ? data.signers : [],
        selectedForSigning: false,
      });
    });
    files.value = loadedFiles;
  } catch (error_) {
    error.value = `Failed to load files: ${(error_ as Error).message}`;
  } finally {
    loading.value = false;
  }
}

function addSigner(docId: string) {
  const file = files.value.find(f => f.docId === docId);
  if (!file) return;
  file.signers.push({ role: '', email: '' });
}

function removeSigner(docId: string, index: number) {
  const file = files.value.find(f => f.docId === docId);
  if (!file) return;
  file.signers.splice(index, 1);
}

const anySelected = computed(() => files.value.some(f => f.selectedForSigning));

async function onSubmit() {
  const selectedFiles = files.value.filter(f => f.selectedForSigning); 
  // Validate: all selected files must have at least one signer with role & email filled
  for (const file of files.value.filter(f => f.selectedForSigning)) {
    if (file.signers.length === 0) {
      alert(`Please add at least one signer for file: ${file.fileName}`);
      return;
    }
    for (const signer of file.signers) {
      if (!signer.role || !signer.email) {
        alert(`Please fill role and email for all signers in file: ${file.fileName}`);
        return;
      }
    }
  }

  // Save selectedForSigning and signers to Firestore for each file
  loading.value = true;
  try {
    const updates = files.value
      .filter(f => f.selectedForSigning)
      .map(f =>
        updateDoc(doc(db, 'contracts', f.docId), {
          selectedForSigning: true,
          signers: f.signers,
          signingAssignedAt: new Date(),
          status: 'assigned', // optional status update
        }),
      );
    await Promise.all(updates);
    // Collect docIds of selected files
    const selectedDocIds = selectedFiles.map(f => f.docId);

    // Navigate to bulk signing page with selected docIds
    router.push({ name: 'bulksignature', params: { docIds: selectedDocIds } });
    alert('Signers assigned successfully! Proceeding to signing phase.');

    // Here you can emit an event or navigate to BulkSign.vue or SignatureContent.vue
    // e.g. router.push('/bulk-sign') or emit('proceedToSign', selectedFiles)
  } catch (error_) {
    alert(`Error saving signer assignments: ${(error_ as Error).message}`);
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchFiles();
});
</script>

<template>
  <div class="assign-signers">
    <h2>Assign Signers to Uploaded Files</h2>

    <div v-if="loading">Loading files...</div>
    <div
      v-if="error"
      class="error"
    >
      {{ error }}
    </div>

    <form @submit.prevent="onSubmit">
      <table>
        <thead>
          <tr>
            <th>Select</th>
            <th>File Name</th>
            <th>Uploaded At</th>
            <th>Assign Signers</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="file in files"
            :key="file.docId"
          >
            <td>
              <input
                v-model="file.selectedForSigning"
                type="checkbox"
              />
            </td>
            <td>{{ file.fileName }}</td>
            <td>{{ formatDate(file.uploadedAt) }}</td>
            <td>
              <div v-if="file.selectedForSigning">
                <div
                  v-for="(signer, index) in file.signers"
                  :key="index"
                  class="signer-entry"
                >
                  <select
                    v-model="signer.role"
                    required
                  >
                    <option
                      disabled
                      value=""
                    >
                      Select Role
                    </option>
                    <option value="HR">HR</option>
                    <option value="Employee">Employee</option>
                    <option value="Other">Other</option>
                  </select>
                  <input
                    v-model="signer.email"
                    type="email"
                    placeholder="Signer Email"
                    required
                  />
                  <button
                    type="button"
                    @click="removeSigner(file.docId, index)"
                  >
                    Remove
                  </button>
                </div>

                <button
                  type="button"
                  @click="addSigner(file.docId)"
                >
                  + Add Signer
                </button>
              </div>
              <div v-else>
                <em>Check box to assign signers</em>
              </div>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        type="submit"
        :disabled="!anySelected"
      >
        Proceed to Sign
      </button>
    </form>
  </div>
</template>

<style scoped>
.assign-signers {
  max-width: 900px;
  margin: auto;
  padding: 1rem;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}
th,
td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
.signer-entry {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.25rem;
}
button {
  cursor: pointer;
}
.error {
  color: red;
}
</style>
