import { AppBar, MenuItem, styled, Toolbar, Typography } from "@mui/material"

const NavBar = () => {
    const StyledToolbar = styled(Toolbar)(({theme})=> ({
       display: "flex",
       justifyContent: "space-evenly",
       color: theme.palette.secondary.light
    }))

    return (
      <>
        <AppBar position="absolute">
            <StyledToolbar>
                <MenuItem>
                    <Typography variant="h6">About</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="h6">Skills</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="h6">Projects</Typography>
                </MenuItem>
            </StyledToolbar>
        </AppBar>
      </>
    )
  }
  
  export default NavBar