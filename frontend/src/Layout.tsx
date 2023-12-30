import SidebarMenu from "./modules/sidebar-menu/SidebarMenu";
import {Outlet} from "react-router-dom";
import {Box, Stack} from "@mui/material";
import back from "./images/backg1.jpg"
import styled from "styled-components";

const AppLayoutContainer = styled(Stack)`
    --main-background: #FFFF;
    height: 100vh;
`

const MainContentContainer = styled(Box)`
    background-color: var(--main-background);
    border-radius: 12px;
`


const Layout = () => {

    return (
        <AppLayoutContainer direction="row">
            <SidebarMenu />
            <Stack sx={{width:"100%",background:`url(${back})`,padding:"30px"}}>
                <div>Header</div>
                <MainContentContainer>
                    <Outlet/>
                </MainContentContainer>
            </Stack>
        </AppLayoutContainer>
    );
};

export default Layout;
