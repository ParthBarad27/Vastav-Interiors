/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)', /* light-gray */
        input: 'var(--color-input)', /* light-gray */
        ring: 'var(--color-ring)', /* saddle-brown */
        background: 'var(--color-background)', /* pure-white */
        foreground: 'var(--color-foreground)', /* charcoal */
        primary: {
          DEFAULT: 'var(--color-primary)', /* saddle-brown */
          foreground: 'var(--color-primary-foreground)' /* white */
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', /* soft-white */
          foreground: 'var(--color-secondary-foreground)' /* charcoal */
        },
        accent: {
          DEFAULT: 'var(--color-accent)', /* goldenrod */
          foreground: 'var(--color-accent-foreground)' /* white */
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', /* crimson */
          foreground: 'var(--color-destructive-foreground)' /* white */
        },
        success: {
          DEFAULT: 'var(--color-success)', /* forest-green */
          foreground: 'var(--color-success-foreground)' /* white */
        },
        warning: {
          DEFAULT: 'var(--color-warning)', /* dark-orange */
          foreground: 'var(--color-warning-foreground)' /* white */
        },
        error: {
          DEFAULT: 'var(--color-error)', /* crimson */
          foreground: 'var(--color-error-foreground)' /* white */
        },
        muted: {
          DEFAULT: 'var(--color-muted)', /* whisper-gray */
          foreground: 'var(--color-muted-foreground)' /* medium-gray */
        },
        card: {
          DEFAULT: 'var(--color-card)', /* whisper-gray */
          foreground: 'var(--color-card-foreground)' /* charcoal */
        },
        popover: {
          DEFAULT: 'var(--color-popover)', /* white */
          foreground: 'var(--color-popover-foreground)' /* charcoal */
        },
        brand: {
          beige: 'var(--color-brand-beige)', /* beige */
          'dark-goldenrod': 'var(--color-brand-dark-goldenrod)', /* dark-goldenrod */
          'dark-slate': 'var(--color-brand-dark-slate)', /* dark-slate-gray */
          'near-black': 'var(--color-brand-near-black)', /* near-black */
          'off-white': 'var(--color-brand-off-white)' /* off-white */
        }
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      },
      fontSize: {
        'display-lg': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
        'display-sm': ['2rem', { lineHeight: '1.3', fontWeight: '700' }],
        'heading-xl': ['2rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-lg': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }],
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],
        'heading-sm': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['1rem', { lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', fontWeight: '400' }],
        'body-xs': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }]
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 13px */
        'md': 'var(--spacing-md)', /* 21px */
        'lg': 'var(--spacing-lg)', /* 34px */
        'xl': 'var(--spacing-xl)' /* 55px */
      },
      borderRadius: {
        'sm': 'var(--radius-sm)', /* 4px */
        'md': 'var(--radius-md)', /* 8px */
        'lg': 'var(--radius-lg)', /* 12px */
        'xl': 'var(--radius-xl)' /* 16px */
      },
      boxShadow: {
        'brand': '0 4px 20px rgba(139, 69, 19, 0.15)',
        'brand-hover': '0 8px 30px rgba(139, 69, 19, 0.2)',
        'brand-lg': '0 10px 40px rgba(139, 69, 19, 0.2)',
        'soft': '0 2px 8px rgba(0, 0, 0, 0.1)'
      },
      transitionTimingFunction: {
        'brand': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        pulseSubtle: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.9' }
        }
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('tailwindcss-animate')
  ]
}