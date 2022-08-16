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
    const patchToPaymentCycles = updateOnDatabase(props.patchState)

    function tabTarget(target) {
        props.setTabOnNow(target)
        tabHeaderSelected(target, setLista, setIncluir, setAlterar, setExcluir)
    }

    useEffect(() => {
        const target = props.tabTarget
        tabTarget(target)
    }, [props.tabTarget])

    useEffect(() => {
        if (props.patch === 'success') {
            props.showTab('Listar', 'Incluir',)
            tabTarget('Listar')
            props.getList()
            props.patchState('failed')
        }
    }, [props.patch])
    useEffect(() => {
        if (props.post === 'success') {
            props.showTab('Listar', 'Incluir',)
            tabTarget('Listar')
        }
    }, [props.post])

    useEffect(() => {
        if (props.deleted === 'success') {
            tabTarget('Listar')
            props.getList()
            props.deletedState('failed')
        }
    }, [props.deleted])

    useEffect(() => {
        props.showTab('Listar', 'Incluir',)
        props.setTabOnNow('Listar')
    }, [])
    return (
        <div className="tab-container">
            <ul className="tabs-headers">
                <If test={props.tabsShowed['Listar']}><TabHeader cssActive={lista} title='Listar' tabTarget={tabTarget} /></If>
                <If test={props.tabsShowed['Incluir']}><TabHeader cssActive={incluir} title='Incluir' tabTarget={tabTarget} /></If>
                <If test={props.tabsShowed['Alterar']}><TabHeader cssActive={alterar} title='Alterar' tabTarget={tabTarget} /></If>
                <If test={props.tabsShowed['Excluir']}><TabHeader cssActive={excluir} title='Excluir' tabTarget={tabTarget} /></If>
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
                    <Form cycle={props.cycleToExclude} onSubmit={patchToPaymentCycles} />
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
    cycleToExclude: state.paymentCycles.cycleToExclude
})

const mapDispatchToProps = dispatch => bindActionCreators({ deletedState, showTab, setTabOnNow, postState, patchState, getList }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)