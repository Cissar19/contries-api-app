import { useState } from "react";

export const SearchBar = ({ onNewCountry }) => {
  const [inputValue, setInputvalue] = useState("");

  const onInputChange = ({ target }) => {
    setInputvalue(target.value);
  };
  const onSubmit = (e) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputvalue("");
    onNewCountry(inputValue.trim());
  };
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Busca el país que quieras"
        value={inputValue}
        onChange={(e) => onInputChange(e)}
      />
    </form>
  );
};
