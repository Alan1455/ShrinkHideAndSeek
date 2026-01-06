import React from 'react';
import { motion } from 'framer-motion';
import { Ghost, Minimize2, Swords, Music, Map, Zap } from 'lucide-react';

const FeatureCard = ({ title, desc, index, icon: Icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1, duration: 0.5 }}
    className="p-8 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-colors group select-none"
  >
    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
      <Icon className="text-white group-hover:text-blue-400" size={24} />
    </div>
    
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm md:text-base">{desc}</p>
  </motion.div>
);

const Features = () => {
  const features = [
    {
      title: "縮小機制",
      desc: "玩家可以自由切換體型大小，以微觀視角進入原本無法到達的地圖縫隙。",
      icon: Minimize2
    },
    { 
      title: "策略躲藏",
      desc: "利用縮小後的體型優勢，躲入盆栽、轉角或地板縫隙中，配合地圖點位調達成完美的視覺隱身。",
      icon: Ghost
    },
    {
      title: "沉浸原聲",
      desc: "配備專屬的地圖背景音樂與環境音效，為你的遊戲帶來前所未有的視聽震撼。",
      icon: Music
    },
    {
      title: "細緻場景",
      desc: "地圖包含小屋、沙漠等多種多樣化場景，所有地圖皆經過細心製作，確保微觀下的細節程度。",
      icon: Map
    },
    { 
      title: "公平對抗",
      desc: "精心設計的職業技能平衡，讓躲藏者與獵人在遊戲中展開一場腦力與反應的極限博弈。",
      icon: Swords
    },
    {
      title: "流暢運行",
      desc: "專為大規模地圖與複雜指令包進行效能優化，即使在低配電腦上也能享受絲滑的遊戲體驗。",
      icon: Zap
    }
  ];

  return (
    <section id="features" className="py-24 px-6 bg-black select-none">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            超越想像的地圖體驗
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            我們結合了頂尖的建築美學與複雜的指令邏輯，只為呈現我們想像中的躲貓貓。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} index={i} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

