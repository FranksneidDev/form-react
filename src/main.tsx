import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomeComponent from "./Components/Home/HomeComponent.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HomeComponent/>
  </React.StrictMode>,
)
