import { ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { MarkdownDocRenderer } from "./Markdown";

export const DOCS = [
  { title: "Introduction", filename: "introduction.md" },
  { title: "Nodes", filename: "nodes.md" },
  { title: "Global Variables", filename: "global_variables.md" },
  { title: "Global Functions", filename: "global_functions.md" },
  { title: "Database", filename: "database.md" },
  { title: "Secrets", filename: "secrets.md" },
  { title: "Security", filename: "security.md" },
  { title: "Server Initialization", filename: "server_initialization.md" },
];

export const Documentation = () => {
    const { slug } = useParams();
    const [docsContent, setDocsContent] = useState<string>("");
    const location = useLocation();

    useEffect(() => {
        if (!slug) return;
        
        // Append .md if it's missing (though our links won't have it)
        // We assume the slug maps directly to the filename minus extension
        const filename = slug.endsWith('.md') ? slug : `${slug}.md`;

        fetch(`/docs/${filename}`)
            .then(res => res.text())
            .then(text => setDocsContent(text))
            .catch(err => console.error("Failed to load doc:", err));
    }, [slug]);

    // Handle hash scrolling
    useEffect(() => {
      if (location.hash) {
        const id = location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo(0, 0);
      }
    }, [slug, docsContent]); // Only run on content change or slug change, NOT on hash change to avoid fighting scroll spy

    return <div className="pt-24 pb-20 max-w-[90rem] mx-auto px-6 animate-in slide-in-from-right duration-500">
      <div className="grid md:grid-cols-12 gap-12">
        {/* Sidebar */}
        <aside className="md:col-span-3 lg:col-span-2 hidden md:block">
          <div className="sticky top-28 space-y-8">
            <div>
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Documentation</h3>
              <div className="space-y-1">
                {DOCS.map((doc) => {
                  const docSlug = doc.filename.replace('.md', '');
                  const isActive = slug === docSlug;
                  return (
                    <Link
                      key={doc.filename}
                      to={`/docs/${docSlug}`}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center justify-between group ${
                        isActive
                          ? 'bg-cyan-500/10 text-cyan-400 font-medium' 
                          : 'text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                    >
                      {doc.title}
                      {isActive && <ChevronRight className="w-3 h-3" />}
                    </Link>
                  );
                })}
              </div>
            </div>
            
            <div className="pt-6 border-t border-slate-800">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4">Resources</h3>
              <a href="#" className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg">Community Discord</a>
              <a href="#" className="block px-3 py-2 text-sm text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg">Report a Bug</a>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="md:col-span-9 lg:col-span-10 min-h-[60vh]">
          <MarkdownDocRenderer markdown={docsContent} />
        </main>
      </div>
    </div>
}
