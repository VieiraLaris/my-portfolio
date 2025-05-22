import { Container, Grid, styled, Typography, Zoom, Box } from "@mui/material";
import { useState } from "react";
import StyledProjectBox from "../../../../components/ProjectBox/ProjectBox";
import StyledButtonReversed from "../../../../components/StyledButton/StyledButtonReversed";

const Projects = () => {
  const StyledProjects = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    alignItems: "top",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(6),
  }));

  const ProjectImage = styled("img")(({ theme }) => ({   
    objectFit: "contain",
    display: "block",
    margin: "0 auto",
    [theme.breakpoints.up('xs')]: {
      width: "200px",
      height: "200px",
    },
    [theme.breakpoints.up('md')]: {
      width: "300px",
      height: "300px",
    },
  }));

  const ContentBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '220px', // ajuste conforme necessário
    width: '100%',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }));

  const [checked, setChecked] = useState(true);

  const handleDeOlhoRS = () => {
    console.log("View project De Olho RS button clicked");
    window.location.href = "https://github.com/unb-mds/2023.2_DeOlhoRS";
  };

  const handleEntregai = () => {
    console.log("View project De Olho RS button clicked");
    window.location.href = "https://github.com/projeto-de-algoritmos-2024/Greed_Entregai";
  };

  return (
    <StyledProjects>
      <Container id="projects" maxWidth="lg">
        <Grid container spacing={3} justifyContent="center">
          <Grid size={12}>
            <Typography color="secondary.main" variant="h1" textAlign="center" pb={5}>
              My Projects
            </Typography>
          </Grid>

          {[{
            img: "../../../../../src/assets/images/logoDeOlhoRS.png",
            title: "De Olho RS",
            description: "Collecting official municipal diaries from different cities in Rio Grande do Sul and analyzing information related to appointments and dismissals of public servants.",
            handleButton: handleDeOlhoRS
          },
          {
            img: "../../../../../src/assets/images/LogoEntregai.png",
            title: "EntregAí",
            description: "Project developed to demonstrate the practical application of the Interval Scheduling algorithm, which organizes deliveries prioritizing those with closer end times.",
            handleButton: handleEntregai
          }].map((project, index) => (
            <Grid key={index}>
              <Zoom in={checked} style={{ transitionDelay: `${index * 500}ms` }}>
                <Box>
                  <StyledProjectBox>
                    <Box paddingBottom="5%">
                      <ProjectImage src={project.img} />
                    </Box>
                    <ContentBox>
                      <Typography fontWeight="bold" variant="h6">
                        {project.title}
                      </Typography>
                      <Typography>
                        {project.description}
                      </Typography>
                      <StyledButtonReversed onClick={project.handleButton}>
                        <Typography>View project</Typography>
                      </StyledButtonReversed>
                    </ContentBox>
                  </StyledProjectBox>
                </Box>
              </Zoom>
            </Grid>
          ))}
        </Grid>
      </Container>
    </StyledProjects>
  );
};

export default Projects;