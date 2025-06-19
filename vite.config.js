import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import IconsResolver from "unplugin-icons/resolver";
import Icons from "unplugin-icons/vite";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig({
  plugins: [
    react(),
    AutoImport({
      resolvers: [IconsResolver()],
    }),
    Icons({
      compiler: "jsx",
      autoInstall: true,
    }),
  ],
});
