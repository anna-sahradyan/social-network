import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import rootReducer from "./store";
import {ThemeProvider} from "@mui/material";
import {theme} from "./theme.js";

const store = configureStore({
    reducer: rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>

        </Router>

    </Provider>
);

