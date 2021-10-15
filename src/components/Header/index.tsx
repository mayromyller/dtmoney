import * as S from "./style";

import logoImg from "../../assets/logo.svg";

interface HeaderProps {
  openModal: () => void;
}

export function Header({ openModal }: HeaderProps) {
  return (
    <S.Wrapper>
      <S.Container>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={openModal}>
          Nova transação
        </button>
      </S.Container>
    </S.Wrapper>
  );
}
