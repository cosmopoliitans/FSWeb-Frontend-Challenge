import "./App.css";
import ModeSwitch from "./components/ModeSwitch";
import Header from "./components/Header";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <ModeSwitch />
      <Header />
      <Bio />
      <div id="skills"></div>
      <Skills />
      <Profile />
      <div id="projects"></div>
      <Projects />
      <div id="footer"></div>
      <Footer />
    </div>
  );
}

export default App;
