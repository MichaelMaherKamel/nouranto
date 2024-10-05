import { vitePlugin as remix } from '@remix-run/dev'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      // serverModuleFormat: 'cjs', // This is important for handling CJS modules
    }),
    tsconfigPaths(),
  ],
  optimizeDeps: {
    include: ['react-dropzone'],
  },
  build: {
    commonjsOptions: {
      include: [/react-dropzone/, /node_modules/],
    },
  },
  ssr: {
    noExternal: ['react-dropzone'],
  },
})
