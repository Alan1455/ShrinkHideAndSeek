import { Settings, AlertCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';


const ServerProperties = () => {
    const rawConfig = `accepts-transfers=false
allow-flight=true
allow-nether=false
broadcast-console-to-ops=true
broadcast-rcon-to-ops=true
bug-report-link=
debug=false
difficulty=easy
enable-code-of-conduct=false
enable-command-block=true
enable-jmx-monitoring=false
enable-query=true
enable-rcon=false
enable-status=true
enforce-secure-profile=false
enforce-whitelist=false
entity-broadcast-range-percentage=100
force-gamemode=false
function-permission-level=2
gamemode=adventure
generate-structures=true
generator-settings={}
hardcore=false
hide-online-players=false
initial-disabled-packs=
initial-enabled-packs=vanilla
level-name=world
level-seed=
level-type=default
log-ips=true
max-build-height=256
max-chained-neighbor-updates=1000000
max-players=87
max-tick-time=60000
max-world-size=29999984
motd=§c§l§o§k3§e§l§o縮小鬼抓人§c§l§o§k3
network-compression-threshold=256
online-mode=true
op-permission-level=4
pause-when-empty-seconds=60
player-idle-timeout=0
prevent-proxy-connections=false
pvp=true
query.port=25565
rate-limit=0
rcon.password=
rcon.port=25575
region-file-compression=deflate
require-resource-pack=false
resource-pack=
resource-pack-id=
resource-pack-prompt=
resource-pack-sha1=
server-ip=
server-port=25565
simulation-distance=10
snooper-enabled=true
spawn-animals=true
spawn-monsters=true
spawn-npcs=true
spawn-protection=0
status-heartbeat-interval=0
sync-chunk-writes=true
text-filtering-config=
text-filtering-version=0
use-native-transport=true
view-distance=10
white-list=false`;
    const highlights = [
        { key: "enable-command-block=true", desc: "必須開啟，否則非常多邏輯無法運作。" },
        { key: "gamemode=adventure", desc: "必須設定，冒險模式可防止玩家破壞場景。" },
        { key: "allow-flight=true", desc: "必須開啟，不開啟有回朔的可能。" },
        { key: "level-name=world", desc: "必須確保與下載的地圖資料夾名稱一致。" }
    ];
    return (
        <div className="space-y-8">
            <PageHeader title="伺服器配置" icon={Settings} tag="server.properties" />
            <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 relative group h-[590px] flex flex-col">
                    <div className="absolute -inset-0.5 bg-gradient-to-b from-blue-500/20 to-purple-500/20 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                    <div className="relative bg-[#0d0d0d] border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                        <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5">
                            <div className="flex gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/40" />
                            </div>
                            <span className="text-[10px] font-mono text-gray-500 tracking-widest">server.properties</span>
                        </div>
                        <div className="flex-grow p-2 pb-12 font-mono text-sm leading-relaxed overflow-x-auto custom-scroll h-full overflow-y-auto select-text">
                            {rawConfig.split('\n').map((line, i) => (
                                <div key={i} className="flex gap-4 group/line">
                                    <span className="shrink-0 w-6 text-right text-white/20 select-none">{i + 1}</span>
                                    <span className="text-white/70">
                                        {line.split('=')[0]}
                                        <span className="text-white/30">=</span>
                                        <span className={`${line.includes('true') ? 'text-green-400' : line.includes('false') ? 'text-red-400' : 'text-gray-400'}`}>{line.split('=')[1]}</span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <h3 className="text-xs font-black text-blue-500 uppercase tracking-widest ml-1">重要設定說明</h3>
                    {highlights.map((item, i) => (
                        <div key={i} className="p-4 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-blue-500/40 transition-all">
                            <code className="text-[14px] text-blue-300 font-bold block mb-1">{item.key}</code>
                            <p className="text-[13px] text-gray-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                    <div className="mt-6 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                        <div className="flex items-center gap-2 text-amber-400 mb-2 text-xs font-bold">
                            <AlertCircle size={14} /> 注意事項
                        </div>
                        <p className="text-[11px] text-gray-500">
                            修改此檔案後，必須重啟伺服器才能生效。建議在修改前先備份原始檔案。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServerProperties;

