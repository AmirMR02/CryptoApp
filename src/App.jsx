import { BeatLoader } from "react-spinners";
import "./App.css";
import { useState, useEffect } from "react";

export default function App() {
  //CG-9SXAaVdbdRKihCRxMTAX7BkM
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 1000);
  // }, []);

  const data = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
  );
  const coinStuff = {
    symbol: "",
    id: "",
    image: "",
    name: "",
    current_price: 0,
    p24h: 0,
    totalV: 0,
  };
  // data.map((item) => console.log(item));
  //objects for coin stuffs

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <BeatLoader
            color={"#3874ff"}
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <header>
            <Header />
          </header>
          <section>
            <Searchbar />
          </section>
          <section>
            <TableOfCoins coinId={coinStuff.id} />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
}
function useFetch(url) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [url]);

  return [data];
}
// =====================================
// Header is here
function Header() {
  return (
    <div className="header">
      <h1>Crypto App</h1>
      <div>
        <a href="#">
          Amirmohammad <span>Welcome</span>
        </a>
      </div>
    </div>
  );
}
//====================================
//searchbar
function Searchbar() {
  return (
    <div className="searchbar">
      <input type="text" />
      <select name="currency" id="currency">
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="JPY">JPY</option>
      </select>
    </div>
  );
}
//====================================
//Table
function TableOfCoins({ coinId }) {
  return (
    <div className="table">
      <table>
        <thead>
          <tr>
            <th>COIN</th>
            <th>NAME</th>
            <th>Price</th>
            <th>24h</th>
            <th>Total Volume</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Coin coinId={coinId} />
        </tbody>
      </table>
      <div className="buttons">
        <button className="active">Previous</button>
        <button className="active">1</button>
        <button className="deactive">...</button>
        <button className="deactive">99</button>
        <button className="deactive">100</button>
        <button className="active">Next</button>
      </div>
    </div>
  );
}
function Coin({ coinId }) {
  return (
    <tr>
      <td>
        <div className="ImgAndCoin">
          <img src="/logo.png" />
          <p>{coinId}</p>
        </div>
      </td>
      <td>Bitcoin</td>
      <td>$69,122 </td>
      <td>1.61%</td>
      <td>16,995,576,817</td>
      <td>
        <img src="/chart-up.svg" alt="chart-up" />
      </td>
    </tr>
  );
}
//====================================
// footer
function Footer() {
  return (
    <div className="footer">
      <h3>Developed By AmirmohammadRashvand</h3>
    </div>
  );
}
// ===================================
