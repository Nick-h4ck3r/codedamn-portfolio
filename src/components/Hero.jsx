import { Cursor, useTypewriter } from "react-simple-typewriter";

const NavButton = ({ text }) => {
  return (
    <a href={`#${text}`}>
      <button className="text-sm backdrop-blur-sm bg-gray-300/30 text-black mr-3 mt-3 py-2 px-5 md:px-7 rounded-full hover:duration-1000 font-normal">
        {text}
      </button>
    </a>
  );
};

export default function Hero() {
  const [text] = useTypewriter({
    words: [
      "Hey, your-name here.",
      "I build things for the web.",
      "I create content for community.",
      "I learn new things everyday.",
    ],
    loop: true,
    delaySpeed: 1000,
  });

  return (
    <div className="pt-16 md:pt-28 h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      {/* your image */}
      <img
        className="relative h-32 w-32 rounded-full mx-auto object-cover"
        src="about.jpg"
      />

      <div className="z-20">
        {/* your title */}
        <h2 className="text-sm text-gray-800 uppercase tracking-[8px] md:tracking-[15px] pb-2 font-outfit">
          Full-stack developer
        </h2>

        {/* typewriter text here */}
        <h1 className="pt-2 text-3xl md:text-4xl lg:text-6xl font-semibold px-16 text-black">
          <span className="mr-3 font-outfit text-black">{text}</span>

          <Cursor cursorBlinking={false} />
        </h1>

        {/* nav button links */}
        <div className="pt-4 lg:pt-4 font-outfit px-4 md:px-0">
          <NavButton text="about" />
          <NavButton text="skills" />
          <NavButton text="projects" />
          <NavButton text="contact" />
        </div>
      </div>
    </div>
  );
}
