import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import store from "./store/store.ts";
import { AlertProvider } from "./context/AlertContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AlertProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AlertProvider>
  </StrictMode>
);
