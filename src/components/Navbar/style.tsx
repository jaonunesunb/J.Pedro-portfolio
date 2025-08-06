import { styled } from "../../styles/stitches.config";
import { Flex, Container } from "../../styles/Global";
import { Button } from "../../styles/Buttons";

export const NavbarWrapper = styled("nav", {
  background: "$mode",
  borderBottom: "2px solid $grey4",
  position: "fixed",
  left: 0,
  right: 0,
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },
  "@mobile": {
    position: "sticky",
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
  gap: "0.75rem",
});

export const LogoTipoImage = styled("img", {
  width: "3rem",
  height: "3rem",
  borderRadius: "50%",
  "@mobile": {
    width: "2.25rem",
    height: "2.25rem",
  },
});

export const LogoTipoText = styled("span", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey1",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: "$3",
    [`& ${Button}:nth-child(1)`]: {
      width: "100%",
      order: "3",
    },
    [`& ${Button}`]: {
      width: "48%",
      order: "1",
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});