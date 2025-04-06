export function Select({ children, className = "" }) {
    return <div className={`relative w-full ${className}`}>{children}</div>;
}

export function SelectTrigger({ onClick, children, className = "" }) {
    return (
        <button
            onClick={onClick}
            className={`w-full p-2 border rounded-md bg-white ${className}`}
        >
            {children}
        </button>
    );
}

export function SelectValue({ value, className = "" }) {
    return <span className={`text-gray-700 ${className}`}>{value}</span>;
}

export function SelectContent({ children, className = "" }) {
    return (
        <div className={`absolute w-full mt-1 bg-white border rounded-md shadow-md ${className}`}>
            {children}
        </div>
    );
}

export function SelectItem({ value, onSelect, children, className = "" }) {
    return (
        <div
            onClick={() => onSelect(value)}
            className={`p-2 hover:bg-gray-100 cursor-pointer ${className}`}
        >
            {children}
        </div>
    );
}
