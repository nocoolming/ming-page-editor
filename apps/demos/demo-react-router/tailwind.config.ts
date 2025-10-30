import type { Config } from 'tailwindcss'

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "../../../packages/core/src/**/*.{js,ts,jsx,tsx}"
  ],
  // safelist: [
  //   // MingEditor 使用的类
  //   'flex', 'flex-row', 'flex-col', 'gap-3', 'px-3', 'py-2', 'py-6', 
  //   'w-96', 'bg-blue-800', 'bg-yellow-50', 'justify-center', 'grow', 
  //   'h-screen', 'w-full', 'border-b-black', 'border-2', 'h-full'
  // ]
} satisfies Config