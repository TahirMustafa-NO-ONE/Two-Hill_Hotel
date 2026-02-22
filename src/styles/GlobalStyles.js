import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    &, &.light-mode{
    /* Warm Boutique Light Mode*/
    --color-grey-0: #ffffff;
    --color-grey-50: #faf7f4;
    --color-grey-100: #f5ede0;
    --color-grey-200: #e8ddd0;
    --color-grey-300: #d4c4b0;
    --color-grey-400: #a89070;
    --color-grey-500: #6b5b3e;
    --color-grey-600: #4a3f2e;
    --color-grey-700: #1a1208;
    --color-grey-800: #12100e;
    --color-grey-900: #0d0b09;
  
    /* Status Colors - Light Mode */
    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;
    --color-green-100: #d1fae5;
    --color-green-700: #065f46;
    --color-yellow-100: #fef3c7;
    --color-yellow-700: #92400e;
    --color-silver-100: #f3f4f6;
    --color-silver-700: #374151;
    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;
  
    --color-red-100: #fee2e2;
    --color-red-700: #dc2626;
    --color-red-800: #b91c1c;
  
    --backdrop-color: rgba(26, 18, 8, 0.3);
  
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 2px 12px rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.1);

    --image-grayscale: 0;
    --image-opacity: 100%;
    }
  
    &.dark-mode {
    /* Warm Boutique Dark Mode */
    --color-grey-0: #1e1a16;
    --color-grey-50: #12100e;
    --color-grey-100: #17140f;
    --color-grey-200: #2e2720;
    --color-grey-300: #3e352b;
    --color-grey-400: #6b5b3e;
    --color-grey-500: #a89070;
    --color-grey-600: #c9b896;
    --color-grey-700: #f5ede0;
    --color-grey-800: #faf7f4;
    --color-grey-900: #ffffff;
    
    /* Status Colors - Dark Mode */
    --color-blue-100: #075985;
    --color-blue-700: #e0f2fe;
    --color-green-100: #065f46;
    --color-green-700: #d1fae5;
    --color-yellow-100: #92400e;
    --color-yellow-700: #fef3c7;
    --color-silver-100: #374151;
    --color-silver-700: #f3f4f6;
    --color-indigo-100: #3730a3;
    --color-indigo-700: #e0e7ff;
    
    --color-red-100: #fee2e2;
    --color-red-700: #dc2626;
    --color-red-800: #b91c1c;
    
    --backdrop-color: rgba(0, 0, 0, 0.5);
    
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);
    --shadow-md: 0 2px 12px rgba(0, 0, 0, 0.4);
    --shadow-lg: 0 4px 20px rgba(0, 0, 0, 0.6);
    
    --image-grayscale: 5%;
    --image-opacity: 95%;
    }

    /* Warm Gold Brand Colors */
    --color-brand-50: #fef9f0;
    --color-brand-100: #fef3e0;
    --color-brand-200: #e8c97a;
    --color-brand-500: #c9a96e;
    --color-brand-600: #b8924a;
    --color-brand-700: #8b6914;
    --color-brand-800: #6b4f0a;
    --color-brand-900: #4a3607;

    --border-radius-tiny: 6px;
    --border-radius-sm: 8px;
    --border-radius-md: 10px;
    --border-radius-lg: 16px;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  
    /* Creating animations for dark mode */
    transition: background-color 0.3s, border 0.3s;
  }
  
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: "Inter", sans-serif;
    color: var(--color-grey-700);
    background-color: var(--color-grey-50);
  
    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1.4rem;
  }
  
  input,
  button,
  textarea,
  select {
    font: inherit;
    color: inherit;
  }
  
  button {
    cursor: pointer;
  }
  
  *:disabled {
    cursor: not-allowed;
  }
  
  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }
  
  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid var(--color-brand-500);
    outline-offset: -1px;
  }
  
  /* Parent selector, finally 😃 */
  button:has(svg) {
    line-height: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  ul {
    list-style: none;
  }
  
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }
  
  img {
    max-width: 100%;
  
    /* For dark mode */
    filter: grayscale(var(--image-grayscale)) opacity(var(--image-opacity));
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    background: var(--color-grey-100);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--color-brand-500);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--color-brand-600);
  }
  
  /*
  FOR DARK MODE
  
  --color-grey-0: #18212f;
  --color-grey-50: #111827;
  --color-grey-100: #1f2937;
  --color-grey-200: #374151;
  --color-grey-300: #4b5563;
  --color-grey-400: #6b7280;
  --color-grey-500: #9ca3af;
  --color-grey-600: #d1d5db;
  --color-grey-700: #e5e7eb;
  --color-grey-800: #f3f4f6;
  --color-grey-900: #f9fafb;
  
  --color-blue-100: #075985;
  --color-blue-700: #e0f2fe;
  --color-green-100: #166534;
  --color-green-700: #dcfce7;
  --color-yellow-100: #854d0e;
  --color-yellow-700: #fef9c3;
  --color-silver-100: #374151;
  --color-silver-700: #f3f4f6;
  --color-indigo-100: #3730a3;
  --color-indigo-700: #e0e7ff;
  
  --color-red-100: #fee2e2;
  --color-red-700: #b91c1c;
  --color-red-800: #991b1b;
  
  --backdrop-color: rgba(0, 0, 0, 0.3);
  
  --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.4);
  --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.3);
  --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.4);
  
  --image-grayscale: 10%;
  --image-opacity: 90%;
  */
`;

export default GlobalStyles;
