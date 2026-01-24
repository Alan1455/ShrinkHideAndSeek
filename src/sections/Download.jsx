import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Download as DownloadIcon, BookOpen, ExternalLink, MessageCircle } from 'lucide-react';


const Download = () => {
    return (
        <section id="download" className="relative py-40 px-6 bg-black flex items-center justify-center overflow-hidden select-none">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full" />
            </div>

            <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 text-center p-12 md:p-20 rounded-[4rem] bg-white/[0.03] backdrop-blur-2xl border border-white/10 w-full max-w-5xl shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
                <h2 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter drop-shadow-2xl">
                    準備好出發了嗎?
                </h2>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-12">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <p className="text-gray-300 text-sm font-medium">Minecraft 版本要求: 1.21.10</p>
                </div>

                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a href="#" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 px-12 py-6 bg-white text-black rounded-full font-bold text-xl hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
                    >
                        <DownloadIcon size={24} className="group-hover:translate-y-0.5 transition-transform" />
                        立即下載地圖 (v1.0)
                    </a>

                    <Link to="/docs" target="_blank" rel="noopener noreferrer"
                        className="group flex items-center justify-center gap-3 px-12 py-6 bg-white/5 text-white border border-white/10 rounded-full font-bold text-xl backdrop-blur-md hover:bg-white/10 transition-all hover:scale-105 active:scale-95"
                    >
                        <BookOpen size={24} className="group-hover:rotate-3 transition-transform" />
                        查看安裝指南
                    </Link>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col items-center">
                    <p className="text-gray-500 text-sm flex items-center gap-2">
                        遇到問題？前往 
                        <Link to="/docs" target="_blank" rel="noopener noreferrer"
                            className="text-gray-300 hover:text-blue-400 underline underline-offset-4 transition-colors inline-flex items-center gap-1"
                        >
                            官方文檔 <ExternalLink size={12} />
                        </Link>
                        尋求協助
                    </p>
                </div>
            </motion.div>
        </section>
    );
};

export default Download;

