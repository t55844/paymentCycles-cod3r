import React, { useEffect } from "react";

import './List.css'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getList, setCycleSelected } from "../../../../globalState/paymentCycles/actionPaymentCycles";
import Button from "../../../templates/Button/Button";
import { setTabOnNow, showTab } from "../../../../globalState/tab/actionTab";
import { deletedState, postState } from "../../../../globalState/fetched/actionFetched";
import { deleteCycle, toUpdateCycle } from './functionsList'

const List = props => {
    const { email, token } = props.user

    const actionDelete = deleteCycle(props.deletedState, token)
    const actionUpdate = toUpdateCycle(props.showTab, props.setTabOnNow, props.setCycleSelected)
    useEffect(() => {
        props.getList(email, token)
    }, [])

    function renderRows() {
        if (props.list.length) {
            return props.list.map(cycle => (
                <tr key={cycle._id}>
                    <td>{cycle.name}</td>
                    <td>{cycle.month}</td>
                    <td>{cycle.year}</td>
                    <td>
                        <Button name='Excluir' css='#a62c2b' target={cycle} onClickAction={actionDelete} />
                        <Button name='Alterar' css='#00b7d8' target={cycle} onClickAction={actionUpdate} />
                    </td>

                </tr>
            ))
        }
        return <tr><td style={{ width: '100%' }}>Nao foi encontrado nem um Item, tente entrar em sua conta</td></tr>
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
                        <th>A????es</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.paymentCycles.list,
    user: state.auth.user,
})

const mapDispatchToProps = dispatch => bindActionCreators({ deletedState, getList, setTabOnNow, setCycleSelected, postState, showTab, }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(List)