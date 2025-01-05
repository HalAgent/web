import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCSS from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    UnoCSS({
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          scale: 1.2,
          cdn: 'https://esm.sh/'
        }),
      ],
      shortcuts: {
        'flex-center': 'flex items-center justify-center',
        'cyberpunk-text': 'font-mono text-red-500',
        'cyberpunk-bg': 'bg-black',
        'cyberpunk-border': 'border-red-500',
      },
      theme: {
        colors: {
          primary: '#ff0000',
        },
      },
    }),
    react(),
  ],
})
