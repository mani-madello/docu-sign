ve web application by <strong>Madello AI</strong> & <strong>Madello Consulting</strong> for <code>securely signing PDF</code> documents online.
</p>

<p align="center">
  <img alt="GitHub Release" src="https://img.shields.io/github/v/release/tzuyi0817/PDF-signature?label=%20&color=%23B7EC5D">
  <a href="https://github.com/tzuyi0817/pdf-signature/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/tzuyi0817/pdf-signature?color=%23B7EC5D" alt="License">
  </a>
</p>

<p align="center">
  <a href="https://pdf-signature-puce.vercel.app">
    <img src="https://img.shields.io/badge/madello--esign-live%20demo-%23B7EC5D?style=for-the-badge" />
  </a>
</p>

<br>

![Madello E-Sign Cover]

## 📝 About Madello E-Sign

**Madello E-Sign** is a secure, user-friendly tool built to streamline PDF document signing. Developed by **Madello AI**, a product-focused division of **Madello Consulting**, this tool enables professionals, enterprises, and individuals to manage and sign documents digitally—anytime, anywhere.

Key benefits:
- Enhance efficiency in digital workflows
- Simplify e-signature handling
- Maintain privacy with local and secure data handling

## 🔐 Features

- Upload and sign PDF documents digitally
- Download secured, signed PDFs
- Drag and resize signature anywhere on the page
- Set passwords to protect PDFs
- Open encrypted PDFs
- Multilingual support
- Store PDFs in browser `IndexedDB`
- Save custom signatures, images, and text in `localStorage`
- Edit already signed documents
- Batch file operations: archive, delete, restore

## 🚀 Quick Start (Development)

Ensure Node.js v20.9.0+ is installed. Then:

```bash
pnpm install
pnpm dev       # Run development server
pnpm build     # Build for production
pnpm preview   # Preview production build

## Usage

1. `Upload PDF File`: Click the upload button to select the PDF file you want to sign. The file will be stored in the local IndexedDB.
2. `Open Encrypted PDF`: If the PDF file is encrypted, you will be prompted to enter the password to open it.
3. `Add Signature`: Choose the position on the PDF where you want to add your signature. Signatures, text, and images will be stored in localStorage for reuse.
4. `Adjust Signature`: Drag and resize the signature as needed.
5. `Set PDF Password`: After completing the signature, you can set a password to open the PDF.
6. `Language Switch`: Select the language in the upper right corner of the header.
7. `Download Signed PDF`: After signing, click the download button to get the signed PDF file.
8. `Edit Signed PDF`: After signing, click the edit button to edit the signed PDF file.
9. `Batch Operation`: Batch archive, delete and reduction files

## Contribution

Contributions are welcome! If you have any suggestions or improvements, please submit a Pull Request or create an Issue.

## License

This project is licensed under the [MIT](https://opensource.org/licenses/MIT) License - see the [LICENSE](./LICENSE) file for details.
