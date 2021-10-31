import * as React from "react";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Emma Grey" title="Welcome, friend!">
        <p class="mx-4">
          My name is Emma, and this is my portfolio website. Here you can learn
          a little about me and what I'm currently working on. If you'd like to
          get in contact with me, please do!
        </p>
      </Layout>
    </main>
  );
};

export default IndexPage;
