import "./App.css";

import Layout from "./containers/layout";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Timeline from "./components/timeline";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
      <Timeline />
      <Projects />
    </Layout>
  );
}

export default App;
