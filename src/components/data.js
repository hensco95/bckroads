import tour1 from "../images/tour-1.jpeg";
import tour2 from "../images/tour-2.jpeg";
import tour3 from "../images/tour-3.jpeg";
import tour4 from "../images/tour-4.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    text: "about",
  },
  {
    id: 3,
    href: "#services",
    text: "services",
  },
  {
    id: 4,
    href: "#tours",
    text: "tours",
  },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque consequuntur. Distinctio ipsam deleniti dolores nobis sint beatae magni! Dignissimos!",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque consequuntur. Distinctio ipsam deleniti dolores nobis sint beatae magni! Dignissimos!",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, eaque consequuntur. Distinctio ipsam deleniti dolores nobis sint beatae magni! Dignissimos!",
  },
];

export const tours = [
  {
    id: 1,
    img: tour1,
    title: "Tibet Adventure",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta ratione porro assumenda aperiam, eius esse quos ut mollitia fuga velit officia, provident eum perferendis iure omnis. Vitae, perspiciatis et.",
    location: "China",
    days: 6,
    price: "$2100",
    date: "august 26th, 2020",
  },
  {
    id: 2,
    img: tour2,
    title: "Best of Java",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta ratione porro assumenda aperiam, eius esse quos ut mollitia fuga velit officia, provident eum perferendis iure omnis. Vitae, perspiciatis et.",
    location: "Indonesia",
    days: 11,
    price: "$1400",
    date: "October 11th, 2020",
  },
  {
    id: 3,
    img: tour3,
    title: "Exlore Hong Kong",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta ratione porro assumenda aperiam, eius esse quos ut mollitia fuga velit officia, provident eum perferendis iure omnis. Vitae, perspiciatis et.",
    location: "Hong Kong",
    days: 8,
    price: "$5000",
    date: "September 15th, 2020",
  },
  {
    id: 4,
    img: tour4,
    title: "kenya highlights",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta ratione porro assumenda aperiam, eius esse quos ut mollitia fuga velit officia, provident eum perferendis iure omnis. Vitae, perspiciatis et.",
    location: "Kenya",
    days: 6,
    price: 3000,
    date: "december 5th, 2019",
  },
];
