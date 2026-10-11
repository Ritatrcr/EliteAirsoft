/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLARITY_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.MOV" {
  const src: string;
  export default src;
}
