import { StrictMode } from 'react'
import ReactDOM  from 'react-dom/client'
import {AppProvider} from "@/app/providers/AppProvider";
import "@/app/styles/globals.css";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
      <AppProvider />
  </StrictMode>,
)