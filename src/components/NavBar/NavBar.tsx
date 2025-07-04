import { AppBar, MenuItem, styled, Toolbar, Typography } from "@mui/material"
import theme from "../../theme"

const NavBar = () => {
  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    justifyContent: "space-evenly",
    width: "100%",
    alignItems: "center",
    color: theme.palette.secondary.light,
  }))

  const StyledMenuItem = styled(MenuItem)({
    padding: "16px 24px",
    width: "100%",
    justifyContent: "center",
    '&:hover': {
      backgroundColor: theme.palette.primary.light
    }
  })

  // Função utilitária para scroll suave
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <AppBar position="absolute">
      <StyledToolbar>
        <StyledMenuItem onClick={() => scrollToSection("about")}>
          <Typography variant="h6">About</Typography>
        </StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection("skills")}>
          <Typography variant="h6">Skills</Typography>
        </StyledMenuItem>
        <StyledMenuItem onClick={() => scrollToSection("projects")}>
          <Typography variant="h6">Projects</Typography>
        </StyledMenuItem>
      </StyledToolbar>
    </AppBar>
  )
}

export default NavBar