import { useEffect, useState } from "react";

const useCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const res = await fetch("https://xcountries-backend.labs.crio.do/all");

        if (!res.ok) throw new Error("Failed to fetch countries");

        const data = await res.json();
        setCountries(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.log("Error fetching data: " + err.message);
          setError(err.message);
        } else {
          setError("Unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchCountries();
  }, []);

  return { countries, loading, error };
};

export default useCountry;
