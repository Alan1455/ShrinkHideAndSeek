import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import {
    ArrowLeft, HelpCircle, FileText, Lock,
    ShieldAlert, ChevronRight, Zap,
    Settings, Search, Cpu, Users, Heart, Home, Monitor,
} from 'lucide-react';

import FAQ from './FAQ';
import PrivacyPolicy from './PrivacyPolicy';
import TermsOfService from './TermsOfService';
import AboutTeam from './AboutTeam';
import Index from './Index';
import Troubleshooting from './Troubleshooting';
import RecommendedMods from './RecommendedMods';
import ServerProperties from './ServerProperties';
import DownloadAndSetup from './DownloadAndSetup';
import Donate from './Donate';


const MobileOverlay = () => {
    return (
        <div className="fixed inset-0 z-[100] flex md:hidden flex-col items-center justify-center bg-[#080808] p-8 text-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-24 -left-24 w-64 h-64 bg-blue-500/10 blur-[100px] rounded-full" />
                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />
            </div>
            <div className="relative z-10 space-y-6">
                <div className="inline-flex p-4 bg-white/5 rounded-3xl border border-white/10 shadow-2xl">
                    <Monitor size={48} className="text-blue-400" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-black text-white tracking-tight">請使用電腦瀏覽</h2>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-[240px] mx-auto">
                        為了獲得最佳的閱讀體驗與代碼複製功能，文檔頁面僅支援電腦端設備訪問。
                    </p>
                </div>
                <Link 
                    to="/" 
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-bold transition-all"
                >
                    <ArrowLeft size={16} /> 返回首頁
                </Link>
            </div>
        </div>
    );
};


const Docs = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [openMenus, setOpenMenus] = useState({});
    const toggleMenu = (name) => {
        setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const menuGroups = [
        {
            groupName: "",
            items: [
                { path: '/docs', label: '關於我們', icon: Home, hasArrow: false },
            ]
        },
        {
            groupName: "快速開始",
            items: [
                {
                    label: '安裝指南', 
                    icon: Zap, 
                    isDropdown: true, 
                    children: [
                        { path: '/docs/download', label: '下載並解壓縮' },
                    ]
                }
            ]
        },
        {
            groupName: "遊戲設定",
            items: [
                { path: '/docs/server-properties', label: 'server.properties', icon: Settings, hasArrow: false },
                { path: '/docs/recommended-mods', label: '推薦模組', icon: Cpu, hasArrow: false },
            ]
        },
        {
            groupName: "資源與支援",
            items: [
                { path: '/docs/faq', label: '常見問題', icon: HelpCircle, hasArrow: false },
                { path: '/docs/troubleshoot', label: '故障排除', icon: ShieldAlert, hasArrow: false },
            ]
        },
        {
            groupName: "文檔",
            items: [
                { path: '/docs/privacy', label: '隱私政策', icon: Lock, hasArrow: false },
                { path: '/docs/terms', label: '使用條款', icon: FileText, hasArrow: false },
                { path: '/docs/about', label: '作者介紹', icon: Users, hasArrow: false },
                { path: '/docs/donate', label: '贊助我們', icon: Heart, hasArrow: false },
            ]
        }
    ];

    const filteredGroups = useMemo(() => {
        return menuGroups.map(group => ({
            ...group,
            items: group.items.filter(item => 
                item.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.children && item.children.some(child => child.label.toLowerCase().includes(searchQuery.toLowerCase())))
            )
        })).filter(group => group.items.length > 0);
    }, [searchQuery]);

    useEffect(() => {
        filteredGroups.forEach(group => {
            group.items.forEach(item => {
                if (item.isDropdown && item.children) {
                    const hasActiveChild = item.children.some(child => child.path === location.pathname);
                    if (hasActiveChild) {
                        setOpenMenus(prev => ({
                            ...prev,
                            [item.label]: true
                        }));
                    }
                }
            });
        });
    }, [location.pathname, filteredGroups]);

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 flex select-none font-sans overflow-hidden">
            <MobileOverlay />
            <aside className="w-64 border-r border-white/[0.08] bg-[#080808] hidden md:flex flex-col sticky top-0 h-full shadow-2xl">
                <div className="p-5 space-y-4">
                    <Link to="/" className="flex items-center gap-2.5 px-3 py-2.5 text-white transition-all group">
                        <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform text-blue-400" />
                        <span className="text-sm font-black tracking-tight">返回首頁</span>
                    </Link>
                    <div className="relative group">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-400 transition-colors" size={14} />
                        <input 
                            type="text"
                            placeholder="快速搜尋關鍵字..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-white/[0.03] border border-white/[0.08] rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-blue-500/50 focus:bg-white/[0.06] transition-all text-white"
                        />
                    </div>
                </div>
                <nav className="flex-1 overflow-y-auto px-4 pb-10 space-y-8 scrollbar-hide">
                    {filteredGroups.map((group, idx) => (
                        <div key={idx} className="space-y-2">
                            <h3 className="px-3 text-[11px] font-black text-blue-500 uppercase tracking-[0.25em]">
                                {group.groupName}
                            </h3>
                            <div className="space-y-0.5">
                                {group.items.map((item, i) => {
                                    const isActive = location.pathname === item.path;
                                    const isMenuOpen = !!openMenus[item.label];
                                    if (item.isDropdown) {
                                        return (
                                            <div key={i} className="space-y-0.5">
                                                <button 
                                                    onClick={() => toggleMenu(item.label)}
                                                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] text-gray-300 hover:bg-white/[0.06] transition-all group/btn"
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <item.icon size={16} className="text-gray-400 group-hover/btn:text-blue-400 transition-colors" />
                                                        <span className="font-medium">{item.label}</span>
                                                    </div>
                                                    <ChevronRight size={14} className={`text-gray-500 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} />
                                                </button>
                                                <AnimatePresence initial={false}>
                                                    {isMenuOpen && (
                                                        <motion.div 
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2, ease: "easeInOut" }}
                                                            className="overflow-hidden border-l border-white/[0.1] ml-5 mt-1"
                                                        >
                                                            {item.children.map((child, ci) => (
                                                                <Link 
                                                                    key={ci} 
                                                                    to={child.path}
                                                                    className={`block px-5 py-2 text-[13px] transition-colors ${location.pathname === child.path ? 'text-blue-400 bg-blue-500/5 font-bold' : 'text-gray-500 hover:text-white'}`}
                                                                >
                                                                    {child.label}
                                                                </Link>
                                                            ))}
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        );
                                    }
                                    return (
                                        <Link
                                            key={item.path}
                                            to={item.path}
                                            className={`group relative w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-[14px] transition-all duration-75 ${isActive ? 'bg-blue-600/20 text-white font-bold' : 'hover:bg-white/[0.06] text-gray-400 hover:text-white'}`}
                                        >
                                            <div className="flex items-center gap-3">
                                                <item.icon size={16} className={`${isActive ? 'text-blue-400' : 'text-gray-500 group-hover:text-blue-400'} transition-colors`} />
                                                <span className="tracking-tight">{item.label}</span>
                                            </div>
                                            {item.hasArrow && (
                                                <ChevronRight size={14} className={`transition-all duration-200 ${isActive ? 'text-blue-400 opacity-100' : 'text-gray-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1'}`} />
                                            )}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </nav>
            </aside>
            <main className="flex-1 overflow-y-auto relative bg-[#050505] hidden md:flex">
                <div className="w-full max-w-6xl mx-auto py-16 px-8 md:px-16">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <Routes location={location}>
                                <Route path="download" element={<DownloadAndSetup />} />
                                <Route path="server-properties" element={<ServerProperties />} />
                                <Route path="recommended-mods" element={<RecommendedMods />} />
                                <Route path="faq" element={<FAQ />} />
                                <Route path="troubleshoot" element={<Troubleshooting />} />
                                <Route path="privacy" element={<PrivacyPolicy />} />
                                <Route path="terms" element={<TermsOfService />} />
                                <Route path="about" element={<AboutTeam/>} />
                                <Route path="donate" element={<Donate />} />
                                <Route index element={<Index />} />
                                <Route path="*" element={<Placeholder />} />
                            </Routes>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </main>
        </div>
    );
};

const Placeholder = () => <div className="text-gray-500 py-20 text-center font-mono">此頁面內容正在編寫中...</div>;

export default Docs;

