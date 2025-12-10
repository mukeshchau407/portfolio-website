import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Moon, SettingsIcon, Sun, Volume2, VolumeOff } from "lucide-react";

const SettingsButton = () => {
  const panelRef = useRef(null);
  const gearRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [sound, setSound] = useState(false);

  // Animate open/close panel + gear rotation
  useEffect(() => {
    gsap.set(panelRef.current, { autoAlpha: 0, x: -10 });

    if (open) {
      gsap.to(gearRef.current, {
        rotate: 180,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.to(panelRef.current, {
        autoAlpha: 1,
        x: 0,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(gearRef.current, {
        rotate: 0,
        duration: 0.3,
        ease: "power3.inOut",
      });

      gsap.to(panelRef.current, {
        autoAlpha: 0,
        x: -10,
        duration: 0.4,
        ease: "power3.inOut",
      });
    }
  }, [open]);

  // Toggle dark/light mode on <html> tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="relative flex items-center">
      {/* Gear Icon Button */}
      <button
        ref={gearRef}
        onClick={() => setOpen(!open)}
        className="text-white size-6 hover:scale-125 transition-transform "
      >
        <SettingsIcon />
      </button>

      {/* Sliding Settings Panel */}
      <div
        ref={panelRef}
        className="absolute flex items-center left-10 gap-12 bg-transparent
                   px-8 py-2 rounded-xl shadow-lg"
      >
        {/* Dark / Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-yellow-500 text-md hover:scale-110 transition-transform"
        >
          {darkMode ? <Moon /> : <Sun />}
        </button>

        {/* Sound Toggle */}
        <button
          onClick={() => setSound(!sound)}
          className="text-white text-md hover:scale-110 transition-transform"
        >
          {sound ? <Volume2 /> : <VolumeOff />}
        </button>
      </div>
    </div>
  );
};

export default SettingsButton;
