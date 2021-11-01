import * as React from "react";
import Layout from "../components/layout";
import avatar from "../images/github-profile.png";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Emma Grey" title="Welcome, friend!">
        <img
          class="rounded-full p-8 mx-auto"
          src={avatar}
          alt="avatar of Emma"
        />
        <p class="m-4 bg-gray-200 rounded-lg p-4">
          My name is Emma, and this is my portfolio website. Here you can learn
          a little bit about me and what I'm currently working on. If you'd like
          to get in contact with me, feel free to do so! You can email me at
          emgrey02@gmail.com, send me a message through the Contact page, or
          just follow me at my socials at the bottom of the page. Thank you for
          taking the time to be here - I really appreciate it!
        </p>
      </Layout>
    </main>
  );
};

export default IndexPage;
