import * as React from "react";
import Layout from "../components/layout";
import Project from "../components/project";
import ticTacToe from "../images/tic-tac-toe.png";

const ProjectsPage = () => {
  return (
    <main>
      <Layout pageTitle="Projects"></Layout>
      <Project title="Tic Tac Toe">
        <img
          src={ticTacToe}
          alt="tic-tac-toe website"
          width="400"
          height="400"
        />
      </Project>
    </main>
  );
};

export default ProjectsPage;
