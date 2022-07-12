import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { themeContext } from "./Context";
import { useContext } from "react";
import Projects from "./components/Projects/Projects";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;


  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
