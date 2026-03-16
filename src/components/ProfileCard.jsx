import React, { useState } from "react"; // Importa React y el hook useState para manejar el estado de las pestañas.
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation para acceder a las funciones de traducción.
import fotoPerfil from "../assets/mario2.png"; // Importa la imagen de perfil desde la carpeta de assets.
import Frocori from "../assets/frocori.png"; // Importa la imagen del proyecto Frocori.
import Ccp from "../assets/ccp1.png"; // Importa la imagen del proyecto Colegio de Contadores.
import Clinmedia from "../assets/clinmedia.png"; // Importa la imagen del proyecto Clinmedia.
import Tnvio from "../assets/tnvio1.jpeg"; // Importa la imagen del proyecto TNVIO.
import Uba from "../assets/UBA.png"; // Importa el logo de la Universidad Bicentenaria de Aragua.
import Lourtec from "../assets/Lourtec.png"; // Importa el logo del Instituto Lourtec.
import Platzi from "../assets/Platzi.png"; // Importa el logo de Platzi.
import Mail from "../assets/mail.png"; // Importa el icono de correo electrónico.
import Linkedin from "../assets/LinkedIn.png"; // Importa el icono de LinkedIn.
import Instragram from "../assets/Instagram.png"; // Importa el icono de Instagram.
import Cv from "../assets/cv.png"; // Importa el icono para el currículum.

const ProfileCard = () => {
  // Define el componente funcional ProfileCard.
  const { t } = useTranslation(); // Inicializa la función 't' que busca las traducciones en los archivos JSON.
  const [activeTab, setActiveTab] = useState("exp"); // Declara el estado 'activeTab' con valor inicial "exp" para controlar la pestaña visible.

  return (
    // Inicia el retorno del JSX para renderizar la interfaz.
    <div className="profile-card">
      {" "}
      {/* Contenedor principal de la tarjeta de perfil con estilos de App.css */}
      {/* Columna 1: Foto y Nombre */}
      <div className="photo-column">
        {" "}
        {/* Contenedor de la columna izquierda (foto). */}
        <div className="photo-wrapper">
          {" "}
          {/* Envoltorio para la imagen para aplicar efectos de máscara o bordes. */}
          <img src={fotoPerfil} alt="Mario Herrera" />{" "}
          {/* Muestra la foto de perfil importada. */}
          <div className="photo-overlay">
            {" "}
            {/* Capa superior sobre la foto para mostrar el nombre con degradado. */}
            <h2>{t("profile.name")}</h2>{" "}
            {/* Muestra el nombre usando la llave de traducción 'profile.name'. */}
          </div>
        </div>
      </div>
      {/* Columna 2: Pestañas e Información */}
      <div className="info-column">
        {" "}
        {/* Contenedor de la columna derecha (información dinámica). */}
        <nav className="tab-menu">
          {" "}
          {/* Barra de navegación para cambiar entre pestañas. */}
          <button
            onClick={() => setActiveTab("exp")} // Cambia el estado a "exp" al hacer clic.
            className={activeTab === "exp" ? "active" : ""} // Aplica la clase "active" si la pestaña actual es "exp".
          >
            {t("profile.tabs.exp")} {/* Texto traducido para "Experiencia". */}
          </button>
          <button
            onClick={() => setActiveTab("edu")} // Cambia el estado a "edu" al hacer clic.
            className={activeTab === "edu" ? "active" : ""} // Aplica la clase "active" si la pestaña actual es "edu".
          >
            {t("profile.tabs.edu")} {/* Texto traducido para "Educación". */}
          </button>
          <button
            onClick={() => setActiveTab("con")} // Cambia el estado a "con" al hacer clic.
            className={activeTab === "con" ? "active" : ""} // Aplica la clase "active" si la pestaña actual es "con".
          >
            {t("profile.tabs.con")} {/* Texto traducido para "Contacto". */}
          </button>
        </nav>
        <div className="tab-content">
          {" "}
          {/* Contenedor donde se renderiza el contenido de la pestaña activa. */}
          {/* Contenido de la Pestaña: EXPERIENCIA */}
          {activeTab === "exp" && ( // Renderizado condicional: solo se muestra si activeTab es "exp".
            <div className="scroll-area">
              {" "}
              {/* Área con scroll vertical definido en App.css. */}
              {/* Item: Web Master */}
              <div className="item">
                {" "}
                {/* Bloque individual de experiencia. */}
                <h3>{t("experience.webmaster.title")}</h3>{" "}
                {/* Título del cargo traducido. */}
                <p>
                  {t("experience.webmaster.description")}{" "}
                  {/* Descripción del cargo traducida. */}
                </p>
                <ul>
                  {/* Recorre el array de viñetas en el JSON y las imprime con un guion. */}
                  {t("experience.webmaster.bullets", {
                    returnObjects: true,
                  }).map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <img src={Frocori} alt="Proyecto" />{" "}
                {/* Imagen del proyecto realizado. */}
                <hr /> {/* Línea divisoria entre ítems. */}
              </div>
              {/* Item: Full Stack CCP */}
              <div className="item">
                <h3>{t("experience.fullstack_ccp.title")}</h3>
                <p>{t("experience.fullstack_ccp.description")}</p>

                <ul className="item-ccp">
                  {t("experience.fullstack_ccp.bullets", {
                    returnObjects: true,
                  }).map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <img src={Ccp} alt="Proyecto" />
                <hr />
              </div>
              {/* Item: Web Developer Clinmedia */}
              <div className="item">
                <h3>{t("experience.webdev.title")}</h3>
                <p>{t("experience.webdev.description")}</p>

                <ul>
                  {t("experience.webdev.bullets", { returnObjects: true }).map(
                    (bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ),
                  )}
                </ul>
                <img src={Clinmedia} alt="Proyecto" />
                <hr />
              </div>
              {/* Item: Full Stack TNVIO */}
              <div className="item">
                <h3>{t("experience.fullstack_tnvio.title")}</h3>
                <p>{t("experience.fullstack_tnvio.description")}</p>

                <ul>
                  {t("experience.fullstack_tnvio.bullets", {
                    returnObjects: true,
                  }).map((bullet, index) => (
                    <li key={index}>{bullet}</li>
                  ))}
                </ul>
                <img src={Tnvio} alt="Proyecto" />
                <hr />
              </div>
            </div>
          )}
          {/* Contenido de la Pestaña: EDUCACIÓN */}
          {activeTab === "edu" && ( // Renderizado condicional para la pestaña de educación.
            <div className="scroll-area">
              <div className="item">
                <h2>{t("education.uba.name")}</h2>{" "}
                {/* Nombre de la universidad traducido. */}
                <h3>{t("education.uba.degree")}</h3>{" "}
                {/* Título de la carrera traducido. */}
                <p>{t("education.uba.year")}</p> {/* Años de estudio. */}
                <p>{t("education.uba.description")}</p>{" "}
                {/* Breve descripción académica. */}
                <img src={Uba} alt="Universidad Bicentenaria de Aragua" />
                <hr />
              </div>

              <div className="item">
                <h2>{t("education.platzi.name")}</h2>
                <h3>{t("education.platzi.degree")}</h3>
                <p>{t("education.platzi.year")}</p>
                <p>{t("education.platzi.description")}</p>
                <img src={Platzi} alt="Platzi" />
                <hr />
              </div>

              <div className="item">
                <h2>{t("education.lourtec.name")}</h2>
                <h3>{t("education.lourtec.degree")}</h3>
                <p>{t("education.lourtec.year")}</p>

                <p>{t("education.lourtec.description")}</p>
                <ul>
                  {t("education.lourtec.bullets", { returnObjects: true }).map(
                    (bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ),
                  )}
                </ul>
                <img src={Lourtec} alt="Instituto Tecnológico Lourtec" />
                <hr />
              </div>
            </div>
          )}
          {/* Contenido de la Pestaña: CONTACTO */}
          {activeTab === "con" && ( // Renderizado condicional para la sección de contacto.
            <div className="contact-area">
              {" "}
              {/* Contenedor con alineación de contacto definida en App.css. */}
              <div className="contact-item">
                {" "}
                {/* Bloque para el correo. */}
                <img src={Mail} alt="Correo" className="contact-icon" />{" "}
                {/* Icono de correo. */}
                <a
                  href="mailto:marioherrera2610@gmail.com"
                  className="contact-text"
                >
                  marioherrera2610@gmail.com {/* Dirección de correo. */}
                </a>
              </div>
              <div className="contact-item">
                {" "}
                {/* Bloque para LinkedIn. */}
                <img src={Linkedin} alt="LinkedIn" className="contact-icon" />
                <a
                  href="https://www.linkedin.com/in/marioherreragt/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-text"
                >
                  Linkedin {/* Enlace a LinkedIn. */}
                </a>
              </div>
              <div className="contact-item">
                {" "}
                {/* Bloque para Instagram. */}
                <img
                  src={Instragram}
                  alt="Instagram"
                  className="contact-icon"
                />
                <a
                  href="https://www.instagram.com/marioherreragt/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-text"
                >
                  @marioherreragt {/* Usuario de Instagram. */}
                </a>
              </div>
              <div className="contact-item">
                {" "}
                {/* Bloque para descargar el CV. */}
                <img src={Cv} alt="CV" className="contact-icon" />
                <a
                  href="/CVMarioHerrera.pdf"
                  download
                  className="download-btn contact-text"
                >
                  {t("contact.cv_btn")}{" "}
                  {/* Texto del botón traducido (Descargar CV). */}
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard; // Exporta el componente para ser usado en App.jsx.
