/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-dark': '#391c3a',
        'dark-blue': '#331c52',
        'purple': '#8121d0',
        'light-purple': '#dccfed',
        'light-blue': '#e1ebed',
        'white': '#ffffff',
      },
      backgroundImage: {
        'custom-gradient1': 'linear-gradient(to right, #af78df 30%, #8121d0 100%)',
        'custom-gradient2': 'linear-gradient(to right, #ffffff 0%, #984dd7 50%, #8121d0 100%)',
        'custom-gradient3': 'linear-gradient(to right, #8121d0 63%, #331c52 100%)',
      },
      textColor: {
        'custom-gradient': 'linear-gradient(to right, #af78df 30%, #8121d0 100%)',
        'custom-gradient2': 'linear-gradient(to right, #ffffff 0%, #984dd7 50%, #8121d0 100%)',
        'custom-gradient3': 'linear-gradient(to right, #8121d0 63%, #331c52 100%)',
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.4', fontWeight: 'bold' }],
        'h2': ['50px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'h3': ['36px', { lineHeight: '1.2', fontWeight: 'bold' }],
        'regular': ['20px', { lineHeight: '1.4', fontWeight: 'normal' }],
        'bold-20': ['20px', { lineHeight: '1.4', fontWeight: 'bold' }],
        'semibold-20': ['20px', { lineHeight: '1.4', fontWeight: '600' }],
      },
    },
  },
  plugins: [],
}

