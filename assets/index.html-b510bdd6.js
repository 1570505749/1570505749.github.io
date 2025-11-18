import{_ as w,o as x,I as f,p as g,q as _,Q as i,R as y,O as z,P as I,w as b,z as E,x as M,a8 as P,a9 as S}from"./framework-b0148dc4.js";const k=s=>(P("data-v-783df836"),s=s(),S(),s),B={class:"op-container"},C={id:"bg-slider"},A=k(()=>i("pre",null,[i("code",null,`<!-- 海上粒子 -->
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
`)],-1)),F={__name:"index.html",setup(s){const c=["http://img.peng55.xyz/images/onepiece/bg1.jpeg","http://img.peng55.xyz/images/onepiece/t1.png","http://img.peng55.xyz/images/onepiece/t2.png"];let a=0,h=null;const u=()=>{h=setInterval(()=>{a=(a+1)%c.length},8e3)};let e,n,d=[],o;const v=()=>{if(e=document.getElementById("particles"),!e)return;n=e.getContext("2d"),e.width=window.innerWidth,e.height=window.innerHeight;class p{constructor(){this.x=Math.random()*e.width,this.y=Math.random()*e.height,this.size=Math.random()*20+8,this.speedX=Math.random()*1.5-.75,this.speedY=Math.random()*1-.5}update(){this.x+=this.speedX,this.y+=this.speedY,(this.x>e.width||this.x<0)&&(this.speedX*=-1),(this.y>e.height||this.y<0)&&(this.speedY*=-1)}draw(){n.fillStyle="rgba(255,255,255,0.6)",n.beginPath(),n.arc(this.x,this.y,this.size,0,Math.PI*2),n.fill()}}d=[];for(let t=0;t<100;t++)d.push(new p);const r=()=>{n.clearRect(0,0,e.width,e.height),d.forEach(t=>{t.update(),t.draw()}),o=requestAnimationFrame(r)};r()},l=()=>{e&&(e.width=window.innerWidth,e.height=window.innerHeight)};return x(()=>{u(),v(),window.addEventListener("resize",l)}),f(()=>{clearInterval(h),cancelAnimationFrame(o),window.removeEventListener("resize",l)}),(p,r)=>(g(),_("div",null,[i("template",null,[i("div",B,[y(" 背景轮播 "),i("div",C,[(g(),_(z,null,I(c,(t,m)=>i("div",{key:m,class:b(["bg-slide",{active:m===E(a)}]),style:M({backgroundImage:`url(${t})`})},null,6)),64))]),A])])]))}},N=w(F,[["__scopeId","data-v-783df836"],["__file","index.html.vue"]]);export{N as default};
