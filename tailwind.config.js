/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ery: '#3edfcd',
        black: '#000000',
        orange: '#E4572E',
        red: '#CE3B3B',
        green: '#5AAF6B',
        white: '#FFFFFF',
        gray: {
          900: '#06070E',
          600: '#5B5E71',
          500: '#BBBDC9',
          400: '#E8E9F3',
          300: '#DCE2E5',
          200: '#F5F5F5',
        },
        blue: {
          background: '#EBF2FF',
          blueMedium: '#0033AB',
          blueDarkOne: '#00205C',
        },
      },

      fontSize: {
        sm: '14px',
        base: '16px',
        lg: '24px',
        xl: '40px',
      },
    },
  },
    plugins: [],
}
