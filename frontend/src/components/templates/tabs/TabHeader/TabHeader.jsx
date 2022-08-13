import React from "react";
import './TabHeader.css'

export default props => {
    return (
        <div className={`tabheader`}
            style={{ opacity: ` ${props.cssActive || ''} ` }}
            onClick={(e) => props.tabTarget(e.currentTarget.textContent)}>
            {props.title}
        </div>
    )
}