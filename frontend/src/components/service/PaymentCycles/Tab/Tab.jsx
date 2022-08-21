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
import { createOnDatabase, tabHeaderSelected, updateOnDatabase } from "./functionsTab";
import { deletedState, patchState, postState } from "../../../../globalState/fetched/actionFetched";
import { getList } from "../../../../globalState/paymentCycles/actionPaymentCycles";


const Tab = props => {

    const [lista, setLista] = useState('')
    const [incluir, setIncluir] = useState('')
    const [alterar, setAlterar] = useState('')
    const [excluir, setExcluir] = useState('')
    const postToPaymentCycles = createOnDatabase(props.postState)
    const patchToPaymentCycles = updateOnDatabase(props.patchState, props.cycleSelected)

    function renderingInitialState(target) {
        props.setTabOnNow(target)
        tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir)
        props.getList()
        props.showTab('Listar', 'Incluir',)

    }
    function setTabTargetToView(target) {
        props.setTabOnNow(target)
        tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir)
    }

    useEffect(() => {
        const target = props.tabTarget
        setTabTargetToView(target)
    }, [props.tabTarget])

    useEffect(() => {
        if (props.patch === 'success') {
            renderingInitialState('Listar')
            props.patchState('failed')
        }
        else if (props.post === 'success') {
            renderingInitialState('Listar')
        }
        else if (props.deleted === 'success') {
            renderingInitialState('Listar')
            props.deletedState('failed')
        }
    }, [props.patch, props.post, props.deleted])

    useEffect(() => {
        renderingInitialState('Listar')
    }, [])
    return (
        <div className="tab-container">
            <ul className="tabs-headers">
                <If test={props.tabsShowed['Listar']}><TabHeader cssActive={lista} title='Listar' tabTarget={setTabTargetToView} /></If>
                <If test={props.tabsShowed['Incluir']}><TabHeader cssActive={incluir} title='Incluir' tabTarget={setTabTargetToView} /></If>
                <If test={props.tabsShowed['Alterar']}><TabHeader cssActive={alterar} title='Alterar' tabTarget={setTabTargetToView} /></If>
                <If test={props.tabsShowed['Excluir']}><TabHeader cssActive={excluir} title='Excluir' tabTarget={setTabTargetToView} /></If>
            </ul>
            <If test={props.tabsShowed['Listar']}>
                <TabContent css={props.tabTarget === 'Listar' ? "" : 'none'}>
                    <List />
                </TabContent>
            </If>
            <If test={props.tabsShowed['Incluir']}>
                <TabContent css={props.tabTarget === 'Incluir' ? "" : 'none'}>
                    <Form cycle={''} onSubmit={postToPaymentCycles} />
                </TabContent>
            </If>
            <If test={props.tabsShowed['Alterar']}>
                <TabContent css={props.tabTarget === 'Alterar' ? "" : 'none'}>
                    <Form cycle={props.cycleSelected} onSubmit={patchToPaymentCycles} />
                </TabContent>
            </If>
            <If test={props.tabsShowed['Excluir']}>
                <TabContent css={props.tabTarget === 'Excluir' ? "" : 'none'}>
                </TabContent>
            </If>
        </div>
    )
}

const mapStateToProps = state => ({
    tabsShowed: state.tab.tabsShowed,
    tabTarget: state.tab.tabTarget,
    post: state.fetched.post,
    deleted: state.fetched.deleted,
    patch: state.fetched.patch,
    cycleSelected: state.paymentCycles.cycleSelected
})

const mapDispatchToProps = dispatch => bindActionCreators({ deletedState, showTab, setTabOnNow, postState, patchState, getList }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)