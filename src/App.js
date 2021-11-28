import { useEffect, useState } from "react";
import axios from "axios";
import TableCoin from "./components/TableCoin";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  const getData = async () => {
    const res = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1"
    );
    setCoins(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <div className="row">
        <input
          type="text"
          placeholder="Buscar moneda"
          className="form-control bg-dark text-light border-0 mt-4 text-center"
          onChange={e => setSearch(e.target.value)}
        />
        <TableCoin coins={coins} search={search} />
      </div>
    </div>
  );
};

export default App;
