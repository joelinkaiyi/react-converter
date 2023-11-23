import "./App.css";
import ResponsiveAppBar from "./appBar";
import Selector from "./Selector";
import Title from "./title";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Title />
      <Selector />
    </div>
  );
}

export default App;
