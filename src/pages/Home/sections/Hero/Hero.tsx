import { Box, Container, Grid, styled, Typography } from "@mui/material"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import theme from "../../../../theme";
import { AnimatedBackground } from "../../../../components/AnimatedBackground/AnimatedBackground";
import StyledCircularButton from "../../../../components/StyledCircularButton/StyledCircularButton";
// import StyledCircularButton from "../../../../components/StyledCircularButton/StyledCircularButton";
import githubIcon from '../../../../assets/images/githubRosa.png';
import linkedinIcon from '../../../../assets/images/linkedinRosa.png';
import curriculo from '../../../../assets/documents/LarissaDeJesusVieira-CV.pdf';

const Hero = () => {
    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        // height: "100vh",
        display: "flex",
        alignItems: "center",
        [theme.breakpoints.up('xs')]: {
            height: "100%",
            paddingTop: "80px",
            paddingBottom: "40px"
        },
        [theme.breakpoints.up('md')]: {
            height: "100vh",
            paddingTop: "0",
            paddingBottom: "0"
        },
    }))

    const StyledImg = styled("img")(()=> ({
        width: "60%",
        borderRadius: "50%",
        border: `4px solid ${theme.palette.secondary.light}`
    }))

    const StyledIcon = styled("img")(()=> ({
        width: "24px",
        //borderRadius: "100%"
    }))

    const handleDownload = () => {
        console.log("Download CV button clicked");
      
        const link = document.createElement('a');
        link.href = curriculo;        
        link.download = 'Larissa_Vieira_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    
    const handleEmail = () => {
        console.log("Contact button clicked");
        window.location.href = 'mailto:larissadjvieira@gmail.com?subject=Olá Larissa&body=Gostaria de falar com você.';
    };

    const handleGithub = () => {
        console.log("Github button clicked");
        window.location.href = "https://github.com/VieiraLaris";
    }

    const handleLinkedin = () => {
        console.log("Linkedin button clicked");
        window.location.href = "https://www.linkedin.com/in/larissa-de-jesus-vieira-0a897a21a/";
    }

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
                        <Typography color="secondary.main" variant="h1" textAlign="center" pb={2}>Larissa Vieira</Typography>
                        <Typography color="secondary.main" variant="h3" textAlign="center">Software Engineer</Typography>
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
                        <Grid container display="flex" justifyContent="center" spacing={3} pt={5}>
                            <Grid size={{ xs: 4, md: 2 }} display="flex" justifyContent="center">
                                <StyledCircularButton onClick={handleGithub}>
                                    <StyledIcon src={githubIcon} />
                                </StyledCircularButton>
                            </Grid>
                            <Grid size={{ xs: 4, md: 2 }} display="flex" justifyContent="center">
                                <StyledCircularButton onClick={handleLinkedin}>
                                    <StyledIcon src={linkedinIcon} />
                                </StyledCircularButton>
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