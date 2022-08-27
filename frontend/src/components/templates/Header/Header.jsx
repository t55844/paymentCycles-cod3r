import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserBox from "../../service/user/UserBox/UserBox";

import './Header.css'

import toggle from "./toggle";

export default props => {
    const [visibleElement, setVisibleElement] = useState('flex')
    const [hideElement, setHideElement] = useState('none')
    const [mainHeader, setMainHeader] = useState('main-header')

    function hideButton() {
        setHideElement('none')
        setVisibleElement('flex')
        setMainHeader('main-header')
        props.actionSidebar('sidebar')

    }
    function visibleButton() {
        setHideElement('flex')
        setVisibleElement('none')
        setMainHeader('main-header--hide')
        props.actionSidebar('sidebar--out')

    }


    return (
        <div className="header-container">
            <header className={`${mainHeader}`}>
                <div className="logo">
                    <Link to='/'>
                        <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-cash-bill-and-payment-method-xnimrodx-lineal-xnimrodx-3.png" />
                        <span className={`logo-text `} style={{ display: `${visibleElement}` }}><strong>My</strong> Money</span>
                        <span className={`logo-text `} style={{ display: `${hideElement}` }}><strong>My</strong> M</span>
                    </Link>
                </div>
            </header>
            <button
                className={`toggle`}
                style={{ display: `${visibleElement}` }}
                onClick={() => visibleButton()}>{toggle}
            </button>
            <button
                className={`toggle `}
                style={{ display: `${hideElement}` }}
                onClick={() => hideButton()}>{toggle}
            </button>

            <UserBox />
        </div >
    )
}