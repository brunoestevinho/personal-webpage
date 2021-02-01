import "./App.css";

import Layout from "./containers/layout";
import Hero from "./components/hero";
import AboutMe from "./components/aboutMe";

//import Hero from "../components/hero";
//import AboutMe from "../components/aboutMe";

function App() {
  return (
    <Layout>
      <Hero />
      <AboutMe />
    </Layout>
  );
}

export default App;
