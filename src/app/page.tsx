'use client'
import Image from "@/app/images/aisha.jpeg";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-16 bg-gray-50 min-h-screen">
        {/* Text Section */}
        <div className="max-w-lg text-center md:text-left mb-6 md:mb-0 space-y-6">
        <h1 className="text-blue-800 font-semibold text-xl md:text-2xl lg:text-3xl leading-relaxed tracking-wide">
  "Hello! I'm Ayesha Aaqil"
</h1>
           <h2>A passionate web developerfrom Karachi.
            With a strong foundation in web technologies like TypeScript,
            JavaScript, and a keen focus on frameworks like Next.js, I’m
            dedicated to crafting engaging, responsive websites that not only
            look great but perform flawlessly. I believe in continuous learning
            and thrive on tackling new challenges, always aiming to improve my
            skills with each project."
          </h2>
        </div>

        {/* Profile Image Section */}
        <div className="flex-shrink-0">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9_KRy-7nrDetVl1xYgjfKpYV_uEKBT4YHYw&s"
            alt="Ayesha Aaqil"
            className="w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full object-cover border-4 border-white shadow-xl"
          />
        </div>
      </div> 
    </>
  );
}

      
