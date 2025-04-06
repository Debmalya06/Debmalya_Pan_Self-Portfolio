import { useState } from "react";

export function Popover({ children, className = "" }) {
    const [open, setOpen] = useState(false);
    return (
        <div className={`relative ${className}`}>
            {children({ open, setOpen })}
        </div>
    );
}

export function PopoverTrigger({ onClick, children, className = "" }) {
    return (
        <button onClick={onClick} className={`p-2 bg-gray-200 rounded-md ${className}`}>
            {children}
        </button>
    );
}

export function PopoverContent({ open, children, className = "" }) {
    return (
        open && (
            <div className={`absolute mt-2 bg-white shadow-md p-2 rounded-md border ${className}`}>
                {children}
            </div>
        )
    );
}
