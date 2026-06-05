import React from 'react';

const About = () => {
  return (
    <div className="flex-grow bg-slate-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-orange-300 rounded-full filter blur-3xl opacity-50"></div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 relative z-10">About <span className="text-orange-500">NutriAI</span></h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We are revolutionizing personal nutrition through the power of artificial intelligence.
          </p>
        </div>

        <div className="space-y-12">
          {/* Mission Section */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 flex flex-col md:flex-row gap-8 items-center hover:shadow-md transition-shadow">
            <div className="w-16 h-16 shrink-0 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center text-3xl">
              <i className="fa-solid fa-bullseye"></i>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                To make professional-grade nutrition planning accessible to everyone. By combining advanced AI models with nutritional science, we help people achieve their health goals without the confusion of conflicting diet advice.
              </p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Why we're different</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Hyper-Personalized</h3>
                  <p className="text-sm text-slate-600">No cookie-cutter diets. Every plan is generated uniquely based on your specific biomarkers and goals.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Science-Backed</h3>
                  <p className="text-sm text-slate-600">Our AI uses logic grounded in established nutritional science and macronutrient optimization.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Interactive Support</h3>
                  <p className="text-sm text-slate-600">You're not left alone after getting a plan. Our chatbot helps you adapt on the fly.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Continuous Evolution</h3>
                  <p className="text-sm text-slate-600">As you progress, the AI adjusts recommendations to keep challenging your body towards your goal.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Future Scope Section */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 md:p-10 shadow-lg text-white group overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 group-hover:scale-150 transition-transform duration-700"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="w-16 h-16 shrink-0 bg-white/10 text-orange-400 border border-white/20 rounded-2xl flex items-center justify-center text-3xl backdrop-blur-sm">
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">The Future Scope</h2>
                <p className="text-slate-300 leading-relaxed">
                  We are constantly expanding our AI's capabilities. Upcoming features include integration with smart wearables for real-time recalibration, computer vision for automatic meal logging via photos, and predictive grocery list generation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;