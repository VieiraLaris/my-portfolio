import { Container, Grid, styled, Typography } from "@mui/material"

const Projects = () => {
    const StyledProjects = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        display: "flex",
        alignItems: "top",
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
        <StyledProjects>
            <Container id="projects" maxWidth="lg">
                <Grid container spacing={1}>
                    <Grid size={12}>
                        <Typography color="secondary.main" variant="h1" textAlign="center" pb={5}>My Projects</Typography>
                    </Grid>
                </Grid>
            </Container>
        </StyledProjects>
      </>
    )
  }

  export default Projects