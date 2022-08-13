import React from "react";
import './ValueBox.css'

export default props => {
    return (
        <div className="valuebox-container " style={{ backgroundColor: `${props.backgroundColor}` }}>
            <div className="valuebox-info">
                <h3>R$ {props.value},00</h3>
                <h4>{props.valueDescription}</h4>
            </div>
            <img src={props.icon} alt="" />
        </div>
    )
}