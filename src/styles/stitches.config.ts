import { createStitches } from "@stitches/react";

export const { styled, globalCss, theme, createTheme } = createStitches({
  theme: {
    colors: {
       brand1: "#1976D2", // azul profundo para elementos de destaque
      brand2: "#64B5F6", // azul suave
      brand3: "#90CAF9", // azul pastel
      brand4: "#E3F2FD", // azul bem claro
      
      // Cores para textos e elementos de apoio
      grey1: "#212121", // escuro para textos
      grey2: "#424242", // cinza escuro
      grey3: "#616161", // cinza médio
      grey4: "#9E9E9E", // cinza suave
      grey5: "#BDBDBD", // cinza claro
      grey6: "#E0E0E0", // cinza muito claro
      
      whiteFixed: "#ffffff", // branco puro
      
      // Token para o background principal (modo diurno)
      mode: "#F5F7FA", // fundo neutro em azul muito claro
    },
    sizes: {
      container: "75rem",
    },
    space: {
      1: "0.5rem",
      2: "1rem",
      3: "2rem",
    },
    fonts: {
      titles: '"Lexend", sans-serif;',
      texts: '"Inter", sans-serif',
    },
    fontSizes: {
      title1: "2.75rem",
      title2: "1.75rem",
      title3: "1.50rem",
      title4: "1.25rem",
      text1: "1rem",
      text2: "0.875rem",
      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    lineHeights: {
      title1: "3.8rem",
      title2: "2.75rem",
      title3: "2.5rem",
      title4: "1.25rem",
      text1: "1.75rem",
      text2: "1.75rem",
      // Mobile
      title1Mobile: "$title2",
      title2Mobile: "$title3",
    },
    radii: {
      1: "0.75rem",
      2: "0.5rem",
    },
  },
  media: {
    mobile: "(max-width: 991px)",
  },
});

