import { motion } from 'framer-motion';
import { FaRegSmileWink, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaMedium } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-gray-100 flex items-center py-8 md:py-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Sol taraf - Hi ve Fotoğraf */}
          <motion.div 
            className="w-full md:w-1/3 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center justify-center gap-3 mb-6 md:mb-8">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Hi</h1>
              <motion.div
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ rotate: 20, scale: 1.2 }}
              >
                <FaRegSmileWink className="text-3xl md:text-4xl text-yellow-400" />
              </motion.div>
            </div>
            <div className="flex justify-center w-full">
              <div className="relative w-40 h-40 md:w-48 md:h-48">
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl transition duration-300">
                  <img
                    src="/images/hicran.jpeg"
                    alt="Hicran Apaydın"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800">Frontend Developer</h3>
              <p className="text-sm md:text-base text-gray-600">Turkey</p>
            </div>
          </motion.div>

          {/* Sağ taraf - About Me içeriği */}
          <motion.div 
            className="w-full md:w-2/3 mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-center md:text-left">About Me</h2>
            <div className="text-gray-600 space-y-4 text-sm md:text-base">
              <p>
                Hi there! I'm a passionate Frontend Developer with a keen eye for creating engaging and responsive web experiences.
              </p>
              <p>
                I specialize in building modern web applications using React.js and other cutting-edge technologies.
              </p>
              <motion.div 
                className="pt-4 md:pt-6 mt-4 md:mt-6 border-t border-gray-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-600 mb-4">
                  Feel free to reach out for collaborations or just a friendly hello ✨
                </p>
                <div className="social-icons flex justify-center md:justify-start space-x-4 md:space-x-6">
                  <a href="https://github.com/hicrandn" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaGithub />
                  </a>
                  <a href="https://www.linkedin.com/in/hicran-apaydin/" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaLinkedin />
                  </a>
                  <a href="https://x.com/Hicrandn"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaTwitter />
                  </a>
                  <a href="https://medium.com/@hicran.apaydn"
                     target="_blank"
                     rel="noopener noreferrer"
                     className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-all">
                    <FaMedium />
                  </a>
                  <a href="mailto:hicran.apaydn@gmail.com"
                     className="text-xl md:text-2xl text-gray-700 hover:text-gray-900 transition-all">
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