export default function CopyButton({ color }) {
  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(color.hex);
    } catch (error) {
      console.error("Failed to copy: ", error.message);
    }
  }

  return (
    <button onClick={handleCopy} className="button">
      Copy
    </button>
  );
}
