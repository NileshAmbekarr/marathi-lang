export default function SyntaxSection() {
  return (
    <section id="syntax" className="py-20 bg-deep-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-cyan to-electric bg-clip-text">
            मराठी-लँग Syntax Guide 📚
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know to start coding like a true मराठी मानूस! No PhD in computer science required.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <img 
            src="https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
            alt="Abstract programming concepts illustration" 
            className="rounded-2xl shadow-2xl max-w-2xl w-full h-64 object-cover" 
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Basic Syntax */}
          <div className="bg-gradient-to-br from-card-dark to-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-electric mb-6">Basic Syntax (मूळ वाक्यरचना)</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">Variables (चल राशी)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-gray-400 mb-2"># English variables work too!</div>
                  <div><span className="text-electric">नाव</span> <span className="text-white">=</span> <span className="text-neon-green">"राम"</span></div>
                  <div><span className="text-electric">वय</span> <span className="text-white">=</span> <span className="text-hot-pink">25</span></div>
                  <div><span className="text-electric">age</span> <span className="text-white">=</span> <span className="text-hot-pink">25</span> <span className="text-gray-400"># Also works!</span></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">Print Statement (छापणे)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"नमस्कार!"</span><span className="text-white">)</span></div>
                  <div><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-electric">नाव</span> <span className="text-white">+</span> <span className="text-neon-green">" चे वय "</span> <span className="text-white">+</span> <span className="text-electric">वय</span><span className="text-white">)</span></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">Comments (टिप्पण्या)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-gray-400"># हे एक टिप्पणी आहे</span></div>
                  <div><span className="text-gray-400"># This is also a comment</span></div>
                  <div><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"कोड चालतोय!"</span><span className="text-white">)</span>  <span className="text-gray-400"># Inline comment</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Control Flow */}
          <div className="bg-gradient-to-br from-card-dark to-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-hot-pink mb-6">Control Flow (नियंत्रण प्रवाह)</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">If-Else (जर-नाहीतर)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-cyan">जर</span> <span className="text-electric">वय</span> <span className="text-white">{'>='}</span> <span className="text-hot-pink">18</span><span className="text-white">:</span></div>
                  <div className="ml-4"><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"प्रौढ आहे"</span><span className="text-white">)</span></div>
                  <div><span className="text-cyan">नाहीतर</span><span className="text-white">:</span></div>
                  <div className="ml-4"><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"अल्पवयीन आहे"</span><span className="text-white">)</span></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">While Loop (जोपर्यंत)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-electric">i</span> <span className="text-white">=</span> <span className="text-hot-pink">0</span></div>
                  <div><span className="text-cyan">जोपर्यंत</span> <span className="text-electric">i</span> <span className="text-white">{'<'}</span> <span className="text-hot-pink">5</span><span className="text-white">:</span></div>
                  <div className="ml-4"><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-electric">i</span><span className="text-white">)</span></div>
                  <div className="ml-4"><span className="text-electric">i</span> <span className="text-white">=</span> <span className="text-electric">i</span> <span className="text-white">+</span> <span className="text-hot-pink">1</span></div>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">For Loop (साठी)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-cyan">साठी</span> <span className="text-electric">i</span> <span className="text-white">मध्ये</span> <span className="text-cyan">श्रेणी</span><span className="text-white">(</span><span className="text-hot-pink">5</span><span className="text-white">):</span></div>
                  <div className="ml-4"><span className="text-cyan">छापा</span><span className="text-white">(</span><span className="text-neon-green">"गिनती: "</span> <span className="text-white">+</span> <span className="text-electric">i</span><span className="text-white">)</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Functions and Operators */}
          <div className="bg-gradient-to-br from-card-dark to-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-neon-green mb-6">Functions (कार्ये)</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">Function Definition (कार्य व्याख्या)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-cyan">कार्य</span> <span className="text-electric">बेरीज</span><span className="text-white">(</span><span className="text-electric">अ</span><span className="text-white">,</span> <span className="text-electric">ब</span><span className="text-white">):</span></div>
                  <div className="ml-4"><span className="text-cyan">परत</span> <span className="text-electric">अ</span> <span className="text-white">+</span> <span className="text-electric">ब</span></div>
                  <div><span className="text-cyan">समाप्त</span></div>
                  <div className="mt-2"><span className="text-gray-400"># Function call</span></div>
                  <div><span className="text-electric">परिणाम</span> <span className="text-white">=</span> <span className="text-electric">बेरीज</span><span className="text-white">(</span><span className="text-hot-pink">5</span><span className="text-white">,</span> <span className="text-hot-pink">3</span><span className="text-white">)</span></div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-cyan mb-3">Boolean Operations (बूलियन क्रिया)</h4>
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div><span className="text-electric">खरे_आहे</span> <span className="text-white">=</span> <span className="text-cyan">खरे</span></div>
                  <div><span className="text-electric">खोटे_आहे</span> <span className="text-white">=</span> <span className="text-cyan">खोटे</span></div>
                  <div className="mt-2"><span className="text-gray-400"># Logical operators</span></div>
                  <div><span className="text-cyan">जर</span> <span className="text-electric">अ</span> <span className="text-white">{'>'}</span> <span className="text-hot-pink">5</span> <span className="text-cyan">आणि</span> <span className="text-electric">खरे_आहे</span><span className="text-white">:</span></div>
                  <div><span className="text-cyan">जर</span> <span className="text-electric">ब</span> <span className="text-white">{'<'}</span> <span className="text-hot-pink">10</span> <span className="text-cyan">किंवा</span> <span className="text-electric">खोटे_आहे</span><span className="text-white">:</span></div>
                  <div><span className="text-cyan">जर</span> <span className="text-cyan">नाही</span> <span className="text-electric">खोटे_आहे</span><span className="text-white">:</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Keywords Reference */}
          <div className="bg-gradient-to-br from-card-dark to-gray-900 border border-gray-700 rounded-2xl p-8">
            <h3 className="text-2xl font-display font-bold text-cyan mb-6">Keywords Cheat Sheet 📝</h3>
            
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-gray-400 mb-2">Control Flow:</div>
                  <div className="space-y-1">
                    <div><span className="text-cyan">जर</span> - if</div>
                    <div><span className="text-cyan">नाहीतर</span> - else</div>
                    <div><span className="text-cyan">जोपर्यंत</span> - while</div>
                    <div><span className="text-cyan">साठी</span> - for</div>
                    <div><span className="text-cyan">तोडा</span> - break</div>
                    <div><span className="text-cyan">पुढे</span> - continue</div>
                  </div>
                </div>
                
                <div>
                  <div className="text-gray-400 mb-2">Functions:</div>
                  <div className="space-y-1">
                    <div><span className="text-cyan">कार्य</span> - function</div>
                    <div><span className="text-cyan">परत</span> - return</div>
                    <div><span className="text-cyan">समाप्त</span> - end</div>
                    <div><span className="text-cyan">छापा</span> - print</div>
                    <div><span className="text-cyan">श्रेणी</span> - range</div>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t border-gray-700">
                <div className="text-gray-400 mb-2">Boolean & Logical:</div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <div><span className="text-cyan">खरे</span> - True</div>
                    <div><span className="text-cyan">खोटे</span> - False</div>
                  </div>
                  <div className="space-y-1">
                    <div><span className="text-cyan">आणि</span> - and</div>
                    <div><span className="text-cyan">किंवा</span> - or</div>
                    <div><span className="text-cyan">नाही</span> - not</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}