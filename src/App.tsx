import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { Provider } from "react-redux";
import "./App.css";
import Movie from "./components/movie";
import Ship from "./components/ship";
import { ShipGrid } from "./components/shipgrid";
import { store } from "./store";
import { BrandId } from "./hooks/types";

const queryClient = new QueryClient();

const initialId = "" as BrandId;

function App() {
  const [selectedShipId, setSelectedShipUrl] = useState(initialId);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Movie setSelectedShipId={setSelectedShipUrl} />
        {selectedShipId ? <Ship id={selectedShipId} /> : null}
        <ShipGrid />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
