import { useTranslation } from "react-i18next";
import Uba from "../assets/UBA.png";
import Lourtec from "../assets/Lourtec.png";
import Platzi from "../assets/Platzi.png";

const SCHOOLS = [
  { key: "uba", logo: Uba, hasBullets: false },
  { key: "platzi", logo: Platzi, hasBullets: false },
  { key: "lourtec", logo: Lourtec, hasBullets: true },
];

const Education = () => {
  const { t } = useTranslation();

  return (
    <section className="section section--alt" id="educacion">
      <div className="section-inner">
        <header className="section-header">
          <span className="eyebrow">{t("sections.education.eyebrow")}</span>
          <h2>{t("sections.education.title")}</h2>
        </header>

        <div className="education-grid">
          {SCHOOLS.map((school) => (
            <article className="education-item" key={school.key}>
              <img
                src={school.logo}
                alt={t(`education.${school.key}.name`)}
                className="education-logo"
              />
              <h3>{t(`education.${school.key}.name`)}</h3>
              <p className="education-degree">
                {t(`education.${school.key}.degree`)}
              </p>
              <span className="education-year">
                {t(`education.${school.key}.year`)}
              </span>
              <p className="education-description">
                {t(`education.${school.key}.description`)}
              </p>
              {school.hasBullets && (
                <ul className="education-bullets">
                  {t(`education.${school.key}.bullets`, {
                    returnObjects: true,
                  }).map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
