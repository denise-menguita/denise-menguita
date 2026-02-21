import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 overflow-hidden relative">
      {/* Decorative Background Blobs */}
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-pink/20 rounded-full blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-green/20 rounded-full blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, delay: 1 }}
      />
      
      <div className="container mx-auto px-6 z-10 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-2xl md:text-3xl font-medium text-pink-dark mb-4">
            Hello, I'm Denise Menguita
          </h2>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tighter text-maroon">
            Designing <span className="font-script text-green relative inline-block text-6xl md:text-8xl lg:text-9xl ml-2 font-normal">
              Experiences
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99996C2.00025 6.99996 45.0003 1.00003 100.002 1.00003C155.004 1.00003 198.003 7.00003 198.003 7.00003" stroke="#84A59D" strokeWidth="3" strokeLinecap="round"/></svg>
            </span> <br />
            & Crafting <span className="font-script text-pink relative inline-block text-6xl md:text-8xl lg:text-9xl ml-2 font-normal">
              Visuals
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99996C2.00025 6.99996 45.0003 1.00003 100.002 1.00003C155.004 1.00003 198.003 7.00003 198.003 7.00003" stroke="#F28482" strokeWidth="3" strokeLinecap="round"/></svg>
            </span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-text/80 max-w-2xl mx-auto font-body">
            A Graphic Designer & UI/UX Enthusiast transforming ideas into accessible and delightful digital realities.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center">
             <a href="#graphic-design" className="px-8 py-3 bg-text text-white rounded-full font-medium hover:bg-pink-dark transition-colors">
               View My Works
             </a>
             <a href="#about" className="px-8 py-3 border border-text rounded-full font-medium hover:bg-cream-dark transition-colors">
               More About Me
             </a>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div 
        className="hidden lg:block absolute left-[10%] bottom-[20%]"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
         <div className="w-16 h-16 border-4 border-pink rounded-full opacity-60"></div>
      </motion.div>
      
      <motion.div 
        className="hidden lg:block absolute right-[15%] top-[25%]"
        animate={{ y: [0, 20, 0], rotate: 45 }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
         <div className="w-12 h-12 bg-green opacity-40 transform rotate-45"></div>
      </motion.div>
    </section>
  );
};
