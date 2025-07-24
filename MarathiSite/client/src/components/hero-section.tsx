export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-electric/20 via-deep-dark to-cyan/20"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-electric/30 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-20 w-32 h-32 bg-cyan/20 rounded-full blur-2xl animate-float" style={{animationDelay: '-2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-hot-pink/25 rounded-full blur-lg animate-bounce-subtle"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Funny programming meme image */}
          {/* <div className="mb-8 flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300" 
              alt="Frustrated developer with coffee cups" 
              className="rounded-xl shadow-2xl w-80 h-60 object-cover animate-float" 
            />
          </div> */}

          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 bg-gradient-to-r from-electric via-cyan to-hot-pink bg-clip-text text-transperent">
            मराठी-लँग
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Finally! A programming language that speaks your माता भाषा 🎉
          </p>
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Because who said coding can't be fun in देवनागरी? Write Python-like code with Marathi keywords and watch your <em>आजी</em> finally understand what you do for work!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => document.getElementById('setup')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-electric to-cyan px-8 py-4 rounded-xl text-lg font-semibold hover:shadow-xl hover:shadow-electric/50 transition-all duration-300 transform hover:scale-105 animate-glow"
            >
              <i className="fas fa-rocket mr-2"></i>Get Started (It's Easy, Promise!)
            </button>
            <a 
              href="https://github.com/NileshAmbekarr/marathi-lang" 
              className="border-2 border-gray-600 hover:border-electric px-8 py-4 rounded-xl text-lg font-semibold hover:bg-electric/10 transition-all duration-300 transform hover:scale-105"
            >
              <i className="fab fa-github mr-2"></i>Star on GitHub ⭐
            </a>
          </div>

          {/* Quick code preview */}
          <div className="bg-card-dark/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-400 text-sm font-mono">hello.mr</span>
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
            </div>
            <pre className="text-left text-sm font-mono">
              <code>
                <span className="text-gray-500"># Your first Marathi program (आपला पहिला मराठी प्रोग्राम)</span>{'\n'}
                <span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"नमस्कार, जग!"</span><span className="text-white">)</span>  <span className="text-gray-500"># Hello, World!</span>{'\n'}
                {'\n'}
                <span className="text-electric">संख्या</span> <span className="text-white">=</span> <span className="text-hot-pink">42</span>{'\n'}
                <span className="text-cyan">जर</span> <span className="text-electric">संख्या</span> <span className="text-white">{'>'}</span> <span className="text-hot-pink">0</span><span className="text-white">:</span>{'\n'}
                {'    '}<span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"संख्या धनात्मक आहे!"</span><span className="text-white">)</span>
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}