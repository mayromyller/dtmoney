import { useState } from "react";

import Modal from "react-modal";

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard/index";
import { TransactionModal } from "./components/TransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [modal, setModal] = useState(false);

  function handleOpenModal() {
    setModal(true);
  }

  function handleCloseModal() {
    setModal(false);
  }
  return (
    <>
      <Header openModal={handleOpenModal} />
      <Dashboard />
      <TransactionModal isOpen={modal} onRequestClose={handleCloseModal} />
    </>
  );
}
