import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/project";
import ticTacToe from "../images/tic-tac-toe.png";
import calculator from "../images/calculator.png";
import etchASketch from "../images/etch-a-sketch.png";
import library from "../images/library.png";

const ProjectsPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects" title="Projects">
        <p class="mx-8">
          Here are some projects I've made as a beginner web developer. For each
          one you can see the code I wrote to create it and a live preview in a
          new tab. These are all made with vanilla JavaScript, HTML, and CSS.
          Hope you enjoy!
        </p>
        <div class="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <Project
            title="Tic Tac Toe"
            src={ticTacToe}
            alt="screenshot of tic tac toe game in the browser"
            code="https://github.com/emgrey02/tic-tac-toe"
            live="https://emgrey02.github.io/tic-tac-toe"
          ></Project>
          <Project
            title="Calculator"
            src={calculator}
            alt="screenshot of calculator in the browser"
            code="https://github.com/emgrey02/calculator"
            live="https://emgrey02.github.io/calculator"
          ></Project>
          <Project
            title="Etch-a-Sketch"
            src={etchASketch}
            alt="screenshot of etch-a-sketch game in the browser"
            code="https://github.com/emgrey02/etch-a-sketch"
            live="https://emgrey02.github.io/etch-a-sketch"
          ></Project>
          <Project
            title="Library App"
            src={library}
            alt="screenshot of library app in the browser"
            code="https://github.com/emgrey02/library-app"
            live="https://emgrey02.github.io/library-app"
          ></Project>
        </div>
      </Layout>
    </main>
  );
};

export default ProjectsPage;
