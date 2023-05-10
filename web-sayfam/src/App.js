import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("en");

  const handleLanguageChange = () => {
    if (language === "en") {
      setLanguage("tr");
    } else {
      setLanguage("en");
    }
  };

  return (
    <div className="App">
      <ModeSwitch
        language={language}
        handleLanguageChange={handleLanguageChange}
      />
      <Header language={language} />
      <Bio language={language} />
      <div id="skills"></div>
      <Skills language={language} />
      <Profile language={language} />
      <div id="projects"></div>
      <Projects language={language} />
      <div id="footer"></div>
      <Footer language={language} />
    </div>
  );
}

export default App;
