// In Loader.jsx
const Loader = () => {
    console.log("Loader rendered");
    return (
      <div className="fixed inset-0 bg-gray-900 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mb-4 mx-auto"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl font-bold code-font">
              <span className="text-blue-500">&lt;/&gt;</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold code-font mt-4">
            <span className="text-blue-500">&lt;</span>
            <span className="gradient-text">Debmalya's Portfolio</span>
            <span className="text-blue-500">/&gt;</span>
          </h2>
        </div>
      </div>
    );
  };
  
  export default Loader;
  