// components/Popover.jsx
import React, { createContext, useState, useEffect, useRef, useContext } from "react";

// Create Popover Context
const PopoverContext = createContext();

export function Popover({ children, className = "" }) {
  const [open, setOpen] = useState(false);
  const popoverRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <PopoverContext.Provider value={{ open, setOpen }}>
      <div ref={popoverRef} className={`relative ${className}`}>
        {children}
      </div>
    </PopoverContext.Provider>
  );
}

export function PopoverTrigger({ children, className = "" }) {
  const { open, setOpen } = useContext(PopoverContext);

  return (
    <button
      onClick={() => setOpen(!open)}
      className={`p-2 bg-gray-200 rounded-md hover:bg-gray-300 transition ${className}`}
    >
      {children}
    </button>
  );
}

export function PopoverContent({ children, className = "" }) {
  const { open } = useContext(PopoverContext);

  return (
    open && (
      <div
        className={`absolute mt-2 bg-white shadow-md p-2 rounded-md border z-50 transition-all duration-150 ${className}`}
      >
        {children}
      </div>
    )
  );
}
