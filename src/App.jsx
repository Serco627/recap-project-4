import { useState } from "react";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);

  function addColor(newColor) {
    setColors([newColor, ...colors]); // Add new color to the top
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
