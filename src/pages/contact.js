import * as React from "react";
import Layout from "../components/layout";

const ContactPage = () => {
  return (
    <main>
      <Layout pageTitle="Contact" title="Contact me!">
        <form class="grid p-8 max-w-xl mx-auto">
          <label for="yourName">Your Name:</label>
          <input
            type="text"
            name="yourName"
            id="yourName"
            accessKey="n"
            tabindex="1"
          ></input>

          <label for="yourEmail">Your Email:</label>
          <input
            type="email"
            name="yourEmail"
            id="yourEmail"
            accessKey="e"
          ></input>

          <label for="message">Message:</label>
          <textarea name="message" id="message"></textarea>

          <button type="submit" value="Send">
            Send
          </button>
        </form>
      </Layout>
    </main>
  );
};

export default ContactPage;
