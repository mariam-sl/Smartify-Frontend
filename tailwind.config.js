/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    container:{
      center:true,
      padding:"1rem",
    },
    extend: {
      colors:{
        primary:"#0f172a",
        muted:"#64748b",
        border:"#e2e8f0",
        background:"#f8fafc",
      },
      borderRadius: { xl: "1rem", "2xl": "1.5rem", }, 
      boxShadow: { soft: "0 2px 10px rgba(0,0,0,0.05)", },
    },
  },
  plugins: [],

  
}

