//import logo from './logo.svg';
//import './App.css';
import Home from "./Components/Home";

import ProjectScope from "./Components/ProjectScope";
import ContactUs from "./Components/ContactUs";
import AboutUs from "./Components/AboutUs";
import Milestones from "./Components/Milestones";
import Document from "./Components/Document";
import Presentation from "./Components/Presentation";
import Achievements from "./Components/Achievements";

function App() {
  return (
    <div>
      <Home />
      <ProjectScope />
      <Milestones />
      <Document />
      <Presentation />
      <Achievements />
      <AboutUs />
      <ContactUs />
    </div>
  );
}

export default App;
