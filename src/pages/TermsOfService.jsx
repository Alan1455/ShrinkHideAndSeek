import { FileText, ShieldAlert, Zap, Database } from 'lucide-react';
import PageHeader from '../components/PageHeader';


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

export default TermsOfService;

