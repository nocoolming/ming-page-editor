import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

import path from 'path'; // 👈 确保这个导入存在

// 获取当前 demo 目录的绝对路径
const demoDir = __dirname;
// 构造 core 目录的绝对路径 (请根据您的实际结构调整 '../packages/page-editor')
const coreDir = path.resolve(demoDir, '../packages/core');

export default defineConfig({
  plugins: [
    tailwindcss({
      // 关键：使用 content 选项来指定需要扫描的文件路径
      content: {
        files: [
          // 1. 扫描 demo 自己的文件
          path.resolve(demoDir, './src/**/*.{js,ts,jsx,tsx}'),

          // 2. 扫描 core 包的源码文件，使用绝对路径确保准确性
          path.resolve(coreDir, './src/**/*.{js,ts,jsx,tsx}'),
        ],
      },
    }),
    reactRouter(), tsconfigPaths()],
  optimizeDeps: {
    include: ["react", "react-dom"]
  },
  ssr: {
    noExternal: ["@nocoolming/page-editor"]
  }
});
