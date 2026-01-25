import { ArrowLeft, FileText, Lock, ChevronRight, Zap,  Globe, AlertCircle, RotateCw, ArrowRight, MousePointer2, Folder, FileArchive, Minus, Square, X, Box, Terminal } from 'lucide-react';
import PageHeader from '../components/PageHeader';


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
                            <p className="text-gray-300 text-[16px] leading-relaxed">
                                將解壓出的 <code className="text-white font-bold px-1">world</code> 資料夾移動至伺服器根目錄。確保其與 <code className="text-gray-300">server.jar</code> 處於同一層級。
                            </p>
                            <div className="flex items-center gap-3 p-4 rounded-lg bg-white/[0.03] border border-white/5">
                                <AlertCircle size={16} className="text-amber-500 shrink-0" />
                                <p className="text-[14px] text-gray-400 leading-relaxed">注意：若已有舊的 world 資料夾，請先刪除或備份，切勿直接合併。</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes mouse-step-long {
                    0% { transform: translate(500px, 300px); opacity: 0; }
                    15% { transform: translate(500px, 300px); opacity: 1; }
                    60% { transform: translate(60px, 120px); opacity: 1; }
                    65% { transform: translate(60px, 120px) scale(0.8); }
                    75% { transform: translate(60px, 120px) scale(1); }
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
                    0%, 60% { transform: translate(-50%, -50%) scale(0); opacity: 0; }
                    65% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
                    85% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
                    100% { transform: translate(-50%, -50%) scale(3); opacity: 0; }
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

export default DownloadAndSetup;

