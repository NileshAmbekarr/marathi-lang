export default function Footer() {
  return (
    <footer className="py-12 bg-card-dark border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-electric to-cyan rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">म</span>
              </div>
              <span className="text-xl font-display font-bold">मराठी-लँग</span>
            </div>
            <p className="text-gray-400 text-sm">
              A fun scripting language that uses देवनागरी Script. Making programming accessible to Marathi speakers, one line of code at a time.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-electric transition-colors text-sm text-left"
              >
                Features
              </button>
              <button 
                onClick={() => document.getElementById('syntax')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-electric transition-colors text-sm text-left"
              >
                Syntax Guide
              </button>
              <button 
                onClick={() => document.getElementById('examples')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-electric transition-colors text-sm text-left"
              >
                Examples
              </button>
              <button 
                onClick={() => document.getElementById('setup')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-electric transition-colors text-sm text-left"
              >
                Setup
              </button>
              <a 
                href="https://github.com/NileshAmbekarr/marathi-lang" 
                className="block text-gray-400 hover:text-electric transition-colors text-sm"
              >
                GitHub Repository
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-display font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-2">
              <a 
                href="https://github.com/NileshAmbekarr" 
                className="flex items-center space-x-2 text-gray-400 hover:text-electric transition-colors text-sm"
              >
                <i className="fab fa-github"></i>
                <span>NileshAmbekarr</span>
              </a>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <i className="fas fa-code"></i>
                <span>Built with ❤️ in महाराष्ट्र</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 मराठी-लँग. Made with प्रेम by Nilesh Ambekar. 
            <span className="text-electric animate-pulse"> जय महाराष्ट्र!</span>
          </p>
        </div>
      </div>
    </footer>
  );
}