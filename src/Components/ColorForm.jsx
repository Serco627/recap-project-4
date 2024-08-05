import ColorInput from "./ColorInput";
import "../Components/Color/Color.css";
import { nanoid } from "nanoid";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.id = nanoid(); // Add unique ID
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
      <button>ADD COLOR</button>
      <br />
      <br />
    </form>
  );
}
