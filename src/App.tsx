import React, { useState } from "react";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { TransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";

function App() {
  const [modal, setModal] = useState(false);

  function toggleModal() {
    setModal(!modal);
  }
  return (
    <TransactionsProvider>
      <Header toggleModal={toggleModal} />
      <Dashboard />
      <TransactionModal isOpen={modal} onRequestClose={toggleModal} />
      <GlobalStyle />
    </TransactionsProvider>
  );
}

export default App;
