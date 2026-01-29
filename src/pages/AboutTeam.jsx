import { motion } from 'framer-motion';
import { Users, Heart } from 'lucide-react';
import PageHeader from '../components/PageHeader';


const AboutTeam = () => {
    const team = [
        {
            name: "Alan",
            avatar: new URL('../assets/alan.webp', import.meta.url).href,
            roles: ["場景建築師", "關卡設計", "核心邏輯開發", "指令包編寫", "網頁開發"],
            color: "from-pink-500/20 to-pink-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(236,72,153,0.15)]",
            border: "border-pink-500/30",
            text: "text-pink-400",
            tags: ["Full-Stack", "Datapack", "World Build", "Website"],
            quote: "oi oi oi a eye eye",
            desc: "專案的技術支柱，負責從底層指令架構到前端網頁展示的全方位整合，將複雜的縮小機制轉化為流暢的遊戲體驗。"
        },
        {
            name: "fm487",
            avatar: new URL('../assets/fm487.webp', import.meta.url).href,
            roles: ["核心邏輯開發", "指令包編寫"],
            color: "from-red-500/20 to-red-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(239,68,68,0.15)]",
            border: "border-red-500/30",
            text: "text-red-400",
            tags: ["Audio", "Commands", "Texture pack"],
            quote: "蛤",
            desc: "專注於技術細節，透過精密的指令編寫，賦予地圖獨特的沉浸體驗。"
        },
        {
            name: "Arctic_Peng",
            avatar: new URL('../assets/Arctic_Peng.webp', import.meta.url).href,
            roles: ["專案發起人", "場景建築師", "關卡設計", "靈感啟發"],
            color: "from-cyan-500/20 to-cyan-500/5",
            glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
            border: "border-cyan-500/30",
            text: "text-cyan-400",
            tags: ["Creative", "Founder", "World Build"],
            quote: "你們是給炮吧",
            desc: "作品的靈魂人物與構思者，不僅定義了遊戲的核心玩法，更在場景構築中融入了無數創意點子與關卡巧思。"
        }
    ];
    return (
        <div className="space-y-12 pb-20">
            <PageHeader title="製作團隊" icon={Users} tag="The Creators" />
            <div className="grid grid-cols-1 gap-10">
                {team.map((member, idx) => (
                    <motion.div 
                        key={idx}
                        whileHover={{ y: -8 }}
                        className={`p-10 rounded-[2.5rem] bg-gradient-to-br ${member.color} border-2 ${member.border} ${member.glow} relative overflow-hidden group transition-all duration-500`}
                    >
                        <div className="relative z-10 flex flex-col md:flex-row gap-10">
                            <div className="flex flex-col items-center shrink-0 space-y-4">
                                <div className="w-32 h-32 bg-black/40 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-inner group-hover:border-white/20 transition-all">
                                    <Users
                                        size={56}
                                        className={`absolute ${member.text} opacity-80 group-hover:scale-110 transition-transform duration-500`}
                                    />
                                    {member.avatar && (
                                        <img
                                            src={member.avatar}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 relative z-10"
                                            onError={(e) => { e.currentTarget.style.opacity = '0'; }}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col gap-1.5 w-full">
                                    {member.tags.map(tag => (
                                        <span key={tag} className="text-center px-3 py-1 bg-black/40 rounded-lg text-[9px] font-mono text-gray-400 border border-white/5 tracking-widest">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex-1 space-y-6">
                                <div>
                                    <div className="flex items-center gap-4 mb-3">
                                        <h3 className={`text-4xl font-black ${member.text} tracking-tighter`}>{member.name}</h3>
                                        <div className="h-px flex-1 bg-white/10" />
                                        <span className="px-4 py-1 bg-white/5 rounded-full text-[10px] font-black text-white/50 uppercase tracking-widest">
                                            Core Dev
                                        </span>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {member.roles.map((role, i) => (
                                            <span key={i} className={`text-[11px] font-bold px-3 py-1 rounded-md bg-white/5 border border-white/5 ${member.text} opacity-90`}>
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="relative group/quote">
                                    <div className={`absolute -left-2 -top-2 text-2xl ${member.text} opacity-20 font-serif`}>"</div>
                                    <p className={`pl-4 py-1 text-sm font-medium ${member.text} opacity-80 ${member.border}`}>
                                        {member.quote}
                                    </p>
                                </div>
                                <div className="relative">
                                    <p className="text-gray-300 text-base leading-[1.8] font-medium max-w-2xl relative z-10">
                                        {member.desc}
                                    </p>
                                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-white/10 to-transparent" />
                                </div>
                            </div>
                        </div>
                        <div className={`absolute -right-6 -bottom-10 text-[10rem] font-black opacity-[0.02] select-none pointer-events-none tracking-tighter italic uppercase group-hover:opacity-[0.04] group-hover:-translate-x-4 transition-all duration-700`}>
                            {member.name}
                        </div>
                    </motion.div>
                ))}
            </div>
            <div className="mt-20 p-10 rounded-[2rem] bg-white/[0.01] border-2 border-dashed border-white/5 flex flex-col items-center text-center space-y-4">
                <div className="p-3 bg-red-500/10 rounded-2xl">
                    <Heart size={24} className="text-red-500 animate-pulse" />
                </div>
                <div className="space-y-2">
                    <h4 className="text-xl font-bold text-white tracking-tight">特別鳴謝</h4>
                    <p className="text-gray-500 text-sm max-w-lg leading-relaxed">
                        感謝所有參與測試的玩家。你們的建議是地圖不斷進化的原動力。
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AboutTeam;

