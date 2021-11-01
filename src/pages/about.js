import * as React from "react";
import Layout from "../components/layout";
import emma from "../images/hero.jpg";

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About" title="A Little Bit About Me :)">
        <div class="my-16 md:my-40 lg:flex lg:justify-center">
          <div>
            <img
              class="max-w-xs mx-auto rounded-2xl my-8 md:my-0 md:mb-1 md:ml-14 md:mt-6 md:mr-4 md:float-left lg:mx-0 p-2"
              src={emma}
              width="914"
              height="996"
              alt="Emma leaning her face on her hand"
            />
          </div>
          <div class="mx-8 max-w-4xl bg-gray-200 p-8 rounded-lg">
            <p>
              Hi again! I'm Emma, and I'm 24 years old. I graduated with a
              Bachelor of Music degree in Clarinet Performance from Ithaca
              College in 2019, and now I'm pursuing an Associate of Applied
              Science degree in Interface Design and Web Development at Raritan
              Valley Community College. My first love is music, but web
              development brings me a lot of joy as well. I'm grateful to delve
              into another awesome craft, and hopefully I will be able to make
              beautiful, accessible, and helpful websites for everyone.
            </p>
            <br></br>
            <p>
              I began learning about web development through free online
              courses, like freecodecamp and The Odin Project. I also took
              Harvard's cs50 course (it's free and fully online!!), which I
              highly recommend if you want an in-depth introduction to computer
              science. Finally, I decided to go back to school so I can really
              put my head down, learn everything I can, and land a full-time
              job.
            </p>
            <br></br>
            <p>
              In my free time I like to play video games, pet my dog, listen to
              music, and dye my hair fun colors.
            </p>
          </div>
        </div>
      </Layout>
    </main>
  );
};

export default AboutPage;
