import { useState } from "react";
import "./App.css";
import Layout from "./components/common/Layout";
import useCountry from "./hooks/useCountry";
import type { CountryDataType } from "./types";
import Card from "./ui/Card";
import Error from "./ui/Card/Error";
import Placeholder from "./ui/Card/Placeholder";

function App() {
  const { countries, loading, error } = useCountry();
  const [search, setSearch] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filteredCountries = countries.filter((country: CountryDataType) =>
    country.common.toLowerCase().includes(search.toLowerCase()),
  );

  if (loading)
    return (
      <Layout grid>
        <Placeholder />
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <Error data={error} />
      </Layout>
    );

  return (
    <Layout search={search} onChange={onChange} grid>
      {filteredCountries.map((country: CountryDataType, index: number) => (
        <Card key={country.common || index} data={country} />
      ))}
    </Layout>
  );
}

export default App;
