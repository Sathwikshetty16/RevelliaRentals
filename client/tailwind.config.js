/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5', // Modern violet-blue
        secondary: '#14B8A6', // Vibrant teal
        accent: '#F472B6', // Soft pink for accents
        background: '#F3F4F6', // Neutral light gray for background
        textPrimary: '#111827', // Dark gray for text
        textSecondary: '#6B7280', // Lighter gray for secondary text
      },
      borderRadius: {
        'xl': '1.25rem', // Extra large rounded corners for modern buttons
      },
      boxShadow: {
        'modern': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)', // Softer modern shadow
      },
      aspectRatio: {
        '16/9': '16 / 9', // Modern widescreen ratio
        '4/3': '4 / 3', // Classic display ratio
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Modern sans-serif font
      },
      gradientColorStops: {
        'primary-gradient': ['#4F46E5', '#14B8A6'], // Gradient for backgrounds or buttons
      },
    },
  },
  plugins: [],
}
