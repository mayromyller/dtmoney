import * as S from "./style";

export function TransactionTable() {
  return (
    <S.Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tailwind CSS</td>
            <td className="deposit">R$3000</td>
            <td>Front-End</td>
            <td>11/10/2021</td>
          </tr>
          <tr>
            <td>Tailwind CSS</td>
            <td className="withdraw">-R$3000</td>
            <td>Front-End</td>
            <td>11/10/2021</td>
          </tr>
          <tr>
            <td>Tailwind CSS</td>
            <td>R$3000</td>
            <td>Front-End</td>
            <td>11/10/2021</td>
          </tr>
          <tr>
            <td>Tailwind CSS</td>
            <td>R$3000</td>
            <td>Front-End</td>
            <td>11/10/2021</td>
          </tr>
        </tbody>
      </table>
    </S.Container>
  );
}
