export default function SetupSection() {
  const steps = [
    {
      number: "1",
      title: "Prerequisites (आवश्यक गोष्टी)",
      description: "Make sure you have Python installed. Don't worry, it's like having a good internet connection - essential for modern life!",
      code: `# Check if Python is installed
python --version
# Should show Python 3.6 or higher`,
      note: "Don't have Python? Download it from python.org. It's free, like good advice from your grandmother!",
      noteType: "warning"
    },
    {
      number: "2", 
      title: "Clone the Repository (रिपॉजिटरी डाउनलोड करा)",
      description: "Time to get the actual code! Think of this as downloading the recipe for your favorite dish.",
      code: `# Clone the repository
git clone https://github.com/NileshAmbekarr/marathi-lang.git
cd marathi-lang`,
      note: "",
      noteType: ""
    },
    {
      number: "3",
      title: "Install Dependencies (आवश्यक packages)",
      description: "Install the required packages. It's like adding masala to your code - makes everything better!",
      code: `# Install required packages
pip install asteval`,
      note: "That's it! Just one dependency. We kept it simple because complex setups are like traffic jams - nobody likes them!",
      noteType: "success"
    },
    {
      number: "4",
      title: "Run Your First Program! 🎉",
      description: "Time for the moment of truth! Let's run some Marathi code and watch the magic happen.",
      code: `# Create a simple program
echo 'छापा("नमस्कार, मराठी-लँग!")' > test.mr
# Run it!
python run.py test.mr`,
      note: "Expected Output: नमस्कार, मराठी-लँग!",
      noteType: "output"
    }
  ];

  const getGradient = (index: number) => {
    const gradients = [
      "from-electric to-cyan",
      "from-cyan to-hot-pink", 
      "from-hot-pink to-neon-green",
      "from-neon-green to-electric"
    ];
    return gradients[index % gradients.length];
  };

  const getNoteStyles = (type: string) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-900/20 border-yellow-500/30 text-yellow-300';
      case 'success':
        return 'bg-green-900/20 border-green-500/30 text-green-300';
      case 'output':
        return 'bg-green-900/20 border-green-500/30 text-green-300';
      default:
        return 'bg-gray-900/20 border-gray-500/30 text-gray-300';
    }
  };

  return (
    <section id="setup" className="py-20 bg-gradient-to-b from-card-dark to-deep-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-neon-green to-electric bg-clip-text ">
            Getting Started is Easy! 🚀
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Setting up मराठी-लँग is easier than making मिसळ पाव! Follow these simple steps and you'll be coding in Marathi in no time.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="mb-8 bg-gradient-to-r from-card-dark to-gray-900 border border-gray-700 rounded-2xl p-8">
              <div className="flex items-start space-x-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${getGradient(index)} rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold`}>
                  {step.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-display font-bold text-electric mb-4">{step.title}</h3>
                  <p className="text-gray-300 mb-4">{step.description}</p>
                  
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-4">
                    {step.code.split('\n').map((line, lineIndex) => {
                      if (line.startsWith('#')) {
                        return <div key={lineIndex} className="text-gray-400 mb-2">{line}</div>;
                      }
                      return <div key={lineIndex} className="text-cyan">{line}</div>;
                    })}
                  </div>

                  {step.note && (
                    <div className={`p-3 border rounded-lg ${getNoteStyles(step.noteType)}`}>
                      <div className="text-sm">
                        {step.noteType === 'output' && <strong>Expected Output: </strong>}
                        {step.noteType === 'warning' && <strong>Don't have Python? </strong>}
                        {step.noteType === 'success' && <strong>That's it! </strong>}
                        {step.note}
                      </div>
                    </div>
                  )}

                  {index === 1 && (
                    <div className="mt-4 flex space-x-4">
                      <a 
                        href="https://github.com/NileshAmbekarr/marathi-lang/archive/refs/heads/master.zip" 
                        className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        <i className="fas fa-download mr-2"></i>Download ZIP (No Git? No Problem!)
                      </a>
                      <a 
                        href="https://github.com/NileshAmbekarr/marathi-lang" 
                        className="bg-electric hover:bg-electric/80 px-4 py-2 rounded-lg text-sm transition-colors"
                      >
                        <i className="fab fa-github mr-2"></i>View on GitHub
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Bonus Step */}
          <div className="bg-gradient-to-r from-electric/20 to-cyan/20 border border-electric/30 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-electric to-cyan rounded-full flex items-center justify-center flex-shrink-0 text-lg">🎁</div>
              <div className="flex-1">
                <h3 className="text-2xl font-display font-bold text-electric mb-4">Bonus: Try the Examples! 🚀</h3>
                <p className="text-gray-300 mb-4">
                  Check out the examples folder for more cool programs. It's like a मराठी-लँग recipe book!
                </p>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm mb-4">
                  <div className="text-gray-400 mb-2"># Try these examples</div>
                  <div><span className="text-cyan">python run.py</span> <span className="text-electric">examples/hello.mr</span></div>
                  <div><span className="text-cyan">python run.py</span> <span className="text-electric">examples/for_loop.mr</span></div>
                  <div><span className="text-cyan">python run.py</span> <span className="text-electric">examples/demo.mr</span></div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <span className="bg-electric/20 text-electric px-3 py-1 rounded-full text-sm">✅ Variables</span>
                  <span className="bg-cyan/20 text-cyan px-3 py-1 rounded-full text-sm">✅ Functions</span>
                  <span className="bg-hot-pink/20 text-hot-pink px-3 py-1 rounded-full text-sm">✅ Loops</span>
                  <span className="bg-neon-green/20 text-neon-green px-3 py-1 rounded-full text-sm">✅ Conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}