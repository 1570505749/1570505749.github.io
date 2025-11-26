<script setup>
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';
import { Rocket, Star, Activity, ChevronDown, Music } from 'lucide-vue-next';

// Main component state
const tarsHumor = ref(75);
const tarsMessage = ref("系统在线。准备探索。");

// Scroll handler
const handleScroll = () => {
    const totalScroll = document.documentElement.scrollTop;
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    if (windowHeight > 0) {
        const scroll = totalScroll / windowHeight;
        // This ref is not used in the template, but keeping the logic from original file
        // const scrollProgress = ref(0);
        // scrollProgress.value = scroll;
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

// TARS interaction logic
const adjustHumor = (val) => {
    let newLevel = tarsHumor.value + val;
    newLevel = Math.max(0, Math.min(100, newLevel)); // Clamp the value between 0 and 100
    tarsHumor.value = newLevel;

    if (newLevel > 90) {
        tarsMessage.value = "自爆程序已启动... 开玩笑的。";
    } else if (newLevel > 60) {
        tarsMessage.value = "诚实度设置：90%。幽默度设置：适当。";
    } else if (newLevel < 20) {
        tarsMessage.value = "幽默度过低。我将变成一个无聊的计算器。";
    } else {
        tarsMessage.value = "正在分析数据... 这是一个很棒的网站。";
    }
};

// Data for child-like components rendered with v-for
const statCards = [
  { label: "地球引力", value: "9.807 m/s²" },
  { label: "时间膨胀", value: "1 Hour = 7 Years", highlight: true },
  { label: "氧气水平", value: "98%" },
  { label: "目标星系", value: "Gargantua" },
];

const skillCards = [
    { icon: shallowRef(Rocket), title: "前端探索", desc: "React, Vue, WebGL. 像穿越虫洞一样突破浏览器的限制。" },
    { icon: shallowRef(Activity), title: "系统架构", desc: "Node.js, Python. 维持空间站生命维持系统的核心稳定。" },
    { icon: shallowRef(Star), title: "视觉设计", desc: "UI/UX, 3D Modeling. 在五维空间中构建可感知的交互。" },
];

const logEntries = [
    { planet: "MILLER'S PLANET", desc: "在这颗全是水的星球上，每一个小时都是地球上的七年。时间是最昂贵的资源。", color: "from-blue-600 to-blue-900" },
    { planet: "MANN'S PLANET", desc: "冰冷、荒凉、没有希望。有时候生存本能会让我们展现出人性最黑暗的一面。", color: "from-gray-200 to-gray-500", textColor: "text-black" },
    { planet: "EDMUNDS' PLANET", desc: "这或许是我们新的家园。这里的空气适合呼吸，爱指引我们来到了这里。", color: "from-orange-700 to-red-900" },
];

const backgroundStyle = {
  backgroundImage: "url('http://img.peng55.xyz/images/blog/rAiYTfKGqDCRIIqo664sY9XZIvQ.webp')",
  backgroundSize: 'cover',
  backgroundPosition: 'center center',
};
</script>

<template>
    <div class="bg-black text-gray-200 font-sans min-h-screen selection:bg-orange-500 selection:text-white overflow-x-hidden">
        <!-- Background -->
        <div class="fixed inset-0 z-0" :style="backgroundStyle">
            <div class="absolute inset-0 bg-black/70"></div>
        </div>

        <div class="relative z-10">
            <!-- Hero -->
            <section class="relative h-screen flex flex-col items-center justify-center text-center px-4">
                <div class="z-10 space-y-6 max-w-4xl animate-fade-in">
                    <h2 class="text-orange-500 tracking-[0.5em] text-sm md:text-base uppercase mb-4">Mankind was born on Earth. It was never meant to die here.</h2>
                    <h1 class="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-6 drop-shadow-lg">
                        INTERSTELLAR
                    </h1>
                    <div class="h-px w-24 bg-orange-500 mx-auto mb-8"></div>
                    <p class="text-lg md:text-2xl font-light italic text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        "不要温和地走进那个良夜，<br/>
                        怒斥，怒斥光明的消逝。"
                    </p>
                </div>
                <div class="absolute bottom-10 animate-bounce">
                    <ChevronDown class="text-white/50 w-8 h-8" />
                </div>
            </section>

            <!-- Mission -->
            <section id="mission" class="relative py-24 px-6 md:px-20 bg-gradient-to-b from-transparent to-black/80">
                <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div class="space-y-8">
                        <h3 class="text-3xl font-bold text-white border-l-4 border-orange-500 pl-6">拉撒路计划</h3>
                        <p class="text-gray-400 leading-8 text-lg">
                            我们曾经仰望星空，思索我们在宇宙中的位置。现在我们只会低头担心污垢和尘埃。这个网站是我在这个数字宇宙中的空间站，记录着我对技术、设计与未来的探索。就像库珀离开农场一样，我也在寻找超越现有维度的答案。
                        </p>
                        <div class="grid grid-cols-2 gap-6">
                            <div v-for="card in statCards" :key="card.label"
                                 class="p-4 border rounded"
                                 :class="card.highlight ? 'border-orange-500 bg-orange-500/10' : 'border-white/10 bg-white/5'">
                                <div class="text-xs text-gray-400 uppercase tracking-wider mb-1">{{ card.label }}</div>
                                <div class="font-mono text-lg" :class="card.highlight ? 'text-orange-400' : 'text-white'">{{ card.value }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="relative h-96 w-full rounded-lg overflow-hidden border border-white/10 group">
                        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black transition-transform duration-700 group-hover:scale-110"></div>
                        <div class="absolute inset-0 flex items-center justify-center">
                            <div class="w-48 h-48 rounded-full border border-white/20 flex items-center justify-center relative animate-pulse-slow">
                                <div class="absolute w-full h-full rounded-full border-t border-r border-blue-400 animate-spin-slow"></div>
                                <span class="text-blue-300 font-mono tracking-widest text-xs">WORMHOLE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Skills -->
            <section class="py-20 bg-zinc-900/50 backdrop-blur-sm border-y border-white/5">
                <div class="max-w-4xl mx-auto text-center px-4">
                    <h3 class="text-2xl font-mono text-orange-400 mb-12">CASE STUDY: SKILLSET</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div v-for="skill in skillCards" :key="skill.title" class="p-8 border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group">
                            <div class="text-orange-500 mb-4 group-hover:scale-110 transition-transform duration-300 w-10 h-10 mx-auto">
                                <component :is="skill.icon" :size="40" />
                            </div>
                            <h4 class="text-lg font-bold text-white mb-2">{{ skill.title }}</h4>
                            <p class="text-gray-400 text-sm">{{ skill.desc }}</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- TARS -->
            <section id="crew" class="py-24 px-4 flex justify-center">
                <div class="bg-zinc-800 rounded-xl p-1 border-4 border-zinc-700 w-full max-w-2xl shadow-2xl">
                    <div class="bg-black p-6 rounded-lg font-mono text-green-500 h-full flex flex-col relative overflow-hidden">
                        <div class="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,3px_100%]"></div>
                        <div class="flex justify-between items-end border-b border-green-500/30 pb-4 mb-4 z-20">
                            <div>
                                <h4 class="text-xl font-bold">TARS interface</h4>
                                <p class="text-xs opacity-70">US ROBOTIC CORP. SERIES 9</p>
                            </div>
                            <div class="text-right text-xs">
                                <p>HUMOR: {{ tarsHumor }}%</p>
                                <p>HONESTY: 90%</p>
                            </div>
                        </div>
                        <div class="flex-grow min-h-[150px] mb-6 z-20">
                            <p class="typing-effect-container text-lg">
                                <span class="mr-2">&gt;</span>
                                <span class="typing-effect">{{ tarsMessage }}</span>
                            </p>
                        </div>
                        <div class="grid grid-cols-2 gap-4 z-20">
                            <button @click="adjustHumor(-10)" class="bg-green-900/20 border border-green-500/50 py-3 hover:bg-green-500 hover:text-black transition-colors uppercase text-sm">
                                降低幽默度
                            </button>
                            <button @click="adjustHumor(10)" class="bg-green-900/20 border border-green-500/50 py-3 hover:bg-green-500 hover:text-black transition-colors uppercase text-sm">
                                增加幽默度
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Log -->
            <section id="log" class="py-24 px-6 max-w-7xl mx-auto">
                <h3 class="text-3xl font-bold mb-12 text-center text-white">任务日志</h3>
                <div class="grid grid-cols-1 md:grid-cols-3 gap-0">
                    <div v-for="log in logEntries" :key="log.planet" class="group relative h-80 overflow-hidden bg-gradient-to-br" :class="log.color">
                        <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
                        <div class="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <h4 class="text-2xl font-bold tracking-widest uppercase mb-2" :class="log.textColor || 'text-white'">{{ log.planet }}</h4>
                            <div class="h-1 w-12 bg-white mb-4 transition-all duration-300 group-hover:w-24"></div>
                            <p class="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 max-w-xs" :class="log.textColor || 'text-white'">
                                {{ log.desc }}
                            </p>
                        </div>
                        <div class="absolute top-4 right-4 opacity-50">
                            <Activity :class="log.textColor || 'text-white'" />
                        </div>
                    </div>
                </div>
            </section>

            <!-- Footer -->
            <footer class="py-20 text-center relative overflow-hidden">
                <div class="relative z-10 px-4">
                    <Music class="w-8 h-8 mx-auto mb-6 text-orange-500 animate-pulse" />
                    <p class="text-xl font-serif italic text-gray-400 mb-8 max-w-2xl mx-auto">
                        "爱是我们唯一能感知的，超越时空维度的东西。"
                    </p>
                    <p class="text-xs text-gray-600 tracking-widest uppercase">
                        Designed by AI & Human Collaboration. Based on Christopher Nolan's Masterpiece.
                    </p>
                </div>
                <div class="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent opacity-50"></div>
            </footer>
        </div>
    </div>
</template>

<style>
/* To make the typing effect re-trigger on message change, we need a key on the element
   but a simpler CSS-only way is to wrap it and reset the animation.
   The original React code didn't have animation, so this is an enhancement.
*/
.typing-effect {
  display: inline-block;
  animation: typing 2s steps(30, end);
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}

.typing-effect-container {
    display: flex;
}

/* The typing effect animation */
@keyframes typing {
  from { 
    width: 0;
  }
  to { 
    width: 100%;
  }
}
</style>
