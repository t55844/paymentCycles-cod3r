import React from "react";

import './TabContent.css'

export default props => {
    return (
        <div className="tabcontent">{props.children}</div>
    )
}