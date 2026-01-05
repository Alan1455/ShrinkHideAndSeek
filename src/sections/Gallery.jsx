import React from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Maximize2, MapPin } from 'lucide-react';

const Gallery = () => {
  const images = [
    { src: "/src/assets/backgroud.png", title: "幽靜深谷", url: "#" },
    { src: "/src/assets/backgroud.png", title: "遺落神廟", url: "#" },
    { src: "/src/assets/backgroud.png", title: "微光森林", url: "#" },
    { src: "/src/assets/backgroud.png", title: "終界邊境", url: "#" },
    { src: "/src/assets/backgroud.png", title: "古老遺蹟", url: "#" }
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-black select-none">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-row items-center justify-center gap-4 mb-20">
          <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/20">
            <ImageIcon className="text-blue-500" size={28} />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter">
            場景截圖
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {images.map((img, i) => (
            <motion.a
              key={i}
              href={img.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`group relative aspect-video rounded-[2rem] overflow-hidden bg-white/5 border border-white/10 block cursor-pointer
                ${i === 0 ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2'}`}
            >
              <img 
                src={img.src} 
                alt={img.title} 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" 
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-blue-400" />
                    <span className="text-white font-medium">{img.title}</span>
                  </div>
                  <div className="p-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white">
                    <Maximize2 size={18} />
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 border border-white/0 group-hover:border-white/20 rounded-[2rem] transition-colors duration-300 pointer-events-none" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

