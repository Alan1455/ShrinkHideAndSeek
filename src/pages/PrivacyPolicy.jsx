import { Lock, Globe, Database, ShieldCheck, Shield } from 'lucide-react';
import PageHeader from '../components/PageHeader';


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

export default PrivacyPolicy;

