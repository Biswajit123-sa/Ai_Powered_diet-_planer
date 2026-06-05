import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from '../components/Sidebar';
import Card from '../components/Card';
import Loader from '../components/Loader';

const Diet = () => {
  const [formData, setFormData] = useState({
    goal: 'fat_loss',
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    activityLevel: 'low'
  });
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const token = localStorage.getItem('token');
      const user = JSON.parse(localStorage.getItem('user'));
      
      const payload = {
        ...formData,
        userId: user?._id || user?.id
      };

      const response = await axios.post('/api/diet/generate', payload, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const dictData = response.data.data;
      const planResult = dictData?.dietPlan || response.data.dietPlan || dictData || response.data;
      setResult(planResult);
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to generate diet plan. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-200 bg-white/80 shadow-sm text-sm";
  const selectClass = "w-full rounded-2xl border border-slate-200 px-4 py-3 text-slate-900 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 focus:outline-none transition-all duration-200 bg-white/80 shadow-sm text-sm appearance-none cursor-pointer";
  const labelClass = "block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2";

  return (
    <div className="flex-grow flex bg-gradient-to-br from-slate-50 via-white to-orange-50/30">
      <Sidebar />
      
      <main className="flex-1 max-w-6xl mx-auto p-4 sm:p-6 md:p-8 lg:p-12 w-full">
        {/* Header */}
        <div className="mb-8 md:mb-10 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-100/80 text-orange-600 text-xs font-bold uppercase tracking-wider mb-4 border border-orange-200/50">
            <i className="fa-solid fa-sparkles text-[10px]"></i>
            AI Generator
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-2">Create Your Diet Plan</h1>
          <p className="text-slate-500 text-sm sm:text-base">Tell us about yourself and let our AI craft your perfect nutrition plan.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Form Panel */}
          <div className="lg:col-span-4 animate-slide-up delay-100" style={{ opacity: 0 }}>
            <Card title="Your Profile" icon="fa-user">
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="bg-red-50 text-red-600 p-3 rounded-xl text-sm border border-red-100 flex items-start gap-2 animate-scale-in">
                    <i className="fa-solid fa-circle-exclamation mt-0.5 shrink-0"></i>
                    <p>{error}</p>
                  </div>
                )}
                
                <div>
                  <label className={labelClass}>Goal</label>
                  <select name="goal" value={formData.goal} onChange={handleChange} className={selectClass}>
                    <option value="fat_loss">🔥 Weight Loss</option>
                    <option value="maintenance">⚖️ Maintenance</option>
                    <option value="muscle_gain">💪 Muscle Gain</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Weight (kg)</label>
                    <input type="number" name="weight" required value={formData.weight} onChange={handleChange} className={inputClass} placeholder="70" />
                  </div>
                  <div>
                    <label className={labelClass}>Height (cm)</label>
                    <input type="number" name="height" required value={formData.height} onChange={handleChange} className={inputClass} placeholder="175" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className={labelClass}>Age</label>
                    <input type="number" name="age" required value={formData.age} onChange={handleChange} className={inputClass} placeholder="25" />
                  </div>
                  <div>
                    <label className={labelClass}>Gender</label>
                    <select name="gender" value={formData.gender} onChange={handleChange} className={selectClass}>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className={labelClass}>Activity Level</label>
                  <div className="grid grid-cols-3 gap-2">
                    {['low', 'moderate', 'active'].map((level) => (
                      <button
                        key={level}
                        type="button"
                        onClick={() => setFormData({ ...formData, activityLevel: level })}
                        className={`py-2.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                          formData.activityLevel === level
                            ? 'bg-orange-500 text-white border-orange-500 shadow-md shadow-orange-500/20'
                            : 'bg-white text-slate-500 border-slate-200 hover:border-orange-300 hover:text-orange-600'
                        }`}
                      >
                        {level === 'low' ? '🧘' : level === 'moderate' ? '🚶' : '🏃'} {level.charAt(0).toUpperCase() + level.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full mt-2 flex justify-center items-center gap-2 py-3.5 px-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
                >
                  {loading ? (
                    <>
                      <i className="fa-solid fa-circle-notch fa-spin"></i>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <i className="fa-solid fa-sparkles"></i>
                      Generate Plan
                    </>
                  )}
                </button>
              </form>
            </Card>
          </div>

          {/* Result Panel */}
          <div className="lg:col-span-8 animate-slide-up delay-200" style={{ opacity: 0 }}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-premium border border-slate-100/80 h-full min-h-[500px] flex flex-col relative overflow-hidden">
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-orange-100/40 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-violet-50/30 to-transparent rounded-tr-full pointer-events-none"></div>
              
              {!loading && !result && (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-4 sm:p-8 z-10 animate-fade-in">
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 text-orange-500 rounded-3xl flex items-center justify-center text-3xl animate-float shadow-lg shadow-orange-500/10">
                      <i className="fa-solid fa-utensils"></i>
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg flex items-center justify-center text-white text-xs shadow-md">
                      <i className="fa-solid fa-sparkles"></i>
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2">Ready to plan your meals</h3>
                  <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
                    Fill out your profile on the left and hit generate. Our AI will build a complete nutrition plan tailored just for you.
                  </p>
                  <div className="flex items-center gap-4 mt-6 text-xs text-slate-400">
                    <span className="flex items-center gap-1"><i className="fa-solid fa-bolt text-amber-400"></i> Instant</span>
                    <span className="flex items-center gap-1"><i className="fa-solid fa-shield-halved text-emerald-400"></i> Science-backed</span>
                    <span className="flex items-center gap-1"><i className="fa-solid fa-indian-rupee-sign text-blue-400"></i> Affordable</span>
                  </div>
                </div>
              )}

              {loading && (
                <div className="flex-1 flex items-center justify-center z-10">
                  <Loader message="Crafting your personalized diet plan..." />
                </div>
              )}

              {result && !loading && (
                <div className="flex-1 flex flex-col h-full z-10 max-h-[600px] overflow-hidden animate-scale-in">
                  <div className="flex items-center gap-3 mb-6 shrink-0">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 text-white flex items-center justify-center text-lg shadow-md shadow-emerald-500/20">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-slate-900">Your AI Diet Plan</h3>
                      <p className="text-xs text-slate-400">Generated just now</p>
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto pr-2 space-y-4 custom-scrollbar">
                    {typeof result === 'string' ? (
                      <div className="whitespace-pre-wrap font-sans text-sm leading-relaxed bg-gradient-to-br from-slate-50 to-orange-50/30 p-5 sm:p-6 rounded-2xl border border-slate-100 text-slate-700">
                        {result}
                      </div>
                    ) : (
                      <pre className="bg-slate-50 p-5 sm:p-6 rounded-2xl overflow-x-auto border border-slate-100 text-sm text-slate-700">
                        {JSON.stringify(result, null, 2)}
                      </pre>
                    )}
                  </div>
                  
                  <div className="pt-5 mt-auto shrink-0 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-3">
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <i className="fa-solid fa-circle-info"></i>
                      AI-generated plan. Consult a doctor for medical advice.
                    </span>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => { setResult(null); setError(null); }}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-xl text-xs font-semibold text-slate-600 transition-all"
                      >
                        <i className="fa-solid fa-rotate"></i> New Plan
                      </button>
                      <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 rounded-xl text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-all">
                        <i className="fa-solid fa-download"></i> Save Plan
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Diet;
