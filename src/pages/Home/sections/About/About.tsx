import { Box, Container, Grid, styled, Typography } from "@mui/material"
import StyledInfoBox from "../../../../components/InfoBox/InfoBox";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import theme from "../../../../theme";

const About = () => {
    const StyledAbout = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.light,
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
                    <Grid size={12}>
                        <Typography color="primary.main" variant="h1" textAlign="center" pb={5}>About me</Typography>
                    </Grid>
                    <Grid container size={12} display="flex" justifyContent="center" spacing={3} >
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <WorkspacePremiumOutlinedIcon/>
                                <Typography fontWeight="bold" variant="h6">Experience</Typography>
                                <Typography variant="h6">???????</Typography>
                                <Typography variant="h6">?????????</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <SchoolOutlinedIcon/>
                                <Typography fontWeight="bold" variant="h6">Education</Typography>
                                <Typography variant="h6">Bachelors Degree</Typography>
                                <Typography variant="h6">Software Engineering</Typography>
                            </StyledInfoBox>
                        </Grid>
                    </Grid>
                    <Grid size={12} pt={5}>
                        <Typography color="primary.main" variant="h6" textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</Typography>
                    </Grid>
                </Grid>
                </Box>
            </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About