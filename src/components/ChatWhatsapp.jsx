import React, { useState, useEffect, useRef } from "react"; // Importa hooks necesarios para estado, efectos y referencias.
import { useTranslation } from "react-i18next"; // Importa hook para traducciones.
import whatsappIcon from "../assets/WhatsApp.png"; // Icono de WhatsApp.

const ChatWhatsapp = () => {
  const { t } = useTranslation(); // Inicializa traducción.
  const [isOpen, setIsOpen] = useState(false); // Estado de visibilidad de la ventana.
  const [mensaje, setMensaje] = useState(""); // Estado del texto del mensaje.
  const [enviado, setEnviado] = useState(false); // Estado de confirmación de envío.
  const chatRef = useRef(null); // Referencia al contenedor del chat para detectar clics fuera.

  // Efecto para cerrar el chat al hacer clic en cualquier parte de la pantalla.
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si la ventana está abierta y el clic NO fue dentro del contenedor 'chatRef'.
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Escucha el clic.
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Limpia el evento al desmontar.
    };
  }, [isOpen]);

  const enviarMensaje = async (e) => {
    e.preventDefault(); // Previene recarga de página.
    const N8N_WEBHOOK_URL = ""; // URL de tu n8n.

    try {
      const response = await fetch(N8N_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mensaje: mensaje,
          fecha: new Date().toLocaleString(),
        }),
      });

      if (response.ok) {
        setEnviado(true);
        setMensaje("");
      }
    } catch (error) {
      console.error("Error enviando a n8n:", error);
    }
  };

  return (
    <div className="chat-container" ref={chatRef}>
      {" "}
      {/* Asigna la referencia al contenedor principal */}
      <button className="chat-toggle" onClick={() => setIsOpen(!isOpen)}>
        <img src={whatsappIcon} alt="Chat WhatsApp" className="whatsapp-icon" />
        {isOpen ? "" : ""}
      </button>
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">Chat con Mario</div>
          <div className="chat-body">
            {enviado ? (
              <p>¡Gracias! Mario te responderá pronto.</p>
            ) : (
              <form onSubmit={enviarMensaje}>
                <textarea
                  placeholder="Escribe tu mensaje aquí..."
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  required
                />
                <button type="submit">Enviar mensaje</button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWhatsapp;
