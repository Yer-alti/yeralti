import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'primary': 'var(--primary)',
        'main': 'var(--color-text)',
        'soft': 'var(--color-text-soft)',
        'primary-soft': 'var(--primary-soft)',
        'bg': 'var(--bg)',
      }
    }
  },

  plugins: [typography, forms, containerQueries]
} satisfies Config;
