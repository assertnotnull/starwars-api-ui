import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import "./App.css";
import Movie from "./components/movie";
import Ship from "./components/ship";

const queryClient = new QueryClient();

function App() {
  const [selectedShipId, setSelectedShipId] = useState("");
  console.log(selectedShipId);
  return (
    <QueryClientProvider client={queryClient}>
      <Movie setSelectedShip={setSelectedShipId} />
      {selectedShipId ? <Ship id={selectedShipId} /> : null}
    </QueryClientProvider>
  );
}

export default App;
