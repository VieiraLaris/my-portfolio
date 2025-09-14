import { Container, Grid, styled, Typography } from "@mui/material"

const Footer = () => {
    const StyledFooter = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.secondary.main,
        display: "flex",
        alignItems: "top",
        [theme.breakpoints.up('xs')]: {
            paddingTop: "30px",
            height: "100%",
            paddingBottom: "30px"
        },
        [theme.breakpoints.up('md')]: {
            paddingTop: "50px",
            height: "100%",
            paddingBottom: "50px"
        },
    }))

    return (
      <>
        <StyledFooter>
            <Container maxWidth="lg">
                <Grid container display="flex" justifyContent="center">
                    <Typography color="primary.main">@ 2025 Larissa Vieira - All rights reserved</Typography>
                </Grid>
            </Container>
        </StyledFooter>
      </>
    )
  }
  
  export default Footer