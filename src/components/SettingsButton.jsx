import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SettingsIcon, Volume2, VolumeOff } from "lucide-react";
import Theme from "./Theme";

const SettingsButton = () => {
  const panelRef = useRef(null);
  const gearRef = useRef(null);
  const audioRef = useRef(null);

  const [open, setOpen] = useState(false);
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

  useEffect(() => {
    if (sound) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [sound]);

  return (
    <div className="relative flex items-center">
      {/* Gear Icon Button */}
      <button
        ref={gearRef}
        onClick={() => setOpen(!open)}
        className="text-white size-6 hover:scale-125 transition-transform cursor-pointer "
      >
        <SettingsIcon />
      </button>

      {/* Sliding Settings Panel */}
      <div
        ref={panelRef}
        className="absolute flex items-center left-16 gap-12 px-6 py-2"
      >
        {/* Dark / Light Mode Toggle */}
        <Theme />

        {/* Sound Toggle */}
        <button
          onClick={() => setSound(!sound)}
          className="text-white hover:scale-110 transition-transform cursor-pointer"
        >
          {sound ? <Volume2 size={18} /> : <VolumeOff size={18} />}
        </button>
        <audio ref={audioRef} loop>
          <source src="/src/assets/music/sweet life.mp3" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default SettingsButton;
