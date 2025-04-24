import { Container, Grid, styled, Typography } from "@mui/material"
import StyledInfoBox from "../../../../components/InfoBox/InfoBox";

const Skills = () => {
    const StyledSkills = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "top",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "30px",
            height: "100%",
            paddingBottom: "50px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "5",
            height: "100%",
            paddingBottom: "70px"
        },
    }))

    return (
      <>
        <StyledSkills>
            <Container id="skills" maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <Typography color="primary.main" variant="h1" textAlign="center" pb={5}>My skills</Typography>
                    </Grid>
                    <Grid container size={12} display="flex" justifyContent="center" spacing={3} >
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">SQL</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">MySQL</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">C</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">Git</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">React</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">TypeScript</Typography>
                            </StyledInfoBox>
                        </Grid>                        
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">Data Modeling</Typography>
                            </StyledInfoBox>
                        </Grid>
                        <Grid display="flex" justifyContent="center">
                            <StyledInfoBox>
                                <Typography fontWeight="bold" variant="h6">Linux</Typography>
                            </StyledInfoBox>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledSkills>
      </>
    )
  }
  
  export default Skills