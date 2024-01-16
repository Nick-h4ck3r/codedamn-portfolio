const Skill = (props) => {
  return (
    <div>
      <img
        src={props.imgPath}
        className="bg-slate-200/40 rounded-full p-2 h-14 w-14 object-cover md:w-16 md:h-16 lg:w-20 lg:h-20 filter transition duration-500"
        alt="skill"
      />
    </div>
  );
};

export default Skill;
