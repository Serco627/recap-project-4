import { useState } from "react";
import "./Color.css";

export default function Color({ color, onDeleteColor }) {
  const [deleteColor, setDeleteColor] = useState("false");

  function handleToggleDelete() {
    setDeleteColor(!deleteColor);
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
      {deleteColor ? (
        <button onClick={handleToggleDelete}>DELETE</button>
      ) : null}
      {deleteColor ? null : (
        <>
          <p className="color-card-highlight">Really delete?</p>
          <button onClick={handleToggleDelete}>CANCEL</button>
          <button onClick={() => onDeleteColor(color.id)}>DELETE</button>
        </>
      )}
    </div>
  );
}
