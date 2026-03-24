import { defineConfig } from 'tsdown';

export default defineConfig({
  dts: true,
  entry: [
    'src/index.ts',
    'src/games-won.ts',
    'src/black.ts',
    'src/won-with-black.ts',
    'src/elected.ts',
    'src/standard.ts',
  ],
  format: 'esm',
  minify: true,
  outDir: 'dist',
  platform: 'neutral',
  sourcemap: 'hidden',
});
