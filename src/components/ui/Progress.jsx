export default function Progress({ value, max = 100, className = "" }) {
    return (
        <div className={`relative w-full bg-gray-300 rounded-md h-4 ${className}`}>
            <div
                className="bg-blue-500 h-4 rounded-md"
                style={{ width: `${(value / max) * 100}%` }}
            ></div>
        </div>
    );
}
