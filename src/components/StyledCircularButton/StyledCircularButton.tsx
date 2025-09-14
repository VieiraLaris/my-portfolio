import { styled } from "@mui/material/styles"
import { ReactNode } from "react";

interface StyledCircularButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledCircularButton: React.FC<StyledCircularButtonProps> = ({children, onClick}) => {
    const StyledCircularButton = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: "100%",
        padding: "20px",
        color: theme.palette.secondary.light,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.primary.light
        }
      }));

    return (
        
      <>
        <StyledCircularButton onClick={onClick}>
            {children}
        </StyledCircularButton>
      </>
    )
  }
  
  export default StyledCircularButton