// Home.tsx

import { useLanguage } from "@/contexts/LanguageContext";
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";
import { LanguageSelector } from "@/components/LanguageSelector"; // Seletor de idioma

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";
import { Project } from "@/components/Project";
import { Stack } from "@/components/Stack";

// Importando os textos
import { 
   aboutMeText,
   aboutMeTitles, 
   projectsTitle, 
   technologiesTitle, 
   linguagem, 
   linkedin, 
   accessLinkedIn,
   originality, 
   dominio,
   cada_detalhe,
   dedicacao,
   trocar_ideia

 } from "@/contents/aboutMeText";
import Carousel from "@/components/Carrossel";

// Tipo de tradução
type Translation = {
  en: string;
  pt: string;
  es: string;
};

type Texts = {
  aboutMeText: Translation;
  aboutMeTitles: Translation;
  projectsTitle: Translation;
  technologiesTitle: Translation;
  linguagem: Translation;
  linkedin: Translation;
  accessLinkedIn: Translation
  originality: Translation
  dominio: Translation
  cada_detalhe: Translation
  dedicacao: Translation
  trocar_ideia: Translation
};

export const Home = (): JSX.Element => {
  const { language } = useLanguage(); // Usando o contexto para pegar o idioma

  // Função para acessar o texto correto baseado na chave
  const getText = (key: keyof Texts) => {
    const texts: Texts = {
      aboutMeText,
      aboutMeTitles,
      projectsTitle,
      technologiesTitle,
      linguagem,
      linkedin,
      accessLinkedIn,
      originality,
      dominio,
      cada_detalhe,
      dedicacao,
      trocar_ideia
    };

    // Acessando o texto correto
    const result = texts[key];
    return result ? result[language] : "";
  };

  return (
      <main>
        <Header>
          <Container>
            <HeaderContent>
            <LanguageSelector />
              <Text as="h1" type="heading1" color="grey1">
              {getText("aboutMeTitles")}
              </Text>
              <Text>{getText("aboutMeText")}</Text>
              <HeaderButtonsArea>
                <Button as="a" href="#projetos">
                {getText("projectsTitle")}
                </Button>
                <Button as="a" href="#tecnologias" type="secondary">
                {getText("technologiesTitle")}
                </Button>
              </HeaderButtonsArea>
            </HeaderContent>
          </Container>
        </Header>
        <StackSection id="tecnologias">
          <Container>
            <Text as="h4" type="heading3" color="grey1">
            {getText("dominio")}
            </Text>
            <StackCards>
              {stackData.map((stack, index) => (
                <Stack key={index} title={stack.title} icon={stack.img} />
              ))}
            </StackCards>
          </Container>
        </StackSection>
        {/* <Carousel /> */}
        <ProjectsArea id="projetos">
          <Container>
            <ProjectAreaWrapperColumns>
              <ProjectsAreaSocialMediaMessage>
                <Text as="h2" type="heading4" color="grey1">
                {getText("trocar_ideia")}
                </Text>
                <Text as="p" type="body1" color="grey2">
                {getText("linkedin")}
                </Text>
                <Button
                  type="primary"
                  target="_blank"
                  as="a"
                  href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
                >
                  {getText("accessLinkedIn")}
                </Button>
              </ProjectsAreaSocialMediaMessage>
              <ProjectsAreaContent>
                <Text type="body1" color="grey2" css={{ marginBottom: "$2" }}>
                  {getText("projectsTitle")}
                </Text>
                <Text as="h3" type="heading2" color="grey1">
                {getText("originality")}{" "}
                  <Text as="span" color="brand1" type="heading2">
                  {getText("dedicacao")}
                  </Text>{" "}
                  {getText("cada_detalhe")}
                </Text>
                <Project />
              </ProjectsAreaContent>
            </ProjectAreaWrapperColumns>
          </Container>
        </ProjectsArea>
      </main>
    );
}