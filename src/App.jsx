import { Chat } from "./components/Chat";
import * as React from "react";

/* Root component where the file is fetched and passed to the Chat component.
    * It handles loading and error states.
    * The data is fetched from a local JSON file.
    * The data is passed to the Chat component as a prop.
    * The Chat component handles the logic of displaying messages and options.
    */  
function App() {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);

  const fetchData = React.useCallback(async () => {
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
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

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
