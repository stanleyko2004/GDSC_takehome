import React from 'react';
import './App.css';
import BottomFrame from './components/BottomFrame';
import Footer from './components/Footer';
import MiddleFrame from './components/MiddleFrame';
import Navbar from './components/Navbar';
import TopFrame from './components/TopFrame';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <div className='spacer'>
        <TopFrame />
      </div>
      <div className='spacer'>
        <MiddleFrame />
      </div>
      <div className='spacer'>
        <BottomFrame />
      </div>
      <Footer />
    </div>
  );
}

export default App;
