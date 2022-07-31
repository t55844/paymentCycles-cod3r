import React from "react";
import './MenuList.css'

export default props => {
    return (
        <ul className="menu-list">
            {props.children}
        </ul>
    )
}