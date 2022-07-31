import React from "react";
import { Link } from "react-router-dom";
import './MenuItem.css'

export default props => {

    return (
        <li className="menu-item">
            <div
                style={{ backgroundColor: `${props.linkActive}` }}
                onClick={(e) => props.actionClick(e.target.text)}>
                <img src={`${props.iconMenu}`} alt="" /><Link to={`${props.pathMenu}`}>{props.labelMenu}</Link>
            </div>
            <div className="submenu" style={{ display: `${props.submenuShow}` }}>
                <div>
                    <img src={`${props.iconSubmenu}`} alt="" /><Link to={`${props.pathSubmenu}`}>{props.labelSubmenu}</Link>
                </div>
            </div>
        </li >
    )
}