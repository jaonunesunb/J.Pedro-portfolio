import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import img from "@/public/static/img/background/dots.svg";

/* ====================
   Header Section
==================== */
export const Header = styled("header", {
  backgroundColor: "$brand1",
  padding: "6rem 0 4rem 0",
  backgroundImage: `url(${img})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom right",
  "@mobile": {
    padding: "6rem 0 3rem 0",
  },
});

export const HeaderContent = styled("div", {
  maxWidth: "100%",
  width: "36rem",
  display: "flex",
  flexDirection: "column",
  gap: "$2",
});

export const HeaderButtonsArea = styled(Flex, {
  marginTop: "$2",
  "@mobile": {
    flexDirection: "column",
    [`& ${Button}`]: {
      width: "100%",
    },
  },
});

/* ====================
   About Me Section
==================== */
export const AboutMeSection = styled("section", {
  padding: "2rem 0",
  background: "$mode",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  "@mobile": {
    padding: "1.5rem 0",
  },
});

export const AboutMeSectionContent = styled("div", {
  width: "100%",
  maxWidth: "90%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
  gap: "1rem",             
  margin: "0 auto",
});


export const AboutMeTextContainer = styled("div", {
  maxWidth: "75rem",
  width: "100%",
  lineHeight: "1.6rem",
  textAlign: "justify",
});

/* ====================
   Stack Section
==================== */
export const StackSection = styled("section", {
  backgroundColor: "$grey4",
  padding: "3rem 0",
});

export const StackCards = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
  gap: "1.5rem",
  padding: "2rem 0",
  "@mobile": {
    display: "flex",
    overflow: "auto",
    padding: "1rem 0",
  },
});

/* ====================
   Projects Area
==================== */
export const ProjectsArea = styled("section", {
  padding: "3rem 0 6rem 0",
});

export const ProjectsAreaSocialMediaMessage = styled("aside", {
  width: "32%",
  display: "flex",
  flexDirection: "column",
  gap: "1.5rem",
  position: "sticky",
  top: "8rem",
  "@mobile": {
    width: "100%",
    position: "static",
    order: "2",
    marginTop: "3rem",
  },
});

export const ProjectsAreaContent = styled("div", {
  width: "60%",
  paddingLeft: "2rem",
  "@mobile": {
    width: "100%",
    paddingLeft: "0",
  },
});

export const ProjectAreaWrapperColumns = styled(Flex, {
  alignItems: "flex-start",
  "@mobile": {
    flexDirection: "column",
  },
});
