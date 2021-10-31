// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import mongoDB from "./images/mongoDB.svg"
import nodeJs from "./images/nodeJs.svg"
import redux from "./images/redux.svg"
import nextJs from './images/next-js.svg'
import typeScript from './images/typescript.svg'
// Social Icon
import githubIcon from "./images/github.svg"
import mediumIcon from "./images/medium.svg"
import linkedinIcon from "./images/linkedin.svg"

export default {
  name: "Mahipal",
  headerTagline: ["A Full Stack(MERN)", "Web Developer"],

  headerParagraph: "A developer is who bring creator's creativity on web.",

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

      imageSrc:
        "https://user-images.githubusercontent.com/53153822/130081521-bce719ff-5406-4638-817e-2f64113bac85.png",

      url: "https://linkedin-learning-clone.herokuapp.com/",
      githubLink: "https://github.com/ankitkumar3443/Llinkedin_learning",
    },
  ],

  // End project Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "I am an aspiring Full Stack Web Developer. Learning MERN Stack at Masai School, Bengaluru, India. In this journey of learning I have learned technologies as JavaScript, React, Redux, Data-Structure, Algorithms. Learning technologies and implementing drives a immense happiness from inside.",
  aboutParaTwo:
    " I have done Bachelors of Engineering in Computer Science and Engineering from Sha Shib College of Technology, Bhopal.",
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
        "CSS stands for Cascading Style Sheets. It is the language for describing the presentation of Web pages, including colours, layout, and fonts, thus making our web pages presentable to the users.",
    },
    {
      img: jsIcon,
      title: "JavaScript",
      para:
        "JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else.",
    },
    {
      img: reactIcon,
      title: "React",
      para:
        "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    },
    {
      img: mongoDB,
      title: "mongoDB",
      para:
        "MongoDB’s document data model naturally supports JSON and its expressive query language is simple for developers to learn and use.",
    },
    {
      img: redux,
      title: "Redux",
      para: ` It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.`,
    },
    {
      img: nodeJs,
      title: "NodeJs",
      para:
        "Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser.",
    },
    {
      img: nextJs,
      para:
        "Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.",
    },
    {
      img:typeScript,
      para:"TypeScript is a strongly typed, object oriented, compiled language. It was designed by Anders Hejlsberg (designer of C#) at Microsoft. TypeScript is both a language and a set of tools."
    }
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
