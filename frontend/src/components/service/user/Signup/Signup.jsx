import React from "react";
import { useForm } from "react-hook-form";

import '../../Form/Form.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signupState } from "../../../../globalState/fetched/actionFetched";
import { checkFeatch, requisitionStructure } from "../../../helpHandlers/featchHellper";

const Signup = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function bodyContructorToUser(data) {
        return {
            name: data.nome,
            email: data.email,
            password: data.senha,
            confirm_password: data.confirmeSenha
        }
    }
    async function signup(data) {
        const body = bodyContructorToUser(data)
        const resp = await requisitionStructure('POST', body, 'Nao foi possivel registar sua conta', 'http://localhost:3003/oapi/signup')
        const test = resp.ok === 'ok'
        checkFeatch(resp, props.signupState, test, 'Conta criada com sucesso', 'Erro nao foi possivel criar a conta')
    }

    return (
        <form className="form" onSubmit={handleSubmit(signup)}>
            <h2>Registre-se</h2>
            <div className="field-profile">
                <div className="field-box">
                    <label htmlFor="nome">Nome</label>
                    <input  {...register("nome", { require: true })} />
                    {errors.exampleRequired && <span>O nome e necessario</span>}
                </div>
                <div className="field-box">
                    <label htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} />
                    {errors.exampleRequired && <span>O email e necessario</span>}
                </div>
                <div className="field-box">
                    <label htmlFor="password">Senha</label>
                    <input type='password' {...register("senha", { required: true })} />
                    {errors.exampleRequired && <span>A senha e necessaria</span>}
                    <label htmlFor="confirmeSenha">Confirme a senha</label>
                    <input type='password' {...register("confirmeSenha", { required: true })} />
                    {errors.exampleRequired && <span>A senha e necessaria</span>}
                </div>
                <button className="enter-button" type="submit" >
                    registrar-se
                </button>
            </div>
        </form>
    );
}

const mapStateToProps = state => ({
    signup: state.fetched.signup,
})

const mapDispatchToProps = dispatch => bindActionCreators({ signupState }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)