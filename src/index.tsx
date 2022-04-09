import { createRoot } from "react-dom/client";

// Application entry point
import Routing from "routing";

// import reportWebVitals from "./reportWebVitals";

// Get root container from html via id.
const container = document.getElementById("root");

// If container is not found, create root and render.
if (container) {
  const root = createRoot(container);

  /**
   * Render of the application entrypoint (routing).
   */
  root.render(<Routing />);
}

// TODO: Firebase Analytics+
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
