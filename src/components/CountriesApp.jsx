import React, { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { SearchBar } from "./searchBar/SearchBar";
import { CountriesGrid } from "./Grid/CountriesGrid";

export const CountriesApp = () => {
  const [country, setCountry] = useState([]);

  const onAddCountry = (NewCategory) => {
    setCountry([NewCategory, ...country]);
  };

  const {} = useFetch("https://restcountries.com/v3.1/all");

  return (
    <>
      <h1>Welcome to: </h1>
      <h2>Countries App</h2>
      <p>
        In this proyect you can search any country to see al the datails about
        it.
      </p>

      <SearchBar onNewCountry={onAddCountry} />

      {country.map((country) => (
        <CountriesGrid key={country} category={country} />
      ))}
    </>
  );
};
