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
})


export default connect(
  mapStateToProps,
)(App)

