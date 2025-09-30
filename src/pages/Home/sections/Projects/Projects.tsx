import { Container, styled, Typography, Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel';
import StyledProjectBox from "../../../../components/ProjectBox/ProjectBox";
import StyledButtonReversed from "../../../../components/StyledButton/StyledButtonReversed";
import deOlhoRSLogo from "../../../../../src/assets/images/logoDeOlhoRS.png";
import entregaiLogo from "../../../../../src/assets/images/LogoEntregai.png";
import bdLogo from "../../../../../src/assets/images/database-icon-nobg.png";

interface ProjectData {
  img: string;
  title: string;
  description: string;
  handleButton: () => void;
}

interface ProjectItemProps {
  project: ProjectData;
  ProjectImage: any;
  ContentBox: any;
  StyledProjectBox: any;
}

const ProjectItem = ({ project, ProjectImage, ContentBox, StyledProjectBox }: ProjectItemProps) => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', padding: { xs: '0 16px', md: '0 32px' } }}>
      <StyledProjectBox> 
        <Box paddingBottom="5%">
          <ProjectImage src={project.img} />
        </Box>
        <ContentBox>
          <Typography fontWeight="bold" variant="h6">
            {project.title}
          </Typography>
          <Typography paddingBottom={2}>
            {project.description}
          </Typography>
          <StyledButtonReversed onClick={project.handleButton}>
            <Typography>View project</Typography>
          </StyledButtonReversed>
        </ContentBox>
      </StyledProjectBox>
    </Box>
  );
};


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
    minHeight: '220px', 
    width: '100%',
    borderTop: `1px solid ${theme.palette.primary.main}`,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  }));

  const handleDeOlhoRS = () => {
    console.log("View project De Olho RS button clicked");
    window.location.href = "https://github.com/unb-mds/2023.2_DeOlhoRS";
  };

  const handleEntregai = () => {
    console.log("View project Entregai button clicked");
    window.location.href = "https://github.com/projeto-de-algoritmos-2024/Greed_Entregai";
  };

  const handleBD = () => {
    console.log("View project Projeto de Banco de Dados button clicked");
    window.location.href = "https://github.com/VieiraLaris/SBD1_ProjetoFinal";
  };

  // Array de projetos tipado com ProjectData[]
  const projectsData: ProjectData[] = [{
      img: deOlhoRSLogo,
      title: "De Olho RS",
      description: "Collecting official municipal diaries from different cities in Rio Grande do Sul and analyzing information related to appointments and dismissals of public servants.",
      handleButton: handleDeOlhoRS
    },
    {
      img: entregaiLogo,
      title: "EntregAí",
      description: "Project developed to demonstrate the practical application of the Interval Scheduling algorithm, which organizes deliveries prioritizing those with closer end times.",
      handleButton: handleEntregai
    },
    {
      img: bdLogo,
      title: "Database Project",
      description: "Database project developed for a buffet company, including an Entity-Relationship diagram, a logical model and SQL queries.",
      handleButton: handleBD
    }
  ];

  return (
    <StyledProjects>
      <Container id="projects" maxWidth="lg">
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          width: '100%'
        }}>
          <Typography 
            color="secondary.main" 
            variant="h1" 
            textAlign="center" 
            pb={10}
            sx={{ width: '100%' }}
          >
            My Projects
          </Typography>
          
          <Carousel  
            navButtonsAlwaysVisible={true} 
            animation="slide" 
            duration={800} 
            interval={5000}
            sx={{ 
              maxWidth: '800px', 
              width: '100%',     
              margin: '0 auto'
            }}
            fullHeightHover={false}
            swipe={true}
          >
            {
              projectsData.map((project, index) => (
                <ProjectItem 
                  key={index} 
                  project={project} 
                  ProjectImage={ProjectImage} 
                  ContentBox={ContentBox} 
                  StyledProjectBox={StyledProjectBox} 
                />
              ))
            }
          </Carousel>
        </Box>
      </Container>
    </StyledProjects>
  );
};

export default Projects;