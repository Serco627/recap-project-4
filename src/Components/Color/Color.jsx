import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [showConfirm, setShowConfirm] = useState(false);

  // Funktion zum Umschalten der Bestätigungsnachricht
  function handleToggleConfirm() {
    setShowConfirm(!showConfirm);
  }

  // Funktion zum Bestätigen des Löschvorgangs
  function handleDelete() {
    onDeleteColor(color.id);
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      <h3 className="color-card-headline">{color.hex}</h3>
      <h4>{color.role}</h4>
      <p>contrast: {color.contrastText}</p>

      {showConfirm ? (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={handleToggleConfirm}>CANCEL</button>
          <button onClick={handleDelete}>DELETE</button>
        </>
      ) : (
        <button onClick={handleToggleConfirm}>DELETE</button>
      )}
    </div>
  );
}
