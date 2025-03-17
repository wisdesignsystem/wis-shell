import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";
import { pluginBasicSsl } from "@rsbuild/plugin-basic-ssl";
import { wisRsbuildPlugin } from "@wisdesign/wis-plugin/rsbuild"

export default defineConfig({
  server: {
    port: 4000,
  },

  html: {
    template: "./public/index.html",
  },

  plugins: [pluginReact(), pluginBasicSsl(), wisRsbuildPlugin()],
});
