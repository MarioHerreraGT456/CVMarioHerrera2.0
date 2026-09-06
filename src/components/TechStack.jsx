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
import MetaAds from "../assets/MetaAds.png";
import GoogleAds from "../assets/GoogleAds.png";

// Categorías del stack: agrupan los conocimientos por área de resultados
// (antes eran dos filas sin etiquetar; ahora cada bloque dice para qué sirve).
const CATEGORIES = [
  {
    key: "frontend",
    icons: [
      { src: Tailwind, alt: "Tailwind CSS" },
      { src: ReactIcon, alt: "React" },
      { src: Js, alt: "JavaScript" },
      { src: Ts, alt: "TypeScript" },
      { src: Figma, alt: "Figma" },
      { src: Canva, alt: "Canva" },
    ],
  },
  {
    key: "backend",
    icons: [
      { src: Laravel, alt: "Laravel" },
      { src: Php, alt: "PHP" },
      { src: Wp, alt: "WordPress" },
      { src: MySql, alt: "MySQL" },
      { src: Docker, alt: "Docker" },
      { src: N8n, alt: "n8n" },
      { src: Git, alt: "Git" },
      { src: Github, alt: "GitHub" },
    ],
  },
  {
    key: "marketing",
    icons: [
      { src: MetaAds, alt: "Meta Ads" },
      { src: GoogleAds, alt: "Google Ads" },
    ],
  },
];

const TechStack = () => {
  // Define el componente funcional TechStack.
  const { t } = useTranslation(); // Inicializa la función de traducción 't'.

  return (
    // Sección de página completa (antes era una card aislada en medio de la
    // pantalla); ahora ocupa todo el ancho igual que el resto de secciones.
    <section className="section section--alt" id="skills">
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">{t("sections.skills.eyebrow")}</span>
          <h2>{t("tech.title")}</h2>
        </header>

        <div className="tech-categories">
          {CATEGORIES.map((category) => (
            <div className="tech-category" key={category.key}>
              {/* Título de la categoría, traducido vía tech.categories.<key> */}
              <h3 className="tech-category-title">
                {t(`tech.categories.${category.key}`)}
              </h3>
              <div className="tech-stack">
                {category.icons.map((icon) => (
                  // Tile de fondo uniforme: evita que logos oscuros (MySQL,
                  // GitHub) se pierdan contra el fondo oscuro del sitio.
                  <div
                    className="tech-icon-tile"
                    key={icon.alt}
                    title={icon.alt}
                  >
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="tech-icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack; // Exporta el componente para su uso en App.jsx.
