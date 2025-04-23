import { Container, Grid, styled, Typography } from "@mui/material"
import StyledInfoBox from "../../../../components/InfoBox/InfoBox";
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

const About = () => {
    const StyledAbout = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.light,
        display: "flex",
        alignItems: "top",
        borderBottom: `2px solid ${theme.palette.primary.main}`,
        [theme.breakpoints.up('xs')]: {
            paddingTop: "30px",
            height: "100%",
            paddingBottom: "40px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "5",
            height: "100%",
            paddingBottom: "50px"
        },
    }))

    return (
      <>
        <StyledAbout>
            <Container maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <Typography color="primary.main" variant="h1" textAlign="center" pb={5}>About me</Typography>
                    </Grid>
                    <Grid container size={12} display="flex" justifyContent="center" spacing={3} >
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <WorkspacePremiumOutlinedIcon/>
                                <Typography fontWeight="bold" variant="h6">Experience</Typography>
                                <Typography variant="h6">Bachelors Degree</Typography>
                                <Typography variant="h6">Software Engineering</Typography>
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
            </Container>
        </StyledAbout>
      </>
    )
  }
  
  export default About