import { useState } from "react";
import ColorForm from "../ColorForm";
import "./Color.css";
import CopyButton from "../CopyToClipBoard";

export default function Color({ color, onDeleteColor, onEditColor }) {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  function handleToggleConfirm() {
    setIsConfirmed(!isConfirmed);
  }

  function handleDelete() {
    onDeleteColor(color.id);
  }

  function toggleEditMode() {
    setIsEditing(!isEditing);
  }

  function handleEdit(newColorData) {
    onEditColor(color.id, newColorData);
    setIsEditing(false);
  }

  function handleCancelEdit() {
    setIsEditing(false);
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
          buttonLabel="Update Color"
        />
      ) : (
        <>
          <h3 className="color-card-headline">{color.hex}</h3>
          <CopyButton color={color} />
          <h4>{color.role}</h4>
          <p>contrast: {color.contrastText}</p>
          {isConfirmed ? (
            <>
              <p className="color-card-highlight">Really delete?</p>
              <button onClick={handleToggleConfirm}>Cancel</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          ) : (
            <button onClick={handleToggleConfirm}>Delete</button>
          )}
        </>
      )}
      {isEditing ? (
        <>
          <button onClick={handleCancelEdit}>Cancel</button>
        </>
      ) : (
        <button onClick={toggleEditMode}>Edit</button>
      )}
    </div>
  );
}
