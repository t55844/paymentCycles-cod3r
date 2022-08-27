import React, { useState } from "react";
import MenuList from "./MenuList/MenuList";
import MenuItem from "./MenuList/MenuItem";
import './Sidebar.css'


export default props => {
    const [menuItemClick, setMenuItemClick] = useState('none')
    const [linkDashboard, setLinkDashboard] = useState('#344a86')
    const [linkCadastro, setLinkCadastro] = useState('#344a86')
    const [linkEnter, setLinkEnter] = useState('#344a86')


    function menuItemClickAction(target) {
        if (target === 'Dashboard' || target === 'Enter') {
            setMenuItemClick('none')
            return
        }
        if (menuItemClick === 'none') {
            setMenuItemClick('flex')
        } else {
            setMenuItemClick('none')
        }
    }
    function linkActionClick(target) {
        if (target === 'Dashboard') {
            setLinkDashboard('#154076')
            setLinkCadastro('#344A86')
            setLinkEnter('#344A86')
        }
        if (target === 'Cadastro') {
            setLinkCadastro('#154076')
            setLinkDashboard('#344A86')
            setLinkEnter('#344A86')
        }
        if (target === 'Enter') {
            setLinkEnter('#154076')
            setLinkCadastro('#344A86')
            setLinkDashboard('#344A86')
        }
    }
    function actionClick(target) {
        menuItemClickAction(target)
        linkActionClick(target)
    }
    return (
        <nav className={`${props.actionSidebar}`} >
            <MenuList>
                <MenuItem
                    actionClick={actionClick}
                    linkActive={linkEnter}
                    pathMenu='/'
                    iconMenu={"https://img.icons8.com/ios/50/000000/test-account.png"}
                    labelMenu='Enter'

                />
                <MenuItem
                    actionClick={actionClick}
                    linkActive={linkDashboard}
                    pathMenu='/Dashboard'
                    iconMenu={"https://img.icons8.com/external-outline-stroke-bomsymbols-/91/000000/external-dashboard-business-marketing-outline-set-2-outline-stroke-bomsymbols-.png"}
                    labelMenu='Dashboard'

                />
                <MenuItem
                    actionClick={actionClick}
                    linkActive={linkCadastro}
                    iconMenu={"https://img.icons8.com/material/24/000000/approximately-equal-2--v1.png"}
                    labelMenu='Cadastro'
                    pathSubmenu='/PaymentCycles'
                    iconSubmenu={"https://img.icons8.com/material-outlined/24/000000/us-dollar--v1.png"}
                    labelSubmenu='Ciclos de pagamento'
                    submenuShow={menuItemClick}
                />
            </MenuList>
        </nav>
    )
}