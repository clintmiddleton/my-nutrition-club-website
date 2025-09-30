/** @type {import('tailwindcss').Config} */
export default {
  // Tailwind v4: sources are configured in CSS via @source
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          900: '#1e3a8a',
        },
      },
    },
  },
  // No plugins here; use @plugin in CSS (src/assets/main.css)
}
