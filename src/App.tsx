import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Icon from "./assets/synapse-small.png";
import { Documentation } from "./components/Documentation";
import { LandingPage } from "./components/LandingPage";
import { Navbar } from "./components/Navbar";


const App = () => {
	// const [scrolled, setScrolled] = useState(false);
	const [activeTab, setActiveTab] = useState("windows");

	return (
		<div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500/30">
			{/* Background Gradients */}
			<div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
				<div
					className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse"
					style={{ animationDuration: "4s" }}
				></div>
				<div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl mix-blend-screen animate-pulse"
					style={{ animationDuration: "7s" }}
				></div>
			</div>

      <Routes>
        <Route path="/" element={<LandingPage activeTab={activeTab} setActiveTab={setActiveTab} />} />
        <Route path="/docs" element={<Navigate to="/docs/introduction" replace />} />
        <Route path="/docs/:slug" element={<Documentation />} />
      </Routes>

			{/* Navigation */}
			<Navbar />

			

			{/* Footer */}
			<footer className="border-t border-slate-900 bg-slate-950 py-12 px-6">
				<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
					<div className="flex items-center gap-2">
						<img src={Icon} alt="Synapse Icon" className="w-8 h-8 rounded-md" />
						{/* <Workflow className="text-slate-600 w-6 h-6" /> */}
						<span className="text-slate-500 font-bold">Synapse</span>
					</div>

					<div className="flex gap-8 text-sm text-slate-500">
						<a
							href="https://github.com/JeremyMColegrove/synapse-releases"
							className="hover:text-white transition-colors"
						>
							GitHub
						</a>
						<a
							href="https://x.com/Blakletter"
							className="hover:text-white transition-colors"
						>
							Twitter
						</a>
						<a
							href="https://github.com/JeremyMColegrove/synapse-releases/blob/main/LICENSE"
							className="hover:text-white transition-colors"
						>
							License
						</a>
					</div>

					<div className="text-xs text-slate-600">© 2025 Jeremy Colegrove</div>
				</div>
			</footer>

			<style>{`
        @keyframes dash {
          to {
            stroke-dashoffset: -100;
          }
        }
        .animate-dash {
          animation: dash 3s linear infinite;
        }
        .animate-dash-reverse {
          animation: dash 3s linear infinite reverse;
        }
      `}</style>
	</div>

	);
}

export default App;
