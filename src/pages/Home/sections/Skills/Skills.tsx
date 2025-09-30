import { Container, Grid, styled, Typography } from "@mui/material";
import sqlIcon from '../../../../assets/images/servidor-sql.png';
import mysqlIcon from '../../../../assets/images/mysql.png';
import cIcon from '../../../../assets/images/c-program-icon.png';
import gitIcon from '../../../../assets/images/git.png';
import reactIcon from '../../../../assets/images/biblioteca.png';
import typescriptIcon from '../../../../assets/images/typescript.png';
import dataModelingIcon from '../../../../assets/images/armazenamento-de-banco-de-dados.png';
import LinuxIcon from '../../../../assets/images/linux.png';
import figmaIcon from '../../../../assets/images/figma.png';


const Skills = () => {
    const StyledSkills = styled("div")(({ theme }) => ({
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
    }));

    const StyledIcon = styled("img")(({theme}) => ({   
        [theme.breakpoints.up('xs')]: {
            width: "80px",
        },
        [theme.breakpoints.up('md')]: {
            width: "100px",
        },
    }));

    return (
        <>
            <StyledSkills>
                <Container id="skills" maxWidth="lg">
                    <Grid container spacing={1}>
                        <Grid item xs={12}>
                            <Typography color="primary.main" variant="h1" textAlign="center" pb={10}>My skills</Typography>
                        </Grid>
                        <Grid item xs={12} container display="flex" justifyContent="center" spacing={3}>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={sqlIcon} />
                                <Typography color="primary.dark" variant="h6">SQL</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={mysqlIcon} />
                                <Typography color="primary.dark" variant="h6">MySQL</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={cIcon} />
                                <Typography color="primary.dark" variant="h6">C</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center"  gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={gitIcon} />
                                <Typography color="primary.dark" variant="h6">Git</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={reactIcon} />
                                <Typography color="primary.dark" variant="h6">React</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={typescriptIcon} />
                                <Typography color="primary.dark" variant="h6">TypeScript</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={dataModelingIcon} />
                                <Typography color="primary.dark" variant="h6">Data Modeling</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={LinuxIcon} />
                                <Typography color="primary.dark" variant="h6">Linux</Typography>
                            </Grid>
                            <Grid item xs={12} md={3} display="flex" justifyContent="center" alignItems="center" gap={2} paddingBottom={7}  sx={{ flexDirection: 'column' }}>
                                <StyledIcon src={figmaIcon} />
                                <Typography color="primary.dark" variant="h6">Figma</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </StyledSkills>
        </>
    );
};

export default Skills;