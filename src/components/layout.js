import * as React from "react";
import { Link } from "gatsby";
import Footer from "../components/footer";

const Layout = ({ pageTitle, title, children }) => {
  return (
    <div class="font-mono">
      <title>{pageTitle}</title>
      <nav class="bg-purple-400 mx-auto shadow-lg border-b-2 border-gray-600">
        <ul class="flex justify-center md:justify-end space-x-8 p-4">
          <li>
            <Link to="/" class="hover:text-white hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" class="hover:text-white hover:underline">
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" class="hover:text-white hover:underline">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" class="hover:text-white hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main class="mt-8 m-2 md:m-4 md:mt-8 lg:m-8">
        <h1 class="text-5x1 md:text-7x1 lg:text-9x1 text-center text-gray-600 mb-4">
          {title}
        </h1>
        {children}
      </main>
      <Footer></Footer>
    </div>
  );
};
export default Layout;
