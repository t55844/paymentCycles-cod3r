import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import './MenuItem.css'

export default props => {
    const [linkActive, setLinkActive] = useState('#344a86')
    function linkActionClick() {
        if (linkActive == '#344a86') {
            setLinkActive('#154076')
        } else {
            setLinkActive('#344a86')
        }
    }
    return (
        <li className="menu-item">
            <div
                style={{ backgroundColor: `${linkActive}` }}
                onClick={() => {
                    props.actionClick()
                    linkActionClick()
                }}>
                <img src={`${props.iconMenu}`} alt="" /><Link to={`${props.pathMenu}`}>{props.labelMenu}</Link>
            </div>
            <div className="submenu" style={{ display: `${props.submenuShow}` }}>
                <a href={props.pathSubmenu}>
                    <img src={`${props.iconSubmenu}`} alt="" /><Link to={`${props.pathSubmenu}`}>{props.labelSubmenu}</Link>
                </a>
            </div>
        </li >
    )
}