import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  // Funktion zum Hinzufügen einer neuen Farbe
  function addColor(newColor) {
    setColors([newColor, ...colors]); // Neue Farbe oben hinzufügen
  }

  // Funktion zum Löschen einer Farbe
  function deleteColor(id) {
    const updatedColors = colors.filter((color) => color.id !== id);
    setColors(updatedColors);
  }

  // Funktion zum Bearbeiten einer Farbe
  function editColor(id, updatedData) {
    const updatedColors = colors.map((color) =>
      color.id === id ? { ...color, ...updatedData } : color
    );
    setColors(updatedColors);
  }

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
            onEditColor={editColor} // Weitergabe der editColor-Funktion
          />
        ))
      ) : (
        <p>No colors... start by adding one!</p>
      )}
    </>
  );
}

export default App;
