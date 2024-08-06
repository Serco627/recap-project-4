import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });

  const addColor = (newColor) => setColors([newColor, ...colors]);
  const deleteColor = (id) =>
    setColors(colors.filter((color) => color.id !== id));
  const editColor = (id, updatedData) =>
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, ...updatedData } : color
      )
    );

  return (
    <>
      <h1 className="header">Color Theme Creator</h1>
      <ColorForm onSubmitColor={addColor} buttonLabel="Add Color" />
      {colors.length > 0 ? (
        colors.map((color) => (
          <Color
            key={color.id}
            color={color}
            onDeleteColor={deleteColor}
            onEditColor={editColor}
          />
        ))
      ) : (
        <p>No colors... start by adding one!</p>
      )}
    </>
  );
}

export default App;
