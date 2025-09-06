import ProjectCard from "./ProjectCard";
import {useScrollAnimations} from "../custom_hooks/useScrollAnimations"

function Work() {
  useScrollAnimations();
  return (
    <div id="projects" className="w-full">
      <h1 className="animate-on-scroll text-center text-primaryTextColor font-bebas md:text-mdHeading text-phoneHeading">
        Projects
      </h1>
      <p className="animate-on-scroll text-center text-hoverBg md:text-xl mx-auto w-[85%] md:w-2/4 mb-10">
      Step into my digital playground—where ideas turn into full-stack experiences and code flows from database to design. Each project blends clean architecture with smart functionality.
      </p>

      {/* projects grid */}
      {/* 1345X645 image aspect ratio */}
      <div className="animate-on-scroll grid sm:grid-cols-2 md:grid-cols-3 gap-[1px] bg-secondaryBg py-[1px]">
        {/* BingeBee */}
        <ProjectCard
        img="bingebee.png"
        url="https://bingebee.vercel.app/"
        title="BingeBee"
        skill1="Node.js"
        skill2="React"
        about="A video streaming platform where users can upload, watch, and engage through likes, comments, playlists, and subscriptions. Designed to provide an interactive and community-focused viewing experience."
        repo="https://github.com/milan-sh/bingebee/tree/main"
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
        {/* <ProjectCard
        img="expense.png"
        url="https://milan-sh.github.io/expense-tracker-app/"
        title="Expense Ease"
        skill1="JS"
        skill2="Tailwind"
        about="A user-friendly expense tracker designed to simplify financial management by tracking income and expenditures. The application provides clear insights into spending habits with interactive visuals and data summaries."
        repo="https://github.com/milan-sh/expense-tracker-app.git"
        /> */}
        {/* Task Tracer */}
        {/* <ProjectCard
        img="todo.png"
        url="https://todo-web-app-sandy.vercel.app/"
        title="Task Tracker"
        skill1="TS"
        skill2="Tailwind"
        about="A simple and intuitive TypeScript-powered to-do app designed for efficient task management. With strong type safety, it enables users to add, edit, delete, and mark tasks as complete—ensuring reliability and maintainability. "
        repo="https://github.com/milan-sh/todo-web-app.git"
        /> */}
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
        {/* Memory Game*/}
        {/* <ProjectCard
        img="memory.png"
        url="https://memory-game-kappa-indol.vercel.app/"
        title="Memory Game"
        skill1="JS"
        skill2="Tailwind"
        about="A sleek and responsive memory matching game crafted with JavaScript and Tailwind CSS. The app features smooth animations and an intuitive UI, challenging players to find all matching pairs with minimal moves."
        repo="https://github.com/milan-sh/memory-game.git"
        /> */}
        {/* GitHub Insight*/}
        {/* <ProjectCard
        img="github.png"
        url="https://github-insight-two.vercel.app/"
        title="GitHub Insight"
        skill1="JS"
        skill2="CSS"
        about="GitHub Insight is a web app that provides an overview of any GitHub profile. Enter a username to view details like profile link, repos, followers, and more, displayed in a sleek card design. Explore GitHub profiles effortlessly!"
        repo="https://github.com/milan-sh/github-insight.git"
        /> */}
        {/* GitHub Insight*/}
        <ProjectCard
        img="password.png"
        url="https://password-generator-eosin-theta.vercel.app/"
        title="PassGen"
        skill1="React"
        skill2="Tailwind"
        about="A dynamic password generator built with React and Tailwind CSS. Generate strong, customizable passwords by adjusting length and selecting from modular character sets, including letters, numbers, and special characters!"
        repo="https://github.com/milan-sh/password-generator.git"
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
