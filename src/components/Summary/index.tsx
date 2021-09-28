import incomeImg from "../../assets/income.svg";
import spentImg from "../../assets/spent.svg";
import totalImg from "../../assets/total.svg";

import * as S from "./style";

export function Summary() {
  return (
    <S.Container>
      <S.Box>
        <S.BoxHeader>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </S.BoxHeader>
        <S.BoxValue>R$ 1000,00</S.BoxValue>
      </S.Box>

      <S.Box>
        <S.BoxHeader>
          <p>Saídas</p>
          <img src={spentImg} alt="Saídas" />
        </S.BoxHeader>
        <S.BoxValue> - R$ 500,00</S.BoxValue>
      </S.Box>

      <S.Box color="green">
        <S.BoxHeader>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </S.BoxHeader>
        <S.BoxValue>R$ 500,00</S.BoxValue>
      </S.Box>
    </S.Container>
  );
}
