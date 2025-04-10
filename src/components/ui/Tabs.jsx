import { useState } from "react";

export function Tabs({ children }) {
    return <div>{children}</div>;
}

export function TabsList({ children }) {
    return <div className="flex border-b">{children}</div>;
}

export function TabsTrigger({ label, isActive, onClick }) {
    return (
        <button
            className={`p-2 px-4 ${
                isActive ? "border-b-2 border-blue-500 text-blue-500" : "text-gray-500"
            }`}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

export function TabsContent({ children }) {
    return <div className="p-4">{children}</div>;
}
