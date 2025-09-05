import skills from "./skillCollection";
import { useScrollAnimations } from "../custom_hooks/useScrollAnimations";

function Skills() {
  useScrollAnimations();
  return (
    <div className="w-full">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Skills
      </h1>
      <div className="animate-on-scroll flex text-center justify-center items-center p-2 gap-12 flex-wrap my-12 md:max-w-6xl mx-auto ">
        {skills.map((skill) => (
          <div
            className="text-secondaryTextColor flex flex-col items-center gap-x-4 border-2 w-32 md:w-48 p-4 rounded-md border-hoverBg hover:scale-110 transition-all duration-300 ease-in-out hover:bg-secondaryBg/10"
            key={skill.id}
          >
            <img src={skill.url} alt={skill.name} className="md:h-12 h-10 md:w-12 w-10" />
            <p className="md:text-3xl text-lg m-2">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
