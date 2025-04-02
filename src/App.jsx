import { Chat } from "./components/Chat";
import * as React from "react";

function App() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
        try {
          setLoading(true);
          const response = await fetch("/stock data.json");
          const jsonData = await response.json();
          setData(jsonData);
          setLoading(false);
        } catch {
          setError(true);
          setLoading(false);
        }
      };
      fetchData();
  }, []);

  if (error) {
    return <div>File is missing or Invalid file.</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <Chat data={data} />
  )
}

export default App
