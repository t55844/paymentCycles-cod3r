import React from "react";
import './Button.css'

export default props => {
    return (
        <button
            className="button"
            style={{ backgroundColor: `${props.css}` }}
            onClick={() => props.onClickAction(props.target)}
        >{props.name}</button>
    )
}