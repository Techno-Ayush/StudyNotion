import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import ScrollToTop from "./Components/ScrollToTop";
import "./index.css";

import { BrowserRouter } from "react-router-dom"

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";

import { Toaster } from "react-hot-toast";
import swDev from "./swDev";

const store = configureStore({
    reducer: rootReducer,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // Provider -> To Use the Store [Redux Toolkit functionality]
    <Provider store={store}>
        <BrowserRouter>
            <ScrollToTop />
            <App />
            <Toaster />
        </BrowserRouter>
    </Provider>
);
swDev();
