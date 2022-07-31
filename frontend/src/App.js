import { useState } from 'react';
import './App.css';
import Footer from './components/templates/Footer/Footer';
import Header from './components/templates/Header/Header';
import Sidebar from './components/templates/Sidebar/Sidebar';

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
          --------------------------------------------------------------------------------------------------------
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
