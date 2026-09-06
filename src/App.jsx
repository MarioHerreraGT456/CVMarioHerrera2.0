import React from "react";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import "./App.css";

// Página completa por secciones (hero, experiencia, educación, skills,
// contacto) en vez de un único "card" flotante: navegación real por anclas,
// cada bloque a todo el ancho como una página profesional.
function App() {
  return (
    <main>
      <Hero />
      <Experience />
      <Education />
      <TechStack />
      <Contact />
    </main>
  );
}

export default App;
