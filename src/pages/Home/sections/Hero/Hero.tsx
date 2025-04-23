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
        alignItems: "center"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "60%",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.secondary.light}`
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }} >
                        <Box position="relative" pt={3}>
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
                                <StyledButton>
                                    <DownloadOutlinedIcon/>
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <StyledButton>
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