import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { useLanguage } from "contexts/LanguageContext";
import { aboutMeText } from "contents/aboutMeText";
import { LanguageSelector } from "@/components/LanguageSelector";

import {
  AboutMeSection,
  AboutMeSectionContent,
} from "./style";

export const AboutMe = () => {
  const { language } = useLanguage();

  return (
    <AboutMeSection id="about-me">
      <AboutMeSectionContent>
        <Text as="h1" type="heading1" color="grey5">
          A little bit about me
        </Text>
        <LanguageSelector />
        <Text type="body1" color="grey2" css={{ marginTop: "1.5rem" }}>
          {aboutMeText[language]}
        </Text>
      </AboutMeSectionContent>
    </AboutMeSection>
  );
};
