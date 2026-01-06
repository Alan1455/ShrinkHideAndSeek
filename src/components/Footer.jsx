import React from 'react';
import { Link } from 'react-scroll';
import { Users, MessageCircle, Cpu, ExternalLink, ShieldCheck, FileText, Heart, Youtube } from 'lucide-react';

const Footer = () => {
  const navLinks = [
    { name: '首頁', target: 'hero', isExternal: false },
    { name: '地圖特色', target: 'features', isExternal: false },
    { name: '截圖展示', target: 'gallery', isExternal: false },
    { name: '立即下載', target: 'download', isExternal: false },
    { name: '安裝教學', target: 'https://www.example.com/guide', isExternal: true },
  ];

  return (
    <footer className="relative bg-black py-24 px-6 border-t border-white/10 select-none overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8">
          <div className="w-full lg:w-1/4 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-white tracking-tighter mb-2">縮小躲貓貓</h2>
              <p className="text-gray-400 text-sm italic">Small but Grand Adventure.</p>
            </div>
            <nav className="flex flex-col gap-4">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">快速導航</h4>
              {navLinks.map((item) => (
                item.isExternal ? (
                  <a 
                    key={item.name} 
                    href={item.target} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-all w-fit flex items-center gap-2 group text-sm font-medium"
                  >
                    {item.name} 
                    <ExternalLink size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.target}
                    smooth={true}
                    duration={600}
                    offset={-100}
                    className="text-gray-300 hover:text-white transition-all w-fit cursor-pointer text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )
              ))}
            </nav>
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-blue-500/20 text-blue-400">
                  <MessageCircle size={20} />
                </div>
                <h3 className="font-bold text-white text-lg">官方社群</h3>
              </div>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed font-medium">加入 Discord 獲取最新的更新資訊。</p>
              <div className="space-y-3">
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-blue-400 transition-colors font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Discord 社群
                </a>
                <a href="#" className="flex items-center gap-2 text-sm text-white hover:text-red-400 transition-colors font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500" /> YouTube 頻道
                </a>
              </div>
            </div>

            <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-purple-500/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
                  <Cpu size={20} />
                </div>
                <h3 className="font-bold text-white text-lg">技術支持</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <p className="text-[10px] text-gray-300 uppercase tracking-widest mb-1 font-bold">Minecraft 版本</p>
                  <p className="text-sm text-white font-mono px-2 py-0.5">1.21.10+</p>
                </div>
                <div>
                  <p className="text-[10px] text-gray-300 uppercase tracking-widest mb-1 font-bold">推薦光影</p>
                  <a href="https://modrinth.com/shader/complementary-reimagined/version/r5.6.1" target="_blank" className="text-sm text-white hover:text-purple-400 transition-colors underline decoration-purple-500/30 underline-offset-4 font-medium">
                    Complementary Reimagined
                  </a>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-[2rem] bg-white/[0.02] border border-white/10 hover:border-emerald-500/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-xl bg-emerald-500/20 text-emerald-400">
                  <Users size={20} />
                </div>
                <h3 className="font-bold text-white text-lg">製作人員</h3>
              </div>
              <div className="space-y-4">
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-pink-400">Alan</span>
                  <span className="text-[11px] text-gray-300 font-medium">網頁設計 · 指令編寫 · 地圖製作 · 創意設計</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-red-500">fm487</span>
                  <span className="text-[11px] text-gray-300 font-medium">指令編寫 · 畫材質包</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-sm font-bold text-cyan-400">Arctic_Peng</span>
                  <span className="text-[11px] text-gray-300 font-medium">創意設計 · 地圖製作</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-24 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-gray-300 text-[13px] font-medium">
              © 2026 <span className="text-yellow-400">Alan</span>. All right reserved.
            </p>
            <p className="text-[11px] text-gray-400 max-w-xs text-center md:text-left">
              本作品與 Mojang AB 無關，並非 Minecraft 官方產品。
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-8">
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-medium">
              <ShieldCheck size={14} /> 隱私政策
            </a>
            <a href="#" className="text-xs text-gray-300 hover:text-white transition-colors flex items-center gap-2 font-medium">
              <FileText size={14} /> 使用條款
            </a>
            <a href="#" className="group text-xs text-amber-400 hover:text-amber-300 transition-all flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 font-bold">
              <Heart size={14} className="group-hover:scale-110 transition-transform" fill="currentColor" /> 贊助我們
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

