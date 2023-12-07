import { useState } from "react";
import About from "./About";
import "./App.css";
import ResponsiveAppBar from "./appBar";
import Footer from "./Footer";
import Selector from "./Selector";
import Title from "./title";
import StartAnimation from './Animation';
function App() {
   const [showAnimation, setShowAnimation] = useState(true);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };
  return (
    <div className="App">
      {showAnimation ? (
        <StartAnimation onAnimationComplete={handleAnimationComplete} />
      ) : (
        <div>
          <ResponsiveAppBar />
          <Title />
          <Selector />
          <About />
          <Footer />
        </div>
      )}
    </div>
  );
}

export default App;
