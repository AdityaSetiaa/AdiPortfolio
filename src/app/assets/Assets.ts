import { FaCss3, FaGithub, FaGitAlt, FaHtml5, FaJava, FaLinkedinIn, FaReact } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNeovim, SiNextdotjs, SiPostman, SiExpress ,SiFastapi  } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { BiLogoTypescript } from "react-icons/bi";
import { VscVscodeInsiders } from "react-icons/vsc";
import { FaPython } from "react-icons/fa"
import krel from "@/app/assets/krel.png"
import Crywatch from "@/app/assets/Crywatch.png"
import Weekendbites from "@/app/assets/WeekendBites.png"
import { StaticImageData } from "next/image";
import { House } from 'lucide-react';
import { Blocks } from 'lucide-react';
import { Folder } from 'lucide-react';
import { FileUser } from 'lucide-react';






// import kafkaIcon from './kafka-icon-svgrepo-com.svg';
// import redisIcon from './redis-svgrepo-com.svg';
// import postgresqlIcon from './postgresql-logo-svgrepo-com.svg';
// import dockerIcon from './docker-svgrepo-com.svg';

type AssetItem = { name: string; icon: any; link?: string;gradient:string };


const About =
  "I'm Aditya. I build web applications focused on functionality and user experience. Outside of work, I experiment with new technologies and develop personal projects";

  // { name: "Docker", icon: dockerIcon },
  // { name: "Apache Kafka", icon: kafkaIcon },



const Languages: AssetItem[] = [
  { name: "HTML5", icon: FaHtml5, gradient: "from-orange-500 to-red-500" },
  { name: "CSS3", icon: FaCss3, gradient: "from-blue-500 to-blue-600" },
  { name: "JavaScript", icon: RiJavascriptFill, gradient: "from-yellow-400 to-yellow-500" },
  { name: "TypeScript", icon: BiLogoTypescript, gradient: "from-blue-600 to-blue-700" },
  { name: "Tailwind CSS", icon: RiTailwindCssFill, gradient: "from-cyan-400 to-blue-500" },
  { name: "Python", icon: FaPython, gradient: "from-blue-500 to-yellow-400" },
  { name: "Java", icon: FaJava, gradient: "from-red-600 to-blue-600" },
];

const Frameworks: AssetItem[] = [
  { name: "React", icon: FaReact, gradient: "from-cyan-400 to-blue-500" },
  { name: "Next.js", icon: SiNextdotjs, gradient: "from-black to-gray-700" },
  { name: "FastAPI", icon: SiFastapi, gradient: "from-green-400 to-blue-500" },
  { name: "Express.js", icon: SiExpress, gradient: "from-yellow-300 to-black" },
  // { name: "Spring Boot", icon: SiSpring, gradient: "from-green-500 to-green-600" },
];

const Databases: AssetItem[] = [
  { name: "MongoDB", icon: DiMongodb, gradient: "from-green-500 to-green-600" },
  // { name: "PostgreSQL", icon: iPostgresql, gradient: "from-blue-600 to-blue-800" },
  // { name: "MySQL", icon: SiMysql, gradient: "from-blue-500 to-orange-400" },
];

const DevTools: AssetItem[] = [
  { name: "Git", icon: FaGitAlt, gradient: "from-orange-600 to-red-600" },
  { name: "Neovim", icon: SiNeovim, gradient: "from-green-500 to-green-600" },
  { name: "VS Code", icon: VscVscodeInsiders, gradient: "from-blue-500 to-blue-600" },
  { name: "Postman", icon: SiPostman, gradient: "from-orange-500 to-orange-600" },
];


const socials: AssetItem[] = [
  {
    name: "GitHub", icon: FaGithub, link: "https://github.com/AdityaSetiaa",
    gradient: ""
  },
  {
    name: "LinkedIn",
    icon: FaLinkedinIn,
    link: "https://www.linkedin.com/in/aditya-setia-16895533b/",
    gradient: ""
  },
  {
    name: "Twitter",
    icon: FaSquareXTwitter,
    link: "https://twitter.com/adetia108",
    gradient: ""
  },
  {
    name: "Resume", icon: FileUser, link: "https://drive.google.com/file/d/13u_9QlGHXrS5h-jkOkbCYpFkOTbwrRkL/view?usp=drive_link",
    gradient: ""
  },
];

// const Databases: AssetItem[] = [
//   { name: "MongoDB", icon: DiMongodb },
//   // { name: "Redis", icon: redisIcon },
//   // { name: "PostgreSQL", icon: postgresqlIcon },
// ];

const Tools = [{ Languages }, { Frameworks }, { Databases }, { DevTools }];
const info = [{ About }, { socials }];

const Portfolio = [
  {
    title: "About me",
  },
  {
    title: "TechStack",
  },
  {
    title: "Project",
  },
  
];

const Projects: {id: number, name: string, about: string, image: StaticImageData , status: string,  link: string, github:string} []=[
  
  {
    name: "Crywatch",
    about: "Watch your crypto investments closely with Crywatch, a real-time crypto price tracker that keeps you updated with the latest market trends.",
    image: Crywatch,
    status: "finished",
    id: 1,
    github: "https://github.com/AdityaSetiaa/Crywatch",
    link:"https://crywatch.vercel.app/"
  },
  {
    name: "krel",
    about: "Ai powered video and image editor that simplifies your creative process.",
    image: krel,
    status: "in progress",
    github: "https://github.com/AdityaSetiaa/krel",
    id: 0,
    link:""
  },{
    name: "Weekend-Bites",
    about: "Discover and share weekend getaways with WeekendBites, your go-to platform for planning memorable short trips.",
    image: Weekendbites,
    status: "finished",
    id: 2,
    github: "https://github.com/AdityaSetiaa/WeekendBite",
    link:"https://weekend-bite.vercel.app/"
  },
  // {
  //   name: "name",
  //   about: "About",
  //   image: ,
  //   status: "status",
  //   id: 4,
  //   github: "https://github.com/AdityaSetiaa",
  //   link:""
  // }

]
const mdTitle=[{
  id: 0,
  title: "About me", 
  icon: House
}, {
  id: 1,
  title: "TechStack", 
  icon: Blocks
}, {
  id: 2,
  title: "Project",
  icon: Folder
},]
// {
//                   project.status === "finished" ?
//                   <span className="text-green-800 font-normal bg-green-500 rounded justify-center text-center px-3">Finished</span> :
//                   project.status === "in progress" ?
//                   <span className="text-yellow-500 font-extralight justify-center text-center">In Progress</span> :
//                   project.status === "upcoming" ?
//                   <span className="text-red-500 font-extralight justify-center text-center">Upcoming</span> :
//                   <span className="text-red-500 font-extralight justify-center text-center">Unknown</span>
//                   }
export {
  socials,
  Languages,
  Frameworks,
  Databases,
  DevTools,
  Portfolio,
  Tools,
  info,
  Projects,
  mdTitle
};
