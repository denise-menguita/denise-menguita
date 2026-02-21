import { ArrowRight, Smartphone, Monitor } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { caseStudies } from '@/data/caseStudies';

export const UiUx = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-white" />;
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-white" />;
      default:
        return <Smartphone className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="ui-ux" className="py-24 bg-cream relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-script text-6xl text-maroon mb-4 font-normal">UI/UX Case Studies</h2>
          <p className="text-maroon/80 max-w-2xl mx-auto font-body text-lg">
            Solving user problems with empathy and data-driven design decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full border border-cream-dark"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 p-2 bg-maroon/80 backdrop-blur-sm rounded-full">
                  {getIcon(study.iconName)}
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="font-display text-2xl font-bold text-maroon mb-2">{study.title}</h3>
                <p className="text-maroon/70 text-sm mb-6 flex-grow leading-relaxed">{study.description}</p>
                
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                     <span className="px-3 py-1 bg-cream-dark text-maroon rounded-full text-xs font-bold uppercase tracking-wider">
                       {study.platform}
                     </span>
                  </div>
                  
                  <Link to={`/case-study/${study.id}`} className="flex items-center gap-2 text-pink-dark font-display font-bold text-lg group-hover:gap-4 transition-all inline-flex cursor-pointer">
                    View Case Study <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
