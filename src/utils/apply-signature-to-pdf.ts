/* eslint-disable no-unsafe-optional-chaining */
import { PDFDocument } from 'pdf-lib';

export async function mergeSignatureToPDF(fileUrl: string, signatureDataUrl: string): Promise<Blob> {
  try {
    // Fetch original PDF bytes
    const existingPdfBytes = await fetch(fileUrl).then(res => res.arrayBuffer());

    // Create new PDF document from the bytes
    const pdfDoc = await PDFDocument.load(existingPdfBytes);

    // Embed the signature image (base64 or URL)
    const imageBytes = await fetch(signatureDataUrl).then(res => res.arrayBuffer());
    const imageExt = signatureDataUrl.startsWith('data:image/png') ? 'png' : 'jpg';
    const embeddedImage = imageExt === 'png' ? await pdfDoc.embedPng(imageBytes) : await pdfDoc.embedJpg(imageBytes);

    const pngDims = embeddedImage.scale(0.25); // adjust scale as needed

    // Add signature to the last page
    const pages = pdfDoc.getPages();
    const lastPage = pages.at(-1);
    const { width, height } = lastPage?.getSize();

    // Draw image at bottom-right corner with 20px margin
    lastPage?.drawImage(embeddedImage, {
      x: width - pngDims.width - 20,
      y: 20,
      width: pngDims.width,
      height: pngDims.height,
    });

    // Serialize PDF and return as Blob
    const pdfBytes = await pdfDoc.save();
    return new Blob([pdfBytes], { type: 'application/pdf' });
  } catch (error) {
    console.error('PDF merging failed:', error);
    throw new Error('Failed to insert signature into PDF');
  }
}
