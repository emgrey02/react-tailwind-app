import * as React from "react";
import { Link } from "gatsby";
import JumpingGame from "../components/jumping-game";

// markup
const NotFoundPage = () => {
  return (
    <main>
      <h1 class="text-center">Woops! This page doesn't exits.</h1>
      <p class="md:text-center">Why not play this little game I made?</p>
      <JumpingGame></JumpingGame>
      <Link to="/">Go home</Link>
    </main>
  );
};

export default NotFoundPage;
