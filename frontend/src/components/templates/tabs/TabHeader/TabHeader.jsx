import React from "react";
import './TabHeader.css'

export default props => {
    return (
        <div className="tabheader">
            {props.children}
        </div>
    )
}