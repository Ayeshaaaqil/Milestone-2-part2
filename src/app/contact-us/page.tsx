// Import Header component and icons
import Header from "../components/header";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa"; // Importing icons for email, LinkedIn, and GitHub

// Function call
export default function ContactUs() {
  return (
    <>
      <Header />
      
      <section
        id="contact"
        className="p-8 md:p-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white min-h-screen flex flex-col items-center justify-center"
      >
        {/* Updated Heading with Gradient and Animation */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-8 animate-pulse">
          Get in Touch
        </h2>

        <div className="space-y-8 text-lg md:text-xl text-center md:text-left">
          {/* Email Section */}
          <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105 hover:text-blue-300">
            <FaEnvelope className="text-2xl text-blue-400" /> {/* Email Icon */}
            <a
              href="mailto:ayeshaaaqil03@gmail.com"
              className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              <span className="font-semibold">ayeshaaaqil03@gmail.com</span>
            </a>
          </div>

          {/* LinkedIn Section */}
          <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105 hover:text-blue-300">
            <FaLinkedin className="text-2xl text-blue-400" /> {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/ayesha-aaqil-6072052b4"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              <span className="font-semibold">LinkedIn</span>
            </a>
          </div>

          {/* GitHub Section */}
          <div className="flex justify-center items-center space-x-4 transition-transform duration-300 hover:scale-105 hover:text-blue-300">
            <FaGithub className="text-2xl text-blue-400" /> {/* GitHub Icon */}
            <a
              href="https://github.com/Ayeshaaaqil"
              target="_blank"
              rel="noopener noreferrer"
              className="focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              <span className="font-semibold">GitHub Profile</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
