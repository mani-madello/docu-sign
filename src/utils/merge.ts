import { getBytes, ref as storageRef } from 'firebase/storage';
import { PDFDocument } from 'pdf-lib';
import { storage } from '@/firebase';

export async function mergeSignatureToPDF(
  file: any,
  signatureImage: string, // base64 encoded PNG/JPEG image string
  position: any,
): Promise<Blob> {
  try {
    if (!file?.filePath) {
      throw new Error('Invalid file path. Cannot fetch PDF from Firebase Storage.');
    }

    // Create a non-root Firebase Storage reference
    console.log('Merging PDF for file:', file);

    const fileRef = storageRef(storage, file.filePath); // filePath must be like 'uploads/<docId>.pdf'
    const pdfBytes = await getBytes(fileRef);

    // Load PDF
    const pdfDoc = await PDFDocument.load(pdfBytes);

    // Convert base64 image string to Uint8Array
    console.log(signatureImage);
    const base64 = signatureImage.split(',')[1]; // remove data:image/png;base64, prefix
    const binaryString = atob(base64);
    const imageBytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      imageBytes[i] = binaryString.charCodeAt(i);
    }

    // Embed the image
    const image = await pdfDoc.embedPng(imageBytes); // Use embedJpg if it's a JPG
    const imageDims = image.scale(0.5); // scale as needed

    // Draw on target page
    const page = pdfDoc.getPage(position.page || 0);
    page.drawImage(image, {
      x: position.x,
      y: position.y,
      width: imageDims.width,
      height: imageDims.height,
    });

    // Save modified PDF
    const signedPdfBytes = await pdfDoc.save();
    return new Blob([signedPdfBytes], { type: 'application/pdf' });
  } catch (error) {
    console.error('Failed to merge signature into PDF:', error);
    throw error;
  }
}
