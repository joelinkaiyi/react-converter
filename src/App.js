import "./App.css";
import ResponsiveAppBar from "./appBar";
import Footer from "./Footer";
import Selector from "./Selector";
import Title from "./title";
function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <Title />
      <Selector />
      <Footer />
    </div>
  );
}

export default App;
