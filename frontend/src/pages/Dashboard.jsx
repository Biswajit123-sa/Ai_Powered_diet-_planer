import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import mealPrepImg from '../assets/photo-1565895405138-6c3a1555da6a.avif';
import nutritionImg from '../assets/photo-1644704170910-a0cdf183649b.avif';

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user')) || { name: 'User' };

  return (
    <div className="flex-grow flex bg-slate-50">
      <Sidebar />
      
      <main className="flex-1 max-w-5xl mx-auto p-6 md:p-8 lg:p-12 w-full">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Welcome, {user.name} 👋</h1>
          <p className="text-slate-600">You should maintain this type of balance ratio of your diet plan.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Stat Card 1 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center text-xl shrink-0">
              <i className="fa-solid fa-fire"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Daily Goal</p>
              <h3 className="text-2xl font-bold text-slate-900">2,100 <span className="text-sm font-normal text-slate-500">kcal</span></h3>
            </div>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-500 flex items-center justify-center text-xl shrink-0">
              <i className="fa-solid fa-droplet"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Water</p>
              <h3 className="text-2xl font-bold text-slate-900">1.5 <span className="text-sm font-normal text-slate-500">/ 3L</span></h3>
            </div>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-100 flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-500 flex items-center justify-center text-xl shrink-0">
              <i className="fa-solid fa-weight-scale"></i>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">Current Weight</p>
              <h3 className="text-2xl font-bold text-slate-900">75 <span className="text-sm font-normal text-slate-500">kg</span></h3>
            </div>
          </div>
        </div>

        {/* Image Cards replacing Quick Actions & Recent Activity */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Meal Prep Card */}
          <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={mealPrepImg} 
                alt="Healthy meal preparation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-orange-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                  <i className="fa-solid fa-wand-magic-sparkles mr-1"></i>AI Powered
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Generate Your Diet Plan</h3>
              <p className="text-slate-300 text-sm mb-4">Get a personalized AI-generated meal plan tailored to your goals.</p>
              <Link 
                to="/diet" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 text-slate-900 rounded-xl text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                Create Plan
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>

          {/* Nutrition Chat Card */}
          <div className="group relative rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={nutritionImg} 
                alt="Nutrition and health guidance" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-xs font-semibold backdrop-blur-sm">
                  <i className="fa-solid fa-robot mr-1"></i>AI Chat
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Ask Your Nutritionist</h3>
              <p className="text-slate-300 text-sm mb-4">Chat with our AI nutritionist for instant diet advice and tips.</p>
              <Link 
                to="/chat" 
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/95 text-slate-900 rounded-xl text-sm font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 backdrop-blur-sm shadow-lg"
              >
                Start Chat
                <i className="fa-solid fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
