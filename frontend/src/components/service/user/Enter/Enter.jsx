import React from "react";
import { connect } from "react-redux";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

const Enter = props => {
    return (
        <div>
            <Signup />
            <Login />
        </div>
    )
}

const mapStateToProps = state => ({
    signup: state.fetched.signup,
})


export default connect(
    mapStateToProps,
)(Enter)