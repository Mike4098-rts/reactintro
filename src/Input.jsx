import { useState } from "react";

const Input = () => {
  let [Value, setValue] = useState("init value");

  return (
    <>
      <p>{Value}</p>
      <input
        type="text"
        aria-label="stonks"
        placeholder="skriv noget fyr"
        id="myinput"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      ></input>
      <button>Klik her....</button>
    </>
  );
};

export default Input;
