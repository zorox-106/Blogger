/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#FFFDF5', // Warm Cream/Off-White
        foreground: '#1E293B', // Slate 800
        muted: '#F1F5F9', // Slate 100
        mutedForeground: '#64748B', // Slate 500
        accent: '#8B5CF6', // Vivid Violet
        accentForeground: '#FFFFFF',
        secondary: '#F472B6', // Hot Pink
        tertiary: '#FBBF24', // Amber/Yellow
        quaternary: '#34D399', // Emerald/Mint
        border: '#1E293B', // Chunky dark borders
        inputBg: '#FFFFFF',
        card: '#FFFFFF',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'pop': '4px 4px 0px 0px #1E293B',
        'pop-hover': '6px 6px 0px 0px #1E293B',
        'pop-active': '2px 2px 0px 0px #1E293B',
        'pop-pink': '8px 8px 0px 0px #F472B6',
        'pop-soft': '8px 8px 0px 0px #E2E8F0',
      },
      borderWidth: {
        '3': '3px',
      },
      borderRadius: {
        'blob': '1rem 1rem 1rem 0',
        'arch': '9999px 9999px 0 0',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        popIn: {
          '0%': { transform: 'scale(0.8)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        popIn: 'popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
      }
    },
  },
  plugins: [],
}
