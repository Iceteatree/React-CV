// Import all relevant React modules
import React from 'react';
import ReactDOM from 'react-dom';
// Import App component to be rendered
import App from './App';

// Render to HTML document
ReactDOM.render(
  <React.StrictMode>
  {/* Rendering App component */}
    <App />
  </React.StrictMode>,
  // At location root in HTML
  document.getElementById('root')
);

