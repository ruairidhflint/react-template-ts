import React, {useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const Box = () => {
  return (
    <div className="shadow-md rounded-lg p-6 flex flex-col items-center">
      <div className="text-4xl font-bold">10.0</div>
      <div className="text-base">Some text here</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <div className="text-lg text-right mr-10">
        City of London, England
    </div>

    <div className="grid grid-cols-1 m-20">

      <div className="text-9xl font-bold m-auto">
        420
      </div>
      <div className="text-3xl font-bold m-auto">
        Fair
      </div>
      <div className="text-lg m-auto">
        Air quality
      </div>

      <div className="grid grid-cols-4 gap-4">
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </div>
    </div>


  </React.StrictMode>,
)

