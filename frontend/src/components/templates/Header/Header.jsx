import React from "react";
import { useState } from "react";

import './Header.css'
import toggle from "./toggle";

export default props => {
    const [visibleElement, setVisibleElement] = useState('flex')
    const [hideElement, setHideElement] = useState('none')
    const [sidebarOut, setSidebarOut] = useState('translateX(0px)')
    const [mainHeader, setMainHeader] = useState('24%')

    function hideButton() {
        setHideElement('none')
        setVisibleElement('flex')
        setSidebarOut('translateX(0px)')
        setMainHeader('24%')

    }
    function visibleButton() {
        setHideElement('flex')
        setVisibleElement('none')
        setSidebarOut('translateX(-300px)')
        setMainHeader('16%')

    }

    return (
        <div className="header-container">
            <header className={`main-header`} style={{ width: `${mainHeader}` }}>
                <a href="" className="logo">
                    <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-cash-bill-and-payment-method-xnimrodx-lineal-xnimrodx-3.png" />
                    <span className={`logo-text `} style={{ display: `${visibleElement}` }}><strong>My</strong> Money</span>
                    <span className={`logo-text `} style={{ display: `${hideElement}` }}><strong>My</strong> M</span>
                </a>
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

            </header>
            <nav className="navbar">
                <div className="sidebar" style={{ transform: `${sidebarOut}` }}> </div>
            </nav >
        </div >
    )
}