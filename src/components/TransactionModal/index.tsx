import { FormEvent, useState } from "react";
import Modal from "react-modal";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import spentImg from "../../assets/spent.svg";

import * as S from "./style";
import { api } from "../../services/api";

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function TransactionModal({ isOpen, onRequestClose }: ModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");

  function handleNewTransaction(event: FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      type,
      category,
    };

    api.post("transactions", data);
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container onSubmit={handleNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
        />

        <S.TypeTransactionButton>
          <S.RadioBox
            type="button"
            onClick={() => setType("deposit")}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>

          <S.RadioBox
            type="button"
            onClick={() => setType("withdraw")}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={spentImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBox>
        </S.TypeTransactionButton>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}
