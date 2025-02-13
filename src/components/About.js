import React from 'react';
import { motion } from 'framer-motion';
import { FaRegSmileWink, FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          {/* Sol taraf - Hi ve Fotoğraf */}
          <motion.div 
            className="md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-8">
              <h1 className="text-5xl font-bold text-gray-800">Hi</h1>
              <motion.div
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5
                }}
                whileHover={{ rotate: 20, scale: 1.2 }}
              >
                <FaRegSmileWink className="text-4xl text-yellow-400" />
              </motion.div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-48 h-48">
                
                <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl group-hover:scale-105 transition duration-300">
                  <img
                    src="/images/hicran.jpeg"
                    alt="Hicran Apaydın"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-gray-800">Frontend Developer</h3>
              <p className="text-gray-600">Turkey</p>
            </div>
          </motion.div>

          {/* Sağ taraf - About Me içeriği */}
          <motion.div 
            className="md:w-2/3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <div className="text-gray-600 space-y-4">
              <p className="leading-relaxed">
                I am Hicran, a frontend developer based in Turkey, focused on building user-friendly, 
                scalable interfaces with clean code and semantic design.
              </p>
              
              <p className="leading-relaxed">
                Curious and solution-oriented, I continuously improve my skills by following evolving 
                web technologies, AI-driven solutions, and industry trends.
              </p>
              
              <p className="leading-relaxed">
                Passionate about code quality and sustainable architectures, I enjoy contributing to 
                open-source projects and community-driven initiatives. Adapting to the ever-changing 
                tech landscape, I strive to develop innovative solutions that enhance user experience 🚀
              </p>

              {/* Contact Section */}
              <motion.div 
                className="pt-6 mt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-600 mb-4">
                  Feel free to reach out for collaborations or just a friendly hello ✨
                </p>
                <div className="social-icons flex space-x-6">
                  <a href="https://github.com/hicrandn" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaGithub /> 
                  </a>
                  <a href="https://www.linkedin.com/in/hicran-apaydin/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaLinkedin />
                  </a>
                  <a href="https://x.com/Hicrandn"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaTwitter />
                  </a>
                  <a href="mailto:hicran.apaydn@gmail.com"
                     className="text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaEnvelope />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 