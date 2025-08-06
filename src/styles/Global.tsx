import { createTheme, globalCss, styled } from "@stitches/react";
import { ReactNode } from "react";

interface GlobalStyleProps {
  children: ReactNode;
}

export const Container = styled("div", {
  maxWidth: "$container",
  margin: "0 auto",
  padding: "0 1rem",
});

export const Flex = styled("div", {
  display: "flex",
  gap: "$1",
});

export const colors = {
  color: {
    brand1: {
      color: "$brand1",
    },

    grey1: {
      color: "$grey1",
    },

    grey2: {
      color: "$grey2",
    },

    grey3: {
      color: "$grey3",
    },

    grey4: {
      color: "$grey4",
    },

    grey5: {
      color: "$grey5",
    },
    grey6: {
      color: "$grey6",
    },
  },
};

export const darkTheme = createTheme({
  colors: {
    // Tons principais - mais escuros, profundos e sóbrios
    brand1: "#1565C0", // azul bem escuro
    brand2: "#1976D2", // azul padrão
    brand3: "#2196F3", // azul claro
    brand4: "#64B5F6", // azul suave,
    
    // Cores para textos e elementos de apoio
    grey1: "#F8F9FA", // texto principal bem claro
    grey2: "#CED3D7", // cinza suave
    grey3: "#495057", // cinza escuro
    grey4: "#343A40", // cinza bem escuro
    grey5: "#212529", // cinza muito escuro, quase preto
    grey6: "#121416", // preto suave
    
    whiteFixed: "#0F0F0F", // quase preto para textos e backgrounds
    
    // Token para o background principal (modo noturno)
    mode: "#1E1E2F", // fundo escuro e suave
  },
});


export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  html: {
    scrollBehavior: "smooth",
  },
  a: {
    textDecoration: "none",
  },
});

export const GlobalStyle: React.FC<GlobalStyleProps> = ({ children }) => {
  globalStyles();

  // Apenas cria um container que envolve a aplicação; não atribuímos nenhuma className aqui.
  const App = styled("div", {
    minHeight: "100vh",
  });

  return <App>{children}</App>;
};
