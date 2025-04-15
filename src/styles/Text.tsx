import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'

import { CSS } from "@stitches/react"; 

export interface TextProps {
  as?: keyof JSX.IntrinsicElements; // Permite definir a tag HTML (por exemplo, 'h1', 'p')
  type?: "heading1" | "heading2" | "heading3" | "heading4" | "body1" | "body2"; // Para definir o tipo de texto
  color?: string; // Para definir a cor do texto
  css?: CSS; // Para aplicar estilos personalizados, se necessário
}

const headingsDefaultConfig = {
    fontFamily: "$titles"
}

const bodyDefaultConfig = {
    fontFamily: "$texts"
}

export const Text = styled("p", {
    color: "$grey1",
    fontSize: "$text1",
    fontWeight: 400,
    variants: {
        type: {
            heading1: {
                fontSize: "$title1",
                lineHeight: "$title1",
                fontWeight: 700,
                ...headingsDefaultConfig,
                "@mobile": {
                    fontSize: "$title1Mobile",
                    lineHeight: "$title1Mobile"
                }
            },
            heading2: {
                fontSize: "$title2",
                lineHeight: "$title2",
                fontWeight: 600,
                ...headingsDefaultConfig
            },
            heading3: {
                fontSize: "$title3",
                lineHeight: "$title3",
                fontWeight: 500,
                ...headingsDefaultConfig
            },
            heading4: {
                fontSize: "$title4",
                lineHeight: "$title4",
                fontWeight: 500,
                ...headingsDefaultConfig
            },
            body1: {
                fontSize: "$text1",
                lineHeight: "$text1",
                ...bodyDefaultConfig
            },
            body2: {
                fontSize: "$text2",
                lineHeight: "$text2",
                ...bodyDefaultConfig
            },
        },
        ...colors
    }
})