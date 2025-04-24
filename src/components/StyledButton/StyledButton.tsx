import { styled } from "@mui/material/styles"
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.secondary.light}`,
        borderRadius: "3px",
        padding: "10px 20px",
        width: "100%",
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
        <StyledButton onClick={onClick}>
            {children}
        </StyledButton>
      </>
    )
  }
  
  export default StyledButton
  