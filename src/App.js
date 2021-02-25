import "./App.css";
import "animate.css/animate.min.css";

import Layout from "./containers/layout";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Contact from "./components/contact";

function App() {
  return (
    <Layout>
      <AboutMe />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
