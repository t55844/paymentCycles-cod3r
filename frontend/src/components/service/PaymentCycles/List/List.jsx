import React, { useEffect } from "react";

import './List.css'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getList, setCycleToExclude } from "../../../../globalState/paymentCycles/actionPaymentCycles";
import Button from "../../../templates/Button/Button";
import { excludeCycle } from "./functionsList";
import { setTabOnNow, showTab } from "../../../../globalState/tab/actionTab";
import { postState } from "../../../../globalState/fetched/actionFetched";

const List = props => {
    const actionExclude = excludeCycle(props.showTab, props.setTabOnNow, props.setCycleToExclude, props.postState)

    useEffect(() => {
        props.getList()
    }, [])

    function renderRows() {
        return props.list.map(cycle => (
            <tr key={cycle._id}>
                <td>{cycle.name}</td>
                <td>{cycle.month}</td>
                <td>{cycle.year}</td>
                <td>
                    <Button name='Excluir' css='#a62c2b' target={cycle} onClickAction={actionExclude} />
                </td>
            </tr>
        ))
    }
    return (
        <div className="list-container">
            <h2 className="list-title">
                Lista de Ciclos de pagamento
            </h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                    </tr>
                    <tr>
                        <th>Mes</th>
                    </tr>
                    <tr>
                        <th>Ano</th>
                    </tr>
                    <tr>
                        <th>Excluir</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({ list: state.paymentCycles.list })

const mapDispatchToProps = dispatch => bindActionCreators({ getList, showTab, setTabOnNow, setCycleToExclude, postState }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(List)