import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - neutral dark blue (replaces purple-tinted navy)
        brand: {
          dark: '#0F172A',      // Slate 900 - darkest
          DEFAULT: '#1E293B',   // Slate 800 - primary brand
          light: '#334155',     // Slate 700 - lighter accent
        },
        // Legacy aliases for gradual migration
        casa: {
          navy: '#0F172A',      // Now maps to brand-dark
          'navy-light': '#334155',
          'navy-dark': '#020617',
          indigo: '#FF6B35',    // Now maps to construction-orange
          'indigo-light': '#FF8F66',
        },
        construction: {
          orange: '#FF6B35',
          'orange-dark': '#E85A2A',
          'orange-light': '#FF8F66',
          yellow: '#FFD166',
          steel: '#4A5568',
          'steel-dark': '#2D3748',
          'steel-light': '#718096',
        },
        surface: '#FFFFFF',
        canvas: '#FAFAFA',
        subtle: '#F5F5F4',
        'warm-subtle': '#FAF8F5',
        'text-primary': '#0A0A0A',
        'text-secondary': '#525252',
        'text-tertiary': '#A3A3A3',
        border: '#E5E5E5',
        success: '#16A34A',
        warning: '#CA8A04',
        error: '#DC2626',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'button': '12px',
      },
      boxShadow: {
        'card': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'card-elevated': '0 4px 6px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.06)',
        'card-hover': '0 10px 25px rgba(27,20,100,0.08), 0 4px 10px rgba(0,0,0,0.04)',
        'construction-glow': '0 0 20px rgba(255, 107, 53, 0.3)',
        'construction-glow-lg': '0 0 40px rgba(255, 107, 53, 0.4)',
        'card-construction': '0 4px 20px rgba(255, 107, 53, 0.15)',
        'button-glow': '0 4px 14px rgba(255, 107, 53, 0.4)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 2s infinite',
        'float-delayed-2': 'float 7s ease-in-out 1s infinite',
        'float-delayed-3': 'float 5s ease-in-out 3s infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'fade-up-delayed': 'fadeUp 0.6s ease-out 0.2s forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.5s ease-out forwards',
        'slide-in-right': 'slideInRight 0.5s ease-out forwards',
        'pulse-orange': 'pulseOrange 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
        'draw-line': 'drawLine 1.5s ease-out forwards',
        'scale-in': 'scaleIn 0.3s ease-out forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        pulseOrange: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255, 107, 53, 0.4)' },
          '50%': { boxShadow: '0 0 0 10px rgba(255, 107, 53, 0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(255, 107, 53, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(255, 107, 53, 0.5)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
