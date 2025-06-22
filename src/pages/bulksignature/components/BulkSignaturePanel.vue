<!--  
<script setup lang="ts">
import SignIcon from '@/components/SignIcon.vue';

interface Props {
  isActivatedFabric: boolean;
}

interface Emits {
  copyFabric: [];
  deleteFabric: [];
}

defineProps<Props>();
defineEmits<Emits>();

const fileZoom = defineModel<number>('fileZoom', { required: true });
const MAX_ZOOM = 1.5;
const MIN_ZOOM = 0.5;

function changeZoom(value: number) {
  fileZoom.value += value;
}
</script>

<template>
  <div class="signature-panel">
    <button
      class="btn-small btn-primary"
      :disabled="!isActivatedFabric"
      @click="$emit('copyFabric')"
    >
      <sign-icon
        name="file"
        class="w-4.5 h-4.5 text-primary"
      />
    </button>

    <button
      class="btn-small btn-primary"
      :disabled="!isActivatedFabric"
      @click="$emit('deleteFabric')"
    >
      <sign-icon
        name="trash"
        class="w-4.5 h-4.5 text-primary"
      />
    </button>

    <button
      class="btn-small btn-primary text-xs"
      :disabled="fileZoom >= MAX_ZOOM"
      @click="changeZoom(0.1)"
    >
      ➕
    </button>
    <button
      class="btn-small btn-primary text-xs"
      :disabled="fileZoom <= MIN_ZOOM"
      @click="changeZoom(-0.1)"
    >
      ➖
    </button>
  </div>
</template>

<style lang="css" scoped>
.signature-panel {
  padding: 4px 16px;
  background: white;
  border: 2px solid var(--color-primary);
  box-shadow: 0 1px 3px 0 var(--color-primary);
  border-radius: 20px;
  position: absolute;
  bottom: 14px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 2px;
}

@media (min-width: 768px) {
  .signature-panel {
    gap: 8px;
    padding: 4px 20px;
  }
}

.signature-panel .btn-small {
  text-shadow: 0 0 0 #155dfc;
  color: transparent;
}

.signature-panel .btn-small:hover {
  text-shadow: 0 0 0 #ffffff;

  svg {
    color: #ffffff;
  }
}

.signature-panel .btn-small:disabled {
  text-shadow: 0 0 0 #808080;

  svg {
    color: #808080;
  }
}
</style>
-->
<!-- <script setup lang="ts">
import { onMounted, ref } from 'vue';

const emit = defineEmits(['updateSignature']);
const sigCanvas = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;

onMounted(() => {
  if (sigCanvas.value) {
    sigCanvas.value.width = 300;
    sigCanvas.value.height = 100;
    ctx = sigCanvas.value.getContext('2d')!;
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, sigCanvas.value.width, sigCanvas.value.height);

    let drawing = false;
    const getPos = (e: MouseEvent | TouchEvent) => {
      const rect = sigCanvas.value!.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
      return { x: clientX - rect.left, y: clientY - rect.top };
    };

    const start = (e: MouseEvent | TouchEvent) => {
      drawing = true;
      ctx!.beginPath();
      const pos = getPos(e);
      ctx!.moveTo(pos.x, pos.y);
    };

    const draw = (e: MouseEvent | TouchEvent) => {
      if (!drawing) return;
      const pos = getPos(e);
      ctx!.lineTo(pos.x, pos.y);
      ctx!.stroke();
    };

    const end = () => (drawing = false);

    sigCanvas.value.addEventListener('mousedown', start);
    sigCanvas.value.addEventListener('mousemove', draw);
    sigCanvas.value.addEventListener('mouseup', end);

    sigCanvas.value.addEventListener('touchstart', start);
    sigCanvas.value.addEventListener('touchmove', draw);
    sigCanvas.value.addEventListener('touchend', end);
  }
});

const clear = () => {
  ctx!.clearRect(0, 0, sigCanvas.value!.width, sigCanvas.value!.height);
  ctx!.fillStyle = '#fff';
  ctx!.fillRect(0, 0, sigCanvas.value!.width, sigCanvas.value!.height);
};

const emitSignature = () => {
  const imageData = sigCanvas.value!.toDataURL('image/png');
  emit('updateSignature', imageData);

};
</script>

<template>
  <div>
    <canvas
      ref="sigCanvas"
      class="sig-pad"
    ></canvas>
    <div class="tools">
      <button @click="clear">Clear</button>
      <button @click="emitSignature">Use Signature</button>
    </div>
  </div>
</template>

<style scoped>
.sig-pad {
  border: 1px solid #ccc;
  background: white;
}
</style> -->

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const emit = defineEmits(['signatureUsed']);
const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let drawing = false;

onMounted(() => {
  const canvas = canvasRef.value;
  if (canvas) {
    ctx = canvas.getContext('2d');
    canvas.addEventListener('mousedown', () => (drawing = true));
    canvas.addEventListener('mouseup', () => (drawing = false));
    canvas.addEventListener('mousemove', draw);
  }
});

function draw(e: MouseEvent) {
  if (!drawing || !ctx || !canvasRef.value) return;
  ctx.lineWidth = 2;
  ctx.lineCap = 'round';
  const rect = canvasRef.value.getBoundingClientRect();
  ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
}

function clear() {
  if (ctx && canvasRef.value) {
    ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
    ctx.beginPath();
  }
}

function emitSignature() {
  const dataURL = canvasRef.value?.toDataURL();
  if (dataURL) emit('signatureUsed', dataURL);
}
</script>

<template>
  <div>
    <h2>Draw Signature</h2>
    <canvas
      ref="canvasRef"
      width="300"
      height="100"
    ></canvas>
    <div class="controls">
      <button @click="clear">Clear</button>
      <button @click="emitSignature">Use Signature</button>
    </div>
  </div>
</template>
