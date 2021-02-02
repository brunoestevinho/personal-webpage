import "./App.css";

import Layout from "./containers/layout";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";

//import Hero from "../components/hero";
//import AboutMe from "../components/aboutMe";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Projects />
    </Layout>
  );
}

export default App;
