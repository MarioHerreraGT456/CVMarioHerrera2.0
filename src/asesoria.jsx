import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppAsesoria from "./AppAsesoria.jsx";
import Header from "./components/Header";
import ChatWhatsapp from "./components/ChatWhatsapp";
import "./i18n/index.js"; // activa el traductor
import BackgroundVideo from "./components/BackgroundVideo";

createRoot(document.getElementById("rootAsesoria")).render(
  <StrictMode>
    <BackgroundVideo />
    <Header />
    <AppAsesoria />
    {/* <ChatWhatsapp /> */}
  </StrictMode>,
);
