import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Rocket, Copy, Cpu, Heart, Lightbulb, Sparkles, ExternalLink, Coffee, CheckCircle2, X } from 'lucide-react';
import PageHeader from '../components/PageHeader';


const Donate = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('ltc');
    const [copied, setCopied] = useState(false);
    const cryptoData = {
        ltc: {
            name: "Litecoin",
            address: "ltc1qlvpk4hknz0km8mfelfkatm6npwz2lf7q0rpas3",
            qr: new URL('../assets/ltc.webp', import.meta.url).href,
            color: "text-blue-400"
        },
        btc: {
            name: "Bitcoin",
            address: "bc1q9fqns5xl0qhfk34wz67agflssc48ccfv3u3hfv",
            qr: new URL('../assets/btc.webp', import.meta.url).href,
            color: "text-orange-400"
        },
        paypal: {
            name: "PayPal",
            address: "https://paypal.me/HsiehAlan",
            qr: new URL('../assets/paypal.webp', import.meta.url).href,
            color: "text-indigo-400"
        }
    };
    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };
    const fundingGoals = [
        { icon: Cpu, title: "開發環境優化", desc: "用於開發設備的維護與研發環境部署，確保團隊能產出更優秀的代碼。", color: "text-cyan-400", bg: "bg-cyan-500/10" },
        { icon: Lightbulb, title: "激發創作動力", desc: "您的支持能讓團隊成員在繁忙之餘，更有動力投入時間進行技術開發。", color: "text-amber-400", bg: "bg-amber-500/10" },
        { icon: Rocket, title: "未來專案拓展", desc: "幫助團隊探索更多技術領域，讓創意不只侷限於單一環境。", color: "text-blue-400", bg: "bg-blue-500/10" }
    ];
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-16 pb-20"
        >
            <PageHeader title="支持團隊" icon={Heart} tag="Invest in Creativity" />
            <motion.div className="relative p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent border border-white/10 overflow-hidden">
                <div className="absolute -right-20 -top-20 w-80 h-80 bg-blue-500/5 blur-[100px] rounded-full" />
                <div className="relative z-10 max-w-3xl">
                    <div className="flex items-center gap-2 text-blue-400 mb-4 font-mono text-sm tracking-widest">
                        <Sparkles size={16} /> SUPPORT US
                    </div>
                    <h2 className="text-3xl font-black text-white mb-6 tracking-tight">讓創意走得更遠</h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8">
                        我們是一個熱衷於技術挑戰與內容創作的團隊。您的贊助是對團隊創作價值的認可，幫助我們將腦中的構思轉化為更完美的現實。
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="px-8 py-4 bg-white text-black hover:bg-gray-200 rounded-2xl font-black text-lg transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)] flex items-center gap-3 group active:scale-95"
                        >
                            贊助支持團隊 <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </button>
                        <div className="px-6 py-4 rounded-2xl border border-white/10 bg-white/5 flex items-center gap-3 text-gray-400">
                            <Coffee className="text-amber-400" size={20} />
                            <span className="font-bold text-sm">請開發者喝杯咖啡</span>
                        </div>
                    </div>
                </div>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {fundingGoals.map((goal, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.2 }}
                        className="p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:border-white/40 transition-colors group relative overflow-hidden"
                    >
                        <div className={`w-14 h-14 ${goal.bg} ${goal.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                            <goal.icon size={28} />
                        </div>
                        <h3 className="text-[21px] font-bold text-white mb-4">{goal.title}</h3>
                        <p className="text-gray-300 text-sm leading-relaxed relative z-10">{goal.desc}</p>
                        <div className="absolute -right-4 -bottom-4 text-white/[0.02] font-black text-6xl italic select-none">0{i + 1}</div>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/80 backdrop-blur-md" 
                            onClick={() => setIsModalOpen(false)} 
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-md bg-[#121212] border border-white/10 rounded-[2.5rem] p-8 shadow-2xl overflow-hidden"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute right-6 top-6 text-gray-500 hover:text-white transition-colors z-20">
                                <X size={24} />
                            </button>
                            <div className="text-center space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-black text-white">選擇贊助方式</h3>
                                    <p className="text-gray-500 text-sm">點擊地址可自動複製</p>
                                </div>
                                <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/5 relative">
                                    {Object.keys(cryptoData).map((key) => (
                                        <button
                                            key={key}
                                            onClick={() => setActiveTab(key)}
                                            className={`relative flex-1 py-2.5 rounded-xl font-bold text-sm transition-colors z-10 ${activeTab === key ? 'text-black' : 'text-gray-400 hover:text-white'}`}
                                        >
                                            {activeTab === key && (
                                                <motion.div 
                                                    layoutId="activeTab"
                                                    className="absolute inset-0 bg-white rounded-xl shadow-lg"
                                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                />
                                            )}
                                            <span className="relative z-10">{key.toUpperCase()}</span>
                                        </button>
                                    ))}
                                </div>
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2 }}
                                        className="space-y-6"
                                    >
                                        <div className="aspect-square w-48 mx-auto bg-white p-3 rounded-3xl overflow-hidden shadow-inner flex items-center justify-center">
                                            <img src={cryptoData[activeTab].qr} alt="QR Code" className="w-full h-full object-contain" />
                                        </div>
                                        <button
                                            onClick={() => handleCopy(cryptoData[activeTab].address)}
                                            className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-white/20 transition-all text-left relative"
                                        >
                                            <p className={`text-[12px] font-mono tracking-widest mb-1 ${cryptoData[activeTab].color}`}>
                                                {cryptoData[activeTab].name} Address
                                            </p>
                                            <p className="text-gray-300 font-mono text-xs break-all pr-8 truncate">
                                                {cryptoData[activeTab].address}
                                            </p>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-white">
                                                <AnimatePresence mode="wait">
                                                    {copied ? (
                                                        <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                            <CheckCircle2 size={18} className="text-emerald-500" />
                                                        </motion.div>
                                                    ) : (
                                                        <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                                                            <Copy size={18} />
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>
                                        </button>
                                    </motion.div>
                                </AnimatePresence>
                                <p className="text-[13px] text-gray-500 font-medium pt-2">
                                    轉帳前請務必確認貨幣與地址正確
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
            <div className="pt-10 border-t border-white/5 text-center">
                <h4 className="text-gray-400 font-medium italic">「創意不應受限於資金。感謝您與我們一同打造更好的內容。」</h4>
            </div>
        </motion.div>
    );
};

export default Donate;

