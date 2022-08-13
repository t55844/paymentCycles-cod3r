import React from "react";

import './TabContent.css'

export default props => {
    return (
        <div className="tabcontent" style={{ display: `${props.css}` }}>{props.children}</div>
    )
}