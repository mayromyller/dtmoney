import { useContext } from "react";
import incomeImg from "../../assets/income.svg";
import spentImg from "../../assets/spent.svg";
import totalImg from "../../assets/total.svg";
import { TransactionContext } from "../../TransactionsProvider";

import * as S from "./style";

export function Summary() {
  const { transactions } = useContext(TransactionContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <S.Container>
      <S.Box>
        <S.BoxHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.BoxHeader>
        <S.BoxValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </S.BoxValue>
      </S.Box>

      <S.Box>
        <S.BoxHeader>
          <p>Saídas</p>
          <img src={spentImg} alt="Saídas" />
        </S.BoxHeader>
        <S.BoxValue>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </S.BoxValue>
      </S.Box>

      <S.Box color={`${summary.total > 0 ? "green" : "red"}`}>
        <S.BoxHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.BoxHeader>
        <S.BoxValue>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </S.BoxValue>
      </S.Box>
    </S.Container>
  );
}
