import React from "react";

import './Tab.css'
import TabHeader from "../../../templates/tabs/TabHeader/TabHeader";
import TabContent from "../../../templates/tabs/TabContent/TabContent";

export default props => {
    return (
        <div className="tab-container">
            <div className="tabs-headers">
                <TabHeader>Lista</TabHeader>
                <TabHeader>Incluir</TabHeader>
                <TabHeader>Alterar</TabHeader>
                <TabHeader>Excluir</TabHeader>
            </div>
            <TabContent></TabContent>
        </div>
    )
}