import Logo from "/logoFenix.svg";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "es" ? "en" : "es";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="main-header">
      <div className="header-container">
        <a href="index.html">
          <img src={Logo} alt="Logo" className="logo" />
        </a>
        <div className="nav-container">
          <a href="/asesoria.html" className="nav-link">
            {"Asesorias.title"}
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
