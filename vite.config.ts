import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { dependencies as peerDependencies } from "./package.json"
import ViteCssInjectedByJs from "vite-plugin-css-injected-by-js"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outDir: "dist",
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true
    }),
    ViteCssInjectedByJs()
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "quackbox-design-system",
      formats: ["es", "cjs", "umd"],
      fileName: (format) => `quackbox-design-system.${format}.js`,
    },
    rollupOptions: {
      external: Object.keys(peerDependencies),
      output: { 
        globals: { react: "React", "react-dom": "ReactDOM" },
        assetFileNames: "assets/[name]-[hash][extname]"
      } 
    }
  },
  css: {
    modules: {
      localsConvention: "camelCase",
      generateScopedName: "[name]_[local]_[hash:base64:6]",
      globalModulePaths: [/globals\.css$/]
    }
  }
  
})
