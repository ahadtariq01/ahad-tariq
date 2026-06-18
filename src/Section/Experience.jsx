import React from "react";
import Heading from "../Components/Heading";
import ExperienceCard from "../Components/ExperienceCard";

const Experience = React.forwardRef(function Experience(props, ref) {
  return (
    <section ref={ref} data-name="Experience" className="scroll-mt-28">
      <div>
        <Heading FWord="RELEVANT" LWord="EXPERIENCE" />
      </div>
      <div className="mt-10 stagger-reveal">
                <ExperienceCard
          heading="Wordpress Developer"
          para="Currently working as a WordPress Developer, designing responsive websites using Elementor, Gutenberg, HTML5, and CSS3 to deliver clean, modern, and user-friendly digital experiences."
          date="January, 2026 – Present"
          active
        />
        <ExperienceCard
          heading="Lead Generation Specialist"
          para="Currently working as a WordPress Developer, designing responsive websites using Elementor, Gutenberg, HTML5, and CSS3 to deliver clean, modern, and user-friendly digital experiences."
          date="May , 2024 – December, 2025"
        />
        <ExperienceCard
          heading="Graphic Designer"
          para="Worked as a Graphic Designer at Benchmark, specializing in creating precise 2D floorplans and high-quality visual assets to deliver clean and detailed design layouts."
          date="Feb, 2023 – March , 2024"
        />
      </div>
    </section>
  );
});

export default Experience;
