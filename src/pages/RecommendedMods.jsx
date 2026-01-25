import { Monitor, Server, Sparkles, Layers, ExternalLink } from 'lucide-react';
import PageHeader from '../components/PageHeader';


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

export default RecommendedMods;

