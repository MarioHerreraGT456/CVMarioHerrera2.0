import { useTranslation } from "react-i18next";
import Mail from "../assets/mail.png";
import Linkedin from "../assets/LinkedIn.png";
import Instragram from "../assets/Instagram.png";
import Cv from "../assets/cv.png";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="section contact-section" id="contacto">
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">{t("sections.contact.eyebrow")}</span>
          <h2>{t("contact.heading")}</h2>
          <p className="section-subheading">{t("contact.subheading")}</p>
        </header>

        <div className="contact-grid">
          <a
            href="mailto:marioherrera2610@gmail.com"
            className="contact-card"
          >
            <img src={Mail} alt="Correo" className="contact-icon" />
            <span>marioherrera2610@gmail.com</span>
          </a>
          <a
            href="https://www.linkedin.com/in/marioherreragt/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src={Linkedin} alt="LinkedIn" className="contact-icon" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://www.instagram.com/marioherreragt/"
            target="_blank"
            rel="noreferrer"
            className="contact-card"
          >
            <img src={Instragram} alt="Instagram" className="contact-icon" />
            <span>@marioherreragt</span>
          </a>
          <a
            href="/DEVMarioHerrera.pdf"
            download
            className="contact-card contact-card--cta"
          >
            <img src={Cv} alt="CV" className="contact-icon" />
            <span>{t("contact.cv_btn")}</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
