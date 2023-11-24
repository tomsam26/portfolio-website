"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        During my university studies and later in my first job experience as a{" "}
        <span className="font-medium">project manager</span>, I delved into
        design and completed a course devoted to designing websites. Through
        this experience, I discovered the fascination world of programming. I
        decided to enroll in a coding bootcamp and learned{" "}
        <span className="font-medium">full-stack web development</span>. I enjoy
        tackling challenges that require{" "}
        <span className="underline">creativity</span> and{" "}
        <span className="underline">problem-solving skills</span>. I love the
        feeling of finally figuring out a solution to a problem.{" "}
      </p>

      <p className="mb-3">
        My core stack is{" "}
        <span className="font-medium">Next.js, React, Node.js, Express</span>{" "}
        and <span className="font-medium">MySLQ</span>. I am also familiar with{" "}
        <span className="font-medium">TypeScript</span>. I am excited about the
        opportunities for growth in this field and learning new technologies. I
        am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a developer.{" "}
      </p>

      <p>
        When I'm not coding, I enjoy hiking in the High Tatras, listening to
        podcasts dedicated to mental health and self-development, reading books,
        capturing (extra)ordinary moments through the lens of my camera and
        playing board games with my wife. I am passionate about{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about how to play the piano or how to cultivate relationships,
        well-being, and physical condition.
      </p>
    </motion.section>
  );
}
