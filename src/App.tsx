import React, { useState } from 'react';
import { GlobalStyle } from './styles/global';
import {Header} from './components/Header';

import { Dashboard } from './components/Dashboard';
import { TransactionModal } from './components/NewTransactionModal';

function App() {
  const [modal, setModal] = useState(false);

  function toggleModal(){
    setModal(!modal);
  }
  return (
    <>
      <Header toggleModal={toggleModal}/>

      <Dashboard />
      <TransactionModal isOpen={modal} onRequestClose={toggleModal}/>
      <GlobalStyle />
    </>
  );
}

export default App;
