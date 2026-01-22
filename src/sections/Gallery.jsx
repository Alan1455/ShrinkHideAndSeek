import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Image as ImageIcon, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';

import img1 from '../assets/1.webp';
import img2 from '../assets/2.webp';
import img3 from '../assets/3.webp';
import img4 from '../assets/4.webp';
import img5 from '../assets/5.webp';
import img6 from '../assets/6.webp';
import img7 from '../assets/7.webp';
import img8 from '../assets/8.webp';
import img9 from '../assets/9.webp';
import img10 from '../assets/10.webp';
import img11 from '../assets/11.webp';
import img12 from '../assets/12.webp';


const Gallery = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scenes, setScenes] = useState([
    { title: "林中小屋", images: [img1, img2, img3, img4], current: 0 },
    { title: "沙漠遺跡", images: [img5, img6, img7, img8], current: 0 },
    { title: "勇者與魔王", images: [img9, img10, img11, img12], current: 0 },
    { title: "todo1", images: [img1], current: 0 },
    { title: "todo2", images: [img1], current: 0 },
    { title: "todo3", images: [img1], current: 0 }
  ]);

  useEffect(() => {
    scenes.forEach((scene) => {
      scene.images.forEach((src) => {
        const img = new Image();
        img.src = src;
      });
    });
  }, []);

  const updateImg = (e, index, direction) => {
    setIsLoaded(false);
    e.preventDefault();
    e.stopPropagation();
    const newScenes = [...scenes];
    const len = newScenes[index].images.length;
    newScenes[index].current = (newScenes[index].current + direction + len) % len;
    setScenes(newScenes);
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-black select-none selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-5 mb-24">
          <div className="p-3 rounded-2xl bg-blue-500/5 border border-blue-500/10 shadow-[0_0_40px_rgba(59,130,246,0.05)]">
            <ImageIcon className="text-blue-500" size={26} />
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">
            場景截圖
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {scenes.map((scene, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`group relative aspect-video rounded-[2.5rem] overflow-hidden bg-white/[0.01] border border-white/5 shadow-2xl ${i === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}`}
            >
              <AnimatePresence>
                <motion.img
                  key={scene.current}
                  src={scene.images[scene.current]}
                  onLoad={() => setIsLoaded(true)}
                  loading={i === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchpriority={i === 0 ? "high" : "auto"}
                  initial={{ opacity: 0, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, filter: 'blur(0px)' }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ backgroundColor: '#111' }}
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-85 transition-all duration-700"
                />
              </AnimatePresence>

              <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between z-20 opacity-0 group-hover:opacity-85 transition-all duration-500">
                <button
                  onClick={(e) => updateImg(e, i, -1)}
                  className="p-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-90 transition-all shadow-lg"
                >
                  <ChevronLeft size={16} strokeWidth={3} />
                </button>
                <button
                  onClick={(e) => updateImg(e, i, 1)}
                  className="p-2.5 rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-90 transition-all shadow-lg"
                >
                  <ChevronRight size={16} strokeWidth={3} />
                </button>
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 pointer-events-none opacity-0 group-hover:opacity-85 transition-all duration-500">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 backdrop-blur-md">
                      <MapPin size={16} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-white tracking-tight text-shadow-sm">
                      {scene.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-2xl border border-white/10 shadow-inner">
                    <span className="text-[10px] font-black text-white/90 tracking-widest leading-none">
                      {scene.current + 1}
                    </span>
                    <div className="w-[1px] h-2.5 bg-white/20" />
                    <span className="text-[10px] font-black text-white/40 tracking-widest leading-none">
                      {scene.images.length}
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 border border-white/0 group-hover:border-white/10 rounded-[2.5rem] transition-colors duration-700 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

