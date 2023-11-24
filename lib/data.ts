import React from "react";
import nexticket from "@/public/nexticket.png";
import { GiFox } from "react-icons/gi";
import { FaGraduationCap } from "react-icons/fa6";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Digital Design Course",
    company: "DigitalDesign",
    location: "Slovakia, Remote",
    description:
      "Completed a design course in the following fields: Advertising Design & Graphic Design, DTP graphics & layout, Web design and website development",
    icon: React.createElement(FaGraduationCap),
    date: "Aug 2022 - present",
  },
  {
    title: "Graduated full-stack development bootcamp",
    company: "Green Fox Academy",
    location: "Prague, Czechia, Remote",
    description:
      "I graduated after 1 year of studying programming. Now, I'm ready to pursue a new career as a Junior Developer and actively seek opportunities to apply my skills, aiming to be a valuable part of the team.",
    icon: React.createElement(GiFox),
    date: "Nov 2022 - Oct 2023",
  },
] as const;

export const projectsData = [
  {
    title: "NEXTicket",
    description:
      "I worked as a junior full-stack developer with my team on this project for 3 months in the last module of Green Fox Academy course.",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "MySQL",
      "Railway",
      "Node.js",
      "Express.js",
    ],
    imageUrl: nexticket,
    linkUrl: "https://nexticket.up.railway.app/",
  },
] as const;

export const skillsData = [
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "MySQL",
  "Express",
  "Zustand",
  "Railway",
  "Jest",
  "Jira",
  "HTML",
  "CSS",
  "SCRUM",
  "Adobe Illustrator",
  "Adobe Photoshop",
  "Canva",
] as const;
