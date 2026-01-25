import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import {
    ArrowLeft, BookOpen, HelpCircle, FileText, Lock,
    ShieldAlert, ChevronRight, Hash, Zap, Cloud,
    Settings, Search, Cpu, Users, Globe, Database, Heart,
    ShieldCheck, Shield, Home, AlertCircle, Monitor,
    Server, Sparkles, Layers, ExternalLink, ArrowRight,
    ArrowDown, Archive, CheckCircle, Download,
    MousePointer2, Folder, Plus, ChevronLeft, FileArchive,
    Minus, Square, X, Box, Terminal, RotateCw, Coffee,
    Code, Palette, Lightbulb, Rocket, Copy, CheckCircle2
} from 'lucide-react';


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

const FAQ = () => {
    const [activeIdx, setActiveIdx] = useState(null);
    const faqs = [
        {
            q: "遊戲需要特定的 Minecraft 版本嗎?",
            a: "是的，本作品目前針對 Minecraft 1.20.10 開發。請確保您的伺服器與客戶端版本一致，以避免指令包失效。"
        },
        {
            q: "我有自己的地圖，可以提取 Datapack 去那邊用嗎?",
            a: <>可以，但請務必遵守<Link to="/docs/terms" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">使用條款</Link>。您可以將我們的 Datapack 提取至您的地圖中使用，但若要公開發佈，請註明技術來源與作者。</>
        },
        {
            q: "支援基岩版(Bedrock)嗎?",
            a: "很抱歉，本專案目前僅支援 Java 版(Java Edition)，因為核心邏輯大量依賴了 Java 版特有的實體屬性(Attribute)指令。"
        },
        {
            q: "可以實況上傳YouTube / Twitch嗎?",
            a: <>我們非常鼓勵玩家進行實況或影片創作！但請在影片資訊欄加入<Link to="/docs/terms" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">這些資訊</Link>。</>
        },
        {
            q: "可以在單人世界遊玩嗎?",
            a: "不推薦。此地圖是鬼抓人，建議 3 人以上遊玩。"
        }
    ];
    return (
        <div className="space-y-8 w-full">
            <PageHeader title="常見問題" icon={HelpCircle} tag="Support" />
            <div className="space-y-4 w-full">
                {faqs.map((faq, i) => (
                    <div key={i} className={`w-full border rounded-2xl bg-white/[0.02] overflow-hidden transition-all ${activeIdx === i ? 'border-blue-500/30' : 'border-white/[0.08]'}`}>
                        <button onClick={() => setActiveIdx(activeIdx === i ? null : i)} className="w-full flex items-stretch justify-between p-6 text-left">
                            <span className={`font-black ${activeIdx === i ? 'text-blue-400' : 'text-white'}`}>
                                {faq.q}
                            </span>
                            <ChevronRight size={18} className={`transition-transform ${activeIdx === i ? 'rotate-90 text-blue-400' : 'text-gray-500'}`} />
                        </button>
                        <AnimatePresence>
                            {activeIdx === i && (
                                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                                    <div className="px-6 pb-6 text-gray-400 border-t border-white/[0.05] pt-5">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

const PrivacyPolicy = () => (
    <div className="space-y-12">
        <PageHeader title="隱私政策" icon={Lock} tag="Zero Data Collection" />
        <div className="space-y-8">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent border border-emerald-500/40 relative overflow-hidden">
                <ShieldCheck className="absolute -right-4 -bottom-4 text-emerald-500/10" size={150} />
                <h2 className="text-xl font-black text-white mb-4 flex items-center gap-3">
                    <div className="p-2 bg-emerald-500/20 rounded-lg text-emerald-400">
                        <Shield size={20} />
                    </div>
                    本地運行與隱私承諾
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                    《縮小鬼抓人》地圖完全基於 Minecraft 本地指令邏輯運行。我們<span className="text-emerald-400 font-bold">不會、也無法</span>透過任何技術手段收集、儲存或傳輸您的任何個人資訊或遊戲數據。
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-blue-500/40 transition-all group">
                    <div className="w-12 h-12 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                        <Globe size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">無遠端通訊</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        本作品不包含任何外連 API 或遠端伺服器請求。地圖的所有運算（包含玩家縮放、鬼抓人邏輯）均在您的遊戲客戶端或伺服器本地完成。
                    </p>
                </div>
                <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-purple-500/40 transition-all group">
                    <div className="w-12 h-12 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                        <Database size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">本地數據保存</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">
                        您的所有遊戲進度、勝場紀錄與縮放設定均儲存於您本地的 <code className="bg-black/40 px-1.5 py-0.5 rounded text-purple-300">level.dat</code> 或地圖存檔內，我們無法存取這些檔案。
                    </p>
                </div>
            </div>
        </div>
        <div className="text-center pt-10 border-t border-white/5">
            <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-mono">
                最後更新日期: 2026年1月24日
            </p>
        </div>
    </div>
);

const TermsOfService = () => (
    <div className="space-y-12">
        <PageHeader title="使用條款" icon={FileText} tag="Legal Agreement" />
        <div className="grid grid-cols-1 gap-6">
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-blue-500/40 transition-all">
                <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" /> 
                    1. 軟體授權與限制
                </h2>
                <p className="text-gray-400 text-base leading-relaxed">
                    本作品的所有權歸屬於 <span className="text-pink-400 font-bold">Alan</span> & <span className="text-red-500 font-bold">fm487</span> & <span className="text-cyan-400 font-bold">Arctic_Peng</span>。
                    您可以自由地下載、安裝並與朋友遊玩。然而，您<span className="text-red-400 font-bold">不可以</span>將本作品的任何原始碼、
                    材質包資源進行商業性轉售，或在未經授權的情況下聲稱為您的原創作品。
                </p>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-red-500/40 transition-all">
                <h2 className="text-xl font-black text-white mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full" /> 
                    2. 內容創作規範 (YouTube/Twitch)
                </h2>
                <p className="text-gray-400 text-base leading-relaxed mb-4">
                    我們非常鼓勵玩家進行實況或影片創作！為了支持地圖開發，請在您的影片描述欄中包含以下資訊：
                </p>
                <div className="bg-black/40 p-4 rounded-xl font-mono text-sm text-blue-300 border border-white/5 select-text">
                    地圖: 縮小鬼抓人 (Shrink Tag) <br />
                    作者: Alan & fm487 & Arctic_Peng <br />
                    下載連結: https://alan1455.github.io/ShrinkTag/
                </div>
            </div>
            <div className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-emerald-500/40 transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <h2 className="text-xl font-black text-white flex items-center gap-2">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full" /> 
                        3. 技術構成與免責聲明
                    </h2>
                    <div className="flex flex-wrap gap-1.5">
                        {['Datapack', 'World', 'Command', 'Music', 'Texture Pack', 'Building', 'Web'].map((tech) => (
                            <span key={tech} className="px-2 py-0.5 bg-emerald-500/5 border border-emerald-500/10 rounded text-[9px] font-mono text-emerald-400/80 uppercase tracking-tighter">
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="space-y-6">
                    <div className="relative p-6 bg-white/[0.01] border border-white/[0.05] rounded-2xl overflow-hidden group-hover:bg-emerald-500/[0.02] transition-colors">
                        <Database className="absolute -right-6 -bottom-6 text-white/[0.02]" size={120} />
                        <p className="relative z-10 text-gray-400 text-base leading-relaxed">
                            《縮小鬼抓人》是由多種技術維度交織而成的完整作品。我們將 <span className="text-white font-bold">資料包邏輯</span>、<span className="text-white font-bold">場景建築</span>、<span className="text-white font-bold">環境音效</span> 以及 <span className="text-white font-bold">材質資源</span> 深度整合，旨在確保每一位玩家都能獲得最流暢且具有沉浸感的遊戲體驗。
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-red-500/40 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-red-400">
                                <ShieldAlert size={16} />
                                <span className="text-xs font-black uppercase tracking-wider">免責聲明</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-normal">
                                我們不對因安裝不當、自行修改原始代碼所導致的遊戲崩潰、數據損毀或硬體損害負責。
                            </p>
                        </div>
                        <div className="p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/40 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-blue-400">
                                <Zap size={16} />
                                <span className="text-xs font-black uppercase tracking-wider">安全建議</span>
                            </div>
                            <p className="text-sm text-gray-400 leading-normal">
                                為了您的數據安全，在導入地圖世界、資料包或資源包前，請務必先對原始存檔進行手動備份。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="text-center pt-10 border-t border-white/5">
            <p className="text-gray-600 text-[10px] tracking-[0.3em] uppercase font-mono">
                最後更新日期: 2026年1月24日
            </p>
        </div>
    </div>
);

const AboutTeam = () => {
    const team = [
        {
            name: "Alan",
            avatar: new URL('../assets/alan.webp', import.meta.url).href,
            roles: ["場景建築師", "關卡設計", "核心邏輯開發", "指令包編寫", "網頁開發"],
            color: "from-pink-500/20 to-pink-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
            border: "border-pink-500/30",
            text: "text-pink-400",
            tags: ["Full-Stack", "Datapack", "World Build", "Website"],
            quote: "oi oi oi a eye eye",
            desc: "專案的技術支柱，負責從底層指令架構到前端網頁展示的全方位整合，將複雜的縮小機制轉化為流暢的遊戲體驗。"
        },
        {
            name: "fm487",
            avatar: new URL('../assets/fm487.webp', import.meta.url).href,
            roles: ["核心邏輯開發", "指令包編寫", "音效與材質設計"],
            color: "from-red-500/20 to-red-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
            border: "border-red-500/30",
            text: "text-red-400",
            tags: ["Audio", "Commands", "Texture pack"],
            quote: "蛤",
            desc: "專注於技術細節，透過精密的指令編寫與材質包製作，賦予地圖獨特的沉浸體驗。"
        },
        {
            name: "Arctic_Peng",
            avatar: new URL('../assets/Arctic_Peng.webp', import.meta.url).href,
            roles: ["專案發起人", "場景建築師", "關卡設計", "靈感啟發"],
            color: "from-cyan-500/20 to-cyan-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
            border: "border-cyan-500/30",
            text: "text-cyan-400",
            tags: ["Creative", "Founder", "World Build"],
            quote: "你們是給炮吧",
            desc: "作品的靈魂人物與構思者，不僅定義了遊戲的核心玩法，更在場景構築中融入了無數創意點子與關卡巧思。"
        }
    ];
    return (
        <div className="space-y-12 pb-20">
            <PageHeader title="製作團隊" icon={Users} tag="The Creators" />
            <div className="grid grid-cols-1 gap-10">
                {team.map((member, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -8 }}
                        className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${member.color} border-2 ${member.border} ${member.glow} relative overflow-hidden group transition-all duration-500`}
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-10">
                            <div className="flex flex-col items-center shrink-0 space-y-4">
                                <div className="w-32 h-32 bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-white/20 transition-all">
                                    <Users
                                        size={56}
                                        className={`absolute ${member.text} opacity-80 group-hover:scale-110 transition-transform duration-500`}
                                    />
                                    {member.avatar && (
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                                            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col gap-1.5 w-full">
                                    {member.tags.map(tag => (
                                        <span key={tag} className="text-center px-3 py-1 bg-black/40 rounded-lg text-[9px] font-mono text-gray-400 border border-white/5 tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <h3 className={`text-4xl font-black ${member.text} tracking-tighter`}>{member.name}</h3>
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="px-4 py-1 bg-white/5 rounded-full text-[10px] font-black text-white/50 uppercase tracking-widest">
                                            Core Dev
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.roles.map((role, i) => (
                                            <span key={i} className={`text-[11px] font-bold px-3 py-1 rounded-md bg-white/5 border border-white/5 ${member.text} opacity-90`}>
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative group/quote">
                                    <div className={`absolute -left-2 -top-2 text-2xl ${member.text} opacity-20 font-serif`}>"</div>
                                    <p className={`pl-4 py-1 text-sm font-medium ${member.text} opacity-80 ${member.border}`}>
                                        {member.quote}
                                    </p>
                                </div>
                                <div className="relative">
                                    <p className="text-gray-300 text-base leading-[1.8] font-medium max-w-2xl relative z-10">
                                        {member.desc}
                                    </p>
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className={`absolute -right-6 -bottom-10 text-[10rem] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter italic uppercase group-hover:opacity-[0.04] group-hover:-translate-x-4 transition-all duration-700`}>
                            {member.name}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-20 p-10 rounded-[2rem] bg-white/[0.01] border-2 border-dashed border-white/5 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-500/10 rounded-2xl">
                    <Heart size={24} className="text-red-500 animate-pulse" />
                </div>
                <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white tracking-tight">特別鳴謝</h4>
                    <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
                        感謝所有參與測試的玩家。你們的建議是地圖不斷進化的原動力。
                    </p>
                </div>
            </div>
        </div>
    );
};

const Index = () => {
    const categories = [
        {
            title: "開始遊玩",
            links: [
                { name: "安裝指南", path: "/docs/download", icon: <Zap size={16} />, desc: "地圖與材質包部署教學" },
                { name: "常見問題", path: "/docs/faq", icon: <HelpCircle size={16} />, desc: "解決遊戲中的各種疑問" }
            ],
            color: "text-blue-400"
        },
        {
            title: "法律與規範",
            links: [
                { name: "使用條款", path: "/docs/terms", icon: <FileText size={16} />, desc: "地圖使用限制與授權" },
                { name: "隱私政策", path: "/docs/privacy", icon: <Shield size={16} />, desc: "我們如何處理您的資訊" }
            ],
            color: "text-purple-400"
        },
        {
            title: "關於團隊",
            links: [
                { name: "製作人員", path: "/docs/about", icon: <Users size={16} />, desc: "了解縮小鬼抓人的創作者" }
            ],
            color: "text-emerald-400"
        }
    ];
    return (
        <div className="space-y-12 pb-20">
            <div className="relative p-8 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-transparent border border-white/10 overflow-hidden">
                <div className="relative z-10">
                    <h1 className="text-4xl font-black text-white mb-4 tracking-tighter">官方文檔中心</h1>
                    <p className="text-gray-400 max-w-lg leading-relaxed mb-6 font-medium">
                        歡迎來到官方說明手冊。在這裡您可以找到從安裝、遊玩到開發的所有細節。
                    </p>
                </div>
                <BookOpen size={180} className="absolute -right-8 -bottom-8 text-white/80 -rotate-12" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {categories.map((cat, idx) => (
                    <div key={idx} className="space-y-5">
                        <h3 className={`text-lg font-black uppercase tracking-[0.2em] ml-2 ${cat.color}`}>
                            {cat.title}
                        </h3>
                        <div className="grid gap-4">
                            {cat.links.map((link, lIdx) => (
                                <Link
                                    key={lIdx}
                                    to={link.path}
                                    className="group p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-white/20 hover:bg-white/[0.04] transition-all flex items-center justify-between"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className={`p-2.5 rounded-xl bg-white/5 group-hover:scale-110 transition-transform ${cat.color}`}>
                                            {link.icon}
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">{link.name}</h4>
                                            <p className="text-gray-400 text-[14px] mt-0.5">{link.desc}</p>
                                        </div>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center py-10">
                <p className="text-[11px] text-gray-600 font-mono tracking-widest">
                    © 2026 <span className="text-yellow-400">Alan</span>. All right reserved.
                </p>
            </div>
        </div>
    );
};

const Troubleshooting = () => {
    const issues = [
        {
            q: "無法開啟伺服器?",
            a: "請確認伺服器核心版本為`Vanilla/Fabric 1.21.10`。若發生崩潰，請檢查 logs 資料夾中的最新日誌，並將錯誤代碼貼給 Gemini 分析。",
            tag: "Critical / Server"
        },
        {
            q: "地圖內指令方塊失效?",
            a: "請確認伺服器設定中`enable-command-block=true`已開啟。若部分功能卡死，請嘗試輸入 `/reload` 來重置指令包。",
            tag: "Server / Admin"
        },
        {
            q: "玩家遊玩中有任何錯誤",
            a: "請在伺服器後台執行`op <user>`。若點擊告示牌沒反應，請確認是否已正確載入 Datapack。",
            tag: "Permission / Map"
        }
    ];
    return (
        <div className="space-y-12 pb-20">
            <PageHeader title="故障排除" icon={AlertCircle} tag="Troubleshoot" />
            <div className="grid gap-6">
                {issues.map((item, idx) => (
                    <div key={idx} className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-all duration-500">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                                <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px] font-bold uppercase tracking-widest border border-red-500/20">
                                    Issue {idx + 1}
                                </span>
                                <span className="text-white/30 font-mono text-xs">{item.tag}</span>
                            </div>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-4 flex items-start gap-3">
                            <HelpCircle size={20} className="text-blue-500 mt-1 shrink-0" />
                            {item.q}
                        </h3>
                        <div className="pl-8 border-l-2 border-white/5 ml-2.5">
                            <p className="text-gray-400 leading-relaxed text-sm">
                                {item.a.split(/(`[^`]+`)/g).map((part, i) => 
                                    part.startsWith('`') && part.endsWith('`') ? (
                                        <code key={i} className="px-1.5 py-0.5 rounded bg-white/10 text-blue-300 font-mono text-[13px] border border-white/10 mx-1 select-text">
                                            {part.slice(1, -1)}
                                        </code>
                                    ) : part
                                )}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="p-10 rounded-[2.5rem] bg-gradient-to-r from-blue-600/10 to-transparent border border-blue-500/20 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white">仍需要幫助？</h4>
                    <p className="text-gray-400 text-sm">加入我們的 Discord 社群，將會有技術人員協助您。</p>
                </div>
                <a href="#" className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                    聯絡技術支援
                </a>
            </div>
        </div>
    );
};

const RecommendedMods = () => {
    const modSections = [
        {
            title: "客戶端模組",
            icon: Monitor,
            tag: "優化玩家端 FPS",
            color: "blue",
            items: [
                { name: "Fabric api", desc: "必裝。所有模組的前置。", link: "https://modrinth.com/mod/fabric-api/version/0.138.4+1.21.10", essential: true },
                { name: "Sodium", desc: "必裝。大幅提升 FPS 的核心模組，修復渲染卡頓。", link: "https://modrinth.com/mod/sodium/version/mc1.21.10-0.7.3-fabric", essential: true },
                { name: "Entity Culling", desc: "隱藏視線外實體。在地圖有多位玩家縮小時，能顯著優化效能。", link: "https://modrinth.com/mod/entityculling/version/zwBaFdjH", essential: false },
                { name: "Lithium", desc: "優化遊戲物理與 AI 運算，穩定 `Tick` 速率。", link: "https://modrinth.com/mod/lithium/version/mc1.21.10-0.20.1-fabric", essential: false }
            ]
        },
        {
            title: "伺服器端模組",
            icon: Server,
            tag: "穩定伺服器運算",
            color: "emerald",
            items: [
                { name: "Fabric api", desc: "必裝。所有模組的前置。", link: "https://modrinth.com/mod/fabric-api/version/0.138.4+1.21.10", essential: true },
                { name: "FerriteCore", desc: "減少記憶體佔用。對於小容量伺服器 (`2G-4G`) 尤為重要。", link: "https://modrinth.com/mod/ferrite-core/version/8.0.2-fabric", essential: false },
                { name: "No Chat Reports", desc: "移除聊天報告系統，保護玩家隱私並維持對話體驗。", link: "https://modrinth.com/mod/no-chat-reports/version/Fabric-1.21.10-v2.16.0", essential: false }
            ]
        },
        {
            title: "光影",
            icon: Sparkles,
            tag: "極致視覺體驗",
            color: "purple",
            items: [
                { name: "Iris Shaders", desc: "使遊戲支援 `Shaders`。效能優於傳統 OptiFine。", link: "https://modrinth.com/mod/iris/version/1.9.7+1.21.10-fabric", essential: false },
                { name: "Complementary", desc: "推薦光影。在《縮小鬼抓人》中擁有極佳的方塊細節與色彩表現。", link: "https://modrinth.com/shader/complementary-reimagined/version/r5.6.1", essential: false }
            ]
        }
    ];
    const parseText = (text) => {
        return text.split(/(`[^`]+`)/g).map((part, i) => 
            part.startsWith('`') && part.endsWith('`') ? (
                <code key={i} className="px-1.5 py-0.5 rounded bg-white/10 text-blue-300 font-mono text-[12px] border border-white/10 mx-1">
                    {part.slice(1, -1)}
                </code>
            ) : part
        );
    };
    return (
        <div className="space-y-20 pb-20 animate-in fade-in duration-700">
            <PageHeader title="推薦模組" icon={Layers} tag="Performance" />
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-[12px] font-black uppercase tracking-widest">Optional Optimization</span>
                </div>
                <p className="text-gray-300 text-2xl font-semibold leading-relaxed">
                    本地圖
                    <span className="relative mx-3">
                        <span className="absolute inset-0 blur-lg bg-cyan-500/40 -z-10 px-4"></span>
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent font-black text-3xl tracking-wider drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
                            不需要
                        </span>
                    </span>
                    模組即可運作，以下建議僅為優化遊戲體驗與效能。
                </p>
            </div>
            <div className="p-8 rounded-[2.5rem] bg-amber-500/[0.03] border border-amber-500/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden group">
                <div className="absolute -left-10 -top-10 w-32 h-32 bg-amber-500/5 blur-[50px] rounded-full" />
                <div className="flex items-center gap-5 relative z-10">
                    <div className="space-y-1">
                        <h4 className="text-white font-bold text-lg tracking-tight">版本相容性警告</h4>
                        <p className="text-gray-400 text-sm font-medium leading-relaxed">
                            所有模組均應嚴格使用 <a href="https://fabricmc.net/use/installer/" target="_blank" className="text-amber-400 font-mono bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20 mx-1">Fabric 1.21.10</a> 版本。
                            使用不支援的版本可能導致地圖機制完全失效或崩潰。
                        </p>
                    </div>
                </div>
            </div>
            {modSections.map((section, sIdx) => (
                <div key={sIdx} className="space-y-8">
                    <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-xl bg-${section.color}-500/10 border border-${section.color}-500/20 text-${section.color}-500`}>
                            <section.icon size={20} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-black text-white tracking-tight uppercase">{section.title}</h2>
                            <p className="text-[11px] font-mono text-white/40 tracking-[0.2em] uppercase">{section.tag}</p>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {section.items.map((mod, mIdx) => (
                            <div key={mIdx} className="group relative p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all flex flex-col justify-between overflow-hidden">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors tracking-tight">
                                            {mod.name}
                                        </h3>
                                        {mod.essential && (
                                            <span className="text-[9px] font-black text-emerald-500 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                                                ESSENTIAL
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-8">
                                        {parseText(mod.desc)}
                                    </p>
                                </div>
                                <a 
                                    href={mod.link} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-3 rounded-2xl bg-white/5 border border-white/10 text-white/50 text-[11px] font-black uppercase tracking-[0.2em] hover:text-white/80 transition-all group/btn"
                                >
                                    Download <ExternalLink size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
                                </a>
                                <div className={`absolute bottom-0 left-0 h-1 w-0 bg-${section.color}-500/50 group-hover:w-full transition-all duration-500`} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

const ServerProperties = () => {
    const rawConfig = `accepts-transfers=false
allow-flight=true
allow-nether=false
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
bug-report-link=
debug=false
difficulty=easy
enable-code-of-conduct=false
enable-command-block=true
enable-jmx-monitoring=false
enable-query=true
enable-rcon=false
enable-status=true
enforce-secure-profile=false
enforce-whitelist=false
entity-broadcast-range-percentage=100
force-gamemode=false
function-permission-level=2
gamemode=adventure
generate-structures=true
generator-settings={}
hardcore=false
hide-online-players=false
initial-disabled-packs=
initial-enabled-packs=vanilla
level-name=world
level-seed=
level-type=default
log-ips=true
max-build-height=256
max-chained-neighbor-updates=1000000
max-players=87
max-tick-time=60000
max-world-size=29999984
motd=§c§l§o§k3§e§l§o縮小鬼抓人§c§l§o§k3
network-compression-threshold=256
online-mode=true
op-permission-level=4
pause-when-empty-seconds=60
player-idle-timeout=0
prevent-proxy-connections=false
pvp=true
query.port=25565
rate-limit=0
rcon.password=
rcon.port=25575
region-file-compression=deflate
require-resource-pack=false
resource-pack=
resource-pack-id=
resource-pack-prompt=
resource-pack-sha1=
server-ip=
server-port=25565
simulation-distance=10
snooper-enabled=true
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=0
status-heartbeat-interval=0
sync-chunk-writes=true
text-filtering-config=
text-filtering-version=0
use-native-transport=true
view-distance=10
white-list=false`;
    const highlights = [
        { key: "enable-command-block=true", desc: "必須開啟，否則非常多邏輯無法運作。" },
        { key: "gamemode=adventure", desc: "必須設定，冒險模式可防止玩家破壞場景。" },
        { key: "allow-flight=true", desc: "必須開啟，不開啟有回朔的可能。" },
        { key: "level-name=world", desc: "必須確保與下載的地圖資料夾名稱一致。" }
    ];
    return (
        <div className="space-y-8">
            <PageHeader title="伺服器配置" icon={Settings} tag="server.properties" />
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 relative group h-[590px] flex flex-col">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-widest">server.properties</span>
                        </div>
                        <div className="flex-grow p-2 pb-12 font-mono text-sm leading-relaxed overflow-x-auto custom-scroll h-full overflow-y-auto select-text">
                            {rawConfig.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4 group/line">
                                    <span className="shrink-0 w-6 text-right text-white/20 select-none">{i + 1}</span>
                                    <span className="text-white/70">
                                        {line.split('=')[0]}
                                        <span className="text-white/30">=</span>
                                        <span className={`${line.includes('true') ? 'text-green-400' : line.includes('false') ? 'text-red-400' : 'text-gray-400'}`}>{line.split('=')[1]}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest ml-1">重要設定說明</h3>
                    {highlights.map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 transition-all">
                            <code className="text-[14px] text-blue-300 font-bold block mb-1">{item.key}</code>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                    <div className="mt-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-2 text-amber-400 mb-2 text-xs font-bold">
                            <AlertCircle size={14} /> 注意事項
                        </div>
                        <p className="text-[11px] text-gray-500">
                            修改此檔案後，必須重啟伺服器才能生效。建議在修改前先備份原始檔案。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

const DownloadAndSetup = () => {
    return (
        <div className="max-w-6xl mx-auto py-20 px-6 font-sans">
            <PageHeader title="部署地圖資源" icon={Zap} tag="System Environment" />
            <div className="relative mt-16">
                <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/10 z-0" />
                <div className="space-y-32">
                    <section className="relative pl-12 grid lg:grid-cols-[400px_1fr] gap-16 items-center">
                        <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 text-[16px] font-mono text-gray-400">
                            01
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-white tracking-tight">獲取核心存檔</h2>
                            <p className="text-gray-400 leading-relaxed text-base">
                                前往雲端空間下載檔案。此步驟將獲取包含地圖數據與指令包的完整壓縮包。
                            </p>
                            <a href="#" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-md text-sm font-medium transition-all shadow-lg shadow-blue-600/10 cursor-default">
                                <Globe size={18} /> 前往Google雲端
                            </a>
                        </div>
                        <div className="relative rounded-sm border border-gray-300 bg-[#dee1e6] shadow-2xl flex flex-col overflow-hidden">
                            <div className="h-10 flex items-end px-3 gap-1 select-none">
                                <div className="h-9 w-48 bg-white rounded-t-[4px] px-3 flex items-center gap-2 text-[12px] border-r border-gray-300 relative">
                                    <Globe size={14} className="text-blue-500" />
                                    <span className="truncate text-gray-600">Google Drive - Download</span>
                                    <X size={12} className="ml-auto text-gray-400" />
                                </div>
                                <div className="ml-auto flex h-full items-start">
                                    <div className="w-10 h-10 flex items-center justify-center text-gray-600"><Minus size={16}/></div>
                                    <div className="w-10 h-10 flex items-center justify-center text-gray-600"><Square size={12}/></div>
                                    <div className="w-12 h-10 flex items-center justify-center hover:bg-red-500 hover:text-white text-gray-600"><X size={16}/></div>
                                </div>
                            </div>
                            <div className="h-10 bg-white border-b border-gray-200 flex items-center px-3 gap-4">
                                <div className="flex gap-4 text-gray-400">
                                    <ArrowLeft size={18} /><ArrowRight size={18} /><RotateCw size={16} />
                                </div>
                                <div className="flex-1 h-7 bg-[#f1f3f4] rounded-full px-4 flex items-center text-[12px] text-gray-500">
                                    <Lock size={12} className="mr-2 text-green-600" /> drive.google.com/file/d/shrinktag_v1...
                                </div>
                            </div>
                            <div className="flex-1 bg-white relative p-8 flex flex-col items-center justify-center">
                                <div className="w-80 p-10 rounded border border-gray-200 shadow-sm flex flex-col items-center gap-8 bg-[#f8f9fa]">
                                    <div className="w-24 h-24 bg-white shadow-inner flex items-center justify-center border border-gray-100 rounded">
                                        <FileArchive size={56} className="text-blue-500" />
                                    </div>
                                    <div className="text-center">
                                        <div className="text-lg font-bold text-gray-700">shrinktag_v1.zip</div>
                                        <div className="text-sm text-gray-400 mt-1">14.2 MB</div>
                                    </div>
                                    <div className="w-full py-3.5 bg-[#1a73e8] rounded-[4px] text-center text-sm text-white font-medium relative overflow-hidden">
                                        下載
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/40 scale-0 animate-[click-ripple_4s_infinite]" />
                                    </div>
                                </div>
                                <div className="absolute z-50 pointer-events-none animate-[mouse-step-long_4s_infinite]">
                                    <MousePointer2 size={36} className="text-black fill-white -rotate-12 drop-shadow-2xl" />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="relative pl-12 grid lg:grid-cols-[450px_1fr] gap-12 items-center">
                        <div className="absolute left-0 top-1.5 w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center z-10 text-[16px] font-mono text-gray-400">
                            02
                        </div>
                        <div className="relative rounded bg-white border border-[#005a9e]/30 shadow-2xl aspect-square flex flex-col lg:order-1 order-2 overflow-hidden">
                            <div className="h-8 bg-white flex items-center justify-between px-2 border-b border-gray-50">
                                <div className="flex items-center gap-2">
                                    <Folder size={14} className="text-yellow-500 fill-yellow-500" />
                                    <span className="text-[11px] text-gray-600 font-medium">Minecraft_Server</span>
                                </div>
                                <div className="flex">
                                    <div className="w-10 h-8 flex items-center justify-center hover:bg-gray-100"><Minus size={12} className="text-gray-500"/></div>
                                    <div className="w-10 h-8 flex items-center justify-center hover:bg-gray-100"><Square size={10} className="text-gray-500"/></div>
                                    <div className="w-10 h-8 flex items-center justify-center hover:bg-red-500 hover:text-white text-gray-500"><X size={14} /></div>
                                </div>
                            </div>
                            <div className="h-14 bg-white border-b border-gray-100 flex flex-col">
                                <div className="flex-1 flex items-center px-2 gap-4 text-[10px] text-gray-500">
                                    <span>檔案</span><span>電腦</span><span>檢視</span>
                                </div>
                                <div className="h-7 px-2 flex items-center gap-2 mb-1">
                                    <div className="flex-1 h-full border border-gray-200 flex items-center px-2 gap-2 text-[10px] text-gray-400">
                                        <Folder size={10} /> <ChevronRight size={10} /> This PC <ChevronRight size={10} /> Desktop <ChevronRight size={10} /> Server
                                    </div>
                                    <div className="w-20 h-full border border-gray-200 flex items-center px-2 text-[10px] text-gray-400 italic">搜尋</div>
                                </div>
                            </div>
                            <div className="flex-1 bg-white p-4 grid grid-cols-4 content-start gap-2 relative overflow-hidden">
                                <Win10File name="server.properties" icon={FileText} />
                                <Win10File name="server.jar" icon={Box} />
                                <Win10File name="run.bat" icon={Terminal} />
                                <Win10File name="logs" icon={Folder} isFolder />
                                <Win10File name="banned-ips.json" icon={FileText} />
                                <div className="aspect-square border border-blue-200 bg-blue-50/30 rounded animate-[target-pulse_5s_infinite]" />
                                <div className="absolute z-20 pointer-events-none animate-[win10-drag-fix_5s_infinite]">
                                    <div className="flex flex-col items-center w-16 p-1 bg-blue-100/60 border border-blue-400 rounded shadow-sm relative">
                                        <Folder size={28} className="text-yellow-500 fill-yellow-500" />
                                        <span className="text-[9px] text-gray-800 text-center leading-tight font-medium">world</span>
                                        <MousePointer2 size={16} className="absolute -bottom-1 -right-1 text-black fill-white drop-shadow-md" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 lg:order-2 order-1">
                            <h2 className="text-2xl font-bold text-white tracking-tight">配置資料夾路徑</h2>
                            <p className="text-gray-300 text-[15px] leading-relaxed">
                                將解壓出的 <code className="text-white font-bold px-1">world</code> 資料夾移動至伺服器根目錄。確保其與 <code className="text-gray-300">server.jar</code> 處於同一層級。
                            </p>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5">
                                <AlertCircle size={16} className="text-amber-500 shrink-0" />
                                <p className="text-[13px] text-gray-400 leading-relaxed">注意：若已有舊的 world 資料夾，請先刪除或備份，切勿直接合併。</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes mouse-step-long {
                    0% { transform: translate(500px, 300px); opacity: 0; }
                    15% { transform: translate(500px, 300px); opacity: 1; }
                    40% { transform: translate(60px, 120px); opacity: 1; }
                    45% { transform: translate(60px, 120px) scale(0.8); }
                    55% { transform: translate(60px, 120px) scale(1); }
                    90% { transform: translate(60px, 120px); opacity: 1; }
                    100% { transform: translate(60px, 120px); opacity: 0; }
                }
                @keyframes win10-drag-fix {
                    0% { transform: translate(300px, 150px); opacity: 0; }
                    15% { transform: translate(300px, 150px); opacity: 1; }
                    55%, 85% { transform: translate(130px, 98px); opacity: 1; }
                    100% { transform: translate(130px, 98px); opacity: 0; }
                }
                @keyframes click-ripple {
                    0%, 40% { scale: 0; opacity: 0; }
                    45% { scale: 1.5; opacity: 0.6; }
                    65% { scale: 3; opacity: 0; }
                    100% { scale: 3; opacity: 0; }
                }
                @keyframes target-pulse {
                    0%, 45% { background: transparent; border-color: rgba(191,219,254,0.3); }
                    50%, 85% { background: rgba(59,130,246,0.1); border-color: rgba(59,130,246,0.5); }
                }
            ` }} />
        </div>
    );
};

const Win10File = ({ name, icon: Icon, isFolder = false }) => (
    <div className="flex flex-col items-center w-full p-1 border border-transparent hover:bg-blue-50/50 hover:border-blue-200 transition-colors">
        <Icon size={24} className={isFolder ? "text-yellow-500 fill-yellow-500" : "text-gray-400"} />
        <span className="text-[9px] text-gray-600 text-center leading-tight mt-1 truncate w-full px-0.5">
            {name}
        </span>
    </div>
);

const Donate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('ltc');
    const [copied, setCopied] = useState(false);
    const cryptoData = {
        ltc: {
            name: "Litecoin",
            address: "ltc1qlvpk4hknz0km8mfelfkatm6npwz2lf7q0rpas3",
            qr: new URL('../assets/ltc.webp', import.meta.url).href,
            color: "text-blue-400"
        },
        btc: {
            name: "Bitcoin",
            address: "bc1q9fqns5xl0qhfk34wz67agflssc48ccfv3u3hfv",
            qr: new URL('../assets/btc.webp', import.meta.url).href,
            color: "text-orange-400"
        },
        paypal: {
            name: "PayPal",
            address: "https://paypal.me/HsiehAlan",
            qr: new URL('../assets/paypal.webp', import.meta.url).href,
            color: "text-indigo-400"
        }
    };
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const fundingGoals = [
        { icon: Cpu, title: "開發環境優化", desc: "用於開發設備的維護與研發環境部署，確保團隊能產出更優秀的代碼。", color: "text-cyan-400", bg: "bg-cyan-500/10" },
        { icon: Lightbulb, title: "激發創作動力", desc: "您的支持能讓團隊成員在繁忙之餘，更有動力投入時間進行技術開發。", color: "text-amber-400", bg: "bg-amber-500/10" },
        { icon: Rocket, title: "未來專案拓展", desc: "幫助團隊探索更多技術領域，讓創意不只侷限於單一環境。", color: "text-blue-400", bg: "bg-blue-500/10" }
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16 pb-20"
        >
            <PageHeader title="支持團隊" icon={Heart} tag="Invest in Creativity" />
            <motion.div className="relative p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent border border-white/10 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full" />
                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center gap-2 text-blue-400 mb-4 font-mono text-sm tracking-widest">
                        <Sparkles size={16} /> SUPPORT US
                    </div>
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tight">讓創意走得更遠</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        我們是一個熱衷於技術挑戰與內容創作的團隊。您的贊助是對團隊創作價值的認可，幫助我們將腦中的構思轉化為更完美的現實。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-2xl font-black text-lg transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] flex items-center gap-3 group active:scale-95"
                        >
                            贊助支持團隊 <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-3 text-gray-400">
                            <Coffee className="text-amber-400" size={20} />
                            <span className="font-bold text-sm">請開發者喝杯咖啡</span>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {fundingGoals.map((goal, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/40 transition-colors group relative overflow-hidden"
                    >
                        <div className={`w-14 h-14 ${goal.bg} ${goal.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <goal.icon size={28} />
                        </div>
                        <h3 className="text-[21px] font-bold text-white mb-4">{goal.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed relative z-10">{goal.desc}</p>
                        <div className="absolute -right-4 -bottom-4 text-white/[0.02] font-black text-6xl italic select-none">0{i + 1}</div>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
                            onClick={() => setIsModalOpen(false)} 
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 text-gray-500 hover:text-white transition-colors z-20">
                                <X size={24} />
                            </button>
                            <div className="text-center space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-white">選擇贊助方式</h3>
                                    <p className="text-gray-500 text-sm">點擊地址可自動複製</p>
                                </div>
                                <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/5 relative">
                                    {Object.keys(cryptoData).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveTab(key)}
                                            className={`relative flex-1 py-2.5 rounded-xl font-bold text-sm transition-colors z-10 ${activeTab === key ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            {activeTab === key && (
                                                <motion.div 
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-white rounded-xl shadow-lg"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10">{key.toUpperCase()}</span>
                                        </button>
                                    ))}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6"
                                    >
                                        <div className="aspect-square w-48 mx-auto bg-white p-3 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                                            <img src={cryptoData[activeTab].qr} alt="QR Code" className="w-full h-full object-contain" />
                                        </div>
                                        <button
                                            onClick={() => handleCopy(cryptoData[activeTab].address)}
                                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-white/20 transition-all text-left relative"
                                        >
                                            <p className={`text-[12px] font-mono tracking-widest mb-1 ${cryptoData[activeTab].color}`}>
                                                {cryptoData[activeTab].name} Address
                                            </p>
                                            <p className="text-gray-300 font-mono text-xs break-all pr-8 truncate">
                                                {cryptoData[activeTab].address}
                                            </p>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white">
                                                <AnimatePresence mode="wait">
                                                    {copied ? (
                                                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                            <CheckCircle2 size={18} className="text-emerald-500" />
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                            <Copy size={18} />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </button>
                                    </motion.div>
                                </AnimatePresence>
                                <p className="text-[13px] text-gray-500 font-medium pt-2">
                                    轉帳前請務必確認貨幣與地址正確
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <div className="pt-10 border-t border-white/5 text-center">
                <h4 className="text-gray-400 font-medium italic">「創意不應受限於資金。感謝您與我們一同打造更好的內容。」</h4>
            </div>
        </motion.div>
    );
};


const Placeholder = () => <div className="text-gray-500 py-20 text-center font-mono">此頁面內容正在編寫中...</div>;

export default Docs;

