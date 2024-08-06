import { useState } from "react";
import ColorForm from "../ColorForm";
import "./Color.css";
import CopyButton from "../CopyToClipBoard";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // Umschalten der Bestätigungsnachricht
  function handleToggleConfirm() {
    setIsConfirmed(!isConfirmed);
  }

  // Bestätigen des Löschvorgangs
  function handleDelete() {
    onDeleteColor(color.id);
  }

  // Umschalten des Editiermodus
  function toggleEditMode() {
    setIsEditing(!isEditing);
  }

  // Bearbeiten einer Farbe
  function handleEdit(newColorData) {
    onEditColor(color.id, newColorData);
    setIsEditing(false); // Beenden des Editiermodus nach dem Bearbeiten
  }

  return (
    <div
      className="color-card"
      style={{
        background: color.hex,
        color: color.contrastText,
      }}
    >
      {isEditing ? (
        <ColorForm
          initialData={color}
          onSubmitColor={handleEdit}
          buttonLabel="Update Color" // Label für den Bearbeitungsmodus
        />
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <CopyButton />
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          {isConfirmed ? (
            <>
              <p className="color-card-highlight">Really delete?</p>
              <button onClick={handleToggleConfirm}>CANCEL</button>
              <button onClick={handleDelete}>DELETE</button>
            </>
          ) : (
            <button onClick={handleToggleConfirm}>DELETE</button>
          )}
          <button onClick={toggleEditMode}>EDIT</button>
        </>
      )}
    </div>
  );
}
