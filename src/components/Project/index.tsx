import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";
import { useEffect, useState } from "react";
import { FaGithub, FaShare } from "react-icons/fa";
import { userData } from "@/utils/userData";

// Importando os textos
import { linguagem, aplicacao, code } from "@/contents/aboutMeText";
import { useLanguage } from "@/contexts/LanguageContext";

interface ReposType {
  id: number;
  name: string;
  language: string;
  description: string;
  git_url: string;
  homepage: string;
}

// Tipo de tradução
type Translation = {
  en: string;
  pt: string;
  es: string;
};

type Texts = {
  linguagem: Translation;
  aplicacao: Translation,
  code: Translation
};

 const getText = (key: keyof Texts) => {
  const { language } = useLanguage();
    const texts: Texts = {
      linguagem,
      aplicacao,
      code,
    };
     // Acessando o texto correto
     const result = texts[key];
     return result ? result[language] : "";
   };

   export const Project = (): JSX.Element => {
    const [repositories, setRepositories] = useState<ReposType[]>([]);
  
    // Remover o useEffect condicional. Ele deve ser chamado apenas uma vez durante a primeira renderização.
    const fetchData = async () => {
      try {
        const data: Response = await fetch(
          `https://api.github.com/users/${userData.githubUser}/repos`
        );
        const json = await data.json();
  
        // Verificar se a resposta foi bem-sucedida antes de atualizar o estado
        if (data.ok) {
          setRepositories(json);
        } else {
          console.error('Erro ao buscar dados dos repositórios', json);
        }
      } catch (error) {
        console.error('Erro de rede ao buscar dados dos repositórios', error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []); // A função fetchData é chamada uma vez quando o componente é montado
  
    return (
      <>
        {repositories?.map((repository) => (
          <ProjectWrapper key={repository.id}>
            <Text
              as="h2"
              type="heading3"
              css={{ marginBottom: "$3" }}
              color="grey1"
            >
              {repository.name}
            </Text>
  
            {repository.language && (
              <ProjectStack>
                <Text type="body2">{getText("linguagem")}:</Text>
                <ProjectStackTech>
                  <Text color="brand1" type="body2">
                    {repository.language}
                  </Text>
                </ProjectStackTech>
              </ProjectStack>
            )}
  
            <Text type="body1" color="grey2">
              {repository.description}
            </Text>
            <ProjectLinks>
            <ProjectLinks>
            <ProjectLink
              target="_blank"
              href={repository.git_url.replace("git://", "https://")}
              rel="noopener noreferrer"
            >
              <FaGithub /> {getText("code")}
            </ProjectLink>
            {repository.homepage && (
              <ProjectLink target="_blank" href={repository.homepage} rel="noopener noreferrer">
                <FaShare /> {getText("aplicacao")}
              </ProjectLink>
            )}
          </ProjectLinks>
            </ProjectLinks>
          </ProjectWrapper>
        ))}
      </>
    );
  };  