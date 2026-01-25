import { HelpCircle, AlertCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';


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

export default Troubleshooting;

