

import { Link } from 'react-router-dom';
import { MessageSquare, GraduationCap, Cpu, ArrowRight } from 'lucide-react';

const WelcomePage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      
      {/* Navigation Header */}
      <header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur fixed top-0 left-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center">
            <GraduationCap className="w-4 h-4 text-black" />
          </div>
          <div>
            <span className="text-white font-semibold tracking-tight block leading-tight">Synapse</span>
            <span className="text-[10px] text-zinc-500 block">AI Learning Companion</span>
          </div>
        </div>

        <nav className="flex items-center gap-4 md:gap-6">
          <Link to="/chat" className="text-sm text-zinc-400 hover:text-zinc-100 transition font-medium">
            Studyspace
          </Link>
          <Link to="/auth/login" className="text-sm text-zinc-400 hover:text-zinc-100 transition font-medium">
            Login
          </Link>
          <Link to="/auth/register" className="text-sm bg-white text-black px-4 py-2 rounded-xl font-medium hover:bg-zinc-200 transition">
            Sign Up
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-32 pb-16 max-w-5xl mx-auto w-full text-center">
        {/* Groq / Llama Engine Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-900 border border-zinc-800 px-3 py-1.5 rounded-full text-xs text-zinc-400 mb-6">
          <Cpu className="w-3.5 h-3.5 text-zinc-400" />
          <span>Powered by <strong className="text-zinc-200 font-semibold">Groq™</strong> • llama-3.3-70b-versatile</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-[1.15] mb-6">
          Learn deeper. <br />
          <span className="bg-gradient-to-r from-zinc-400 via-zinc-200 to-zinc-500 bg-clip-text text-transparent">
            Understand faster.
          </span>
        </h1>

        <p className="text-zinc-400 text-base md:text-lg max-w-2xl mb-10 leading-relaxed">
          Meet your intelligent educational companion. Synapse is an AI mentor designed to break down complex topics, guide critical discussions, and accelerate your self-taught curriculum.
        </p>

        {/* Call to Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-20">
          <Link to="/chat" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-200 px-6 py-3.5 rounded-2xl font-medium transition shadow-sm group">
            Enter Study Space
            <MessageSquare className="w-4 h-4 text-zinc-400 group-hover:text-zinc-200 transition" />
          </Link>
          
          <Link to="/auth/register" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-zinc-200 text-black px-6 py-3.5 rounded-2xl font-medium transition shadow-sm group">
            Start Learning
            <ArrowRight className="w-4 h-4 text-black group-hover:translate-x-0.5 transition" />
          </Link>
        </div>

        {/* Feature Grid Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left">
          <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl backdrop-blur-sm">
            <h3 className="text-white font-medium text-sm mb-2">Academic Mentorship</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Don't just get answers. Engage in collaborative, Socratic-style dialogue that challenges your understanding and helps you master complex topics.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl backdrop-blur-sm">
            <h3 className="text-white font-medium text-sm mb-2">Ultra-Fast Inference</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              Leveraging Groq's high-speed hardware processing architecture to deliver extensive learning material and explanations at lightning velocity.
            </p>
          </div>

          <div className="p-6 bg-zinc-900/40 border border-zinc-800/80 rounded-2xl backdrop-blur-sm">
            <h3 className="text-white font-medium text-sm mb-2">Tailored Explanation Scales</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">
              From high-level breakdowns to deep technical deep-dives, customize your mentor’s complexity depth to match your current level.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full border-t border-zinc-900 py-6 text-center text-xs text-zinc-600 px-6">
        &copy; {new Date().getFullYear()} Synapse AI. All rights reserved.
      </footer>
    </div>
  );
};

export default WelcomePage;