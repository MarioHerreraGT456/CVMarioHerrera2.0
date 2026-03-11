import React from "react";
import ProfileCard from "./components/ProfileCard";
import TechStack from "./components/TechStack";
import "./App.css";

function App() {
  return (
    <main>
      <div className="container">
        <ProfileCard />
        <TechStack />
      </div>
    </main>
  );
}

export default App;
