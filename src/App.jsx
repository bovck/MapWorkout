import MapContextProvider from "./assets/store/context-map";
import Aside from "./assets/Components/Aside";
import Map from "./assets/Components/Map";

function App() {
  return (
    <MapContextProvider>
      <main className="mainWindow">
        <Aside isClick={"a"} />
        <Map />
      </main>
    </MapContextProvider>
  );
}

export default App;
