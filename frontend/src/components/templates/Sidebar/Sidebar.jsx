import React, { useState } from "react";
import MenuList from "./MenuList/MenuList";
import MenuItem from "./MenuList/MenuItem";
import './Sidebar.css'


export default props => {
    const [menuItemClick, setMenuItemClick] = useState('none')

    function menuItemClickAction() {
        if (menuItemClick == 'none') {
            setMenuItemClick('flex')
        } else {
            setMenuItemClick('none')
        }
    }
    return (
        <nav className={`${props.actionSidebar}`} >
            <MenuList>
                <MenuItem
                    pathMenu='#'
                    iconMenu={"https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-dashboard-business-marketing-outline-set-2-outline-stroke-bomsymbols-.png"}
                    labelMenu='Dashboard'

                />
                <MenuItem
                    actionClick={menuItemClickAction}
                    pathMenu=''
                    iconMenu={"https://img.icons8.com/material/24/000000/approximately-equal-2--v1.png"}
                    labelMenu='Cadastro'
                    pathSubmenu='#paymentCycles'
                    iconSubmenu={"https://img.icons8.com/material-outlined/24/000000/us-dollar--v1.png"}
                    labelSubmenu='Ciclos de pagamento'
                    submenuShow={menuItemClick}
                />
            </MenuList>
        </nav>
    )
}