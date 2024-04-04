import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './destyle.css';
import LayoutDefault from './components/templates/LayoutDefault';
import { ContextProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <LayoutDefault />
    </ContextProvider>
  </React.StrictMode>
);
