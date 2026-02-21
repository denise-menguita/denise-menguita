import { motion } from 'framer-motion';

export const GraphicDesign = () => {
  const works = [
    { title: 'Neon Nights', type: 'Poster Design', color: 'bg-purple-500' },
    { title: 'Eco Life', type: 'Branding', color: 'bg-green-500' },
    { title: 'Abstract Flow', type: 'Digital Art', color: 'bg-pink-500' },
    { title: 'Retro Wave', type: 'Album Cover', color: 'bg-blue-500' },
    { title: 'Urban Jungle', type: 'Event Poster', color: 'bg-yellow-500' },
    { title: 'Minimalist', type: 'Editorial', color: 'bg-gray-500' },
  ];

  return (
    <section id="graphic-design" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-script text-6xl text-maroon mb-4 font-normal">Graphic Design</h2>
          <p className="text-maroon/80 max-w-2xl mx-auto font-body text-lg">
            A collection of posters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg cursor-pointer"
            >
              <div className={`w-full h-full ${work.color} transition-transform duration-500 group-hover:scale-110`}>
                {/* Placeholder for image */}
                <div className="flex items-center justify-center h-full text-white/50 text-4xl font-display font-bold">
                  {work.title[0]}
                </div>
              </div>
              
              <div className="absolute inset-0 bg-maroon/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold font-display">{work.title}</h3>
                <p className="text-white/80 text-sm">{work.type}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
