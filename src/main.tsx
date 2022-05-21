import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import "virtual:windi.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MantineProvider>
          <NotificationsProvider>
            <App />
          </NotificationsProvider>
        </MantineProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
