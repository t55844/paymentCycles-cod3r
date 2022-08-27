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

function App() {
  const [actionsSidebar, setActionsSidebar] = useState('sidebar')

  return (
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
      <ToastContainer
        autoClose={5000}
        pauseOnHover />
    </div>
  );
}

export default App;
