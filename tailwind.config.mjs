/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', 'Fira Code', 'monospace'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      colors: {
        bg: {
          primary: '#05010a',
          secondary: '#0b0613',
          tertiary: '#140a24',
        },
        neon: {
          purple: '#b026ff',
          violet: '#8f3bff',
          deep: '#5d1eff',
          magenta: '#ff2bd6',
          blue: '#33d1ff',
          cyan: '#00ffe1',
          pink: '#ff4fd8',
        },
        text: {
          primary: '#f5eaff',
          secondary: '#b7a8d9',
          muted: '#6f6591',
        },
        glass: {
          bg: 'rgba(20, 10, 36, 0.55)',
          border: 'rgba(176, 38, 255, 0.25)',
        },
      },
      animation: {
        'spin-slow': 'spin 30s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'typewriter': 'typewriter 3s steps(40) 1s forwards',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', filter: 'brightness(1)' },
          '50%': { opacity: '0.8', filter: 'brightness(1.3)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scanline': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'flicker': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        'typewriter': {
          '0%': { width: '0' },
          '100%': { width: '100%' },
        },
      },
      backgroundImage: {
        'gradient-cyber': 'linear-gradient(135deg, #05010a 0%, #140a24 35%, #5d1eff 100%)',
        'gradient-neon': 'linear-gradient(90deg, #b026ff, #ff2bd6, #33d1ff)',
        'gradient-glass': 'linear-gradient(145deg, rgba(255,255,255,0.06), rgba(255,255,255,0.01))',
      },
      boxShadow: {
        'glow-purple': '0 0 10px rgba(176, 38, 255, 0.8), 0 0 20px rgba(176, 38, 255, 0.5), 0 0 40px rgba(176, 38, 255, 0.3)',
        'glow-magenta': '0 0 12px rgba(255, 43, 214, 0.8), 0 0 30px rgba(255, 43, 214, 0.4)',
        'glow-cyan': '0 0 12px rgba(51, 209, 255, 0.8), 0 0 24px rgba(51, 209, 255, 0.4)',
        'glow-deep': '0 10px 40px rgba(0,0,0,0.6)',
      },
      transitionTimingFunction: {
        'expo': 'cubic-bezier(0.6, 0.01, 0, 0.95)',
      },
    },
  },
  plugins: [],
};
