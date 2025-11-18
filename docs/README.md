---
home: true
title: 海贼王 | 我要成为海贼王
footer: © 2025 One Piece | 热血永不熄灭
---

<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>海贼王 | 我要成为海贼王！</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Bangers&family=Noto+Sans+SC:wght@900&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        body, html { height: 100%; overflow: hidden; font-family: 'Bangers', 'Noto Sans SC', sans-serif; color: white; }

        /* 背景轮播 */
        #bg-slider { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -2; }
        .bg-slide {
            position: absolute; top: 0; left: 0; width: 100%; height: 100%;
            background-size: cover; background-position: center;
            opacity: 0; transition: opacity 2.5s ease-in-out;
        }
        .bg-slide.active { opacity: 1; }

        /* 海上粒子 */
        #particles { position: fixed; top: 0; left: 0; width: 100%; height: 100%; z-index: -1; pointer-events: none; }

        /* 主标题 */
        header {
            position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);
            text-align: center; z-index: 10; width: 90%;
        }
        h1 {
            font-size: 6vw; letter-spacing: 8px;
            text-shadow: 8px 8px 20px rgba(0,0,0,0.9), 0 0 40px #ff4500;
            background: linear-gradient(45deg, #ff4500, #ffd700, #ff4500);
            -webkit-background-clip: text; -webkit-text-fill-color: transparent;
            animation: glow 3s infinite alternate;
        }
        @keyframes glow { from { filter: drop-shadow(0 0 20px #ff4500); } to { filter: drop-shadow(0 0 40px #ffd700); } }
        header p {
            font-size: 2.5vw; margin-top: 20px; text-shadow: 0 0 15px black;
        }

        /* 卡片容器 */
        .container {
            position: absolute; bottom: 80px; left: 0; width: 100%;
            display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 25px; padding: 0 30px; z-index: 5;
        }
        .card {
            background: rgba(0,0,0,0.45); backdrop-filter: blur(12px);
            border-radius: 25px; overflow: hidden;
            box-shadow: 0 15px 35px rgba(0,0,0,0.6);
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            cursor: pointer;
        }
        .card:hover {
            transform: translateY(-40px) scale(1.15) !important;
            box-shadow: 0 30px 60px rgba(255,69,0,0.8);
            z-index: 20;
        }
        .card img { width: 100%; height: 200px; object-fit: cover; }
        .card h2 { font-size: 1.8em; padding: 15px 10px 5px; text-align: center; }
        .card p { padding: 0 15px 20px; font-size: 1.1em; }

        footer {
            position: fixed; bottom: 10px; left: 50%; transform: translateX(-50%);
            font-size: 0.9em; opacity: 0.7; z-index: 10;
        }
    </style>
</head>
<body>

<div id="bg-slider">
    <div class="bg-slide active" style="background-image: url('http://img.peng55.xyz/images/onepiece/bg1.jpeg');"></div>
    <div class="bg-slide" style="background-image: url('http://img.peng55.xyz/images/onepiece/t1.png');"></div>
    <div class="bg-slide" style="background-image: url('http://img.peng55.xyz/images/onepiece/t2.png');"></div>
</div>

<canvas id="particles"></canvas>

<!-- <header>
    <h1>ONE PIECE</h1>
    <p>我要成为海贼王！</p>
</header> -->

<div class="container">
    <div class="card">
        <img src="http://img.peng55.xyz/images/onepiece/t1.png" alt="五档">
        <h2>最新剧集</h2>
        <p>Egghead篇火热连载中！<br>路飞五档形态超燃炸裂！</p>
    </div>
    <div class="card">
        <img src="http://img.peng55.xyz/images/onepiece/t2.png" alt="草帽一伙">
        <h2>草帽一伙</h2>
        <p>路飞 • 索隆 • 娜美 • 乌索普 • 山治<br>乔巴 • 罗宾 • 弗兰奇 • 布鲁克 • 甚平</p>
    </div>
    <div class="card">
        <img src="http://img.peng55.xyz/images/onepiece/t3.webp" alt="千阳号">
        <h2>千阳号</h2>
        <p>我们的伙伴，永远向前航行！</p>
    </div>
    <div class="card">
        <img src="http://img.peng55.xyz/images/onepiece/t4.webp" alt="悬赏令">
        <h2>最新悬赏金</h2>
        <p>蒙奇·D·路飞<br>30亿贝利！！！</p>
    </div>
</div>

<footer>© 2025 One Piece | 热血永不熄灭</footer>

<script>
    // 背景轮播
    const slides = document.querySelectorAll('.bg-slide');
    let current = 0;
    setInterval(() => {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }, 8000);

    // 海上漂浮粒子
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    class Particle {
        constructor(){
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 20 + 8;
            this.speedX = Math.random() * 1.5 - 0.75;
            this.speedY = Math.random() * 1 - 0.5;
        }
        update(){
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.x > canvas.width || this.x < 0) this.speedX *= -1;
            if (this.y > canvas.height || this.y < 0) this.speedY *= -1;
        }
        draw(){
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    for(let i = 0; i < 100; i++) particles.push(new Particle());

    function animate(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particles.forEach(p => { p.update(); p.draw(); });
        requestAnimationFrame(animate);
    }
    animate();

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
</script>
</body>
</html>
