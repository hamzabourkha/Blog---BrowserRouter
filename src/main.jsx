import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import AppDataLoading from './AppDataLoading.jsx'
import AppDataLoadingDefer from './AppDataLoadingDefer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppDataLoadingDefer/>
  </React.StrictMode>,
)
