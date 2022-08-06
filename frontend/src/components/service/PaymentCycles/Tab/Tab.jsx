import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";

import './Tab.css'
import TabHeader from "../../../templates/tabs/TabHeader/TabHeader";
import TabContent from "../../../templates/tabs/TabContent/TabContent";
import { showTab } from "../../../../globalState/tab/actionTab";


const Tab = props => {
    const [tabTarget, setTabTarget] = useState('Lista')
    const [tabSelected, setTabSelected] = useState(<TabContent>Lista</TabContent>)

    const [lista, setLista] = useState('')
    const [incluir, setIncluir] = useState('')
    const [alterar, setAlterar] = useState('')
    const [excluir, setExcluir] = useState('')

    function tabHeaderSelected(target) {
        if (target === 'Lista') { setLista('1'); setIncluir(''); setAlterar(''); setExcluir(''); }
        if (target === 'Incluir') { setLista(''); setIncluir('1'); setAlterar(''); setExcluir(''); }
        if (target === 'Alterar') { setLista(''); setIncluir(''); setAlterar('1'); setExcluir(''); }
        if (target === 'Excluir') { setLista(''); setIncluir(''); setAlterar(''); setExcluir('1'); }
    }

    function tabContentSelected(target) {
        if (target === 'Lista') setTabSelected(<TabContent>Lista</TabContent>)
        if (target === 'Incluir') setTabSelected(<TabContent>Incluir</TabContent>)
        if (target === 'Alterar') setTabSelected(<TabContent>Alterar</TabContent>)
        if (target === 'Excluir') setTabSelected(<TabContent>Excluir</TabContent>)
    }

    useEffect(() => { props.showTab('List', 'Incluir') }, [])

    useEffect(() => {
        const target = tabTarget
        tabHeaderSelected(target)
        tabContentSelected(target)
    }, [tabTarget])

    return (
        <div className="tab-container">
            <ul className="tabs-headers">
                <TabHeader cssActive={lista} title='Lista' tabTarget={setTabTarget} />
                <TabHeader cssActive={incluir} title='Incluir' tabTarget={setTabTarget} />
                <TabHeader cssActive={alterar} title='Alterar' tabTarget={setTabTarget} />
                <TabHeader cssActive={excluir} title='Excluir' tabTarget={setTabTarget} />
            </ul>
            {tabSelected}
        </div>
    )
}

const mapStateToProps = state => ({ tabsShowed: state.tab.tabsShowed })
const mapDispatchToProps = dispatch => bindActionCreators({ showTab }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tab)