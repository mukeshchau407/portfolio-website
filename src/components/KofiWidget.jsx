import { useEffect } from "react";

const KofiWidget = () => {
  useEffect(() => {
    // Load the Ko-fi script
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;

    script.onload = () => {
      if (window.kofiWidgetOverlay) {
        window.kofiWidgetOverlay.draw("mukeshchau407", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Donate",
          "floating-chat.donateButton.background-color": "#3B82F6",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default KofiWidget;
