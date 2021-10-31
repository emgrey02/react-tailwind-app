import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <div class="font-serif m-8">
      <title>{pageTitle}</title>
      <nav class="bg-purple-400 rounded-md mx-auto">
        <ul class="flex justify-end space-x-8 p-4">
          <li>
            <Link to="/" class="hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" class="hover:text-white">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" class="hover:text-white">
              Projects
            </Link>
          </li>
        </ul>
      </nav>
      <main class="mt-8 m-2 md:m-4 md:mt-8 lg:m-8">
        <h1 class="text-5x1 md:text-7x1 lg:text-9x1 text-center text-blue-800">
          {pageTitle}
        </h1>
        {children}
      </main>
    </div>
  );
};
export default Layout;
