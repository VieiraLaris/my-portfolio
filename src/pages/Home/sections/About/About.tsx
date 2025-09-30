import { Box, Container, Grid, styled, Typography } from "@mui/material"
import StyledInfoBox from "../../../../components/InfoBox/InfoBox";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
// import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import theme from "../../../../theme";

const About = () => {
    const StyledAbout = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "top",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "30px",
            height: "100%",
            paddingBottom: "5px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "5",
            height: "100%",
            paddingBottom: "5px"
        },
    }))

    return (
      <>
        <StyledAbout>
            <Container id="about" maxWidth="lg">
                <Box
                 width="100%"
                 mx="auto"
                 borderBottom={`1px solid ${theme.palette.primary.main}`}
                 pb={5}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <Typography color="primary.main" variant="h1" textAlign="center" pb={5}>About me</Typography>
                    </Grid>
                    <Grid item xs={12} display="flex" justifyContent="center" spacing={3}>
                        {/*
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <WorkspacePremiumOutlinedIcon/>
                                <Typography fontWeight="bold" variant="h6">Experience</Typography>
                                <Typography variant="h6">???????</Typography>
                                <Typography variant="h6">?????????</Typography>
                            </StyledInfoBox>
                        </Grid>
                        */}
                        <Grid item display="flex" justifyContent="center"> 
                            <StyledInfoBox>
                                <SchoolOutlinedIcon/>
                                <Typography fontWeight="bold" variant="h6">Education</Typography>
                                <Typography variant="h6">Bachelors Degree</Typography>
                                <Typography variant="h6">Software Engineering</Typography>
                            </StyledInfoBox>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} pt={5} pb={4}>
                        <Typography color="primary.main" variant="h6" textAlign="center" pt={6}>✴ Hi, I'm Larissa! ✴</Typography>
                        <Typography color="primary.main" variant="h6" textAlign="center">I'm a Software Engineering student at the University of Brasília (UnB), with a strong interest in data modeling and analysis. I also really enjoy working with front-end development, where I can combine creativity and technical skills to build engaging user experiences. I’m eager to take on new challenges that allow me to enhance my software development skills and contribute to impactful projects.</Typography>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About