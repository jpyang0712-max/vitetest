import { defineConfig } from 'vite';
import handlebars from 'vite-plugin-handlebars';
import { resolve } from 'path';

export default defineConfig({
  // 빌드 결과물이 나올 폴더 지정 (기존처럼 theme로 하고 싶다면)
  base: '/vitetest/',
  build: {
    outDir: 'theme',
  },
  plugins: [
    handlebars({
      // @@include 대신 {{> filename}} 문법을 사용하게 됩니다.
      partialDirectory: resolve(__dirname, 'src/partials'),
    }),
  ],
});