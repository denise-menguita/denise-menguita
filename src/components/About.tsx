import { Mail, Linkedin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { SiFigma, SiCanva, SiAdobephotoshop } from 'react-icons/si';
import { FaPaintBrush } from 'react-icons/fa';

export const About = () => {
  const skills = [
    'UI/UX Design',
    'Prototyping',
    'Branding',
    'Digital Art',
    'Wireframing',
    'User Research',
    'Illustration',
    'Motion Graphics'
  ];

  const tools = [
    { name: 'Figma', icon: <SiFigma className="w-8 h-8" />, color: 'text-purple-600 bg-purple-100' },
    { name: 'Canva', icon: <SiCanva className="w-8 h-8" />, color: 'text-blue-500 bg-blue-100' },
    { name: 'Photoshop', icon: <SiAdobephotoshop className="w-8 h-8" />, color: 'text-blue-800 bg-blue-200' },
    { name: 'Clip Studio Paint', icon: <FaPaintBrush className="w-6 h-6" />, color: 'text-indigo-600 bg-indigo-100' },
  ];

  const languages = [
    { name: 'English', flag: '🇺🇸' },
    { name: 'Filipino', flag: '🇵🇭' },
    { name: 'Spanish (Beginner)', flag: '🇪🇸' }
  ];

  return (
    <section id="about" className="py-24 bg-white/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-script text-6xl text-maroon mb-4 font-normal">About Me</h2>
            <div className="w-24 h-1 bg-green mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Bio & Contact */}
            <div className="space-y-8">
              <div className="bg-cream-dark/30 p-8 rounded-3xl border border-cream-dark">
                <h3 className="font-display text-2xl font-bold mb-4 text-maroon">Who am I?</h3>
                <p className="text-maroon/80 leading-relaxed font-body text-lg">
                  I'm Denise, a creative soul with a passion for storytelling through design. 
                  My journey blends the precision of UI/UX with the boundless freedom of graphic art. 
                  I believe in designs that are not just seen but <span className="font-script text-2xl text-pink-dark">felt</span>.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="font-display text-xl font-bold text-maroon">Let's Connect</h3>
                <div className="flex flex-wrap gap-4">
                  <a href="mailto:hello@denise.com" className="flex items-center gap-2 px-4 py-2 bg-pink-light text-pink-dark rounded-full hover:bg-pink hover:text-white transition-colors">
                    <Mail size={18} />
                    <span>Email Me</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-colors">
                    <Linkedin size={18} />
                    <span>LinkedIn</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-800 rounded-full hover:bg-maroon hover:text-white transition-colors">
                    <Globe size={18} />
                    <span>Behance</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Skills, Tools, Languages */}
            <div className="space-y-10">
              {/* Skills */}
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-maroon">Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white border border-green-light rounded-xl shadow-sm text-green-dark font-medium text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-maroon">Tools</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {tools.map((tool) => (
                    <div key={tool.name} className={`flex flex-col items-center justify-center gap-2 p-4 rounded-2xl ${tool.color} transition-transform hover:scale-105`}>
                      {tool.icon}
                      <span className="text-xs font-bold text-center leading-tight">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <h3 className="font-display text-xl font-bold mb-4 text-maroon">Languages</h3>
                <div className="flex flex-wrap gap-3">
                  {languages.map((lang) => (
                    <span key={lang.name} className="flex items-center gap-2 px-4 py-1 border border-maroon/20 text-maroon rounded-full text-sm">
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
