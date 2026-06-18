import React from "react";
import Heading from "../Components/Heading";
import SkillCard from "../Components/SkillCard";
import { FaGithub, FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { SiWordpress, SiElementor, SiGutenberg, SiGooglemarketingplatform } from "react-icons/si";

const skills = [
  { logo: <SiWordpress />, title: "WordPress", disc: "CMS Platform", color: "#21759B" },
  { logo: <SiElementor />, title: "Elementor", disc: "Page Builder", color: "#D30C5C" },
  { logo: <SiGutenberg />, title: "Gutenberg", disc: "Block Editor", color: "#007CBA" },
  { logo: <SiGooglemarketingplatform />, title: "Lead Generation", disc: "Sales & Growth", color: "#4285F4" },
  { logo: <FaHtml5 />, title: "HTML5", disc: "Web Structuring", color: "#E34F26" },
  { logo: <IoLogoCss3 />, title: "CSS3", disc: "Responsive Styling", color: "#1572B6" },
  { logo: <FaGithub />, title: "Github", disc: "Code collaboration", color: "#E6EDF3" },
];

const Skills = React.forwardRef(function Skills(props, ref) {
  return (
    <section ref={ref} data-name="Skills" className="scroll-mt-28">
      <div className="mb-8">
        <Heading FWord="TECHNICAL" LWord="SKILLS" />
      </div>
      <div className="grid lg:grid-cols-2 gap-3 stagger-reveal">
        {skills.map((skill, i) => (
          <SkillCard key={i} {...skill} />
        ))}
      </div>
    </section>
  );
});

export default Skills;
