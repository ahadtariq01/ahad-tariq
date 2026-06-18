import {
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import {
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import React from "react";

export const projects = [
  {
    id: 1,
    link: "https://midnightblue-dunlin-276630.hostingersite.com/",
    pic: "cliquezorg.png",
    heading: "CliqueZorg | Medical Knowledge",
    discr: "Medical Articles",
    tags: [
      { name: "Mongo", icon: <SiMongodb color="#47A248" /> },
    ],
  },
  {
    id: 2,
    link: "https://aliceblue-crane-584187.hostingersite.com/",
    pic: "horizon.png",
    heading: "Horizon Surgical Center",
    discr: "Medical Center",
    tags: [
      { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    ],
  },
  {
    id: 3,
    link: "https://www.armourhomes.au/",
    pic: "armour.png",
    heading: "Armour Homes",
    discr: "Custom Home Builders",
    tags: [
      { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    ],
  },
  // Placeholders for future projects
  {
    id: 4,
    link: "https://saltec.com.au/",
    pic: "saltec.png",
    heading: "Saltec Group",
    discr: "Cutting-Edge AV Solutions",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
    ],
  },
 {
    id: 5,
    link: "https://tradexdesk.com/",
    pic: "tradex.png",
    heading: "Tradex Desk",
    discr: "Performance-Driven Trading",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
    ],
  }, // <--- Yeh comma lagana boht zaroori hai naye project se pehle!
  {
    id: 6,
    link: "https://whitesmoke-mole-377965.hostingersite.com/",
    pic: "tidwell.png",
    heading: "Tidwell",
    discr: "Bookkeeping Services",
    tags: [
      { name: "React", icon: <FaReact color="#61DAFB" /> },
    ],
  } // <--- Aakhri project ke baad comma nahi aayega
]; // <--- Yeh square bracket aur semicolon poori list ko close karta hai
