import { createRoot } from "react-dom/client";
import App from "./app/app";
import store from "./store/store";
import "./index.scss";
import { Provider } from "react-redux";

const root = document.getElementById("root");
const container = createRoot(root);

container.render(
    <Provider store={store}>
        <App />
    </Provider>
);