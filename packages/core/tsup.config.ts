import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  target: "esnext",
  platform: "browser", // 强制使用浏览器环境
  noExternal: ["nanoid"], // 将 nanoid 打包进去，避免运行时依赖
});
