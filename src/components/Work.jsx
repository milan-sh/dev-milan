import React from "react";
import ProjectCard from "./ProjectCard";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Work() {
  useScrollAnimations();
  return (
    <div id="projects" className="w-full">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Projects
      </h1>
      <p className="animate-on-scroll text-center text-hoverBg md:text-xl mx-auto w-3/4 md:w-2/4 mb-10">
      A showcase of my curated websites, niche projects, and CSS experiments, designed to be both visually appealing and engaging. Explore and discover my work!
      </p>

      {/* projects grid */}
      {/* 1345X645 image aspect ratio */}
      <div className="animate-on-scroll grid sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-secondaryBg py-[1px]">
        {/* Weather Watcher */}
        <ProjectCard
        img="weather.png"
        url="https://milan-sh.github.io/weather-app/"
        title="Weather Watcher"
        skill1="React"
        skill2="Redux.js"
        about="A sleek and responsive weather application providing real-time weather updates for locations worldwide. The app features a clean user interface and detailed weather data, including temperature, humidity, and wind speed."
        repo="https://github.com/milan-sh/weather-app.git"
        />
        {/* Binary Bolgs */}
        <ProjectCard
        img="blog.png"
        url="https://binary-blogs.vercel.app/"
        title="Binary Blogs"
        skill1="React"
        skill2="Appwrite"
        about="A dynamic blogging platform where users can create, edit, and explore articles on various topics. Built using React, Appwrite, and Tailwind CSS, it emphasizes performance and responsive design."
        repo="https://github.com/milan-sh/binary-blogs.git"
        />
        {/* Expense Ease */}
        <ProjectCard
        img="expense.png"
        url="https://milan-sh.github.io/expense-tracker-app/"
        title="Expense Ease"
        skill1="JS"
        skill2="Tailwind"
        about="A user-friendly expense tracker designed to simplify financial management by tracking income and expenditures. The application provides clear insights into spending habits with interactive visuals and data summaries."
        repo="https://github.com/milan-sh/expense-tracker-app.git"
        />
        {/* Task Tracer */}
        <ProjectCard
        img="todo.png"
        url="https://milan-sh.github.io/to-do-web-app/"
        title="Task Tracker"
        skill1="JS"
        skill2="CSS"
        about="A simple and intuitive to-do application designed to help users manage their daily tasks efficiently. With a focus on usability, it enables users to add, edit, delete, and mark tasks as complete."
        repo="https://github.com/milan-sh/to-do-web-app.git"
        />
        {/* Dice Game*/}
        <ProjectCard
        img="dice.png"
        url="https://dice-game-amber-beta.vercel.app/"
        title="Dice Guesser"
        skill1="React"
        skill2="Tailwind"
        about="Dice Guesser is a React-based game where you predict the next dice roll. Test your luck, enjoy dynamic dice animations, and get instant feedback on your guesses. A simple yet engaging game for quick fun!"
        repo="https://github.com/milan-sh/dice-game.git"
        />
        {/* GitHub Insight*/}
        <ProjectCard
        img="github.png"
        url="https://github-insight-two.vercel.app/"
        title="GitHub Insight"
        skill1="JS"
        skill2="CSS"
        about="GitHub Insight is a web app that provides an overview of any GitHub profile. Enter a username to view details like profile link, repos, followers, and more, displayed in a sleek card design. Explore GitHub profiles effortlessly!"
        repo="https://github.com/milan-sh/github-insight.git"
        />
        {/* Time lived*/}
        <ProjectCard
        img="time.png"
        url="https://time-lived.vercel.app/"
        title="Time Lived"
        skill1="JS"
        skill2="CSS"
        about="Discover how much of your life you've lived. This tool calculates the total time you've spent based on your age, breaking it down into years, months, days, hours, minutes, and seconds. A fun way to reflect on life!"
        repo="https://github.com/milan-sh/time-lived.git"
        />
        {/* Netflix UI Clone */}
        <ProjectCard
        img="netflix.png"
        url="https://milan-sh.github.io/netflix-frontend-clone/"
        title="Netflix UI Clone"
        skill1="CSS"
        skill2="HTML"
        about="A pixel-perfect clone of Netflix's user interface, built to replicate its sleek and immersive design. This project showcases dynamic content, responsive layouts, and smooth animations for an authentic viewing experience."
        repo="https://github.com/milan-sh/netflix-frontend-clone.git"
        />
        {/* coming soon card */}
        <div className="relative hidden bg-primaryBg border border-dashed border-borderColor  md:flex flex-col justify-center items-center gap-y-4">
          <img className="invert h-16 " src="./coming_soon.png" alt="" />
          <p className="text-hoverBg">More coming soon...</p>
        </div>
      </div>
    </div>
  );
}

export default Work;
