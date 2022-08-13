import React from "react";

import '../service/service.css'

export default props => {
    return (
        <div className={`service-content ${props.css || ''}`}>{props.children}</div>
    )
}