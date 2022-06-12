import ReactDOM from 'react-dom/client';
import React from 'react';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);
root.render(
  <BrowserRouter basename='/Konurbaeva/goit-react-hw-05-movies/'>
    <App />
  </BrowserRouter>
);