import * as React from "react";

const Project = (props) => {
  return (
    <div class="mx-4 rounded-md p-4 text-center relative">
      <img class="rounded-md" src={props.src} alt={props.alt} />
      <div class="absolute inset-0 rounded-md z-10 bg-white text-center flex flex-col items-center justify-center space-y-6 opacity-0 hover:opacity-100 bg-opacity-90 transition-opacity duration-300">
        <h2>{props.title}</h2>
        <div class="flex flex-col space-y-2">
          <a class="hover:text-purple-600 hover:underline" href={props.code}>
            code
          </a>
          <a class="hover:text-purple-600 hover:underline" href={props.live}>
            live preview
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
