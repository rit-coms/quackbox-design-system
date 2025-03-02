import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"
import { dependencies as peerDependencies } from "./package.json"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      outDir: "dist",
      tsconfigPath: "./tsconfig.app.json",
      insertTypesEntry: true
    })
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
      output: { globals: { react: "React", "react-dom": "ReactDOM" } }
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
