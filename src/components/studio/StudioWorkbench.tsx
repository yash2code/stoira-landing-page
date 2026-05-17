import React, { useState } from 'react';
import { 
  Layers, 
  MousePointer2, 
  Scissors, 
  Plus, 
  Settings, 
  MessageSquare, 
  Image as ImageIcon,
  Play,
  Monitor
} from 'lucide-react';

const StudioWorkbench: React.FC = () => {
  const [activeTool, setActiveTool] = useState('select');

  return (
    <div className="flex h-screen w-screen bg-[#0b1020] text-[#f8fafc] font-sans overflow-hidden">
      {/* Tactical Sidebar */}
      <div className="w-16 border-r border-[#334155] flex flex-col items-center py-6 gap-6 bg-[#111827] z-20">
        <div className="p-2 rounded-xl bg-white/5 hover:bg-white/10 cursor-pointer transition-colors">
          <Monitor size={20} className="text-white" />
        </div>
        
        <div className="flex flex-col gap-4 mt-8">
          <ToolButton 
            active={activeTool === 'select'} 
            onClick={() => setActiveTool('select')}
            icon={<MousePointer2 size={18} />} 
          />
          <ToolButton 
            active={activeTool === 'knife'} 
            onClick={() => setActiveTool('knife')}
            icon={<Scissors size={18} />} 
          />
          <ToolButton 
            active={activeTool === 'add'} 
            onClick={() => setActiveTool('add')}
            icon={<Plus size={18} />} 
          />
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <ToolButton icon={<Settings size={18} />} />
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 relative overflow-hidden bg-dot-grid">
        {/* Topbar Info */}
        <div className="absolute top-6 left-6 right-6 flex justify-between items-start pointer-events-none z-10">
          <div className="bg-[#111827]/90 border border-[#334155] px-4 py-2 rounded-full pointer-events-auto flex items-center gap-3 backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[10px] font-bold tracking-widest uppercase text-slate-400">System.Active</span>
            <span className="text-xs font-medium border-l border-slate-700 pl-3">New Project.Untitled</span>
          </div>

          <div className="flex gap-2 pointer-events-auto">
            <button className="bg-[#111827]/90 border border-[#334155] p-2 rounded-full hover:bg-white/5 transition-colors backdrop-blur-md">
              <Layers size={16} />
            </button>
          </div>
        </div>

        {/* Infinite Grid Placeholder */}
        <div className="absolute inset-0 opacity-20 pointer-events-none" 
             style={{ 
               backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', 
               backgroundSize: '24px 24px' 
             }} 
        />

        {/* Example Node */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 bg-[#111827] border border-[#334155] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-3 border-bottom border-[#334155] flex justify-between items-center bg-white/5">
            <span className="text-[10px] font-bold tracking-tighter uppercase text-slate-400">Node.01</span>
            <ImageIcon size={14} className="text-slate-500" />
          </div>
          <div className="h-40 bg-black/40 flex items-center justify-center border-y border-[#334155]">
             <span className="text-xs text-slate-600 font-mono italic">Empty Frame</span>
          </div>
          <div className="p-4 flex flex-col gap-2">
            <div className="h-2 w-3/4 bg-slate-800 rounded" />
            <div className="h-2 w-1/2 bg-slate-800 rounded" />
          </div>
        </div>

        {/* Studio Control Panel (Floating) */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-[#111827]/95 border border-[#334155] p-1.5 rounded-full shadow-2xl flex items-center gap-1 backdrop-blur-xl z-10">
          <ControlItem icon={<Plus size={16} />} label="Add Node" />
          <div className="w-[1px] h-4 bg-slate-800 mx-1" />
          <ControlItem icon={<MessageSquare size={16} />} label="Chat" />
          <ControlItem icon={<ImageIcon size={16} />} label="Image" />
          <ControlItem icon={<Play size={16} />} label="Run" />
        </div>
      </div>
    </div>
  );
};

const ToolButton = ({ icon, active = false, onClick }: any) => (
  <button 
    onClick={onClick}
    className={`p-3 rounded-xl transition-all duration-200 ${
      active 
      ? 'bg-white text-black shadow-lg shadow-white/10 scale-105' 
      : 'text-slate-400 hover:text-white hover:bg-white/5'
    }`}
  >
    {icon}
  </button>
);

const ControlItem = ({ icon, label }: any) => (
  <button className="flex items-center gap-2 px-4 py-2 hover:bg-white/5 rounded-full transition-colors group">
    <span className="text-slate-400 group-hover:text-white">{icon}</span>
    <span className="text-[11px] font-bold text-slate-500 group-hover:text-slate-200 tracking-tight">{label}</span>
  </button>
);

export default StudioWorkbench;
