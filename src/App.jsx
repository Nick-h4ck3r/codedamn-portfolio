import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <section
        id="about"
        className="snap-center"
      >
        <About />
      </section>

      <section
        id="skills"
        className="snap-center"
      >
        <Skills />
      </section>

      <section
        id="projects"
        className="snap-center"
      >
        <Projects /> {/* import projects component here */}
      </section>
    </div>
  );
}

export default App;
