import { Button, Container, Grid, styled, Typography } from "@mui/material"
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Hero = () => {
    const StyledHero = styled("div")(()=> ({
        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 4 }}>
                        <StyledImg src='https://avatars.githubusercontent.com/u/116472322?v=4' />
                    </Grid>
                    <Grid size={{ xs: 12, md: 8 }}>
                        <Typography color="primary" variant="h1" textAlign="center">Larissa Vieira</Typography>
                        <Typography color="primary" variant="h2" textAlign="center">Software Engineer</Typography>
                        <Grid container display="flex" justifyContent="center">
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <Button>
                                    <DownloadOutlinedIcon/>
                                    Download CV
                                </Button>
                            </Grid>
                            <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                <Button>
                                    <EmailOutlinedIcon/>
                                    Contact me
                                </Button>
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