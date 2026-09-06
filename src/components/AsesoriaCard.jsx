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
    // Página completa por secciones, igual que el resto del sitio
    // (antes era un único "card" flotante).
    <>
      <section className="section asesoria-hero">
        <div className="section-inner">
          <span className="eyebrow">{t("asesoria.eyebrow")}</span>
          <h1>{t("asesoria.unetrans.title")}</h1>
          <span className="result-badge">
            {t("asesoria.unetrans.result_label")}:{" "}
            <strong>{t("asesoria.unetrans.result_value")}</strong>
          </span>
          <p className="asesoria-description">
            {t("asesoria.unetrans.description")}
          </p>
        </div>
      </section>

      <section className="section section--alt">
        <div className="section-inner">
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
        </div>
      </section>

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
    </>
  );
};

export default AsesoriaCard;
