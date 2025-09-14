import { styled } from "@mui/material/styles"
import { ReactNode } from "react";

interface StyledInfoBoxProps {
    children: ReactNode
}

const StyledInfoBox: React.FC<StyledInfoBoxProps> = ({children}) => {
    const StyledInfoBox = styled("button")(({ theme }) => ({
        backgroundColor: "#bdd9e9ff",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "5px 15px",        
        color: theme.palette.primary.main,
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        [theme.breakpoints.up('xs')]: {
            width: "100%",
        },
        [theme.breakpoints.up('md')]: {
            width: "250px",
        },
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
