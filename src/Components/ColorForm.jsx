import ColorInput from "./ColorInput";
import "../Components/Color/Color.css";
import { nanoid } from "nanoid";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
  buttonLabel = "Add Color",
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // ID nur generieren, wenn sie nicht existiert (bei neuer Farbe)
    if (!data.id) {
      data.id = nanoid();
    }

    onSubmitColor(data);
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role:
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex:
        <br />
        <ColorInput id="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text:
        <br />
        <ColorInput id="contrastText" defaultValue={initialData.contrastText} />
      </label>
      <br />
      <br />
      <button type="submit">{buttonLabel}</button>
      <br />
      <br />
    </form>
  );
}
