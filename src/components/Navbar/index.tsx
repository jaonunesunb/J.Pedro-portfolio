import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container } from "@/styles/Global";
import { useTheme } from "@/contexts/ThemeContext";
import { useLanguage } from "@/contexts/LanguageContext";
import { falar } from "@/contents/aboutMeText";
import { theme } from "@/styles/stitches.config";
import useMedia from "use-media";
import {
  NavbarWrapper,
  NavbarMobileArea,
  LogoTipo,
  LogoTipoImage,
  NavbarLinks,
} from "./style";
import { userData } from "@/utils/userData";

// Tipos de tradução
type Translation = {
  en: string;
  pt: string;
  es: string;
};

type Texts = {
  falar: Translation;
};

export const NavBar = (): JSX.Element => {
  const [open, setOpen] = useState(false);
  const { language } = useLanguage();
  const { theme, toggleTheme } = useTheme(); // supondo que toggleTheme está no seu contexto
  const isWide = useMedia({ maxWidth: "991px" });

  const getText = (key: keyof Texts) => {
    const texts: Texts = {
      falar,
    };
    return texts[key]?.[language] || "";
  };

  useEffect(() => {
    document.title = userData.nameUser;
  }, []);

  const handleMenuToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <NavbarWrapper>
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoImage
              src={`https://github.com/${userData.githubUser}.png`}
              alt={userData.nameUser}
              title={userData.nameUser}
              width="48px"
              height="48px"
            />
            <h1>{userData.nameUser}</h1>
          </LogoTipo>

          {isWide && (
            <Button type="icon" onClick={handleMenuToggle} aria-label="Menu">
              {open ? <IoClose /> : <FaBars />}
            </Button>
          )}
        </NavbarMobileArea>

        <NavbarLinks>
          {userData.githubUser && (
            <Button
              type="icon"
              as="a"
              href={`https://github.com/${userData.githubUser}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </Button>
          )}

          {userData.linkedinUser && (
            <Button
              type="icon"
              as="a"
              href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </Button>
          )}

          <Button type="icon" onClick={toggleTheme} aria-label="Alternar tema">
            {theme === "light" ? "🌙" : "☀️"}
          </Button>
        </NavbarLinks>
      </Container>
    </NavbarWrapper>
  );
};
