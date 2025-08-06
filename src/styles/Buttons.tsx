import { styled } from '@/styles/stitches.config';
import { colors } from '@/styles/Global'

export const Button = styled('button', {
    height: "2.75rem",
    appearance: "none",
    background: "$whiteFixed",
    color: "$grey1",
    fontWeight: "600",
    padding: "0 2rem",
    border: "2px solid $whiteFixed",
    borderRadius: "$1",
    cursor: "pointer",
    fontSize: "1rem",
    fontFamily: "$texts",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "max-content",
    
    transition: "background-color 0.3s, color 0.3s, border-color 0.3s",
        "&:focus-visible": {
            outline: "2px solid $brand1",
            outlineOffset: "2px",
        },
        "&:disabled": {
            opacity: 0.6,
            cursor: "not-allowed",
        },

    variants: {
        type: {
            btLink: {
                background: "transparent",
                borderColor: "transparent",
            },
            primary: {
                background: "$brand1",
                borderColor: "$brand1",
                color: "$whiteFixed",
                "&:hover": {
                    backgroundColor: "$brand2",
                    borderColor: "$brand2",
                }
            },
            secondary: {
                background: "$brand2",
                borderColor: "$brand2",
                color: "$whiteFixed",
                "&:hover": {
                    backgroundColor: "$brand3",
                    borderColor: "$brand3",
                }
            },
            icon: {
                borderColor: "$grey5",
                backgroundColor: "transparent",
                borderRadius: "$1",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            },
            circle: {
                borderColor: "$grey5",
                backgroundColor: "$whiteFixed",
                borderRadius: "50%",
                padding: "0",
                width: "2.75rem",
                height: "2.75rem",
                "&:hover": {
                    backgroundColor: "$grey5",
                }
            }
        },
        ...colors
    }
})