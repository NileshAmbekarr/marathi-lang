import { useState } from "react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-deep-dark/80 backdrop-blur-lg border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-electric to-cyan rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">म</span>
            </div>
            <span className="text-xl font-display font-bold">मराठी-लँग</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')} 
              className="hover:text-electric transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('syntax')} 
              className="hover:text-electric transition-colors"
            >
              Syntax
            </button>
            <button 
              onClick={() => scrollToSection('examples')} 
              className="hover:text-electric transition-colors"
            >
              Examples
            </button>
            <button 
              onClick={() => scrollToSection('setup')} 
              className="hover:text-electric transition-colors"
            >
              Setup
            </button>
            <a 
              href="https://github.com/NileshAmbekarr/marathi-lang" 
              className="bg-gradient-to-r from-electric to-cyan px-4 py-2 rounded-lg hover:shadow-lg hover:shadow-electric/50 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-github mr-2"></i>GitHub
            </a>
          </div>
          
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => scrollToSection('features')} 
                className="text-left hover:text-electric transition-colors"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('syntax')} 
                className="text-left hover:text-electric transition-colors"
              >
                Syntax
              </button>
              <button 
                onClick={() => scrollToSection('examples')} 
                className="text-left hover:text-electric transition-colors"
              >
                Examples
              </button>
              <button 
                onClick={() => scrollToSection('setup')} 
                className="text-left hover:text-electric transition-colors"
              >
                Setup
              </button>
              <a 
                href="https://github.com/NileshAmbekarr/marathi-lang" 
                className="bg-gradient-to-r from-electric to-cyan px-4 py-2 rounded-lg text-center"
              >
                <i className="fab fa-github mr-2"></i>GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}