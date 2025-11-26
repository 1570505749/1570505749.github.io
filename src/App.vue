<template>
  <div class="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
    <Navbar :isScrolled="isScrolled" />

    <!-- Hero Section -->
    <header class="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <!-- Background Grid Decoration -->
      <div class="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-20" />

      <div class="container mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div class="space-y-6 animate-fade-in-up">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-sm font-medium">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            Open to work
          </div>
          <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
            你好, 我是 <br />
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
              {{ PERSONAL_INFO.name }}
            </span>
          </h1>
          <p class="text-xl text-slate-400 max-w-lg leading-relaxed">
            {{ PERSONAL_INFO.title }}。
            <br />
            {{ PERSONAL_INFO.about.text }}
          </p>
          <div class="flex gap-4 pt-4">
            <a href="#contact" class="px-8 py-3 bg-cyan-500 hover:bg-cyan-600 text-slate-900 font-bold rounded-lg transition-all shadow-lg shadow-cyan-500/25 flex items-center gap-2">
              <Mail :size="18" /> 联系我
            </a>
            <a :href="PERSONAL_INFO.github" target="_blank" rel="noreferrer" class="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white font-medium rounded-lg border border-slate-700 transition-all flex items-center gap-2">
              <Github :size="18" /> GitHub
            </a>
          </div>
        </div>

        <div class="flex justify-center md:justify-end animate-fade-in-up delay-100">
          <TerminalBlock />
        </div>
      </div>
    </header>

    <!-- Skills Section -->
    <section id="skills" class="py-20 bg-slate-900/50">
      <div class="container mx-auto px-6">
        <SectionTitle title="技术栈" subtitle="我日常开发使用的工具与技术" />

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div v-for="skill in SKILLS" :key="skill.name" class="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors">
            <div class="flex items-center gap-3 mb-4 text-cyan-400">
              <component :is="skill.icon" :size="20" />
              <h3 class="font-bold text-lg text-slate-200">{{ skill.name }}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in skill.items" :key="item" class="text-sm text-slate-400 bg-slate-900 px-2 py-1 rounded border border-slate-800">
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="py-20">
      <div class="container mx-auto px-6">
        <SectionTitle title="精选项目" subtitle="一些我在业余时间或工作中构建的项目" />

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="(project, index) in PROJECTS" :key="index" :project="project" />
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="py-20 bg-slate-900/50">
      <div class="container mx-auto px-6 max-w-4xl">
        <SectionTitle title="工作经历" subtitle="我的职业成长轨迹" />

        <div class="space-y-8">
          <div v-for="(exp, index) in EXPERIENCE" :key="index" class="relative pl-8 md:pl-0">
            <!-- Timeline line for desktop -->
            <div class="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2"></div>

            <div :class="['md:flex items-center justify-between', { 'md:flex-row-reverse': index % 2 === 0 }]">
              <!-- Spacer for layout balance -->
              <div class="hidden md:block w-5/12" />

              <!-- Center Dot -->
              <div class="absolute left-0 md:left-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 -translate-x-[5px] md:-translate-x-1/2 mt-1.5 z-10 shadow-lg shadow-cyan-500/50"></div>

              <!-- Content Card -->
              <div class="md:w-5/12 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-cyan-500/30 transition-colors relative">
                <span class="text-sm font-mono text-cyan-400 mb-2 block">{{ exp.period }}</span>
                <h3 class="text-xl font-bold text-slate-100">{{ exp.role }}</h3>
                <h4 class="text-lg text-slate-400 mb-3 font-medium">{{ exp.company }}</h4>
                <p class="text-slate-400 text-sm leading-relaxed">
                  {{ exp.desc }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer / Contact -->
    <footer id="contact" class="bg-slate-950 pt-20 pb-10 border-t border-slate-800">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold text-white mb-6">准备好开始下一个项目了吗？</h2>
        <p class="text-slate-400 mb-8 max-w-lg mx-auto">
          如果你对我的作品感兴趣，或者有任何合作意向，随时通过邮件或社交媒体联系我。
        </p>

        <div class="flex justify-center gap-6 mb-12">
          <a :href="`mailto:${PERSONAL_INFO.email}`" class="p-4 bg-slate-900 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-all border border-slate-800 hover:scale-110">
            <Mail :size="24" />
          </a>
          <a :href="PERSONAL_INFO.github" class="p-4 bg-slate-900 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-all border border-slate-800 hover:scale-110">
            <Github :size="24" />
          </a>
          <a :href="PERSONAL_INFO.linkedin" class="p-4 bg-slate-900 rounded-full hover:bg-cyan-500 hover:text-slate-900 transition-all border border-slate-800 hover:scale-110">
            <Linkedin :size="24" />
          </a>
        </div>

        <div class="flex items-center justify-center gap-2 text-slate-600 text-sm">
          <Code :size="14" />
          <span>Built with Vue & Tailwind CSS by {{ PERSONAL_INFO.name }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, shallowRef } from 'vue';
import {
    Github,
    Linkedin,
    Mail,
    Terminal,
    Code,
    ExternalLink,
    Menu,
    X,
    Database,
    Globe,
    Server,
} from 'lucide-vue-next';

// --- Components (as functional components) ---

const Navbar = {
  props: ['isScrolled'],
  setup(props) {
    const isOpen = ref(false);
    const navLinks = [
        { name: "关于", href: "#about" },
        { name: "技能", href: "#skills" },
        { name: "项目", href: "#projects" },
        { name: "经历", href: "#experience" },
        { name: "联系", href: "#contact" },
    ];
    return { isOpen, navLinks, props };
  },
  template: `
    <nav :class="['fixed w-full z-50 transition-all duration-300', props.isScrolled ? 'bg-slate-900/90 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6']">
        <div class="container mx-auto px-6 flex justify-between items-center">
            <a href="#" class="text-2xl font-bold font-mono text-cyan-400 flex items-center gap-2">
                <Terminal :size="24" />
                <span>{Dev_Alex}</span>
            </a>
            <div class="hidden md:flex items-center gap-8">
                <a v-for="link in navLinks" :key="link.name" :href="link.href" class="text-slate-300 hover:text-cyan-400 transition-colors font-medium text-sm tracking-wide">
                    {{ link.name }}
                </a>
            </div>
            <button class="md:hidden text-slate-300" @click="isOpen = !isOpen">
                <X v-if="isOpen" :size="24" />
                <Menu v-else :size="24" />
            </button>
        </div>
        <div v-if="isOpen" class="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-4 animate-fade-in">
            <a v-for="link in navLinks" :key="link.name" :href="link.href" @click="isOpen = false" class="text-slate-300 hover:text-cyan-400 py-2 block font-medium">
                {{ link.name }}
            </a>
        </div>
    </nav>
  `
};

const TerminalBlock = {
  setup() {
    return { PERSONAL_INFO };
  },
  template: `
    <div class="w-full max-w-lg bg-slate-800 rounded-lg overflow-hidden shadow-2xl border border-slate-700 font-mono text-sm">
        <div class="bg-slate-900 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
            <div class="w-3 h-3 rounded-full bg-red-500" />
            <div class="w-3 h-3 rounded-full bg-yellow-500" />
            <div class="w-3 h-3 rounded-full bg-green-500" />
            <span class="ml-2 text-slate-500 text-xs">bash — 80x24</span>
        </div>
        <div class="p-6 text-slate-300 space-y-2">
            <div v-for="(line, index) in PERSONAL_INFO.about.terminalLines" :key="index" class="flex">
                <span class="text-green-400 mr-2">$</span>
                <span class="typing-effect">{{ line }}</span>
            </div>
            <div class="flex">
                <span class="text-green-400 mr-2">$</span>
                <span class="animate-pulse w-2 h-5 bg-cyan-400 block"></span>
            </div>
        </div>
    </div>
  `
};

const SectionTitle = {
  props: ['title', 'subtitle'],
  template: `
    <div class="mb-12">
        <h2 class="text-3xl md:text-4xl font-bold text-slate-100 mb-4 flex items-center gap-3">
            <span class="text-cyan-400">#</span> {{ title }}
        </h2>
        <div class="h-1 w-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-4"></div>
        <p class="text-slate-400 max-w-2xl">{{ subtitle }}</p>
    </div>
  `
};

const ProjectCard = {
  props: ['project'],
  components: { Code, ExternalLink },
  template: `
    <div class="group bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-900/20">
        <div class="flex justify-between items-start mb-4">
            <div :class="['p-3 rounded-lg bg-slate-900', project.color]">
                <Code :size="24" />
            </div>
            <a :href="project.link" class="text-slate-400 hover:text-cyan-400 transition-colors">
                <ExternalLink :size="20" />
            </a>
        </div>
        <h3 class="text-xl font-bold text-slate-100 mb-2 group-hover:text-cyan-400 transition-colors">
            {{ project.title }}
        </h3>
        <p class="text-slate-400 mb-6 text-sm leading-relaxed h-16 overflow-hidden">
            {{ project.desc }}
        </p>
        <div class="flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in project.tags" :key="tag" class="px-3 py-1 text-xs font-mono rounded-full bg-slate-900 text-cyan-300 border border-slate-700">
                {{ tag }}
            </span>
        </div>
    </div>
  `
};


// --- Data Configuration ---

const PERSONAL_INFO = {
    name: "Dev_Alex",
    title: "全栈开发工程师 / 开源爱好者",
    email: "alex@example.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    about: {
        text: "我是一名热衷于构建高性能Web应用的全栈开发者。拥有5年开发经验，擅长解决复杂的技术难题。我相信代码不仅是工具，更是创造未来的艺术。",
        terminalLines: [
            "> const alex = new Developer();",
            "> alex.location = 'Shanghai, China';",
            "> alex.skills = ['React', 'Node.js', 'Go'];",
            "> alex.passion = 'Building scalable systems';",
            "> alex.status = 'Ready to code...';"
        ]
    }
};

const SKILLS = [
    { name: "Frontend", icon: shallowRef(Globe), items: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { name: "Backend", icon: shallowRef(Server), items: ["Node.js", "Go", "Python", "GraphQL"] },
    { name: "DevOps", icon: shallowRef(Database), items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { name: "Tools", icon: shallowRef(Terminal), items: ["Git", "Vim", "Linux", "Figma"] },
];

const PROJECTS = [
    {
        title: "Nebula Dashboard",
        desc: "基于 React 和 D3.js 的高性能数据可视化分析平台，支持千万级数据实时渲染。",
        tags: ["React", "D3.js", "WebSockets"],
        link: "#",
        color: "text-blue-400"
    },
    {
        title: "CodeSync Editor",
        desc: "支持多人实时协作的在线代码编辑器，集成了 Monaco Editor 和 CRDT 算法。",
        tags: ["TypeScript", "Node.js", "WebRTC"],
        link: "#",
        color: "text-green-400"
    },
    {
        title: "AutoDeploy Bot",
        desc: "用于自动化部署流程的 Slack 机器人，通过简单的命令即可管理复杂的云端架构。",
        tags: ["Go", "Docker", "AWS Lambda"],
        link: "#",
        color: "text-purple-400"
    }
];

const EXPERIENCE = [
    {
        company: "Tech Giants Inc.",
        role: "高级前端工程师",
        period: "2021 - 至今",
        desc: "负责核心产品的前端架构重构，提升了页面加载速度 40%。主导了内部组件库的开发。"
    },
    {
        company: "Future Startups",
        role: "全栈开发工程师",
        period: "2019 - 2021",
        desc: "从零搭建了公司早期的电商平台，负责后端 API 设计与前端实现。实现了高并发下的稳定运行。"
    }
];

// --- App Logic ---

const isScrolled = ref(false);

const handleScroll = () => {
    isScrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});

</script>

<style>
/* From style.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer utilities {
    .animate-fade-in {
        animation: fadeIn 0.5s ease-out forwards;
    }

    .animate-fade-in-up {
        animation: fadeInUp 0.5s ease-out forwards;
    }

    .typing-effect {
        white-space: nowrap;
        overflow: hidden;
        animation: typing 2s steps(40, end);
    }
}

@keyframes fadeIn {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}
</style>