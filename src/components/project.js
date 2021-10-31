import * as React from "react";

const Project = ({ title, img }) => {
  return (
    <div class="w-72 mx-auto bg-gray-100 rounded-md p-8 text-center ring-4 ring-purple-400 ring-opacity-50 flex flex-col ">
      <h2>{title}</h2>
      {img}
    </div>
  );
};

export default Project;
