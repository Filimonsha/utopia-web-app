import {FC, useState} from 'react';
import {Link} from "react-router-dom";
import {FAMILY_ATTACHMENT, INSTITUTES, REPORTS, SITUATION_MONITORING} from "../../routes/const";
import {Menu, menuClasses, MenuItem, MenuItemStyles, Sidebar, sidebarClasses, SubMenu} from "react-pro-sidebar";
import {Box, Stack, Typography} from "@mui/material";
import OrganizationOfWorkIcon from "../../icons/OrganizationOfWorkIcon";

interface ISidebarMenuProps {

}

const SidebarLogo = () => {
    return <Stack p={4} alignItems="center" spacing={2} direction="row">
        <Typography>
            UtopiaCRM
        </Typography>
    </Stack>
}
const SidebarMenu: FC<ISidebarMenuProps> = ({}) => {
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

    const handleSubMenuToggle = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };
    const menuItems: Array<{
        label: string,
        submenu?: Array<{
            label: string,
            component: any
        }>
    }> = [{
        label: "Organization of work",
        submenu: [{
            label: "Your families",
            component: (label: string) => <Link to={FAMILY_ATTACHMENT}>{label}</Link>
        }]
    }, {
        label: "Political management",
        submenu: [{
            label: "Situation monitoring",
            component: (label: string) => <Link to={SITUATION_MONITORING}>{label}</Link>
        }]
    }, {
        label: "Reports",
        submenu: [{
            label: "Situation monitoring",
            component: (label: string) => <Link to={REPORTS}>{label}</Link>
        }]
    },
    ]
    const createMenuItemStyles = (): MenuItemStyles => ({
        root: {
            fontSize: '13px',
            fontWeight: 400,
            borderRadius: "10px",
            backgroundColor: "white",
        },
        SubMenuExpandIcon: {
            color: '#b6b7b9',
        },
        subMenuContent: ({level}) => ({
            // ...(isSubMenuOpen ? {
            //     borderRadius: "40px",
            //     borderTopLeftRadius: "0px",
            //     borderTopRightRadius: "0px"
            // } : {}),
            // border: "20px solid white",
            // borderTop: "none",
            backgroundColor: "white",
        }),
        button: {
            [`&.${menuClasses.disabled}`]: {
                color: "black"
            },
            '&:hover': {
                // backgroundColor: "gray",
            },
        },
        label: ({open}) => ({
            fontWeight: open ? 600 : undefined,
        }),
    });

    return (
        <Box p={3}>
            <Sidebar rootStyles={{
                [`.${sidebarClasses.container}`]: {}
            }}>
                <SidebarLogo/>
                <Menu menuItemStyles={createMenuItemStyles()}>
                    {menuItems.map(item =>
                        <SubMenu
                            key={item.label}
                            icon={<OrganizationOfWorkIcon/>}
                            label={item.label}
                            onOpenChange={handleSubMenuToggle}
                            open={isSubMenuOpen}
                        >
                            {
                                item.submenu
                                    ?
                                    item.submenu.map(subItem => <MenuItem>{subItem.component(subItem.label)}</MenuItem>)
                                    : item.label
                            }
                        </SubMenu>
                    )}
                </Menu>
            </Sidebar>
        </Box>
    );
};

export default SidebarMenu;
