// --- MARKDOWN PARSER & RENDERER ---

import { Check, Copy, Link as LinkIcon } from "lucide-react";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

interface CodeBlockProps {
    title: string
    language: string
    code: string
}

const CodeBlock = ({ title, language, code }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded-xl overflow-hidden bg-[#0d1117] border border-slate-800 shadow-2xl ring-1 ring-white/5 my-4 group">
      <div className="flex items-center justify-between px-3 py-2 bg-[#161b22] border-b border-slate-800/50">
        <span className="text-xs font-mono text-slate-400 font-medium">{title}</span>
        <div className="flex items-center gap-3">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">{language}</span>
          <button 
            onClick={handleCopy}
            className="text-slate-500 hover:text-white transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      <div className="overflow-x-auto custom-scrollbar">
        <SyntaxHighlighter
          language={language}
          style={vscDarkPlus}
          customStyle={{
            margin: 0,
            padding: '0.75rem',
            background: 'transparent',
            fontSize: '0.8rem',
            lineHeight: '1.4',
          }}
          showLineNumbers={true}
          lineNumberStyle={{
            minWidth: '2em',
            paddingRight: '1em',
            color: '#374151',
            textAlign: 'right',
            fontSize: '0.75rem',
            userSelect: 'none'
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

interface MarkdownTextRendererProps {
    text: string
}

const slugify = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-');  // Replace multiple - with single -
};

const HeadingRenderer = ({ level, children, ...props }: { level: 1 | 2 | 3 | 4, children?: React.ReactNode } & React.HTMLAttributes<HTMLHeadingElement>) => {
  const id = slugify(children?.toString() || '');
  const Tag = `h${level}` as React.ElementType;
  const [copied, setCopied] = useState(false);
  
  const baseStyles = {
    1: "text-3xl font-bold text-white tracking-tight pt-5 pb-3 scroll-mt-28",
    2: "text-2xl font-bold text-white tracking-tight pt-4 pb-2 scroll-mt-28",
    3: "text-lg font-semibold text-white pt-4 scroll-mt-28",
    4: "text-base font-semibold text-white pt-3 scroll-mt-28"
  };

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Tag id={id} className={`${baseStyles[level]} group flex items-center gap-2`} {...props}>
      {children}
      <a 
        href={`#${id}`}
        className="opacity-0 group-hover:opacity-100 transition-opacity text-slate-500 hover:text-cyan-400 cursor-pointer"
        aria-label="Copy link to this section"
        onClick={handleCopy}
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <LinkIcon className="w-4 h-4" />}
      </a>
    </Tag>
  );
};

const MarkdownTextRenderer = ({ text }: MarkdownTextRendererProps) => {
  return (
    <div className="space-y-3 text-slate-300 leading-6 text-[15px] font-sans tracking-normal">
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: ({node, ...props}) => <HeadingRenderer level={1} {...props} />,
          h2: ({node, ...props}) => <HeadingRenderer level={2} {...props} />,
          h3: ({node, ...props}) => <HeadingRenderer level={3} {...props} />,
          h4: ({node, ...props}) => <HeadingRenderer level={4} {...props} />,
          p: ({node, ...props}) => <p className="mb-3" {...props} />,
          ul: ({node, ...props}) => <ul className="list-disc ml-4 space-y-1 mb-3 marker:text-slate-500" {...props} />,
          ol: ({node, ...props}) => <ol className="list-decimal ml-4 space-y-1 mb-3 marker:text-slate-500" {...props} />,
          li: ({node, ...props}) => <li className="pl-1" {...props} />,
          code: ({node, className, children, ...props}) => {
            const match = /language-(\w+)/.exec(className || '')
            return !match ? (
              <code className="bg-slate-800 text-cyan-400 px-1.5 py-0.5 rounded text-xs font-mono border border-slate-700" {...props}>
                {children}
              </code>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
          a: ({node, ...props}) => <a className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 decoration-cyan-400/30 transition-colors" {...props} />,
          blockquote: ({node, ...props}) => <blockquote className="border-l-2 border-slate-700 pl-4 italic text-slate-400 my-4" {...props} />,
          table: ({node, ...props}) => <div className="overflow-x-auto my-6"><table className="min-w-full divide-y divide-slate-800" {...props} /></div>,
          thead: ({node, ...props}) => <thead className="bg-slate-800/50" {...props} />,
          th: ({node, ...props}) => <th className="px-4 py-2 text-left text-xs font-medium text-slate-300 uppercase tracking-wider" {...props} />,
          tbody: ({node, ...props}) => <tbody className="divide-y divide-slate-800" {...props} />,
          tr: ({node, ...props}) => <tr {...props} />,
          td: ({node, ...props}) => <td className="px-4 py-2 whitespace-nowrap text-sm text-slate-400" {...props} />,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
};

export const MarkdownDocRenderer = ({ markdown }: { markdown: string}) => {
  // Parses markdown and splits it into "Text + Right Content" sections for Stripe-like layout
  
  const codeBlockRegex = /```(\w+)(?::(.*?))?\n([\s\S]*?)```/g;
  const imageRegex = /!\[(.*?)\]\((.*?)\)/g;
  const iframeRegex = /<iframe[\s\S]*?<\/iframe>/g;

  const codeMatches = [...markdown.matchAll(codeBlockRegex)].map(m => ({
      type: 'code' as const,
      index: m.index!,
      length: m[0].length,
      language: m[1],
      title: m[2] || 'Example',
      content: m[3].trim()
  }));

  const imageMatches = [...markdown.matchAll(imageRegex)].map(m => ({
      type: 'image' as const,
      index: m.index!,
      length: m[0].length,
      alt: m[1],
      src: m[2]
  }));

  const iframeMatches = [...markdown.matchAll(iframeRegex)].map(m => ({
      type: 'html' as const,
      index: m.index!,
      length: m[0].length,
      content: m[0]
  }));

  const allMatches = [...codeMatches, ...imageMatches, ...iframeMatches].sort((a, b) => a.index - b.index);

  const sections = [];
  let lastIndex = 0;

  for (const match of allMatches) {
    // Content before this block
    const textContent = markdown.slice(lastIndex, match.index);
    
    // Determine right content
    let rightContent: { type: 'code' | 'image' | 'html', data: any } | null = null;

    if (match.type === 'code') {
        rightContent = {
            type: 'code',
            data: { title: match.title, language: match.language, code: match.content }
        };
    } else if (match.type === 'image') {
        rightContent = {
            type: 'image',
            data: { alt: match.alt, src: match.src }
        };
    } else if (match.type === 'html') {
        rightContent = {
            type: 'html',
            data: { content: match.content }
        };
    }

    // Logic to split textContent if it contains headers
    const headerRegex = /(?:^|\n)(#{1,6} )/g;
    let headerMatch;
    let lastHeaderIndex = -1;

    while ((headerMatch = headerRegex.exec(textContent)) !== null) {
        lastHeaderIndex = headerMatch.index;
    }

    if (lastHeaderIndex > 0) {
        // Split into [Pre-Header Content] and [Header + Content associated with Right Content]
        const preText = textContent.slice(0, lastHeaderIndex);
        const postText = textContent.slice(lastHeaderIndex);

        if (preText.trim()) {
            sections.push({
                type: 'text',
                text: preText,
                rightContent: null
            });
            
            sections.push({
                type: 'split',
                text: postText,
                rightContent
            });
        } else {
             sections.push({
                type: 'split',
                text: textContent,
                rightContent
            });
        }
    } else {
        if (textContent.trim()) {
            sections.push({
                type: 'split',
                text: textContent,
                rightContent
            });
        } else if (sections.length > 0) {
             // Back-to-back blocks or empty text
             sections.push({
                type: 'split',
                text: '',
                rightContent
            });
        }
    }

    lastIndex = match.index + match.length;
  }

  // Remaining text after last block
  const remainingText = markdown.slice(lastIndex);
  if (remainingText.trim()) {
    sections.push({
      type: 'full',
      text: remainingText,
      rightContent: null
    });
  }

  return (
    <div className="space-y-12">
      {sections.map((section, idx) => (
        <div key={idx} className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${section.text.trim() === '' ? '-mt-12' : ''}`}>
          <div className="space-y-4 pt-2">
            <MarkdownTextRenderer text={section.text} />
          </div>
          <div className="lg:sticky lg:top-24 w-full min-w-0">
            {section.rightContent?.type === 'code' && (
              <CodeBlock 
                title={section.rightContent.data.title}
                language={section.rightContent.data.language}
                code={section.rightContent.data.code}
              />
            )}
            {section.rightContent?.type === 'image' && (
                <div className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl ring-1 ring-white/5 my-4">
                    <img 
                        src={section.rightContent.data.src} 
                        alt={section.rightContent.data.alt} 
                        className="w-full h-auto object-cover"
                    />
                    {section.rightContent.data.alt && (
                        <div className="bg-[#161b22] px-4 py-2 text-xs text-slate-500 border-t border-slate-800">
                            {section.rightContent.data.alt}
                        </div>
                    )}
                </div>
            )}
            {section.rightContent?.type === 'html' && (
                <div 
                    className="rounded-xl overflow-hidden border border-slate-800 shadow-2xl ring-1 ring-white/5 my-4 aspect-video [&>iframe]:w-full [&>iframe]:h-full"
                    dangerouslySetInnerHTML={{ __html: section.rightContent.data.content }}
                />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};