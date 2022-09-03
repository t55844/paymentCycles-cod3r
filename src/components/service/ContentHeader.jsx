import React from "react";
import '../service/service.css'

export default props => {
    return (
        <div className="title-container">
            <h2 >{props.title}</h2>
            <h3 >{props.subtitle}</h3>
        </div>
    )
}