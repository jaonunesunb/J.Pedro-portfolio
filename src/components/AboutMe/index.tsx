import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";

import {
  AboutMeSection,
  AboutMeSectionContent,
} from "./style";

export const AboutMe = () => {
  return (
    <AboutMeSection id="about-me">
      <AboutMeSectionContent>
        <Text as="h1" type="heading1" color="grey5">
          A little bit about me
        </Text>
        <Text type="body1" color="grey2">
          I am a Full-stack Web Developer with a strong proficiency in Python,
          JavaScript, React, TypeScript, Data Science, SQL, NoSQL, R, CSS, HTML,
          XML, and PHP. I am constantly seeking to deepen my knowledge and
          expertise in these areas, as well as exploring new technologies and
          trends. In addition to my degree in Library Science (Information
          Science) from the University of Brasília - UnB, I have also completed
          a number of Computer Science courses, including programming languages,
          data structures, algorithms, information systems, database management,
          computer logic, and software engineering. Currently, I am focusing on
          developing intelligent information systems integrated with ontologies.
          I am experienced in using Scrum and Kanban methodologies, and have
          collaborated on a variety of team projects both at Kenzie Academy and
          at UnB. One of my recent projects involved contributing to the
          development of a flexible Organizational Information System as part of
          an Undergraduate Research Project at the Department of Computer
          Science. I am passionate about working collaboratively with others to
          build innovative and impactful web applications. If you are interested
          in learning more about my qualifications and experience, please feel
          free to contact me at jaonunesunb@gmail.com.
        </Text>
      </AboutMeSectionContent>
    </AboutMeSection>
  );
};
