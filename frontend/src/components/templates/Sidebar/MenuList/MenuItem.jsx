import React from "react";
import { useState } from "react";
import './MenuItem.css'

export default props => {
    const [linkActive, setLinkActive] = useState('#344a86')
    function linkActionClick(e) {
        e.preventDefault()
        if (linkActive == '#344a86') {
            setLinkActive('#154076')
        } else {
            setLinkActive('#344a86')
        }
    }
    return (
        <li className="menu-item">
            <a
                href={`${props.pathMenu}`}
                style={{ backgroundColor: `${linkActive}` }}
                onClick={(e) => {
                    props.actionClick()
                    linkActionClick(e)
                }}>
                <img src={`${props.iconMenu}`} alt="" /><p>{props.labelMenu}</p>
            </a>
            <div className="submenu" style={{ display: `${props.submenuShow}` }}>
                <a href={props.pathSubmenu}>
                    <img src={`${props.iconSubmenu}`} alt="" /><p>{props.labelSubmenu}</p>
                </a>
            </div>
        </li >
    )
}