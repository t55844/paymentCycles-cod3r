import React from "react";
import { useState } from "react";
import { connect } from "react-redux";
import If from "../../../helpHandlers/If";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import './Enter.css'
const Enter = props => {
    const [enterWindow, setEnterWindow] = useState('Login')
    return (
        <div className={props.login === 'failed' ? 'enter' : ''}>
            <If test={enterWindow === 'Login'}>
                <Login actionCadastreSe={setEnterWindow} />
            </If>
            <If test={enterWindow === 'Signup'}>
                <Signup actionEntrar={setEnterWindow} />
            </If>
        </div>
    )
}

const mapStateToProps = state => ({
    signup: state.fetched.signup,
    login: state.fetched.login,
})


export default connect(
    mapStateToProps,
)(Enter)