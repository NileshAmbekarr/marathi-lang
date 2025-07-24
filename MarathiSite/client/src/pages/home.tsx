import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import ExamplesSection from "@/components/examples-section";
import SyntaxSection from "@/components/syntax-section";
import SetupSection from "@/components/setup-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="bg-deep-dark text-white font-sans overflow-x-hidden">
      <Navigation />
      <HeroSection />
      
      {/* Fun Stats Section */}
      <section className="py-20 bg-gradient-to-r from-card-dark to-deep-dark">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-electric mb-2">100%</div>
              <div className="text-gray-400">देवनागरी Powered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan mb-2">0</div>
              <div className="text-gray-400">Bugs* (*that we know of)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-hot-pink mb-2">∞</div>
              <div className="text-gray-400">Fun Guaranteed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-neon-green mb-2">1st</div>
              <div className="text-gray-400">Marathi Programming Lang</div>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />
      <ExamplesSection />
      <SyntaxSection />
      <SetupSection />

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-electric/20 via-deep-dark to-cyan/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-electric/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan/15 rounded-full blur-3xl animate-float" style={{animationDelay: '-3s'}}></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300" 
              alt="Motivational programming meme about learning" 
              className="rounded-2xl shadow-2xl mx-auto mb-12 max-w-lg w-full h-48 object-cover animate-float" 
            /> */}
            
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-electric via-cyan to-hot-pink bg-clip-text">
              Ready to Code in मराठी? 🎯
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Join the revolution! Be the first among your friends to program in your mother tongue. 
              <br />
              <em>आपल्या मित्रांना दाखवा की तुम्ही कितके cool आहात!</em>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a 
                href="https://github.com/NileshAmbekarr/marathi-lang" 
                className="bg-gradient-to-r from-electric to-cyan px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-2xl hover:shadow-electric/50 transition-all duration-300 transform hover:scale-110 animate-glow"
              >
                <i className="fab fa-github mr-3"></i>
                Star on GitHub (It's Free!)
              </a>
              <a 
                href="https://github.com/NileshAmbekarr/marathi-lang/archive/refs/heads/master.zip" 
                className="border-2 border-cyan hover:border-electric px-8 py-4 rounded-xl text-lg font-semibold hover:bg-electric/10 transition-all duration-300 transform hover:scale-110"
              >
                <i className="fas fa-download mr-3"></i>
                Download & Try Now
              </a>
            </div>

            <div className="bg-card-dark/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-display font-bold text-electric mb-4">Future Plans 🔮</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-neon-green text-sm"></i>
                    <span className="text-gray-300">Lists & Dictionaries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-neon-green text-sm"></i>
                    <span className="text-gray-300">File I/O Operations</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-neon-green text-sm"></i>
                    <span className="text-gray-300">Error Handling</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-neon-green text-sm"></i>
                    <span className="text-gray-300">Classes & Objects</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-neon-green text-sm"></i>
                    <span className="text-gray-300">Interactive REPL</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <i className="fas fa-check text-neon-green text-sm"></i>
                    <span className="text-gray-300">PyPI Package</span>
                  </div>
                </div>
              </div>
              <p className="text-gray-400 mt-6 text-sm">
                Want to contribute? Fork the repo and send a PR! Every मराठी developer counts! 🤝
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
