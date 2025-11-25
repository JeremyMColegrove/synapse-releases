import { Github, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "../assets/synapse-small.png";
import { DOCS } from "./Documentation";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isDocs = location.pathname.startsWith('/docs');

  const navigateTo = (destination: 'landing' | 'docs') => {
    setMobileMenuOpen(false);
    window.scrollTo(0, 0);
    if (destination === 'landing') {
      navigate('/');
    } else {
      navigate('/docs/introduction.md');
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/80 border-b border-slate-900 backdrop-blur-md`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
            <img
              src={Icon}
              alt="Synapse Icon"
              className="w-8 h-8 rounded-md"
            />
          </div>
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            Synapse
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          {/* Only show anchor links on landing page */}
          {!isDocs && (
            <>
              <a
                href="#features"
                className="hover:text-cyan-400 transition-colors"
              >
                Features
              </a>
              <a
                href="#workflow"
                className="hover:text-cyan-400 transition-colors"
              >
                How it Works
              </a>
              <a
                href="#download"
                className="hover:text-cyan-400 transition-colors"
              >
                Download
              </a>
            </>
          )}
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <button onClick={() => navigateTo('landing')} className={`hover:text-cyan-400 transition-colors ${!isDocs ? 'text-cyan-400' : ''}`}>Features</button>
          <button onClick={() => navigateTo('docs')} className={`transition-colors ${isDocs ? 'text-cyan-400' : 'hover:text-cyan-400'}`}>Documentation</button>
          <a
            href="https://github.com/JeremyMColegrove/synapse-releases/releases"
            className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-slate-700 hover:border-cyan-500/50"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Releases</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-slate-400 hover:text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <>
          <div 
            className="md:hidden absolute top-full left-0 w-full h-screen bg-black/60 backdrop-blur-sm z-[-1] animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-900 p-6 flex flex-col gap-4 shadow-2xl animate-in slide-in-from-top-8 fade-in duration-300 z-50">
            <button 
              onClick={() => navigateTo('landing')} 
              className={`text-left py-2 hover:text-cyan-400 transition-colors ${!isDocs ? 'text-cyan-400' : 'text-slate-400'}`}
            >
              Features
            </button>
            <button 
              onClick={() => navigateTo('docs')} 
              className={`text-left py-2 transition-colors ${isDocs ? 'text-cyan-400' : 'text-slate-400 hover:text-cyan-400'}`}
            >
              Documentation
            </button>
            
            {/* Mobile Docs Submenu */}
            <div className="pl-4 border-l border-slate-800 space-y-2 flex flex-col">
              {DOCS.map(doc => (
                <button
                  key={doc.filename}
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate(`/docs/${doc.filename.replace('.md', '')}`);
                  }}
                  className={`text-left text-sm py-1 transition-colors ${
                    location.pathname.includes(doc.filename.replace('.md', '')) 
                      ? 'text-cyan-400' 
                      : 'text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {doc.title}
                </button>
              ))}
            </div>
            <a
              href="https://github.com/JeremyMColegrove/synapse-releases/releases"
              className="flex items-center gap-2 text-slate-400 hover:text-white py-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub Releases</span>
            </a>
          </div>
        </>
      )}
    </nav>
  );
};
