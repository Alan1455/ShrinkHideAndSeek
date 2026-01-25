import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';


const FAQ = () => {
    const [activeIdx, setActiveIdx] = useState(null);
    const faqs = [
        {
            q: "遊戲需要特定的 Minecraft 版本嗎?",
            a: "是的，本作品目前針對 Minecraft 1.20.10 開發。請確保您的伺服器與客戶端版本一致，以避免指令包失效。"
        },
        {
            q: "我有自己的地圖，可以提取 Datapack 去那邊用嗎?",
            a: <>可以，但請務必遵守<Link to="/docs/terms" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">使用條款</Link>。您可以將我們的 Datapack 提取至您的地圖中使用，但若要公開發佈，請註明技術來源與作者。</>
        },
        {
            q: "支援基岩版(Bedrock)嗎?",
            a: "很抱歉，本專案目前僅支援 Java 版(Java Edition)，因為核心邏輯大量依賴了 Java 版特有的實體屬性(Attribute)指令。"
        },
        {
            q: "可以實況上傳YouTube / Twitch嗎?",
            a: <>我們非常鼓勵玩家進行實況或影片創作！但請在影片資訊欄加入<Link to="/docs/terms" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">這些資訊</Link>。</>
        },
        {
            q: "可以在單人世界遊玩嗎?",
            a: "不推薦。此地圖是鬼抓人，建議 3 人以上遊玩。"
        }
    ];
    return (
        <div className="space-y-8 w-full">
            <PageHeader title="常見問題" icon={HelpCircle} tag="Support" />
            <div className="space-y-4 w-full">
                {faqs.map((faq, i) => (
                    <div key={i} className={`w-full border rounded-2xl bg-white/[0.02] overflow-hidden transition-all ${activeIdx === i ? 'border-blue-500/30' : 'border-white/[0.08]'}`}>
                        <button onClick={() => setActiveIdx(activeIdx === i ? null : i)} className="w-full flex items-stretch justify-between p-6 text-left">
                            <span className={`font-black ${activeIdx === i ? 'text-blue-400' : 'text-white'}`}>
                                {faq.q}
                            </span>
                            <ChevronRight size={18} className={`transition-transform ${activeIdx === i ? 'rotate-90 text-blue-400' : 'text-gray-500'}`} />
                        </button>
                        <AnimatePresence>
                            {activeIdx === i && (
                                <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                                    <div className="px-6 pb-6 text-gray-400 border-t border-white/[0.05] pt-5">
                                        {faq.a}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQ;

