import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Header from "./components/Header";
import ChatWhatsapp from "./components/ChatWhatsapp";
import "./i18n/index.js"; // activa el traductor
import BackgroundVideo from "./components/BackgroundVideo";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BackgroundVideo />
    <Header />
    <App />
    {/* <ChatWhatsapp /> */}
  </StrictMode>,
);
