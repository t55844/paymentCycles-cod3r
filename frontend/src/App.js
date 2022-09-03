import { useState } from 'react';
import './App.css';
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';


import Footer from './components/templates/Footer/Footer';
import Header from './components/templates/Header/Header';
import Sidebar from './components/templates/Sidebar/Sidebar';
import Dashboard from './components/service/Dashboard/Dashboard';
import PaymentCycles from './components/service/PaymentCycles/PaymentCycles';
import Enter from './components/service/user/Enter/Enter';
import If from './components/helpHandlers/If';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { validateToken } from './globalState/auth/actionAuth';

function App(props) {
  const [actionsSidebar, setActionsSidebar] = useState('sidebar')

  return (
    <>
      <If test={props.login === 'failed'}>
        <Enter />
      </If>
      <If test={props.login === 'success'}>
        <div className="App">
          <Header
            actionSidebar={setActionsSidebar}
          />
          <div className='main'>
            <Sidebar
              actionSidebar={actionsSidebar}
            />
            <div className='content'>
              <Routes>
                <Route path='/' element={<Enter />} />
                <Route path='/Dashboard' element={<Dashboard />} />
                <Route path='/PaymentCycles' element={<PaymentCycles />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </If>
      <ToastContainer
        autoClose={5000}
        pauseOnHover />
    </>
  );
}

const mapStateToProps = state => ({
  login: state.fetched.login,
  user: state.auth.user
})

const mapDispatchToProps = dispatch => bindActionCreators({ validateToken }, dispatch)


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

/**
 *       requisitionStructure(
        'POST',
        { token: userStorage.token },
        'Voce não esta logado, tente entrar ou criar sua conta',
        'http://localhost:3003/oapi//validateToken')
        .then(resp => {
          
          const test = resp.valid
          checkFeatch(resp, () => { }, test, 'Voce esta logado com sucesso', 'Voce não esta logado')
        })
 */