import React from 'react';
import { Hash } from 'lucide-react';

const PageHeader = ({ title, icon: Icon, tag }) => (
    <div className="space-y-6 mb-10">
        <div className="flex items-center gap-3 text-blue-500 font-mono text-xs tracking-[0.4em] uppercase font-bold">
            <Hash size={14} /> {tag}
        </div>
        <div className="flex items-center gap-5">
            <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-2xl text-blue-400">
                <Icon size={32} />
            </div>
            <h1 className="text-5xl font-black text-white tracking-tighter">{title}</h1>
        </div>
        <div className="h-px w-full bg-gradient-to-r from-white/[0.15] via-white/[0.05] to-transparent" />
    </div>
);

export default PageHeader;

