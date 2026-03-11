import "./App.css";
import Layout from "./components/common/Layout";
import useCountry from "./hooks/useCountry";
import type { CountryDataType } from "./types";
import Card from "./ui/Card";
import Error from "./ui/Card/Error";
import Placeholder from "./ui/Card/Placeholder";

function App() {
  const { countries, loading, error } = useCountry();
  if (loading)
    return (
      <Layout grid>
        <Placeholder />
      </Layout>
    );

  if (error)
    return (
      <Layout>
        <Error />
      </Layout>
    );

  return (
    <Layout grid>
      {countries.map((country: CountryDataType) => (
        <Card key={country.abbr} data={country} />
      ))}
    </Layout>
  );
}

export default App;
