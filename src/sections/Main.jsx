import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, Play, ChevronDown } from 'lucide-react';


const Main = () => {
    return (
        <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black select-none">
            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
                    style={{
                        filter: 'brightness(0.4) contrast(1.2)'
                    }}
                />
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/30 blur-[150px] rounded-full animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple-600/20 blur-[130px] rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
                <div className="absolute inset-0 opacity-30 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
            </div>

            <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative z-10 text-center px-6"
            >
                <div className="mb-12">
                    <motion.h1
                        className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-4 drop-shadow-[0_10px_50px_rgba(0,0,0,0.8)]"
                    >
                        縮小鬼抓人
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, letterSpacing: "0.2em" }}
                        animate={{ opacity: 1, letterSpacing: "1.2em" }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-blue-400 uppercase text-xs md:text-sm font-medium ml-[1.2em] drop-shadow-md"
                    >
                        就是縮小版
                    </motion.p>
                </div>
                
                <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
                    <Link
                        to="download"
                        smooth={true}
                        duration={800}
                        className="group flex items-center gap-2 px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 active:scale-95 cursor-pointer shadow-2xl"
                    >
                        <Download size={20} />
                        立即下載
                    </Link>

                    {/*
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-2 px-10 py-4 bg-white/10 text-white rounded-full font-bold text-lg backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all"
                    >
                        <Play size={20} fill="currentColor" />
                        觀看預告
                    </a>
                    */}
                </div>
            </motion.div>

            <div className="absolute bottom-10 left-0 w-full z-10 pointer-events-none">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="flex flex-col items-center justify-center gap-2"
                >
                    <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] leading-none">
                        Scroll Down
                    </span>
                    <ChevronDown size={20} className="text-white/40" />
                </motion.div>
            </div>
        </section>
    );
};

export default Main;

