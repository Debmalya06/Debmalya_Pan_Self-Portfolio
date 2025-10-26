import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaDownload } from "react-icons/fa";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Import the Lottie component

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1 m-2">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Who am I?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm <strong>Debmalya Pan</strong>, a passionate <strong>Java Full Stack Developer</strong> with expertise in building robust web applications. My journey
              in software development started with a strong foundation in Java and has expanded to include various
              technologies in both frontend and backend development.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in developing scalable applications using <strong>Spring Boot</strong>, <strong>Hibernate</strong>, and other Java frameworks.
              I'm also proficient in frontend technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, <strong>React</strong>, and have experience with <strong>IoT
              projects</strong>.
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              My goal is to create innovative solutions that solve real-world problems while continuously learning and
              adapting to new technologies and methodologies. I have successfully delivered projects in <strong>healthcare</strong>, <strong>IoT safety systems</strong>, and <strong>AI-powered applications</strong>.
            </p>

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Location</h4>
                  <p className="text-white">Amtala, West Bengal, India</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <FaEnvelope />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Email</h4>
                  <p className="text-white">debmalyapan4@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center text-blue-400">
                  <FaPhone />
                </div>
                <div>
                  <h4 className="text-sm text-gray-400">Phone</h4>
                  <p className="text-white">+91 7439033371</p>
                </div>
              </div>
            </div> */}

            <a
              href="https://drive.google.com/file/d/1DhUTmkPOmH5wEpOzUCneO6ztdBKXejwL/view?usp=sharing"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all duration-300 shadow-lg shadow-blue-600/20"
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden">
              {/* Replace the static image with the Lottie animation */}
              <DotLottieReact
                src="https://lottie.host/1ea00622-161d-4102-ac33-a449424558de/GgJOf7y2Ka.lottie"
                loop
                autoplay
                style={{
                  width: "100%",
                  maxWidth: "700px", // Adjust max width
                  height: "auto",
                  maxHeight: "500px", // Adjust max height
                  margin: "0 auto",
                }}
                />
            </div>
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 transform translate-x-4 translate-y-4 rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;