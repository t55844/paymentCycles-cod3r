import React from "react";
import { connect } from "react-redux";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import './Enter.css'
const Enter = props => {
    return (
        <div className={props.login === 'failed' ? 'enter' : ''}>
            <Signup />
            <Login />
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