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

2. Check for `tailwind.config.js` update

3. Update `src/index.css`
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

4. Update `src/main.jsx` with BrowserRouter template
```
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)

```