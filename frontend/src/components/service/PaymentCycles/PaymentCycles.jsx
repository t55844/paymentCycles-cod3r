import React from "react";
import '../../service/service.css'
import ContentBox from "../ContentBox";
import ContentHeader from "../ContentHeader";
import Tab from "./Tab/Tab";


export default props => {
    return (
        <div className="service-container">
            <ContentHeader title='PaymentCycles' subtitle='Cadastro' />
            <ContentBox>
                <Tab />
            </ContentBox>
        </div>
    )
}