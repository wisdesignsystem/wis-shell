import type { WisConfig } from "@wisdesign/wis-plugin"

const config: WisConfig = {
  name: "shell",

  remotes: {
    example: "https://wis-example.vercel.app",
  },

  exposes: {
    "./Button": "./src/packages/button/Button",
  },
}

export default config