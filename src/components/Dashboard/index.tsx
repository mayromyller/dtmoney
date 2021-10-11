import { Summary } from "../Summary";
import { TransactionTable } from "../TransactionTable";
import * as S from "./style";

export function Dashboard() {
  return (
    <S.Container>
      <Summary />
      <TransactionTable />
    </S.Container>
  );
}
