import React, { useRef } from 'react';
import { motion, useTransform, useMotionValue, animate } from 'framer-motion';
import { Ghost, Minimize2, Swords, Music, Map, Zap, Home, Eye, Sword } from 'lucide-react';

const FeatureCard = ({ title, desc, index, icon: Icon }) => {
  const constraintsRef = useRef(null);
  const ghostX = useMotionValue(0);
  const ghostY = useMotionValue(0);
  const ghostOpacity = useTransform(ghostX, [0, 200], [1, 0.15]);

  const handleDragEnd = () => {
    animate(ghostX, 0, { type: "spring", stiffness: 200, damping: 20 });
    animate(ghostY, 0, { type: "spring", stiffness: 200, damping: 20 });
  };

  const renderDemo = () => {
    switch (title) {
      case "縮小機制":
        return (
          <div className="flex items-center justify-center h-full relative">
            <motion.div
              animate={{
                scale: [1, 0.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="p-3 bg-blue-500/20 rounded-2xl border border-blue-500/30 text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.2)]"
            >
              <Minimize2 size={32} />
            </motion.div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
              <div className="w-16 h-16 border border-white rounded-full animate-ping" />
            </div>
          </div>
        );
      case "策略躲藏":
        return (
          <div ref={constraintsRef} className="relative w-full h-full bg-white/5 rounded-xl border border-white/5 overflow-hidden flex items-center justify-between px-6">
            <motion.div
              drag
              onDragEnd={handleDragEnd}
              dragConstraints={constraintsRef}
              style={{ x: ghostX, y: ghostY, opacity: ghostOpacity }}
              whileDrag={{ cursor: 'grabbing', scale: 1.1 }}
              className="p-3 bg-blue-500/30 rounded-full cursor-grab z-20 text-blue-400"
            >
              <Ghost size={24} />
            </motion.div>
            <div className="flex flex-col items-center gap-1 opacity-30">
              <div className="w-12 h-12 rounded border-2 border-dashed border-gray-400 flex items-center justify-center">
                <Eye size={24} className="text-gray-400" />
              </div>
              <span className="text-[8px] text-gray-400 font-mono tracking-widest uppercase">Detection</span>
            </div>
          </div>
        );
      case "公平對抗":
        return (
          <div className="flex items-center justify-center h-full gap-4">
            <motion.div 
              animate={{ x: [0, 30, 0], rotate: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "backInOut" }}
              className="text-red-500/60"
            >
              <Sword size={30} />
            </motion.div>
            <div className="w-[1px] h-10 bg-white/10" />
            <motion.div 
              animate={{ x: [0, -30, 0], rotate: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "backInOut" }}
              className="text-blue-500/60"
            >
              <Sword size={30} className="-scale-x-100" />
            </motion.div>
          </div>
        );
      case "沉浸原聲":
        return (
          <div className="flex items-center justify-center gap-2 h-full">
            {[0.5, 1, 0.7, 0.9, 0.6, 0.8].map((h, i) => (
              <motion.div
                key={i}
                animate={{
                  height: ["20%", `${h * 70}%`, "20%"],
                  backgroundColor: [
                    "rgba(59, 130, 246, 0.5)",
                    "rgba(147, 197, 253, 0.8)",
                    "rgba(59, 130, 246, 0.5)"
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
                className="w-2 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.2)]"
              />
            ))}
          </div>
        );
      case "細緻場景":
        return (
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <div className="w-full h-full grid grid-cols-4 grid-rows-4">
                {[...Array(16)].map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white" />
                ))}
              </div>
            </div>
            <motion.div
              animate={{
                rotate: [0, 360],
                borderColor: ["rgba(255,255,255,0.1)", "rgba(59,130,246,0.4)", "rgba(255,255,255,0.1)"]
              }}
              transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
              className="p-5 border border-white/10 rounded-xl bg-white/5 relative z-10"
            >
              <Home className="text-white/40" size={32} />
              <motion.div 
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="absolute left-0 right-0 h-[1px] bg-blue-400 shadow-[0_0_10px_#60a5fa] z-20"
              />
            </motion.div>
          </div>
        );
      case "流暢運行":
        return (
          <div className="relative w-full h-full flex flex-col justify-center gap-3 px-4 overflow-hidden">
             {[0, 1, 2].map((i) => (
               <motion.div
                 key={i}
                 animate={{ x: ["-100%", "200%"] }}
                 transition={{
                   repeat: Infinity,
                   duration: 0.8,
                   delay: i * 0.2,
                   ease: "easeIn"
                 }}
                 className="h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent w-20"
               />
             ))}
             <motion.div 
               animate={{ opacity: [0.4, 1, 0.4] }}
               transition={{ repeat: Infinity, duration: 1 }}
               className="absolute right-8 text-blue-400"
             >
               <Zap size={24} fill="currentColor" />
             </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-[#0c0c0c] transition-all duration-500 group select-none flex flex-col min-h-[300px]"
    >
      <div className="h-28 mb-4 relative shrink-0">
        {renderDemo()}
      </div>
      <div className="mb-6 h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent shrink-0" />
      <div className="flex flex-col flex-grow">
        <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
          <Icon className="text-gray-400 group-hover:text-blue-400 transition-colors" size={20} />
        </div>
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-gray-400 leading-relaxed text-sm md:text-base opacity-90 group-hover:opacity-100 transition-opacity">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    { title: "縮小機制", desc: "玩家可以自由切換體型大小，以微觀視視角進入原本無法到達的地圖縫隙。", icon: Minimize2 },
    { title: "策略躲藏", desc: "利用縮小後的體型優勢，躲入盆栽、轉角或地板縫隙中，配合地圖點位調達成完美的視覺隱身。", icon: Ghost },
    { title: "沉浸原聲", desc: "配備專屬的地圖背景音樂與環境音效，為你的遊戲帶來前所未有的視聽震撼。", icon: Music },
    { title: "細緻場景", desc: "地圖包含小屋、沙漠等多種多樣化場景，所有地圖皆經過細心製作，確保微觀下的細節程度。", icon: Map },
    { title: "公平對抗", desc: "精心設計的職業技能平衡，讓躲藏者與獵人在遊戲中展開一場腦力與反應的極限博弈。", icon: Swords },
    { title: "流暢運行", desc: "專為大規模地圖與複雜指令包進行效能優化，即使在低配電腦上也能享受絲滑的遊戲體驗。", icon: Zap }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-black min-h-screen">
      <div className="max-w-6xl mx-auto select-none">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tighter"
          >
            超越想像的地圖體驗
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base opacity-80">
            我們結合了頂尖的建築美學與複雜的指令邏輯，只為呈現我們想像中的鬼抓人。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <FeatureCard key={i} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

