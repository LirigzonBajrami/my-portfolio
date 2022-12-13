import techStore from "../assets/tech-store-img.webp";
import cocaCola from "../assets/coca-cola-img.webp";
import trustedNews from "../assets/trusted-news-img.webp";
import todoList from "../assets/todo-list-img.webp";
import movieRating from "../assets/movie-rating-img.webp";
import eatSmart from "../assets/eat-smart-img.webp";
import exerciseImg from "../assets/exerciseImg.webp";
import londonBlogImg from "../assets/london-blog.webp";

// other images
// Blog app
import blogs from "../assets/otherImages/blogs.webp";
import createblog from "../assets/otherImages/create-blog.png";

// Tech app
import techDetails from "../assets/otherImages/techDetails.webp";
import registerTech from "../assets/otherImages/registerTech.webp";
import loginTech from "../assets/otherImages/loginTech.webp";
import cartTech from "../assets/otherImages/cartTech.webp";
import ordersumary from "../assets/otherImages/ordersumary.webp";

// Exercise app
import loginExer from "../assets/otherImages/loginExer.png";
import signExer from "../assets/otherImages/signExer.png";

// Movie app
import movieDetail from "../assets/otherImages/movieDetailImg.webp";

// Coca-cola
import cocaColaImg from "../assets/otherImages/coca-cola-history.webp";
import brands from "../assets/otherImages/brands.webp";
import emp from "../assets/otherImages/emp.webp";
import agent from "../assets/otherImages/agent.webp";

// Eat smart
import mealsImg from "../assets/otherImages/meals.webp";
import pricing from "../assets/otherImages/pricing.webp";
import testimonials from "../assets/otherImages/testimonials.webp";
import signupEat from "../assets/otherImages/signupEat.webp";

export const projectList = [
  {
    name: "Tech Store",
    image: techStore,
    stack: "MongoDb, Node.js, Express.js, React.js",
    github: "https://github.com/LirigzonBajrami/E-commerce-MERN-TechStore",
    otherImages: [techDetails, registerTech, loginTech, cartTech, ordersumary],
  },
  {
    name: "Exercise App",
    image: exerciseImg,
    stack: "MongoDb, Node.js, Express.js, React.js",
    github: "https://github.com/LirigzonBajrami/exercise-app",
    otherImages: [loginExer, signExer],
  },
  {
    name: "Blog app",
    image: londonBlogImg,
    stack: "MongoDb, Node.js, Express.js, React.js",
    github: "https://github.com/LirigzonBajrami/london-blogs",
    otherImages: [blogs, createblog],
  },
  {
    name: "Coca Cola",
    image: cocaCola,
    stack: "JavaScript, HTML, CSS, Bootstrap",
    github: "https://github.com/LirigzonBajrami/coca-cola",
    otherImages: [cocaColaImg, brands, emp, agent],
  },

  {
    name: "Trusted News",
    image: trustedNews,
    stack: "Wordpress, Bootstrap",
    github: "https://github.com/LirigzonBajrami/trustedNews",
  },
  {
    name: "Todo List",
    image: todoList,
    stack: "React.js, Bootstrap",
    github: "https://github.com/LirigzonBajrami/Todo-List",
  },
  {
    name: "Movie Rating",
    image: movieRating,
    stack: "React.js, React-Bootstrap, HTML, CSS",
    github: "https://github.com/LirigzonBajrami/Movie-Rating-app",
    otherImages: [movieDetail],
  },
  {
    name: "Eat Smart",
    image: eatSmart,
    stack: "JavaScript, Bootstrap, HTML, CSS",
    github: "https://github.com/LirigzonBajrami/EatSmart",
    otherImages: [mealsImg, testimonials, pricing, signupEat],
  },
];
