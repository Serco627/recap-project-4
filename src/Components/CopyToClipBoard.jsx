import { useEffect, useState } from "react";

export default function CopyButton({ color }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    setCopied(true);
    try {
      await navigator.clipboard.writeText(color.hex);
    } catch (error) {
      console.error("Failed to copy: ", error.message);
    }
  }

  useEffect(() => {
    if (copied) {
      console.log("you copied something to your clipboard");
      const timer = setTimeout(() => setCopied(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return copied ? (
    <button>Succesfully copied</button>
  ) : (
    <button onClick={handleCopy}>Copy</button>
  );
}
