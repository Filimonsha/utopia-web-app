import {FC} from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/const";
import {Menu, MenuItem, Sidebar, sidebarClasses, SubMenu} from "react-pro-sidebar";

interface ISidebarMenuProps {

}

const SidebarMenu: FC<ISidebarMenuProps> = ({}) => {

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
            component: (label:string) => <Link to={ROUTES.ORGANIZATION_OF_WORK}>{label}</Link>
        }]
    }]

    return (
        <Sidebar rootStyles={{
            [`.${sidebarClasses.container}`]:{

            }
        }}>
            <Menu>
                {menuItems.map(item =>
                    item.submenu
                        ? <SubMenu label={item.label}>
                            {
                                item.submenu.map(subItem => <MenuItem>{subItem.component(subItem.label)}</MenuItem>)
                            }
                        </SubMenu>
                        : <SubMenu>{item.label}</SubMenu>
                )}
            </Menu>
        </Sidebar>
    );
};

export default SidebarMenu;
