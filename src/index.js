import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
     {/* Footer */}
     <footer className="bg-blue-700 text-white py-4 w-full">
        <div className="text-center">
          <p>&copy; {new Date().getFullYear()} Developed by Hetvi Gohil- 202203103510210</p>
        </div>
      </footer>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
