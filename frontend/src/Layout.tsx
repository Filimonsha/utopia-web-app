import SidebarMenu from "./modules/sidebar-menu/SidebarMenu";
import {Outlet} from "react-router-dom";
import {Box, Stack} from "@mui/material";
import back from "./images/backg1.jpg"

const Layout = () => {

    return (
        <Stack direction="row" sx={{height:"100vh"}}>
            <SidebarMenu />
            <Box p={0} sx={{width:"100%",background:`url(${back})`}}>
                <Outlet/>
            </Box>
        </Stack>
    );
};

export default Layout;
