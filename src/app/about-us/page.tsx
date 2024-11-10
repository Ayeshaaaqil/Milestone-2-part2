// Import Header component
import Header from "../components/header";

// Function call
export default function About() {
  return (
    <div>
      <Header />

      <div className="container mx-auto p-6 md:p-12 bg-gray-100 shadow-lg rounded-lg mt-8">
      <h1 className="text-blue-800 font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide">
  "Hello! I'm Ayesha Aaqil"
</h1>


        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl text-center md:text-left leading-relaxed">
          I am a dedicated and creative web developer with a flair for building interactive and visually engaging web applications.
          My journey in web development began with a strong foundation in HTML, CSS, JavaScript, TypeScript, and React.js.
          I am continually expanding my skill set to bring innovative solutions to life. Currently, I am diving deeper into my
          knowledge and exploring advanced front-end possibilities.
        </p>
      </div>
    </div>
  );
}


