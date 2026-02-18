import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {
    alias: {
      // မင်းက root မှာပဲ ထားတာဆိုတော့ @ ကို လက်ရှိ folder လို့ သတ်မှတ်ပေးရမယ်
      "@": "/",
    },
  },
});
