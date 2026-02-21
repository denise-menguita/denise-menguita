import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-text text-cream py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h2 className="font-script text-4xl mb-2">Denise Menguita</h2>
            <p className="text-cream/60 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Twitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
