import { Link } from 'react-router-dom';
import { BookOpen, HelpCircle, FileText, ChevronRight, Zap, Users, Shield } from 'lucide-react';


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

export default Index;

