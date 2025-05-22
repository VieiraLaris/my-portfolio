import { styled } from "@mui/material/styles"
import { ReactNode } from "react";

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {
    const StyledButton = styled("button")(({ theme }) => ({
        backgroundColor: `${theme.palette.secondary.light}`,
        border: `1px solid ${theme.palette.primary.dark}`,
        borderRadius: "3px",
        padding: "10px 20px",
        width: "100%",
        color: theme.palette.primary.dark,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: "grey"
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