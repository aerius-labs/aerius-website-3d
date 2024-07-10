import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-black':
          'linear-gradient(to bottom, transparent, transparent 60%, #000 60%, #000 100%)',
      },
      keyframes: {
        grow: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        topAway: {
          '0%': { justifyContent: 'center', alignItems: 'end' },
          '100%': { justifyContent: 'space-between', alignItems: 'start' },
        },
        bottomAway: {
          '0%': { justifyContent: 'center', alignItems: 'start' },
          '100%': { justifyContent: 'space-between', alignItems: 'end' },
        },
      },
      animation: {
        topAway: 'topAway 0.5s ease-out forwards',
        bottomAway: 'bottomAway 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;
