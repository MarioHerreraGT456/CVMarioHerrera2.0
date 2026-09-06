import { useTranslation } from "react-i18next";
import fotoPerfil from "../assets/mario2.png";

// Hero de página completa: reemplaza el antiguo "card" flotante.
// La foto (recorte con fondo transparente) flota directo sobre el fondo
// de la página, con un resplandor detrás, en vez de ir encerrada en una caja.
const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="inicio">
      <div className="hero-inner">
        <div className="hero-text">
          <span className="eyebrow">{t("hero.eyebrow")}</span>
          <p className="hero-greeting">{t("hero.greeting")}</p>
          <h1 className="hero-name">{t("profile.name")}</h1>
          <p className="hero-role">{t("profile.role")}</p>
          <p className="hero-pitch">{t("profile.pitch")}</p>

          <ul className="profile-badges">
            {t("profile.badges", { returnObjects: true }).map(
              (badge, index) => (
                <li key={index} className="profile-badge">
                  {badge}
                </li>
              ),
            )}
          </ul>

          <div className="hero-actions">
            <a href="#contacto" className="btn btn-primary">
              {t("hero.cta_contact")}
            </a>
            <a
              href="/DEVMarioHerrera.pdf"
              download
              className="btn btn-outline"
            >
              {t("hero.cta_cv")}
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="hero-photo-glow" aria-hidden="true" />
          <img src={fotoPerfil} alt="Mario Herrera" />
        </div>
      </div>

      <a href="#experiencia" className="scroll-cue" aria-label="Scroll down">
        <span />
      </a>
    </section>
  );
};

export default Hero;
