import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components"

const drawerWidth = 280;

export const JournalLayout = ({children}) => {
  return (
    <Box sx={{display: 'flex'}}>
        {/* NavBar */}
        <NavBar drawerWidth={drawerWidth}/>
        {/* SideBar */}
        <SideBar drawerWidth={drawerWidth}/>

        <Box 
            component='main'
            sx={{ flexGrow: 1, p: 2}}
        >

            {/* ToolBar */}
            <Toolbar/>
            {children}

        </Box>
    </Box>
  )
}
