import React, {useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// const [location, setLocation] = useState("City of London, England");

const Box = () => {
  return (
    <div className="bg-white shadow rounded-lg p-6 flex flex-col items-center">
      <div className="text-4xl text-gray-800 font-bold">10.0</div>
      <div id="default-text">Some text here</div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <div id="large-text"  className="text-right mr-10">
    City of London, England
    </div>

    <div className="grid grid-cols-1 m-20">
      <div className="text-9xl text-teal-400 font-bold m-auto">
        20
      </div>
      <div className="text-3xl text-teal-400 font-bold m-auto">
        Fair
      </div>
      <div id="large-text" className="m-auto">
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

