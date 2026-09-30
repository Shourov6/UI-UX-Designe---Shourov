import React from 'react';
import { Sparkles, Terminal } from 'lucide-react';

const skillsAndTools = [
  { name: 'UI Design', type: 'skill' },
  { name: 'UX Design', type: 'skill' },
  { name: 'Figma', type: 'tool' },
  { name: 'UX Research', type: 'skill' },
  { name: 'User Flows', type: 'skill' },
  { name: 'Webflow', type: 'tool' },
  { name: 'Wireframing', type: 'skill' },
  { name: 'Prototyping', type: 'skill' },
  { name: 'Wix', type: 'tool' },
  { name: 'Design Systems', type: 'skill' },
  { name: 'Responsive Design', type: 'skill' },
  { name: 'Squarespace', type: 'tool' },
  { name: 'Interaction Design', type: 'skill' },
  { name: 'Information Architecture', type: 'skill' },
  { name: 'Usability', type: 'skill' },
  { name: 'Visual Design', type: 'skill' },
  { name: 'Accessibility', type: 'skill' }
];

// Duplicate multiple times to ensure it covers wide screens and loops seamlessly at 50%
const marqueeItems = [...skillsAndTools, ...skillsAndTools, ...skillsAndTools, ...skillsAndTools];

export const ToolkitSection: React.FC = () => {
  return (
    <section id="toolkit" aria-label="Skills and Tools Marquee" className="py-6 border-y border-[#4a4455]/30 bg-[#0d0d1c]/80 relative z-10 overflow-hidden flex items-center">
      
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#121221] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#121221] to-transparent z-10 pointer-events-none" />

      <div className="flex w-max animate-marquee items-center gap-4 md:gap-6 pl-4 md:pl-6 hover:pause" aria-hidden="true">
        {marqueeItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-full border whitespace-nowrap transition-colors cursor-default ${
              item.type === 'skill'
                ? 'border-[#7c3aed]/30 bg-[#7c3aed]/[0.08] text-[#ccc3d8] hover:border-[#7c3aed]/60'
                : 'border-[#3626ce]/40 bg-[#3626ce]/[0.1] text-[#e3e0f7] hover:border-[#3626ce]/70'
            }`}
          >
            {item.type === 'skill' ? (
              <Sparkles className="w-3.5 h-3.5 text-[#ffb0cd]" aria-hidden="true" />
            ) : (
              <Terminal className="w-3.5 h-3.5 text-[#d2bbff]" aria-hidden="true" />
            )}
            <span className="text-sm font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
