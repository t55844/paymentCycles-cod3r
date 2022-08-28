import React from "react";
import { useForm } from "react-hook-form";

import '../../Form/Form.css'
import '../Enter/Enter.css'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loginState } from "../../../../globalState/fetched/actionFetched";
import { loginAuth } from "../../../../globalState/auth/actionAuth";
import { checkFeatch, requisitionStructure } from "../../../helpHandlers/featchHellper";


const Login = props => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    function bodyContructorToUser(data) {
        return {
            email: data.email,
            password: data.senha,
        }
    }
    async function login(data) {
        const body = bodyContructorToUser(data)
        const resp = await requisitionStructure('POST', body, 'Nao foi possivel registar sua conta', 'http://localhost:3003/oapi/login')
        const test = resp.name
        checkFeatch(resp, props.loginState, test, 'Voce acessou sua conta com sucesso', 'Erro nao foi possivel acessa sua conta')
        props.loginAuth(resp)
    }

    return (
        <form className="form" onSubmit={handleSubmit(login)}>
            <h2>Entre em sua conta aqui</h2>
            <div className="field-profile">
                <div className="field-box">
                    <label htmlFor="email">Email</label>
                    <input {...register("email", { required: true })} />
                    {errors.exampleRequired && <span>O email e necessario</span>}
                </div>
                <div className="field-box">
                    <label htmlFor="password">Senha</label>
                    <input type='password' {...register("senha", { required: true })} />
                    {errors.exampleRequired && <span>A senha e necessaria</span>}
                </div>
                <button className="enter-button" type="submit" >entrar</button>
            </div>
        </form>
    );
}
const mapStateToProps = state => ({
    tabsShowed: state.tab.tabsShowed,
    tabTarget: state.tab.tabTarget,
    post: state.fetched.post,
    deleted: state.fetched.deleted,
    patch: state.fetched.patch,
    cycleSelected: state.paymentCycles.cycleSelected,
})
const mapDispatchToProps = dispatch => bindActionCreators({ loginState, loginAuth }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)