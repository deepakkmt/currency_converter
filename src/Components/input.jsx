import React from "react";
import { useState } from "react";
import useCurrencyInfo from "../hooks/firsthook";
import "../App.css";

function Inputbox() {
  const data = useCurrencyInfo("usd");
  const [amount, setamount] = useState("");
  const [fromcurrency, setfromcurrency] = useState("usd");
  const[tocurrency,settocurrency]=useState("inr")
  const [answer,setanswer]=useState("")

  const convert = () => {
  const fromRate = data[fromcurrency];
  const toRate = data[tocurrency];

  const result = (amount / fromRate) * toRate;

  setanswer(result.toFixed(2));
};
const swapCurrencies = () => {
  setfromcurrency(tocurrency);
  settocurrency(fromcurrency);
};

  return (
    <div className="main_container">
      <div className="input_container">
        <div>
          <label htmlFor="amount">From</label>
          <input
            type="number"
            placeholder="Enter amount"
            id="amount"
            onChange={(e) => {
              setamount(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="currency">Currency</label>
          <select
           id="currency" 
           onChange={(e) => setfromcurrency(e.target.value)}
           value={fromcurrency}>
            {Object.keys(data).map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>
      </div>
      <button className="swap-button bg-amber-300 " onClick={swapCurrencies}>swap</button>



      <div className="output_container">
        <div>
          <label htmlFor="amount">To</label>
          <input
            type="text"
            placeholder="Converted amount"
            id="amount"
            value={answer}
            readOnly
          />
        </div>
        <div>
          <label htmlFor="currency">Currency</label>
          <select name="" id="" value={tocurrency} onChange={(e)=>{settocurrency(e.target.value)}}>
            {Object.keys(data).map((currency)=>(

            <option key={currency} value={currency} onChange={(e)=>{settocurrency(e.target.value)}}> {currency} </option>
          ))}
          </select>
        </div>
      </div>
      <div>
        <button className="convert-button" onClick={convert}>convert  {fromcurrency} to {tocurrency}</button>
      </div>
    </div>
  );
}

export default Inputbox;
