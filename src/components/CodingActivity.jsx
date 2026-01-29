import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const CodingActivity = () => {
  return (
    <section id="coding-activity" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Coding Activity</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My coding journey visualized through contributions and problem-solving
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* GitHub Stats */}
          <div
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
            data-aos="fade-right"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                <FaGithub className="text-white text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">GitHub Activity</h3>
            </div>

            {/* GitHub Contribution Graph */}
            <div className="mb-6 overflow-hidden rounded-lg">
              <img
                src="https://ghchart.rshah.org/2563eb/Debmalya06"
                alt="GitHub Contribution Graph"
                className="w-full"
                loading="lazy"
              />
            </div>

            {/* GitHub Stats Cards */}
            <div className="flex flex-col items-center gap-4">
              <img
                src="https://github-readme-stats.vercel.app/api?username=Debmalya06&show_icons=true&theme=tokyonight&hide_border=true&bg_color=1a1b27&rank_icon=github"
                alt="GitHub Stats"
                className="rounded-lg max-w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
              <img
                src="https://github-readme-stats.vercel.app/api/top-langs/?username=Debmalya06&layout=compact&theme=tokyonight&hide_border=true&bg_color=1a1b27"
                alt="Top Languages"
                className="rounded-lg max-w-full h-auto"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://github.com/Debmalya06"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-full transition-all duration-300 text-sm"
              >
                <FaGithub /> View GitHub Profile
              </a>
            </div>
          </div>

          {/* LeetCode Stats */}
          <div
            className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50 hover:border-yellow-500/50 transition-all duration-300"
            data-aos="fade-left"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center">
                <SiLeetcode className="text-yellow-500 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-white">LeetCode Stats</h3>
            </div>

            {/* LeetCode Stats Card */}
            <div className="flex justify-center mb-6">
              <img
                src="https://leetcard.jacoblin.cool/debmalyapan4?theme=dark&font=Nunito&ext=heatmap"
                alt="LeetCode Stats"
                className="rounded-lg max-w-full"
                loading="lazy"
              />
            </div>

            <div className="mt-6 text-center">
              <a
                href="https://leetcode.com/u/debmalyapan4/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 hover:bg-yellow-500/30 text-yellow-500 rounded-full transition-all duration-300 text-sm"
              >
                <SiLeetcode /> View LeetCode Profile
              </a>
            </div>
          </div>
        </div>

        {/* GitHub Streak Stats */}
        {/* <div
          className="mt-8 max-w-2xl mx-auto"
          data-aos="fade-up"
        >
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
            <div className="flex justify-center">
              <img
                src="https://streak-stats.demolab.com/?user=Debmalya06&theme=tokyonight&hide_border=true&background=1a1b27"
                alt="GitHub Streak"
                className="rounded-lg max-w-full"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default CodingActivity;
