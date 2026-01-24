import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import { 
    ArrowLeft, BookOpen, HelpCircle, FileText, Lock, 
    ShieldAlert, ChevronRight, Hash, Zap, 
    Settings, Search, Cpu, Users, Globe, Database, Heart,
    ShieldCheck, Shield,
} from 'lucide-react';

const Docs = () => {
    const location = useLocation();
    const [searchQuery, setSearchQuery] = useState("");
    const [openMenus, setOpenMenus] = useState({});
    const toggleMenu = (name) => {
        setOpenMenus(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const menuGroups = [
        {
            groupName: "快速開始",
            items: [
                {
                    label: '安裝指南', 
                    icon: Zap, 
                    isDropdown: true, 
                    children: [
                        { path: '/docs/download', label: '下載並解壓縮' },
                        { path: '/docs/setup-server', label: '開啟伺服器' },
                        { path: '/docs/play', label: '遊玩' },
                    ]
                }
            ]
        },
        {
            groupName: "遊戲設定",
            items: [
                { path: '/docs/server-properties', label: 'server.properties', icon: Settings, hasArrow: false },
                { path: '/docs/server-settings', label: '伺服器設定', icon: Database, hasArrow: false },
                { path: '/docs/client-settings', label: '客戶端設定', icon: Globe, hasArrow: false },
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

    return (
        <div className="min-h-screen bg-[#050505] text-gray-200 flex select-none font-sans overflow-hidden">
            <aside className="w-64 border-r border-white/[0.08] bg-[#080808] hidden md:flex flex-col sticky top-0 h-screen shadow-2xl">
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
            <main className="flex-1 overflow-y-auto relative bg-[#050505]">
                <div className="max-w-4xl mx-auto py-16 px-8 md:px-16">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={location.pathname}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                        >
                            <Routes location={location}>
                                <Route path="privacy" element={<PrivacyPolicy />} />
                                <Route path="terms" element={<TermsOfService />} />
                                <Route path="about" element={<AboutTeam/>} />
                                <Route index element={<InstallGuide />} />
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
        { q: "為什麼縮小後會窒息？", a: "請確保方塊判定高度已正確更新，這通常發生在非官方核心的伺服器上。" },
        { q: "可以自定義縮小倍率嗎？", a: "可以，請在 config.yml 中的 'scaling_factor' 欄位進行修改。" }
    ];
    return (
        <div className="space-y-8">
            <PageHeader title="常見問題" icon={HelpCircle} tag="Support" />
            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <div key={i} className={`border rounded-2xl bg-white/[0.02] overflow-hidden transition-all ${activeIdx === i ? 'border-blue-500/30' : 'border-white/[0.08]'}`}>
                        <button onClick={() => setActiveIdx(activeIdx === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left">
                            <span className={`font-black ${activeIdx === i ? 'text-blue-400' : 'text-white'}`}>{faq.q}</span>
                            <ChevronRight size={18} className={`transition-transform ${activeIdx === i ? 'rotate-90 text-blue-400' : 'text-gray-500'}`} />
                        </button>
                        <AnimatePresence>
                            {activeIdx === i && (
                                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                                    <div className="px-6 pb-6 text-gray-400 border-t border-white/[0.05] pt-5">{faq.a}</div>
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
                <p className="text-gray-400 text-sm leading-relaxed">
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
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    我們非常鼓勵玩家進行實況或影片創作！為了支持地圖開發，請在您的影片描述欄中包含以下資訊：
                </p>
                <div className="bg-black/40 p-4 rounded-xl font-mono text-xs text-blue-300 border border-white/5 select-text">
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
                        <p className="relative z-10 text-gray-400 text-sm leading-relaxed">
                            《縮小鬼抓人》是由多種技術維度交織而成的完整作品。我們將 <span className="text-white font-bold">資料包邏輯</span>、<span className="text-white font-bold">場景建築</span>、<span className="text-white font-bold">環境音效</span> 以及 <span className="text-white font-bold">材質資源</span> 深度整合，旨在確保每一位玩家都能獲得最流暢且具有沉浸感的遊戲體驗。
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-red-500/40 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-red-400">
                                <ShieldAlert size={16} />
                                <span className="text-[11px] font-black uppercase tracking-wider">免責聲明</span>
                            </div>
                            <p className="text-[13px] text-gray-400 leading-normal">
                                我們不對因安裝不當、版本不符或自行修改原始代碼所導致的遊戲崩潰、數據損毀或硬體損害負責。
                            </p>
                        </div>
                        <div className="p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-blue-500/40 transition-all">
                            <div className="flex items-center gap-2 mb-2 text-blue-400">
                                <Zap size={16} />
                                <span className="text-[11px] font-black uppercase tracking-wider">安全建議</span>
                            </div>
                            <p className="text-[13px] text-gray-400 leading-normal">
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
            roles: ["場景建築師", "關卡設計", "核心邏輯開發", "指令包編寫", "網頁開發"],
            color: "from-pink-500/20 to-pink-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
            border: "border-pink-500/30",
            text: "text-pink-400",
            tags: ["Full-Stack", "Datapack", "Logic"],
            desc: "專案的技術支柱，負責從底層指令架構到前端網頁展示的全方位整合，將複雜的縮小機制轉化為流暢的遊戲體驗。"
        },
        {
            name: "fm487",
            roles: ["核心邏輯開發", "指令包編寫", "音效與材質設計"],
            color: "from-red-500/20 to-red-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
            border: "border-red-500/30",
            text: "text-red-400",
            tags: ["Audio", "Commands", "VFX"],
            desc: "專注於技術細節與感官回饋，透過精密的指令編寫與材質包定義，賦予地圖獨特的打擊感與沉浸式音效。"
        },
        {
            name: "Arctic_Peng",
            roles: ["專案發起人", "場景建築師", "關卡設計", "靈感啟發"],
            color: "from-cyan-500/20 to-cyan-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
            border: "border-cyan-500/30",
            text: "text-cyan-400",
            tags: ["Creative", "Founder", "World Build"],
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
                                    <Users size={56} className={`${member.text} opacity-80 group-hover:scale-110 transition-transform duration-500`} />
                                </div>
                                <div className="flex flex-col gap-1.5 w-full">
                                    {member.tags.map(tag => (
                                        <span key={tag} className="text-center px-3 py-1 bg-black/40 rounded-lg text-[9px] font-mono text-gray-400 border border-white/5 uppercase tracking-widest">
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

const InstallGuide = () => <PageHeader title="安裝指南" icon={Zap} tag="Deployment" />;
const Troubleshoot = () => <PageHeader title="故障排除" icon={ShieldAlert} tag="Emergency" />;
const DownloadPage = () => <PageHeader title="下載中心" icon={Database} tag="Assets" />;
const Placeholder = () => <div className="text-gray-500 py-20 text-center font-mono">此頁面內容正在編寫中...</div>;

export default Docs;

