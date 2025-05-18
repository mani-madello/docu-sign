import { useAuthStore } from '@/store/auth';
import { useConfigStore } from '@/store/config';
import { useImageStore } from '@/store/image';
import { useLiteralStore } from '@/store/literal';
import * as pdfStore from '@/store/pdf';
import { useSignatureStore } from '@/store/signature';

export type PdfStore = typeof pdfStore;

export const { usePdfStore } = pdfStore;

export { useAuthStore, useConfigStore, useImageStore, useLiteralStore, useSignatureStore };
