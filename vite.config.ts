import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://dariaczupreta.pl/",
  plugins: [
    react({
      include: /\.(jsx|tsx)$/,
      babel: {
        // plugins: ['babel-plugin-macros', 'babel-plugin-styled-components'],
        babelrc: false,
        configFile: false,
      },
    }),
  ],
});
