// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./src/App";
import { Provider } from "react-redux";
import store from "./src/store";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);