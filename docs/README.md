---
home: true
title: 海贼王 | 我要成为海贼王！
lang: zh-CN
---

<script setup>
import { onMounted, onUnmounted } from 'vue'

// 背景轮播
const images = [
  'http://img.peng55.xyz/images/onepiece/bg1.jpeg',
  'http://img.peng55.xyz/images/onepiece/t1.png',
  'http://img.peng55.xyz/images/onepiece/t2.png'
]
let current = 0
let timer = null

const startSlider = () => {
  timer = setInterval(() => {
    current = (current + 1) % images.length
  }, 8000)
}

// 海上粒子效果
let canvas, ctx, particlesArray = [], animationId

const initParticles = () => {
  canvas = document.getElementById('particles')
  if (!canvas) return
  ctx = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width
      this.y = Math.random() * canvas.height
      this.size = Math.random() * 20 + 8
      this.speedX = Math.random() * 1.5 - 0.75
      this.speedY = Math.random() * 1 - 0.5
    }
    update() {
      this.x += this.speedX
      this.y += this.speedY
      if (this.x > canvas.width || this.x < 0) this.speedX *= -1
      if (this.y > canvas.height || this.y < 0) this.speedY *= -1
    }
    draw() {
      ctx.fillStyle = 'rgba(255,255,255,0.6)'
      ctx.beginPath()
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  particlesArray = []
  for (let i = 0; i < 100; i++) {
    particlesArray.push(new Particle())
  }

  const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    particlesArray.forEach(p => {
      p.update()
      p.draw()
    })
    animationId = requestAnimationFrame(animate)
  }
  animate()
}

const handleResize = () => {
  if (canvas) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }
}

onMounted(() => {
  startSlider()
  initParticles()
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  clearInterval(timer)
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <div class="op-container">
    <!-- 背景轮播 -->
    <div id="bg-slider">
      <div
        v-for="(img, index) in images"
        :key="index"
        class="bg-slide"
        :class="{ active: index === current }"
        :style="{ backgroundImage: `url(${img})` }"
      />
    </div>

    <!-- 海上粒子 -->
    <canvas id="particles" />

    <!-- 主内容 -->
    <main class="content">
      <!-- <header class="header">
        <h1>ONE PIECE</h1>
        <p>我要成为海贼王！</p>
      </header> -->

      <div class="container">
        <div class="card">
          <img src="http://img.peng55.xyz/images/onepiece/t1.png" alt="五档" />
          <h2>最新剧集</h2>
          <p>Egghead篇火热连载中！<br />路飞五档形态超燃炸裂！</p>
        </div>
        <div class="card">
          <img src="http://img.peng55.xyz/images/onepiece/t2.png" alt="草帽一伙" />
          <h2>草帽一伙</h2>
          <p>路飞 • 索隆 • 娜美 • 乌索普 • 山治<br />乔巴 • 罗宾 • 弗兰奇 • 布鲁克 • 甚平</p>
        </div>
        <div class="card">
          <img src="http://img.peng55.xyz/images/onepiece/t3.webp" alt="千阳号" />
          <h2>千阳号</h2>
          <p>我们的伙伴，永远向前航行！</p>
        </div>
        <div class="card">
          <img src="http://img.peng55.xyz/images/onepiece/t4.webp" alt="悬赏令" />
          <h2>最新悬赏金</h2>
          <p>蒙奇·D·路飞<br />30亿贝利！！！</p>
        </div>
      </div>
    </main>

    <footer class="footer">© 2025 One Piece | 热血永不熄灭</footer>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+SC:wght@900&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

.op-container {
  position: relative;
  min-height: 100vh;
  font-family: 'Bangers', 'Noto Sans SC', sans-serif;
  color: white;
  overflow: hidden;
}

/* 背景轮播 */
#bg-slider {
  position: fixed;
  inset: 0;
  z-index: -2;
}
.bg-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 2.5s ease-in-out;
}
.bg-slide.active {
  opacity: 1;
}

/* 粒子画布 */
#particles {
  position: fixed;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}

/* 主内容 */
.content {
  position: relative;
  z-index: 5;
  padding-bottom: 100px;
}

/* 标题（如果你想打开） */
.header {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 90%;
  z-index: 10;
}
.header h1 {
  font-size: 6vw;
  letter-spacing: 8px;
  background: linear-gradient(45deg, #ff4500, #ffd700, #ff4500);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: glow 3s infinite alternate;
}
@keyframes glow {
  from { filter: drop-shadow(0 0 20px #ff4500); }
  to { filter: drop-shadow(0 0 40px #ffd700); }
}
.header p {
  font-size: 2.5vw;
  margin-top: 20px;
  text-shadow: 0 0 15px #000;
}

/* 卡片区域 */
.container {
  position: absolute;
  bottom: 80px;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 25px;
  padding: 0 30px;
}
.card {
  background: rgba(0,0,0,0.45);
  backdrop-filter: blur(12px);
  border-radius: 25px;
  overflow: hidden;
  box-shadow: 0 15px 35px rgba(0,0,0,0.6);
  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  cursor: pointer;
}
.card:hover {
  {
  transform: translateY(-40px) scale(1.15);
  box-shadow: 0 30px 60px rgba(255,69,0,0.8);
  z-index: 20;
}
.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card h2 {
  font-size: 1.8em;
  padding: 15px 10px 5px;
  text-align: center;
}
.card p {
  padding: 0 15px 20px;
  font-size: 1.1em;
  text-align: center;
}

.footer {
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.9em;
  opacity: 0.7;
  z-index: 10;
}
</style>
