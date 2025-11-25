import { CheckCircle2, Code, Command, Cpu, Download, Monitor, Server, Share2, Terminal, Workflow, Zap } from "lucide-react";
import CodeImage from '../assets/synapse_code_export.webp';
import NodesImage from '../assets/synapse_product_1.webp';
import AiImage from '../assets/synapse_product_2.webp';
import ConsoleImage from '../assets/synapse_product_3.webp';

interface LandingPageProps {
	activeTab: string
	setActiveTab: (tab:string) => void
}

export const LandingPage = ({activeTab, setActiveTab}: LandingPageProps) => {

    const downloadFile = (os: "windows" | "linux" | "mac_arm" | "mac_intel") => {
		if (os === "windows") {
			window.open(
				"https://github.com/JeremyMColegrove/synapse-releases/releases/download/v1.1.0-beta/Synapse-1.0.0-win-x64.exe",
				"_blank",
			);
		} else if (os === "linux") {
			window.open(
				"https://github.com/JeremyMColegrove/synapse-releases/releases/download/v1.1.0-beta/Synapse-1.1.1-linux-x64.AppImage",
				"_blank",
			);
		} else if (os === "mac_arm") {
			window.open(
				"https://github.com/JeremyMColegrove/synapse-releases/releases/download/v1.1.0-beta/Synapse-1.1.1-mac-arm64.dmg",
				"_blank",
			);
		} else if (os === "mac_intel") {
			window.open(
				"https://github.com/JeremyMColegrove/synapse-releases/releases/download/v1.1.0-beta/Synapse-1.1.1-mac-x64.dmg",
				"_blank",
			);
		}
	};
    
    const features = [
		{
			icon: <Workflow className="w-6 h-6 text-cyan-400" />,
			title: "Visual Node Engine",
			description:
				"Drag-and-drop Script, If/Else, and AI nodes to construct complex logic flows in seconds.",
		},
		{
			icon: <Code className="w-6 h-6 text-purple-400" />,
			title: "Native JavaScript",
			description:
				"Write standard JS in script nodes. Data flows seamlessly from one return statement to the next input.",
		},
		{
			icon: <Zap className="w-6 h-6 text-yellow-400" />,
			title: "Concurrency",
			description:
				"Execute nodes in parallel using built-in Promise.all support. Speed up heavy workflows instantly.",
		},
		{
			icon: <Server className="w-6 h-6 text-green-400" />,
			title: "Instant Server",
			description:
				"Spin up a local server on any port. Your workflow becomes a live POST endpoint immediately.",
		},
		{
			icon: <Cpu className="w-6 h-6 text-red-400" />,
			title: "AI Integration",
			description:
				"Dedicated AI nodes allow you to pipe data into LLMs and process intelligent responses.",
		},
		{
			icon: <Share2 className="w-6 h-6 text-blue-400" />,
			title: "Code Export",
			description:
				"Compile your entire visual workflow into server code. Edit, make it yours, deploy anywhere.",
		},
	];

    return <>
			<header className="relative z-10 pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
				<div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wide">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
								<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
							</span>
							Early Beta Available
						</div>

						<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-tight">
							Build API Servers with ease.
						</h1>

						<p className="text-lg text-slate-400 max-w-xl leading-relaxed">
							The ultimate node-based API workflow engine. Prototype scripts,
							integrate AI, and generate code in minutes—not days.
						</p>

						<div className="flex flex-wrap gap-4">
							<a
								href="#download"
								className="flex items-center gap-3 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 group"
							>
								<Download className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
								Download Beta
							</a>
							{/* <button className="flex items-center gap-3 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold transition-all border border-slate-700">
                <Terminal className="w-5 h-5" />
                View Docs
              </button> */}
						</div>

						<div className="flex items-center gap-4 text-sm text-slate-500 pt-4">
							{/* <span className="flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Open Source</span> */}
							<span className="flex items-center gap-1">
								<CheckCircle2 className="w-4 h-4 text-emerald-500" /> No Sign-up
							</span>
							<span className="flex items-center gap-1">
								<CheckCircle2 className="w-4 h-4 text-emerald-500" /> Cross
								Platform
							</span>
						</div>
					</div>

					{/* Abstract Visual Representation of Node Editor */}
					<div className="relative lg:h-[600px] w-full flex items-center justify-center">
						<div className="relative w-full max-w-md aspect-square sm:max-w-lg">
							{/* Floating Nodes Animation */}
							<div className="absolute top-4 left-2 sm:top-0 sm:left-0 w-44 sm:w-48 p-4 bg-slate-900/90 backdrop-blur-xl border border-slate-700 rounded-xl shadow-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-20">
								<div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
									<span className="text-xs font-bold text-green-400">
										POST /analyze
									</span>
									<div className="w-2 h-2 rounded-full bg-green-500"></div>
								</div>
								<div className="space-y-2">
									<div className="h-2 w-3/4 bg-slate-800 rounded"></div>
									<div className="h-2 w-1/2 bg-slate-800 rounded"></div>
								</div>
							</div>

							<div className="absolute top-1/2 -translate-y-1/2 right-2 sm:top-1/3 sm:translate-y-0 sm:right-0 w-48 sm:w-56 p-4 bg-slate-900/90 backdrop-blur-xl border border-purple-500/30 rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 z-10">
								<div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
									<span className="text-xs font-bold text-purple-400">
										AI Logic Node
									</span>
									<div className="w-2 h-2 rounded-full bg-purple-500"></div>
								</div>
								<code className="block text-[10px] text-slate-400 font-mono bg-slate-950 p-2 rounded border border-slate-800">
									const prompt = input.data;
									<br />
									return await AI.generate(prompt);
								</code>
							</div>

							<div className="absolute bottom-0 left-8 sm:bottom-10 sm:left-12 w-44 sm:w-52 p-4 bg-slate-900/90 backdrop-blur-xl border border-cyan-500/30 rounded-xl shadow-2xl transform rotate-6 hover:rotate-0 transition-transform duration-500 z-30">
								<div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
									<span className="text-xs font-bold text-cyan-400">
										JS Script Node
									</span>
									<div className="w-2 h-2 rounded-full bg-cyan-500"></div>
								</div>
								<div className="flex items-center gap-2">
									<Terminal className="w-4 h-4 text-slate-500" />
									<span className="text-xs text-slate-300">
										Processing Data...
									</span>
								</div>
							</div>

							{/* Connection Lines (SVG) */}
							<svg
								viewBox="0 0 400 420"
								preserveAspectRatio="none"
								className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40"
							>
								<path
									d="M110 70 C 210 130, 260 160, 310 200"
									stroke="url(#gradient1)"
									strokeWidth="3"
									fill="none"
									strokeDasharray="10 10"
									className="animate-dash"
								/>
								<path
									d="M310 240 C 250 310, 190 330, 130 370"
									stroke="url(#gradient2)"
									strokeWidth="3"
									fill="none"
									strokeDasharray="10 10"
									className="animate-dash-reverse"
								/>
								<defs>
									<linearGradient
										id="gradient1"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="0%"
									>
										<stop offset="0%" stopColor="#10b981" />
										<stop offset="100%" stopColor="#a855f7" />
									</linearGradient>
									<linearGradient
										id="gradient2"
										x1="0%"
										y1="0%"
										x2="100%"
										y2="0%"
									>
										<stop offset="0%" stopColor="#a855f7" />
										<stop offset="100%" stopColor="#06b6d4" />
									</linearGradient>
								</defs>
							</svg>
						</div>
					</div>
				</div>
			</header>

			{/* Features Grid */}
			<section id="features" className="py-24 bg-slate-900/50 relative">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Designed for Developers
						</h2>
						<p className="text-slate-400">
							Synapse isn't just a toy. It's a full-fledged prototyping and
							deployment environment that bridges the gap between visual clarity
							and raw code performance.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
						{features.map((feature, idx) => (
							<div
								key={idx}
								className="p-6 rounded-2xl bg-slate-950 border border-slate-800 hover:border-slate-700 hover:bg-slate-900 transition-all group"
							>
								<div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
									{feature.icon}
								</div>
								<h3 className="text-xl font-semibold text-white mb-2">
									{feature.title}
								</h3>
								<p className="text-slate-400 text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Product Screenshots Section */}
			<section className="py-24 bg-slate-950 relative overflow-hidden">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center max-w-3xl mx-auto mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
							Powerful Interface
						</h2>
						<p className="text-slate-400">
							Built for speed and clarity. Everything you need to build and deploy
							APIs in one window.
						</p>
					</div>

					<div className="grid md:grid-cols-2 gap-8">
						<div className="space-y-8">
							<div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-video hover:border-cyan-500/30 transition-all">
								<div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium bg-slate-900">
									Product Screenshot: Workflow Editor
								</div>
								<img src={NodesImage} alt="Workflow Editor" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
								<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
									<h3 className="text-lg font-semibold text-white">
										Visual Workflow Editor
									</h3>
									<p className="text-sm text-slate-400">
										Connect nodes to build logic flows instantly.
									</p>
								</div>
							</div>
							<div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-video hover:border-purple-500/30 transition-all">
								<div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium bg-slate-900">
									Product Screenshot: AI Integration
								</div>
								<img src={AiImage} alt="AI Integration" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
								<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
									<h3 className="text-lg font-semibold text-white">
										AI Integration
									</h3>
									<p className="text-sm text-slate-400">
										Embed LLMs directly into your API routes.
									</p>
								</div>
							</div>
						</div>
						<div className="space-y-8 md:pt-12">
							<div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-video hover:border-green-500/30 transition-all">
								<div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium bg-slate-900">
									Product Screenshot: Code Generation
								</div>
								<img src={CodeImage} alt="Code Generation" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
								<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
									<h3 className="text-lg font-semibold text-white">
										Clean Code Export
									</h3>
									<p className="text-sm text-slate-400">
										Export to standard Express.js server code.
									</p>
								</div>
							</div>
							<div className="group relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/50 aspect-video hover:border-yellow-500/30 transition-all">
								<div className="absolute inset-0 flex items-center justify-center text-slate-600 font-medium bg-slate-900">
									Product Screenshot: Server Logs
								</div>
								<img src={ConsoleImage} alt="Server Logs" className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
								<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-950 to-transparent">
									<h3 className="text-lg font-semibold text-white">
										Real-time Logs
									</h3>
									<p className="text-sm text-slate-400">
										Monitor your local server with built-in logging.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Detailed Workflow Section */}
			<section id="workflow" className="py-24 px-6">
				<div className="max-w-7xl mx-auto bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
					<div className="grid lg:grid-cols-2">
						<div className="p-12 flex flex-col justify-center space-y-8">
							<div>
								<h3 className="text-2xl font-bold text-white mb-2">
									From Concept to Code
								</h3>
								<p className="text-slate-400">
									Stop writing boilerplate express server code. Draw your logic,
									test it, and ship it.
								</p>
							</div>

							<div className="space-y-6">
								<div className="flex gap-4">
									<div className="mt-1 w-8 h-8 rounded-full bg-cyan-900/30 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">
										1
									</div>
									<div>
										<h4 className="text-white font-medium">Design Visually</h4>
										<p className="text-sm text-slate-500 mt-1">
											Drag nodes to create your API flow. Use "If" nodes for
											branching logic and Script nodes for complex data
											manipulation.
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="mt-1 w-8 h-8 rounded-full bg-purple-900/30 text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
										2
									</div>
									<div>
										<h4 className="text-white font-medium">Test Instantly</h4>
										<p className="text-sm text-slate-500 mt-1">
											Hit "Start Server" to expose your workflow on localhost.
											Send POST requests immediately to verify logic.
										</p>
									</div>
								</div>
								<div className="flex gap-4">
									<div className="mt-1 w-8 h-8 rounded-full bg-green-900/30 text-green-400 flex items-center justify-center font-bold text-sm shrink-0">
										3
									</div>
									<div>
										<h4 className="text-white font-medium">Compile & Deploy</h4>
										<p className="text-sm text-slate-500 mt-1">
											One click exports a NodeJS express server. Edit it, run it
											anywhere.
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Code/Visual Preview Mockup */}
						<div className="bg-slate-950 border-l border-slate-800 p-8 font-mono text-sm overflow-hidden relative">
							<div className="flex items-center gap-2 mb-6 text-slate-500 border-b border-slate-800 pb-4">
								<div className="w-3 h-3 rounded-full bg-red-500/50"></div>
								<div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
								<div className="w-3 h-3 rounded-full bg-green-500/50"></div>
								<span className="ml-2 text-xs">exported_server.js</span>
							</div>

							<div className="space-y-1 text-slate-400 opacity-80">
								<p>
									<span className="text-purple-400">const</span> express ={" "}
									<span className="text-yellow-300">require</span>('express');
								</p>
								<p>
									<span className="text-purple-400">const</span> app ={" "}
									<span className="text-blue-400">express</span>();
								</p>
								<p className="h-4"></p>
								<p className="text-slate-500">// Generated Synapse Workflow</p>
								<p>
									<span className="text-purple-400">async function</span>{" "}
									<span className="text-blue-400">runWorkflow</span>(input){" "}
									{"{"}
								</p>
								<p className="pl-4">
									<span className="text-purple-400">const</span> node1 ={" "}
									<span className="text-purple-400">await</span>{" "}
									scriptNode(input);
								</p>
								<p className="pl-4">
									<span className="text-slate-500">// Parallel Execution</span>
								</p>
								<p className="pl-4">
									<span className="text-purple-400">const</span> [aiResult,
									dbResult] ={" "}
									<span className="text-purple-400">await Promise</span>.all([
								</p>
								<p className="pl-8">aiNode(node1),</p>
								<p className="pl-8">fetchNode(node1)</p>
								<p className="pl-4">]);</p>
								<p className="pl-4">
									<span className="text-purple-400">return</span> {"{"} ai:
									aiResult, db: dbResult {"}"};
								</p>
								<p>{"}"}</p>
							</div>

							<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
						</div>
					</div>
				</div>
			</section>

			{/* Download Section */}
			<section id="download" className="py-24 relative overflow-hidden">
				<div className="absolute inset-0 bg-cyan-900/5 z-0"></div>
				<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
					<h2 className="text-4xl font-bold text-white mb-6">
						Start Building Today
					</h2>
					<p className="text-slate-400 mb-12 max-w-lg mx-auto">
						Synapse is currently in Early Beta. Join us in shaping the future of
						visual backend development.
					</p>

					<div className="bg-slate-900/80 backdrop-blur-sm p-2 rounded-2xl flex flex-col md:inline-flex md:flex-row mb-12 border border-slate-800">
						{["windows", "mac", "linux"].map((os) => (
							<button
								key={os}
								onClick={() => setActiveTab(os)}
								className={`px-8 py-3 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 ${
									activeTab === os
										? "bg-cyan-600 text-white shadow-lg shadow-cyan-500/25"
										: "text-slate-400 hover:text-white hover:bg-slate-800"
								}`}
							>
								{os === "windows" && <Monitor className="w-4 h-4" />}
								{os === "mac" && <Command className="w-4 h-4" />}
								{os === "linux" && <Terminal className="w-4 h-4" />}
								{os.charAt(0).toUpperCase() + os.slice(1)}
							</button>
						))}
					</div>

					<div className="bg-slate-950 border border-slate-800 rounded-3xl p-12 max-w-3xl mx-auto relative group hover:border-cyan-500/30 transition-colors">
						<div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-slate-900 border border-slate-700 text-slate-300 px-4 py-1 rounded-full text-xs font-medium shadow-xl">
							Latest Version: v1.1.0 (Beta)
						</div>

						<div className="mb-8">
							<div className="w-20 h-20 bg-slate-900 rounded-2xl mx-auto flex items-center justify-center mb-6 border border-slate-800 group-hover:scale-110 transition-transform duration-300">
								{activeTab === "windows" && (
									<Monitor className="w-10 h-10 text-cyan-400" />
								)}
								{activeTab === "mac" && (
									<Command className="w-10 h-10 text-purple-400" />
								)}
								{activeTab === "linux" && (
									<Terminal className="w-10 h-10 text-yellow-400" />
								)}
							</div>
							<h3 className="text-2xl font-bold text-white mb-2">
								Download for{" "}
								{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
							</h3>
							<p className="text-slate-400 text-sm">
								{activeTab === "windows"
									? "Requires Windows 10/11 (64-bit)"
									: activeTab === "mac"
										? "Choose your processor architecture"
										: "AppImage available"}
							</p>
						</div>
						{activeTab === "mac" ? (
							<div className="flex flex-col md:flex-row gap-4 justify-center">
								<button
									onClick={() => downloadFile("mac_arm")}
									className="px-8 py-4 text-slate-900 hover:bg-cyan-50 bg-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3"
								>
									<Cpu className="w-5 h-5" />
									Apple Silicon (ARM64)
								</button>
								<button
									onClick={() => downloadFile("mac_intel")}
									className="px-8 py-4 text-slate-900 hover:bg-cyan-50 bg-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3"
								>
									<Download className="w-5 h-5" />
									Intel (x64)
								</button>
							</div>
						) : (
							<button
								onClick={() => downloadFile(activeTab as "windows" | "linux")}
								className="w-full md:w-auto px-12 py-4 bg-white text-slate-900 hover:bg-cyan-50 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-3 mx-auto"
							>
								<Download className="w-5 h-5" />
								Download Installer
							</button>
						)}

						<div className="mt-6 text-xs text-slate-500">
							Hosted safely on GitHub Releases •{" "}
							<a
								href="https://github.com/JeremyMColegrove/synapse-releases/releases"
								className="underline hover:text-cyan-400"
							>
								View Release Notes
							</a>
						</div>
					</div>
				</div>
			</section>
            </>
}