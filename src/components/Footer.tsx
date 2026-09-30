import React from 'react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative z-10 bg-[#0d0d1c] border-t border-[#4a4455]/30">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-16 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <button
            onClick={() => onNavigate('hero')}
            className="text-xl font-bold text-[#e3e0f7] tracking-tight flex items-center gap-2 cursor-pointer focus:outline-none"
          >
            <span className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#7c3aed] to-[#3626ce] flex items-center justify-center text-white font-bold text-xs shadow-[0_0_10px_rgba(124,58,237,0.5)]">
              S
            </span>
            <span>Shourov</span>
          </button>
          <p className="text-xs text-[#958da1] text-center md:text-left">
            © 2026 Shourov · UI/UX Designer &amp; CMS Specialist
          </p>
        </div>

        {/* Footer Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button
            onClick={() => onNavigate('work')}
            className="text-[#958da1] hover:text-[#e3e0f7] transition-colors duration-200 text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Case Studies
          </button>
          <button
            onClick={() => onNavigate('process')}
            className="text-[#958da1] hover:text-[#e3e0f7] transition-colors duration-200 text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Process
          </button>

          <button
            onClick={() => onNavigate('about')}
            className="text-[#958da1] hover:text-[#e3e0f7] transition-colors duration-200 text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            About
          </button>
        </div>
      </div>
    </footer>
  );
};
