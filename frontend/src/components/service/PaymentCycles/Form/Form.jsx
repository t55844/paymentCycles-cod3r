import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'
import { bindActionCreators } from "redux";
import { postState } from "../../../../globalState/fetched/actionFetched";
import { editCycle, excludeCycle, getList } from "../../../../globalState/paymentCycles/actionPaymentCycles";
import { setTabOnNow, showTab } from "../../../../globalState/tab/actionTab";
import If from "../../../helpHandlers/If";


import './Form.css'
const Form = props => {
    const [countToCurrentCycle, setCountToCurrentCycle] = useState(0)
    function resetForm() {
        props.getList()
        reset()
        props.setTabOnNow('Listar')
        props.postState('failed')

    }

    const limiterCount = props.cycle.credits ? props.cycle.credits.length : 0


    const preloadedValues = () => {

        if (props.cycle.credits.length === 0) {
            return props.cycle ? {
                _id: '',
                nome: '',
                mes: '',
                ano: '',
                creditoNome: '',
                creditoValor: '',
                debitoNome: '',
                debitoValor: '',
            } : ''
        }

        if (countToCurrentCycle === limiterCount) {
            return props.cycle ? {
                _id: props.cycle._id,
                nome: props.cycle.name,
                mes: props.cycle.month,
                ano: props.cycle.year,
                creditoNome: props.cycle.credits[0].name,
                creditoValor: props.cycle.credits[0].value,
                debitoNome: props.cycle.debts[0].name,
                debitoValor: props.cycle.debts[0].value,
            } : ''
        } else {
            return props.cycle ? {
                _id: props.cycle._id,
                nome: props.cycle.name,
                mes: props.cycle.month,
                ano: props.cycle.year,
                creditoNome: props.cycle.credits[countToCurrentCycle].name,
                creditoValor: props.cycle.credits[countToCurrentCycle].value,
                debitoNome: props.cycle.debts[countToCurrentCycle].name,
                debitoValor: props.cycle.debts[countToCurrentCycle].value,
            } : ''
        }
    }
    const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm(
        props.cycle ? { defaultValues: preloadedValues() } : ''
    )


    function selectCycleToEditOrCreate() {
        if (countToCurrentCycle === limiterCount) {
            setValue('creditoNome', '')
            setValue('creditoValor', '')
            setValue('debitoNome', '')
            setValue('debitoValor', '')
        } else {
            setValue('creditoNome', preloadedValues().creditoNome)
            setValue('creditoValor', preloadedValues().creditoValor)
            setValue('debitoNome', preloadedValues().debitoNome)
            setValue('debitoValor', preloadedValues().debitoValor)
        }
    }

    useEffect(() => {
        if (props.post === 'success') {
            resetForm()
        }
    }, [props.post])
    useEffect(() => {
        selectCycleToEditOrCreate()
    }, [countToCurrentCycle])

    function onSubmit(data) {
        if (props.tabTarget === 'Incluir') {
            props.onSubmit(data)
        } else {
            if (countToCurrentCycle === limiterCount) {
                props.onSubmit(data)
            } else {
                props.editCycle(props.cycle, countToCurrentCycle)
                props.onSubmit(data)
            }
        }
    }
    return (
        /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="form-title">Preencha o formulario para cadastrar um ciclo</h2>
            <div className="form-fields">

                <div className="field-profile">
                    <div className="field-box">
                        <label htmlFor="nome">Nome</label>
                        <input {...register("nome", { required: true })} />
                        {errors.nome && <span>O campo nome e necessario</span>}
                    </div>

                    <div className="field-box">
                        <label htmlFor="mes">Mes</label>
                        <input {...register("mes", { required: true })} />
                        {errors.mes && <span>O campo mes e necessario</span>}
                    </div>

                    <div className="field-box">
                        <label htmlFor="ano">Ano</label>
                        <input {...register("ano", { required: true })} />
                        {errors.ano && <span>O campo ano e necessario</span>}
                    </div>
                </div>
                <div className="field-transactions">
                    <div className="field-box">
                        <span className="cyclesCount">{limiterCount}cyclos</span>
                        <label htmlFor="">Credito Nome</label>
                        <input {...register("creditoNome", { required: true })} />
                        {errors.ano && <span>O nome do credito e necessario</span>}

                        <label htmlFor="">Credito Valor</label>
                        <input {...register("creditoValor", { required: true })} />
                        {errors.ano && <span>O valor do credito e necessario</span>}
                    </div>
                    <div className="field-box">

                        <label htmlFor="">Debito Nome</label>
                        <input {...register("debitoNome", { required: true })} />
                        {errors.ano && <span>O nome do debito e necessario</span>}

                        <label htmlFor="">Debito Valor</label>
                        <input {...register("debitoValor", { required: true })} />
                        {errors.ano && <span>O valor do debito e necessario</span>}

                        <label htmlFor="">Debito Estatus</label>
                        <input {...register("debitoEstato", { required: false })} />

                    </div>
                </div>

            </div>
            <div className="button-container">
                <input className="form-button" type="submit" />
                <button className="form-button" type="button"
                    onClick={() => {
                        props.setTabOnNow('Listar')
                        props.showTab('Listar', 'Incluir',)
                    }}
                >cancelar</button>

                <If test={props.tabTarget === 'Alterar'}>
                    <button className="form-button" type="button"
                        onClick={() => {
                            props.excludeCycle(true)
                            props.editCycle(props.cycle, countToCurrentCycle)
                            props.onSubmit(props.cycle)
                            props.setTabOnNow('Listar')
                            props.showTab('Listar', 'Incluir',)
                        }}
                    >excluir</button>
                    <div className="navigate-button">
                        <button className="form-button navigate" type="button"
                            onClick={() => {
                                if (countToCurrentCycle === 0) {
                                    setCountToCurrentCycle(0)
                                } else {
                                    setCountToCurrentCycle(countToCurrentCycle - 1)
                                }
                            }}
                        >anterior</button>

                        <button className="form-button navigate" type="button"
                            onClick={() => {
                                if (countToCurrentCycle === limiterCount) {
                                    setCountToCurrentCycle(0)
                                } else {
                                    setCountToCurrentCycle(countToCurrentCycle + 1)
                                }
                            }}
                        >proximo</button>

                    </div>

                </If>
            </div>
        </form >
    );
}

const mapStateToProps = state => ({
    post: state.fetched.post,
    tabTarget: state.tab.tabTarget
})

const mapDispatchToProps = dispatch => bindActionCreators({ showTab, setTabOnNow, getList, postState, editCycle, excludeCycle, }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form)