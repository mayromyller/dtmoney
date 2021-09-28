import * as S from "./style";

import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <img src={logoImg} alt="dt money" />
        <button type="button">Nova transação</button>
      </S.Container>
    </S.Wrapper>
  );
}
