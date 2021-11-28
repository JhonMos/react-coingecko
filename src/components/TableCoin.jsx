import React from "react";
import CoinRow from "./CoinRow";

const title = ["#", "Coin", "Precio", "Cambio moneda", "Movimientos 24H"];
const TableCoin = ({ coins, search }) => {
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <table className="table mt-4 table-dark table-hover">
      <thead>
        <tr>
          {title.map((title, index) => (
            <td key={index}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin, index) => (
          <CoinRow coin={coin} key={coin.id} index={index} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoin;
