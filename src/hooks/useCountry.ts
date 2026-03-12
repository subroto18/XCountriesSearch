import { useEffect, useState } from "react";

const useCountry = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries",
        );
        if (!res.ok) throw new Error("Failed to fetch countries");

        const data = await res.json();
        setCountries(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error("Error fetching data: " + err.message);
          setError(err.message);
        } else {
          console.error("Error fetching data: Unexpected error occurred");

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
