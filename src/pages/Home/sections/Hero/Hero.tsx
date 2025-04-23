import { Box, Container, Grid, styled, Typography } from "@mui/material"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";

const Hero = () => {
    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "80px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "0"
        },
    }))

    const StyledImg = styled("img")(()=> ({
        width: "60%",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.secondary.light}`
    }))

    const handleDownload = () => {
        console.log("Download CV button clicked");
      
        const link = document.createElement('a');
        link.href = "../../../src/assets/documents/CV-LarissaVieira.pdf";        
        link.download = 'Larissa_Vieira_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    const handleEmail = () => {
        console.log("Contact button clicked");
        window.location.href = 'mailto:larissadjvieira@gmail.com?subject=Olá Larissa&body=Gostaria de falar com você.';
    };

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }} >
                        <Box position="relative">
                            <Box position="absolute" width={"120%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign="center">
                             <StyledImg src='https://avatars.githubusercontent.com/u/116472322?v=4' />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }} >
                        <Typography color="secondary.light" variant="h1" textAlign="center" pb={2}>Larissa Vieira</Typography>
                        <Typography color="secondary.light" variant="h3" textAlign="center">Software Engineer</Typography>
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={5}>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton onClick={handleDownload}>
                                    <DownloadOutlinedIcon/>
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton onClick={handleEmail}>
                                    <EmailOutlinedIcon/>
                                    <Typography>Contact me</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
      </>
    )
  }
  
  export default Hero