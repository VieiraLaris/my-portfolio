import { Box, styled } from "@mui/material";
import { ReactNode } from "react";

interface StyledPrettyBoxProps {
    children: ReactNode
}

const StyledPrettyBox: React.FC<StyledPrettyBoxProps> = ({ children }) => {
    const CustomBox = styled(Box)(({ theme }) => ({
        // Estilo da borda
        border: `2px dashed ${theme.palette.secondary.main}`,
        borderRadius: "10px",
        padding: "40px",
        position: "relative",

        // Estilos responsivos
        [theme.breakpoints.down('sm')]: {
            padding: "15px",
        },
    }));

    return (
        <CustomBox>
            {children}
        </CustomBox>
    );
}
export default StyledPrettyBox;