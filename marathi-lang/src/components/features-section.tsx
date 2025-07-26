export default function FeaturesSection() {
  const features = [
    {
      icon: "fas fa-language",
      title: "Native देवनागरी Support",
      description: "Write variables, functions, and keywords in Marathi! Your आई will finally know what छापा() means.",
      code: `नाव = "निलेश"`,
      gradient: "from-electric to-cyan",
      hoverColor: "electric"
    },
    {
      icon: "fas fa-code", 
      title: "Python-like Syntax",
      description: "All the power of Python, but with the charm of Marathi. It's like Python had a baby with a Marathi poetry book!",
      code: `जर उत्तर == 42:`,
      gradient: "from-cyan to-hot-pink",
      hoverColor: "cyan"
    },
    {
      icon: "fas fa-function",
      title: "Functions & Recursion", 
      description: "Create functions that would make even Aryabhata proud. Recursion so smooth, it's like listening to classical music.",
      code: `कार्य फॅक्टोरियल(न):`,
      gradient: "from-hot-pink to-neon-green",
      hoverColor: "hot-pink"
    },
    {
      icon: "fas fa-loop",
      title: "Loops That Actually Make Sense",
      description: "जोपर्यंत and साठी loops that read like actual Marathi sentences. No more cryptic for i in range()!",
      code: `साठी i मध्ये श्रेणी(1, 6):`,
      gradient: "from-neon-green to-electric", 
      hoverColor: "neon-green"
    },
    {
      icon: "fas fa-calculator",
      title: "देवनागरी Numbers",
      description: "Support for both Arabic (1,2,3) and Devanagari (१,२,३) numerals. Because variety is the spice of life!",
      code: `संख्या = १२३ # Works perfectly!`,
      gradient: "from-electric to-cyan",
      hoverColor: "electric"
    },
    {
      icon: "fas fa-heart",
      title: "Made with प्रेम",
      description: "Built by a Marathi developer who got tired of explaining to relatives what \"print()\" does. Now they can read it themselves!",
      code: `# आजी can finally read this! 👵`,
      gradient: "from-cyan to-hot-pink",
      hoverColor: "cyan"
    }
  ];

  return (
    <section id="features" className="py-20 bg-deep-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-electric to-cyan bg-clip-text">
            Why मराठी-लँग is Awesome 🚀
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Because regular programming languages are too mainstream. Here's why your code deserves some Marathi मसाला!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-card-dark to-gray-900 border border-gray-700 rounded-2xl p-8 hover:border-${feature.hoverColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-${feature.hoverColor}/20`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-lg flex items-center justify-center mb-6`}>
                <i className={`${feature.icon} text-white text-xl`}></i>
              </div>
              <h3 className={`text-xl font-display font-semibold mb-4 text-${feature.hoverColor}`}>
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">
                {feature.description}
              </p>
              <div className="bg-gray-800 rounded-lg p-3 font-mono text-sm">
                <span className="text-electric">{feature.code}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}