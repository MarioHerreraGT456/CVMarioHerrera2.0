import { useTranslation } from "react-i18next";
import Frocori from "../assets/frocori.png";
import Ccp from "../assets/ccp1.png";
import Clinmedia from "../assets/clinmedia.png";
import Tnvio from "../assets/tnvio1.jpeg";

// Cada puesto se numera (01, 02, 03...) en vez de usar fechas que no
// tenemos con precisión; evita inventar datos que no están confirmados.
const JOBS = [
  { key: "webmaster", image: Frocori },
  { key: "fullstack_ccp", image: Ccp },
  { key: "webdev", image: Clinmedia },
  { key: "fullstack_tnvio", image: Tnvio },
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <section className="section" id="experiencia">
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">{t("sections.experience.eyebrow")}</span>
          <h2>{t("sections.experience.title")}</h2>
        </header>

        <div className="timeline">
          {JOBS.map((job, index) => (
            <article className="timeline-item" key={job.key}>
              <div className="timeline-marker">
                <span className="timeline-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="timeline-line" aria-hidden="true" />
              </div>

              <div className="timeline-content">
                <h3>{t(`experience.${job.key}.title`)}</h3>
                <p className="timeline-description">
                  {t(`experience.${job.key}.description`)}
                </p>
                <ul className="timeline-bullets">
                  {t(`experience.${job.key}.bullets`, {
                    returnObjects: true,
                  }).map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
                <img
                  src={job.image}
                  alt={`Proyecto: ${t(`experience.${job.key}.title`)}`}
                  className="timeline-image"
                  loading="lazy"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
