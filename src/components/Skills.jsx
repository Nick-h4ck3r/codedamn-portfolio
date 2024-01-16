import Skill from "./Skill";

function Skills() {
  return (
    <div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center items-center xl:space-y-0 mx-auto">
      <h3 className="absolute top-32 uppercase tracking-[20px] text-gray-400 text-2xl">
        Skills
      </h3>

      <div className="pt-20 grid grid-cols-4 gap-5 md:gap-6 lg:gap-7 md:grid-cols-5 lg:grid-cols-6 md:pt-28">
        <Skill imgPath="/skills/html.png" />
        <Skill imgPath="/skills/css.png" />
        <Skill imgPath="/skills/js.png" />
        <Skill imgPath="/skills/c.png" />
        <Skill imgPath="/skills/github.png" />
        <Skill imgPath="/skills/python.png" />
        <Skill imgPath="/skills/react.png" />
        <Skill imgPath="/skills/tailwind.png" />
        <Skill imgPath="/skills/java.png" />
        <Skill imgPath="/skills/firebase.png" />
        <Skill imgPath="/skills/mongodb.png" />
        <Skill imgPath="/skills/linux.png" />
        <Skill imgPath="/skills/postman.png" />
      </div>
    </div>
  );
}

export default Skills;
