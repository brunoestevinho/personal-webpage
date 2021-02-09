import "./App.css";

import Layout from "./containers/layout";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Timeline from "./components/timeline";
import Contact from "./components/contact";

function App() {
  return (
    <Layout>
      <AboutMe />
      <Timeline />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;
