import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/home/home';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div className='flex flex-col w-full h-screen justify-start items-center overflow-scroll bg-zinc-900'>
      <Home />
    </div>
  </React.StrictMode>
);
