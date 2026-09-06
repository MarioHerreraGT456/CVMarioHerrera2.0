import { useEffect } from "react";
import Logo from "/logoFenix.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  // Mantiene el <title> y la meta description sincronizados con el idioma
  // activo, para que el SEO y la vista previa al compartir el enlace
  // también estén orientados a resultados (no solo el contenido visible).
  useEffect(() => {
    document.title = t("meta.title");

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", t("meta.description"));

    document.documentElement.lang = i18n.language;
  }, [i18n.language, t]);

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="/" className="brand-link">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="nav-container">
          <a href="/asesoria.html" className="nav-link">
            {t("Asesorias.title")}
          </a>
        </div>

        <button className="lang-btn" onClick={changeLanguage}>
          {t("header.translate_btn")}
        </button>
      </div>
    </header>
  );
};
export default Header;
