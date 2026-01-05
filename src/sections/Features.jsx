import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Eye, 
  Music, 
  Map as MapIcon, 
  Compass, 
  ShieldCheck 
} from 'lucide-react';

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
      title: "極致光影", 
      desc: "精心調教的環境光效與陰影表現，讓 Minecraft 的每一個角落都充滿電影般的敘事感。", 
      icon: Sparkles 
    },
    { 
      title: "隱藏謎題", 
      desc: "在光影交錯的縫隙中隱藏著關鍵線索，唯有細心的觀察者才能破解最終的真相。", 
      icon: Eye 
    },
    { 
      title: "沉浸原聲", 
      desc: "配備專屬的地圖背景音樂與環境音效，為你的冒險旅程帶來前所未有的視聽震撼。", 
      icon: Music 
    },
    { 
      title: "廣闊世界", 
      desc: "從深邃的地下城到壯麗的遺蹟，多樣化的場景設計讓你流連忘返，探索永無止盡。", 
      icon: MapIcon 
    },
    { 
      title: "非線性探索", 
      desc: "打破傳統的單一路線，多重的選擇將導向不同的結局，寫下屬於你自己的故事篇章。", 
      icon: Compass 
    },
    { 
      title: "流暢體驗", 
      desc: "針對中低階電腦進行了極致的效能優化，確保在享受高畫質的同時依然保有絲滑的幀率。", 
      icon: ShieldCheck 
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
            我們結合了頂尖的建築美學與複雜的邏輯指令，只為呈現最純粹的解謎冒險。
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

