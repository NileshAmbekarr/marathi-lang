export default function ExamplesSection() {
  const examples = [
    {
      title: "Hello World (The Classic)",
      filename: "hello.mr",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200",
      imageAlt: "Cozy developer workspace with laptop and plants",
      code: `# The mandatory first program
छापा("नमस्कार, जग!")  # Hello, World!
छापा("मराठी-लँग मध्ये स्वागत!")

# Variables (चल राशी)
नाव = "प्रोग्रामर"
वय = 25
छापा("मी " + नाव + " आहे आणि माझे वय " + वय + " आहे")`,
      output: `नमस्कार, जग!
मराठी-लँग मध्ये स्वागत!
मी प्रोग्रामर आहे आणि माझे वय 25 आहे`,
      outputType: "success"
    },
    {
      title: "Functions (कार्ये)",
      filename: "advanced.mr", 
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200",
      imageAlt: "Colorful coding illustration with abstract programming elements",
      code: `# A function that calculates factorial
कार्य फॅक्टोरियल(न):
    जर न <= 1:
        परत 1
    नाहीतर:
        परत न * फॅक्टोरियल(न - 1)
समाप्त

# Let's test it! (चला तपासूया!)
छापा(फॅक्टोरियल(5))  # Output: 120`,
      output: "Fun Fact: Recursion works perfectly! Your computer science professor would be proud. 🎓",
      outputType: "info"
    },
    {
      title: "Loops (पुनरावृत्ती)",
      filename: "loops.mr",
      image: "https://images.unsplash.com/photo-1607706189992-eae578626c86?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200",
      imageAlt: "Humorous programming meme about loops",
      code: `# For loop that actually makes sense!
साठी i मध्ये श्रेणी(1, 6):
    छापा("संख्या: " + i)

# While loop (जोपर्यंत लूप)
गिनती = 3
जोपर्यंत गिनती > 0:
    छापा("गिनती: " + गिनती)
    गिनती = गिनती - 1
छापा("संपले!")`,
      output: "Pro Tip: No more confusing for i in range() - now it reads like actual Marathi! 🙌",
      outputType: "tip"
    },
    {
      title: "Conditions (अटी)",
      filename: "smart.mr",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=200",
      imageAlt: "Peaceful developer workspace with dual monitors",
      code: `# Smart conditionals in Marathi
तापमान = 35
पावसाळा = खोटे

जर तापमान > 30 आणि नाही पावसाळा:
    छापा("खूप गरम आहे! AC चालवा!")
नाहीतर जर पावसाळा:
    छापा("पाऊस येत आहे! छत्री घ्या!")
नाहीतर:
    छापा("हवामान छान आहे!")`,
      output: "Weather Check: Even your code can now give you weather advice in Marathi! ☀️",
      outputType: "weather"
    }
  ];

  const getOutputStyles = (type: string) => {
    switch (type) {
      case 'success':
        return 'bg-green-900/20 border-green-500/30 text-green-400';
      case 'info':
        return 'bg-blue-900/20 border-blue-500/30 text-blue-400';
      case 'tip':
        return 'bg-purple-900/20 border-purple-500/30 text-purple-400';
      case 'weather':
        return 'bg-orange-900/20 border-orange-500/30 text-orange-400';
      default:
        return 'bg-gray-900/20 border-gray-500/30 text-gray-400';
    }
  };

  return (
    <section id="examples" className="py-20 bg-gradient-to-b from-deep-dark to-card-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-hot-pink to-neon-green bg-clip-text ">
            See मराठी-लँग in Action 🎬
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some examples that'll make you go "वाह!" - because good code deserves appreciation in your mother tongue.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-card-dark border border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-gray-800 px-6 py-4 border-b border-gray-700">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-display font-semibold text-white">{example.title}</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <img 
                  src={example.image} 
                  alt={example.imageAlt} 
                  className="rounded-lg mb-4 w-full h-32 object-cover" 
                />
                
                <pre className="text-sm font-mono bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4">
                  <code>
                    {example.code.split('\n').map((line, lineIndex) => {
                      if (line.startsWith('#')) {
                        return <span key={lineIndex} className="text-gray-500">{line}{'\n'}</span>;
                      }
                      
                      // Basic syntax highlighting
                      let highlightedLine = line
                        .replace(/(छापा|जर|नाहीतर|कार्य|परत|समाप्त|साठी|जोपर्यंत|मध्ये|श्रेणी|आणि|किंवा|नाही|खरे|खोटे)/g, '<span class="text-cyan">$1</span>')
                        .replace(/([a-zA-Zअ-ॿ_][a-zA-Zअ-ॿ0-9_]*)\s*=/g, '<span class="text-electric">$1</span> <span class="text-white">=</span>')
                        .replace(/"([^"]*)"/g, '<span class="text-neon-green">"$1"</span>')
                        .replace(/\b(\d+)\b/g, '<span class="text-hot-pink">$1</span>')
                        .replace(/([><=!]+)/g, '<span class="text-white">$1</span>')
                        .replace(/(\+|\-|\*|\/)/g, '<span class="text-white">$1</span>')
                        .replace(/(\(|\))/g, '<span class="text-white">$1</span>')
                        .replace(/:/g, '<span class="text-white">:</span>');
                      
                      return (
                        <span 
                          key={lineIndex} 
                          dangerouslySetInnerHTML={{ __html: highlightedLine + '\n' }}
                        />
                      );
                    })}
                  </code>
                </pre>
                
                <div className={`p-3 border rounded-lg ${getOutputStyles(example.outputType)}`}>
                  <div className="text-sm font-semibold mb-1">
                    {example.outputType === 'success' ? 'Output:' : 
                     example.outputType === 'info' ? 'Fun Fact:' :
                     example.outputType === 'tip' ? 'Pro Tip:' :
                     example.outputType === 'weather' ? 'Weather Check:' : 'Note:'}
                  </div>
                  <div className="text-sm font-mono whitespace-pre-line">
                    {example.output}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}