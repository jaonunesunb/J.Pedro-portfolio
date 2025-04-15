import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { useLanguage } from "@/contexts/LanguageContext";
import { aboutMeText, aboutMeTitles } from "@/contents/aboutMeText";
import { LanguageSelector } from "@/components/LanguageSelector";
import {
  AboutMeSection,
  AboutMeSectionContent,
  AboutMeTextContainer,
} from "./style";

export const AboutMe = () => {
  const { language } = useLanguage();

  return (
    <AboutMeSection id="about-me">
      <Container>
        <AboutMeSectionContent>
          <Text as="h1" type="heading1" color="grey2">
            {aboutMeTitles[language]}
          </Text>
          <LanguageSelector />
          <AboutMeTextContainer>
            <Text type="body1" color="grey2">
              {aboutMeText[language]}
            </Text>
          </AboutMeTextContainer>
        </AboutMeSectionContent>
      </Container>
    </AboutMeSection>
  );
};
