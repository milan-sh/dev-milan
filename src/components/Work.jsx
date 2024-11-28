import React from "react";
import ProjectCard from "./ProjectCard";


function Work() {
  return (
    <div id="projects" className="w-full">
      <h1 className="text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Projects
      </h1>
      <p className="text-center text-hoverBg md:text-xl mx-auto w-3/4 md:w-2/4 mb-10">
        A collection of my selected website, niche projects, and CSS
        experiments. which are both pretty and fun. Check these out.
      </p>

      {/* projects grid */}
      {/* 1345X645 image aspect ratio */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-secondaryBg py-[1px]">
        <ProjectCard
        img="blog.png"
        url="https://binary-blogs.vercel.app/"
        title="Binary Blog"
        skill1="React"
        skill2="Appwrite"
        about="A blog website where you can write your thoughts."
        />
        <ProjectCard
        img="weather.png"
        url="https://milan-sh.github.io/weather-app/"
        title="Weather App"
        skill1="React"
        skill2="Redux.js"
        about="Real-time weather updates for any location worldwide."
        />
        <ProjectCard
        img="todo.png"
        url="https://milan-sh.github.io/to-do-web-app/"
        title="To Do App"
        skill1="JS"
        skill2="CSS"
        about="To-Do Web App that helps you manage daily tasks."
        />
        <ProjectCard
        img="expense.png"
        url="https://milan-sh.github.io/expense-tracker-app/"
        title="Expense Tracker"
        skill1="JS"
        skill2="Tailwind"
        about="An Expense Tracker App that enables users to add expenses and earnings."
        />
        <ProjectCard
        img="netflix.png"
        url="https://milan-sh.github.io/netflix-frontend-clone/"
        title="Netflix UI Clone"
        skill1="CSS"
        skill2="HTML"
        about="A Netflix UI Clone that replicates the popular streaming platform's interface."
        />
        <div className="relative hidden bg-primaryBg border border-dashed border-borderColor  md:flex flex-col justify-center items-center gap-y-4">
          <img className="invert h-16 " src="./coming_soon.png" alt="" />
          <p className="text-hoverBg">More coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
