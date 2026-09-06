import { useEffect, useState } from "react";
import Logo from "/logoFenix.svg";
import { useTranslation } from "react-i18next";

// Enlaces por ancla a las secciones de la página de inicio. Se usa "/#id"
// (no solo "#id") para que funcionen también desde asesoria.html.
const NAV_LINKS = [
  { href: "/#inicio", key: "home" },
  { href: "/#experiencia", key: "experience" },
  { href: "/#educacion", key: "education" },
  { href: "/#skills", key: "skills" },
  { href: "/#contacto", key: "contact" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

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

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Menu"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav-container ${menuOpen ? "is-open" : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {t(`nav.${link.key}`)}
            </a>
          ))}
          <a
            href="/asesoria.html"
            className="nav-link"
            onClick={() => setMenuOpen(false)}
          >
            {t("Asesorias.title")}
          </a>
        </nav>

        <button className="lang-btn" onClick={changeLanguage}>
          {t("header.translate_btn")}
        </button>
      </div>
    </header>
  );
};
export default Header;
