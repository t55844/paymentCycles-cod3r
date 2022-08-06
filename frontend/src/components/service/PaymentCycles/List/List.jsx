import React, { useEffect } from "react";

import './List.css'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import { getList } from "../../../../globalState/paymentCycles/actionPaymentCycles";

const List = props => {
    useEffect(() => {
        props.getList()
    }, [])

    function renderRows() {
        return props.list.map(cycle => (
            <tr key={cycle._id}>
                <td>{cycle.name}</td>
                <td>{cycle.month}</td>
                <td>{cycle.year}</td>
            </tr>
        ))
    }
    return (
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
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.paymentCycles.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getList }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps)(List)