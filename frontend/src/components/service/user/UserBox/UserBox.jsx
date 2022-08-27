import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../../../../globalState/auth/actionAuth'
import './UserBox.css'
import If from '../../../helpHandlers/If'

const UserBox = props => {
    const name = props.user ? props.user.name : ''
    const email = props.user ? props.user.email : ''
    return (
        <If test={props.user !== null}>
            <div className="userbox-container">
                <div className="perfil-image"></div>
                <h2 className="perfil-name">{name}</h2>
                <p className="perfil-email">{email}</p>
                <button onClick={() => props.logout()} className="button-logout">logout</button>
            </div>
        </If>
    )
}

const mapStateToProps = state => ({ user: state.auth.user })
const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(UserBox)