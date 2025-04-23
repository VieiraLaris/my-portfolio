import { styled } from "@mui/material/styles"
import { ReactNode } from "react";

interface StyledInfoBoxProps {
    children: ReactNode
}

const StyledInfoBox: React.FC<StyledInfoBoxProps> = ({children}) => {
    const StyledInfoBox = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.light,
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "15px",
        width: "100%",
        color: theme.palette.primary.main,
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }));

    return (
        
      <>
        <StyledInfoBox>
            {children}
        </StyledInfoBox>
      </>
    )
  }
  
  export default StyledInfoBox
