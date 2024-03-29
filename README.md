## Template Starter Standard

1. Installing Dependencies
```
npm create vite@latest
npm install
npm install react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install --save react-router-dom
npm run dev
```

2. Update `tailwind.config.js`
```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {},
  },
  plugins: [],
}
```

3. Update `src/index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```