import { styled } from "@mui/material/styles"
import { ReactNode } from "react";

interface StyledProjectBoxProps {
    children: ReactNode
}

const StyledProjectBox: React.FC<StyledProjectBoxProps> = ({children}) => {
    const StyledProjectBox = styled("button")(({ theme }) => ({
        backgroundColor: theme.palette.secondary.light,//"#F4C3BE",
        border: `1px solid ${theme.palette.primary.main}`,
        borderRadius: "3px",
        padding: "5px 15px",        
        color: theme.palette.primary.main,
        display: "flex", 
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        paddingTop: "10%",
        [theme.breakpoints.up('xs')]: {
            width: "100%",
        },
        [theme.breakpoints.up('md')]: {
            width: "500px",
            height: "650px"
        },
      }));

    return (
        
      <>
        <StyledProjectBox>
            {children}
        </StyledProjectBox>
      </>
    )
  }
  
  export default StyledProjectBox