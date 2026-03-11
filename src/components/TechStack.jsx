import React from "react"; // Importa la librería React para crear el componente.
import { useTranslation } from "react-i18next"; // Importa el hook useTranslation para manejar los idiomas.

// Importación de todos los assets de iconos desde la carpeta local.
import Laravel from "../assets/Laravel.png";
import Tailwind from "../assets/Tailwind.png";
import Js from "../assets/JavaScript.png";
import ReactIcon from "../assets/react.png";
import Git from "../assets/git.png";
import Github from "../assets/github.png";
import Figma from "../assets/figma.png";
import Wp from "../assets/wp.png";
import Php from "../assets/php.png";
import N8n from "../assets/n8n.png";
import Docker from "../assets/docker.png";
import MySql from "../assets/mysql.png";
import Ts from "../assets/typescript.png";
import Canva from "../assets/canva.png";

const TechStack = () => {
  // Define el componente funcional TechStack.
  const { t } = useTranslation(); // Inicializa la función de traducción 't'.

  return (
    // Retorna el JSX que define la estructura visual del componente.
    <div className="tech">
      {/* Utiliza la llave 'tech.title' definida en tus archivos JSON para el título dinámico. */}
      <h2 className="tech-title">{t("tech.title")}</h2>

      {/* Contenedor principal con estilos de desenfoque y borde definidos en App.css. */}
      <div className="tech-container">
        {/* Primera sección de iconos: Tecnologías Frontend y herramientas de diseño. */}
        <section className="tech-stack">
          <img src={Tailwind} alt="Tailwind CSS" className="tech-icon" />{" "}
          {/* Icono de Tailwind CSS. */}
          <img src={ReactIcon} alt="React" className="tech-icon" />{" "}
          {/* Icono de React. */}
          <img src={Git} alt="Git" className="tech-icon" />{" "}
          {/* Icono de Git. */}
          <img src={Github} alt="GitHub" className="tech-icon" />{" "}
          {/* Icono de GitHub. */}
          <img src={Figma} alt="Figma" className="tech-icon" />{" "}
          {/* Icono de Figma. */}
          <img src={Laravel} alt="Laravel" className="tech-icon" />{" "}
          {/* Icono de Laravel. */}
          <img src={Js} alt="JavaScript" className="tech-icon" />{" "}
          {/* Icono de JavaScript. */}
        </section>

        {/* Segunda sección de iconos: Backend, Bases de datos y Automatización. */}
        <section className="tech-stack">
          <img src={MySql} alt="MySQL" className="tech-icon" />{" "}
          {/* Icono de MySQL. */}
          <img src={Ts} alt="TypeScript" className="tech-icon" />{" "}
          {/* Icono de TypeScript. */}
          <img src={Canva} alt="Canva" className="tech-icon" />{" "}
          {/* Icono de Canva. */}
          <img src={Wp} alt="WordPress" className="tech-icon" />{" "}
          {/* Icono de WordPress. */}
          <img src={Php} alt="PHP" className="tech-icon" />{" "}
          {/* Icono de PHP. */}
          <img src={N8n} alt="n8n" className="tech-icon" />{" "}
          {/* Icono de n8n para automatización. */}
          <img src={Docker} alt="Docker" className="tech-icon" />{" "}
          {/* Icono de Docker para contenedores. */}
        </section>
      </div>
    </div>
  );
};

export default TechStack; // Exporta el componente para su uso en App.jsx.
