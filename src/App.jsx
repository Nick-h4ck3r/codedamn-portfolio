import About from "./components/About";
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
        id="about"
        className="snap-center"
      >
        <Skills /> {/* import skills component here */}
      </section>
    </div>
  );
}

export default App;
