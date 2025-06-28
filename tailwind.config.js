/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1a365d', // navy-800
        'primary-50': '#f0f4f8', // navy-50
        'primary-100': '#d6e3f0', // navy-100
        'primary-200': '#b8cfe6', // navy-200
        'primary-300': '#9bb8dc', // navy-300
        'primary-400': '#7ea1d2', // navy-400
        'primary-500': '#4a90c2', // navy-500
        'primary-600': '#2c5aa0', // navy-600
        'primary-700': '#1e3a8a', // navy-700
        'primary-800': '#1a365d', // navy-800
        'primary-900': '#0f172a', // navy-900
        'primary-foreground': '#ffffff', // white

        // Secondary Colors
        'secondary': '#2d3748', // gray-700
        'secondary-50': '#f7fafc', // gray-50
        'secondary-100': '#edf2f7', // gray-100
        'secondary-200': '#e2e8f0', // gray-200
        'secondary-300': '#cbd5e0', // gray-300
        'secondary-400': '#a0aec0', // gray-400
        'secondary-500': '#718096', // gray-500
        'secondary-600': '#4a5568', // gray-600
        'secondary-700': '#2d3748', // gray-700
        'secondary-800': '#1a202c', // gray-800
        'secondary-900': '#171923', // gray-900
        'secondary-foreground': '#ffffff', // white

        // Accent Colors
        'accent': '#38a169', // green-600
        'accent-50': '#f0fff4', // green-50
        'accent-100': '#c6f6d5', // green-100
        'accent-200': '#9ae6b4', // green-200
        'accent-300': '#68d391', // green-300
        'accent-400': '#48bb78', // green-400
        'accent-500': '#38a169', // green-500
        'accent-600': '#2f855a', // green-600
        'accent-700': '#276749', // green-700
        'accent-800': '#22543d', // green-800
        'accent-900': '#1c4532', // green-900
        'accent-foreground': '#ffffff', // white

        // Background Colors
        'background': '#ffffff', // white
        'surface': '#f7fafc', // gray-50
        'surface-secondary': '#edf2f7', // gray-100

        // Text Colors
        'text-primary': '#1a202c', // gray-800
        'text-secondary': '#4a5568', // gray-600
        'text-muted': '#718096', // gray-500

        // Status Colors
        'success': '#38a169', // green-600
        'success-50': '#f0fff4', // green-50
        'success-100': '#c6f6d5', // green-100
        'success-foreground': '#ffffff', // white

        'warning': '#d69e2e', // yellow-600
        'warning-50': '#fffbeb', // yellow-50
        'warning-100': '#fef3c7', // yellow-100
        'warning-foreground': '#ffffff', // white

        'error': '#e53e3e', // red-600
        'error-50': '#fef2f2', // red-50
        'error-100': '#fee2e2', // red-100
        'error-foreground': '#ffffff', // white

        'info': '#4299e1', // blue-500
        'info-50': '#eff6ff', // blue-50
        'info-100': '#dbeafe', // blue-100
        'info-foreground': '#ffffff', // white

        // Border Colors
        'border': '#e2e8f0', // gray-200
        'border-muted': '#f1f5f9', // gray-100
      },
      fontFamily: {
        'heading': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Source Sans Pro', 'system-ui', 'sans-serif'],
        'mono': ['Fira Code', 'Monaco', 'Menlo', 'monospace'],
        'cta': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      boxShadow: {
        'primary': '0 4px 6px -1px rgba(26, 54, 93, 0.1), 0 2px 4px -1px rgba(26, 54, 93, 0.06)',
        'secondary': '0 10px 15px -3px rgba(26, 54, 93, 0.1), 0 4px 6px -2px rgba(26, 54, 93, 0.05)',
        'large': '0 20px 25px -5px rgba(26, 54, 93, 0.1), 0 10px 10px -5px rgba(26, 54, 93, 0.04)',
        'inner-primary': 'inset 0 2px 4px 0 rgba(26, 54, 93, 0.06)',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.4s ease-out forwards',
        'data-flow': 'dataFlow 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        dataFlow: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateX(100%)', opacity: '0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      aspectRatio: {
        'golden': '1.618',
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'reveal': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(0, 1fr))',
        'auto-fit-280': 'repeat(auto-fit, minmax(280px, 1fr))',
        'auto-fit-320': 'repeat(auto-fit, minmax(320px, 1fr))',
        'auto-fit-360': 'repeat(auto-fit, minmax(360px, 1fr))',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwindcss-animate'),
  ],
}