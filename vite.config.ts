import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // ဒါက အရေးကြီးပါတယ် (Path ပြဿနာကို ရှင်းပေးပါတယ်)
  build: {
    outDir: "dist",
  }
});
