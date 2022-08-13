import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import './Tab.css'
import TabHeader from "../../../templates/tabs/TabHeader/TabHeader";
import TabContent from "../../../templates/tabs/TabContent/TabContent";
import { showTab, setTabOnNow } from "../../../../globalState/tab/actionTab";
import If from "../../../helpHandlers/If";
import List from "../List/List";
import Form from "../Form/Form"
import { createOnDatabase, tabHeaderSelected } from "./functionsTab";
import { postState } from "../../../../globalState/fetched/actionFetched";


const Tab = props => {
    const [tabTarget, setTabTarget] = useState('')

    const [lista, setLista] = useState('')
    const [incluir, setIncluir] = useState('')
    const [alterar, setAlterar] = useState('')
    const [excluir, setExcluir] = useState('')
    const postToPaymentCycles = createOnDatabase(props.postState)

    useEffect(() => {
        const target = tabTarget
        tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir)
        props.setTabOnNow(target)
    }, [tabTarget])

    useEffect(() => {
        if (props.post === 'success') {
            tabHeaderSelected('Listar', setLista, setIncluir, setAlterar, setExcluir)
            setTabTarget('Listar')
        }
    }, [props.post])

    useEffect(() => {
        props.showTab('Listar', 'Incluir',)
        tabHeaderSelected('Listar', setLista, setIncluir, setAlterar, setExcluir)
        setTabTarget('Listar')
    }, [])



    return (
        <div className="tab-container">
            <ul className="tabs-headers">
                <If test={props.tabsShowed['Listar']}><TabHeader cssActive={lista} title='Listar' tabTarget={setTabTarget} /></If>
                <If test={props.tabsShowed['Incluir']}><TabHeader cssActive={incluir} title='Incluir' tabTarget={setTabTarget} /></If>
                <If test={props.tabsShowed['Alterar']}><TabHeader cssActive={alterar} title='Alterar' tabTarget={setTabTarget} /></If>
                <If test={props.tabsShowed['Excluir']}><TabHeader cssActive={excluir} title='Excluir' tabTarget={setTabTarget} /></If>
            </ul>
            <TabContent css={props.tabTarget === 'Listar' ? "" : 'none'}><List /></TabContent>
            <TabContent css={props.tabTarget === 'Incluir' ? "" : 'none'}><Form onSubmit={postToPaymentCycles} /></TabContent>
            <TabContent css={props.tabTarget === 'Alterar' ? "" : 'none'}>Alterar</TabContent>
            <TabContent css={props.tabTarget === 'Excluir' ? "" : 'none'}>Excluir</TabContent>
        </div>
    )
}

const mapStateToProps = state => ({
    tabsShowed: state.tab.tabsShowed,
    tabTarget: state.tab.tabTarget,
    post: state.fetched.post
})

const mapDispatchToProps = dispatch => bindActionCreators({ showTab, setTabOnNow, postState }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)