import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { connect } from 'react-redux'


import './Form.css'

const Form = props => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    useEffect(() => {
        if (props.post === 'success') {
            reset()
        }
    }, [props.post])
    function onSubmit(data) {
        props.onSubmit(data)
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
                    </div>
                </div>

            </div>
            <input className="form-button" type="submit" />
        </form>
    );
}

const mapStateToProps = state => ({ post: state.fetched.post })

export default connect(mapStateToProps)(Form)