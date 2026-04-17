import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Une1 from "../assets/une1.png";
import Une2 from "../assets/une2.png";
import Une3 from "../assets/une3.png";
import Une4 from "../assets/une4.png";

// Arreglo de imágenes de ejemplo (puedes sustituir las URLs por las tuyas o pasarlas por props)
const imagenesProyectos = [
  {
    id: 1,
    src: Une1,
    alt: "Proyecto 1",
  },
  {
    id: 2,
    src: Une2,
    alt: "Proyecto 2",
  },
  {
    id: 3,
    src: Une3,
    alt: "Proyecto 3",
  },
  {
    id: 4,
    src: Une4,
    alt: "Proyecto 4",
  },
];

const AsesoriaCard = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("exp");

  // Estado para manejar la imagen seleccionada en el modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Función para abrir el modal
  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="asesoria-card">
      <div className="info-column">
        <div className="tab-content">
          <div className="scroll-area">
            <div className="item">
              <h3>{t("asesoria.unetrans.title")}</h3>
              <p>{t("asesoria.unetrans.description")}</p>

              {/* --- INICIO DEL CARRUSEL INFINITO --- */}
              <div className="carousel-container">
                <div className="carousel-track">
                  {/* Duplicamos el arreglo para crear la ilusión de ciclo infinito */}
                  {[...imagenesProyectos, ...imagenesProyectos].map(
                    (img, index) => (
                      <div
                        className="carousel-item"
                        key={index}
                        onClick={() => handleImageClick(img)}
                      >
                        <img src={img.src} alt={img.alt} />
                      </div>
                    ),
                  )}
                </div>
              </div>
              {/* --- FIN DEL CARRUSEL --- */}

              <hr />
            </div>
          </div>
        </div>
      </div>

      {/* --- MODAL PARA LA IMAGEN --- */}
      {selectedImage && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </div>
  );
};

export default AsesoriaCard;
