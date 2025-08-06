import React, { useEffect, useState } from "react";
import {
  Project as ProjectWrapper,
  ProjectStack,
  ProjectStackTech,
  ProjectLink,
  ProjectLinks,
} from "./style";

import { Text } from "@/styles/Text";

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
  html_url: string;
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
  aplicacao: Translation;
  code: Translation;
};

export const Project = (): JSX.Element => {
  const [repositories, setRepositories] = useState<ReposType[]>([]);
  const { language } = useLanguage();

  const getText = (key: keyof Texts) => {
    const texts: Texts = {
      linguagem,
      aplicacao,
      code,
    };
    return texts[key]?.[language] || "";
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${userData.githubUser}/repos`
      );
      const json = await response.json();

      if (response.ok) {
        setRepositories(json);
      } else {
        console.error("Erro ao buscar repositórios:", json);
      }
    } catch (error) {
      console.error("Erro de rede:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {repositories.map((repository) => (
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
            <ProjectLink
              target="_blank"
              href={repository.html_url}
              rel="noopener noreferrer"
            >
              <FaGithub /> {getText("code")}
            </ProjectLink>

            {repository.homepage && (
              <ProjectLink
                target="_blank"
                href={repository.homepage}
                rel="noopener noreferrer"
              >
                <FaShare /> {getText("aplicacao")}
              </ProjectLink>
            )}
          </ProjectLinks>
        </ProjectWrapper>
      ))}
    </>
  );
};
