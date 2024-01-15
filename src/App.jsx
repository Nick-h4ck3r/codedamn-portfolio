import About from "./components/About";

function App() {
  return (
    <div className="bg-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0">
      <section
        id="about"
        className="snap-center"
      >
        <About /> {/* imported the about component here */}
      </section>
    </div>
  );
}

export default App;
