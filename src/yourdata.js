// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import mongoDB from "./images/mongoDB.svg"
import nodeJs from "./images/nodeJs.svg"
import redux from "./images/redux.svg"
import nextJs from "./images/next-js.svg"
import typeScript from "./images/typescript.svg"
// Social Icon
import githubIcon from "./images/github.svg"
import mediumIcon from "./images/medium.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  name: "Mahipal",
  headerTagline: ["A Full Stack(MERN)", "Web Developer"],

  headerParagraph: "A developer who creates beautiful and, useful websites.",

  contactEmail: "mahi98jat@gmail.com",

  // project Section ------------------------
  projects: [
    {
      title: "Jio Savaan",
      para:
        "This project is a complete clone UI of the jioSaavn website with the functionalities of searching a Song/Album/Artists and playing a particular song.", // Add Your Service Type Here

      imageSrc:
        "https://user-images.githubusercontent.com/83001524/135755654-171a9df3-de0e-4e6a-9f67-2e82bdae14b3.png",

      url: "https://jiosaavn-sabareesh.vercel.app/",
      githubLink: "https://github.com/Sabareesh-Subramanian/JioSaavn_Clone",
    },
    {
      title: "Lynda Learning",
      para:
        "This project is a clone UI of the lynda.com website with the basic functionality of login, sign up and sorting.", // Add Your Service Type Here

      imageSrc: "https://miro.medium.com/max/2400/1*qUhlztuTH6YfgWjgRy2LOQ.png",
      url: "https://linkedin-learning-clone.herokuapp.com/",
      githubLink: "https://github.com/ankitkumar3443/Llinkedin_learning",
    },
  ],

  // End project Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am an aspiring Full Stack Web Developer. Learning MERN Stack at Masai School, Bengaluru, India. In the journey of learning I have learned technologies like JavaScript, React, Redux, Data-Structure, Algorithms. Learning technologies and implementing drives immense happiness from the inside.",
  aboutParaTwo:
    " I have done Bachelors's Engineering in Computer Science and Engineering from Sha Shib College of Technology, Bhopal.",
  aboutImage: "./images/portfoliopic.jpg",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon,
      title: "HTML",
      para:
        "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
    },
    {
      img: cssIcon,
      title: "CSS",
      para:
        "It is the language for describing the presentation of Web pages, including colours, layout and fonts.",
    },
    {
      img: jsIcon,
      title: "JavaScript",
      para:
        "JavaScript is a scripting language that enables you to create dynamically updating and control content.",
    },
    {
      img: reactIcon,
      title: "React",
      para:
        "React will efficiently update and render just the right components when your data changes.",
    },
    {
      img: mongoDB,
      title: "mongoDB",
      para:
        "MongoDB’s document data model naturally supports JSON and expressive query language.",
    },
    {
      img: redux,
      title: "Redux",
      para: `It serves as a centralized store for state that needs to be used across your entire application.`,
    },
    {
      img: nodeJs,
      title: "NodeJs",
      para:
        "Node.js lets developers use JavaScript to write command line tools.",
    },
    {
      img: nextJs,
      para:
        "Next.js is an open-source development framework built on top of Node.js.",
    },
    {
      img: typeScript,
      para:
        "TypeScript is a strongly typed, object oriented, compiled language.",
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading:
    "If you want to know more about me. Let's get connect here...",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/mahi98jat" },

    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/jtmahi",
    },
    {
      img: mediumIcon,
      url: "https://medium.com/@ms85029526",
    },
  ],
}
