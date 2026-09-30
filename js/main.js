
Promise.race([document.fonts.load('600 40px Sora'),new Promise(r=>setTimeout(r,1500))]).then(init).catch(init);
function init(){
let rd;try{rd=new T.WebGLRenderer({canvas:gl,antialias:!mob,alpha:true})}catch(e){ld.textContent='WebGL required';return}
rd.setPixelRatio(Math.min(devicePixelRatio,mob?1.5:2));rd.setClearColor(0,0);
const scene=new T.Scene(),camera=new T.PerspectiveCamera(44,1,.1,500),FD=.014;scene.fog=new T.FogExp2(0xffffff,FD);
const hemi=new T.HemisphereLight(0xffffff,0xffddbb,1.05),sun=new T.DirectionalLight(0xfff2e0,.85);sun.position.set(-30,40,30);scene.add(hemi,sun,camera);
const at=(o,x,y,z,p=scene)=>{o.position.set(x,y,z);p.add(o);return o},mesh=(g,m)=>new T.Mesh(g,m),LM=c=>new T.MeshLambertMaterial({color:c});
const x0=-70,XEND=XE[NR-1]+40,x1=XEND+90;
const gc=document.createElement('canvas');gc.width=1024;gc.height=2;{const c=gc.getContext('2d');for(let i=0;i<1024;i++){c.fillStyle=colAt(x0+(x1-x0)*i/1023,0).getStyle();c.fillRect(i,0,1,2)}}
const gt=new T.CanvasTexture(gc);gt.minFilter=gt.magFilter=T.LinearFilter;
const fcU={value:new T.Color()};
const gm=new T.ShaderMaterial({uniforms:{g:{value:gt},x0:{value:x0},x1:{value:x1},xf:{value:xFin},fd:{value:FD},fc:fcU,xh:{value:ANC.slice(1,9)}},
vertexShader:'varying vec3 wp;void main(){vec4 w=modelMatrix*vec4(position,1.);wp=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}',
fragmentShader:`varying vec3 wp;uniform sampler2D g;uniform float x0,x1,xf,fd,xh[8];uniform vec3 fc;
void main(){float u=clamp((wp.x-x0)/(x1-x0),0.,1.);vec3 c=texture2D(g,vec2(u,.5)).rgb;float az=abs(wp.z),inT=1.-smoothstep(5.,5.06,az);
vec3 tr=mix(c,vec3(1.),.42+.16*sin(wp.x*.02+wp.z*.1));vec3 fi=mix(c,vec3(1.),.1)*(.72+.05*step(0.,sin(wp.x*.3)));vec3 col=mix(fi,tr,inT);
float aa=fwidth(wp.z)*1.3+.001;float d=abs(fract((wp.z+5.)/1.25+.5)-.5)*1.25;float ln=(1.-smoothstep(.035,.035+aa,d))*inT;
float ax=fwidth(wp.x)*1.3+.001,lx=0.;
for(int i=0;i<8;i++){float dx=abs(wp.x-xh[i]);lx=max(lx,1.-smoothstep(.09,.09+ax,abs(dx-5.)));lx=max(lx,(1.-smoothstep(.06,.06+ax,dx))*step(.5,mod(floor(wp.z*2.),2.)));}
lx=max(lx,1.-smoothstep(.12,.12+ax,abs(wp.x)));lx=max(lx,1.-smoothstep(.12,.12+ax,abs(wp.x-xf)));
col=mix(col,vec3(1.),max(ln,lx*inT)*.95);float d2=length(cameraPosition-wp);gl_FragColor=vec4(mix(col,fc,1.-exp(-fd*fd*d2*d2)),1.);}`});
const fl=at(mesh(new T.PlaneGeometry(x1-x0,180),gm),(x0+x1)/2,0,0);fl.rotation.x=-PI/2;
at(mesh(new T.BoxGeometry(x1-x0,.95,.1),new T.MeshBasicMaterial({map:gt})),(x0+x1)/2,.475,7);
const wh=LM(0xf4f1ec);for(let t=0;t<3;t++)at(mesh(new T.BoxGeometry(x1-x0,1.2*(t+1),3),wh),(x0+x1)/2,.6*(t+1),-16.5-t*3);
/* ---------- AUDIENCE: stands + standing front row behind the far barrier; they cheer harder at handovers and the finish ---------- */
at(mesh(new T.BoxGeometry(x1-x0,.95,.1),new T.MeshBasicMaterial({map:gt})),(x0+x1)/2,.475,-7.4);
const cw=[],SK=[0xf1c9a5,0xc68642,0x8d5524,0xe0ac69,0xa26b3f,0xf4d3b5],D_=new T.Object3D();
for(let t=0;t<3;t++)for(let x=x0;x<x1;x+=mob?3:1.7)cw.push([x+R(),1.2*(t+1),-16.8-t*3+R()*.6,R()*6.28,.85+R()*.3]);
for(let x=x0;x<x1;x+=mob?2.4:1.15)cw.push([x+R()*.5,0,-8.7+R()*.3,R()*6.28,.95+R()*.15]);
let nc=0;cw.forEach(p=>{p[5]=R()<.3?1:0;if(p[5])p[6]=nc++});const cn=cw.length,cm=(g,m)=>{const i=new T.InstancedMesh(g,m,cn);i.frustumCulled=false;scene.add(i);return i};
const cB=cm(new T.BoxGeometry(.5,.7,.36).translate(0,.35,0),new T.MeshLambertMaterial()),cH=cm(new T.SphereGeometry(.17,10,8),new T.MeshLambertMaterial()),cA=cm(new T.BoxGeometry(.1,.5,.1).translate(0,-.25,0),new T.MeshLambertMaterial()),cA2=cm(new T.BoxGeometry(.1,.5,.1).translate(0,-.25,0),new T.MeshLambertMaterial());
const capM=new T.MeshLambertMaterial({color:0x101114}),cD=new T.InstancedMesh(new T.SphereGeometry(.19,10,6,0,PI*2,0,PI/2),capM,nc),cR=new T.InstancedMesh(new T.BoxGeometry(.26,.025,.17),capM,nc);[cD,cR].forEach(m=>{m.frustumCulled=false;scene.add(m)});
cw.forEach((p,i)=>{const sk=new T.Color(SK[R()*6|0]);cB.setColorAt(i,R()<.25?new T.Color(0xffffff):colAt(p[0],0).clone().offsetHSL((R()-.5)*.08,0,-.1+R()*.22));cH.setColorAt(i,sk);cA.setColorAt(i,sk);cA2.setColorAt(i,sk)});
function crowd(t,ev,F,all){for(let i=0;i<cn;i++){const p=cw[i],dx=Math.abs(p[0]-F);if(!all&&dx>85)continue;const c=cl((.18+.82*ev)*(1.15-ss(35,85,dx))),ph=p[3],s=p[4],h=p[1]==0?1.5:1,y=p[1]+Math.abs(Math.sin(t*4+ph))*.14*c;
D_.rotation.set(0,0,0);D_.position.set(p[0],y,p[2]);D_.scale.set(s,s*h,s);D_.updateMatrix();cB.setMatrixAt(i,D_.matrix);
D_.position.y=y+.7*s*h+.2*s;D_.scale.setScalar(s);D_.updateMatrix();cH.setMatrixAt(i,D_.matrix);
if(p[5]){D_.position.y+=.015*s;D_.updateMatrix();cD.setMatrixAt(p[6],D_.matrix);D_.position.y+=.075*s;D_.position.z=p[2]+.16*s;D_.updateMatrix();cR.setMatrixAt(p[6],D_.matrix)}
const a=.25+(.5+.5*Math.sin(t*5+ph))*2.5*c;[[cA,1],[cA2,-1]].forEach(([m,sd])=>{D_.position.set(p[0]+sd*.3*s,y+.62*s*h,p[2]);D_.rotation.z=sd*a;D_.updateMatrix();m.setMatrixAt(i,D_.matrix)})}
[cB,cH,cA,cA2,cD,cR].forEach(m=>m.instanceMatrix.needsUpdate=true)}
crowd(0,0,0,true);
for(let x=0;x<x1;x+=70){at(mesh(new T.CylinderGeometry(.22,.3,15,8),LM(0xdfe3ea)),x,7.5,-13);at(mesh(new T.BoxGeometry(7,2.2,.4),new T.MeshBasicMaterial({color:0xffffff})),x,15.5,-13)}
/* section boards on both sides, facing the following camera */
PAL.slice(0,9).forEach((p,k)=>{const cv=document.createElement('canvas');cv.width=1024;cv.height=256;const c=cv.getContext('2d');c.fillStyle='#fff';c.fillRect(0,0,1024,256);c.fillStyle=p[0].getStyle();c.fillRect(0,0,26,256);
c.fillStyle=p[0].clone().multiplyScalar(.62).getStyle();c.font='700 150px Sora,sans-serif';c.fillText('0'+(k+1),60,178);c.font='700 54px Sora,sans-serif';c.fillText(p[2].toUpperCase(),290,130);c.fillStyle='#14161f';c.font='400 24px Sora,sans-serif';if('letterSpacing' in c)c.letterSpacing='8px';c.fillText('KGLN TECHNOLOGIES',292,182);
const cx=k?HX(k):8,tx=new T.CanvasTexture(cv);at(mesh(new T.PlaneGeometry(22,5.5),new T.MeshBasicMaterial({map:tx})),cx,4.2,-11.5);[-9,9].forEach(o=>at(mesh(new T.CylinderGeometry(.12,.12,3.6,8),LM(0xdfe3ea)),cx+o,1.8,-11.5))});
/* FINISH gate: poles, banner, hanging tag, tape */
const cv2=(w,h,fn)=>{const cv=document.createElement('canvas');cv.width=w;cv.height=h;fn(cv.getContext('2d'));return new T.CanvasTexture(cv)};
[-5.7,5.7].forEach(z=>at(mesh(new T.CylinderGeometry(.16,.2,7.2,10),LM(0xffffff)),xFin,3.6,z));at(mesh(new T.BoxGeometry(.3,.3,11.8),LM(0xffffff)),xFin,7.2,0);
const ban=at(mesh(new T.PlaneGeometry(11.6,2.6),new T.MeshBasicMaterial({side:T.DoubleSide,map:cv2(1024,230,c=>{c.fillStyle='#fff';c.fillRect(0,0,1024,230);for(let i=0;i<32;i++)for(let r=0;r<2;r++){c.fillStyle=(i+r)%2?'#14161f':'#fff';c.fillRect(i*32,r?198:0,32,32)}c.fillStyle='#14161f';c.font='700 130px Sora,sans-serif';c.textAlign='center';c.fillText('FINISH',512,150)})})),xFin,5.5,0);
const tg=at(mesh(new T.PlaneGeometry(3.6,1.6),new T.MeshBasicMaterial({side:T.DoubleSide,map:cv2(512,228,c=>{c.fillStyle='#FF8A3D';c.beginPath();c.roundRect?c.roundRect(4,4,504,220,26):c.rect(4,4,504,220);c.fill();c.fillStyle='#fff';c.font='700 92px Sora,sans-serif';c.textAlign='center';c.fillText('KGLN',256,110);c.font='400 28px Sora,sans-serif';if('letterSpacing' in c)c.letterSpacing='8px';c.fillText('TECHNOLOGIES',256,166)})})),xFin,3.05,0);
[-1.1,1.1].forEach(x=>at(mesh(new T.CylinderGeometry(.02,.02,.4,4),LM(0x14161f)),xFin+x,4.05,0));
const tapeX=xFin-1.4,tape=at(mesh(new T.BoxGeometry(.1,.3,10.4),new T.MeshBasicMaterial({color:0xff8a3d})),tapeX,1.2,0);
const sun_=new T.Sprite(new T.SpriteMaterial({map:(()=>{const c=document.createElement('canvas');c.width=c.height=128;const x=c.getContext('2d'),g=x.createRadialGradient(64,64,0,64,64,64);g.addColorStop(0,'rgba(255,255,255,1)');g.addColorStop(.3,'rgba(255,255,255,.5)');g.addColorStop(1,'rgba(255,255,255,0)');x.fillStyle=g;x.fillRect(0,0,128,128);return new T.CanvasTexture(c)})(),transparent:true,fog:false,depthWrite:false,opacity:.75}));sun_.scale.set(120,120,1);sun_.position.set(-25,22,-220);camera.add(sun_);

/* ---------- RUNNERS ---------- */
const skins=[0xf1c9a5,0xc68642,0x8d5524,0xe0ac69,0xa26b3f,0xf4d3b5,0x6f4a2b,0xd9a273,0xb07a4f];
function mk(col,skin){const m=c=>new T.MeshStandardMaterial({color:c,roughness:.65}),Jm=m(col),S=m(skin),W=m(0xf8fafc),K=m(0x1b1f2b),o={},rt=o.root=new T.Group();scene.add(rt);
const cy=(a,b,h,mt,y,p)=>at(mesh(new T.CylinderGeometry(a,b,h,10),mt),0,y,0,p),sp=(r,mt,x,y,z,p)=>at(mesh(new T.SphereGeometry(r,14,10),mt),x,y,z,p);
o.hip=at(new T.Group(),0,.93,0,rt);o.body=at(new T.Group(),0,0,0,o.hip);
at(mesh(new T.BoxGeometry(.3,.56,.2),Jm),0,.31,0,o.body);at(mesh(new T.BoxGeometry(.32,.22,.22),K),0,.02,0,o.body);
o.head=at(new T.Group(),0,.72,0,o.body);sp(.115,S,0,.09,0,o.head);sp(.118,K,-.015,.115,0,o.head).scale.set(1,.7,1);cy(.04,.05,.1,S,-.02,o.head);
[1,-1].forEach(sd=>{const n=sd>0?'R':'L',sh=o['a'+n]=at(new T.Group(),0,.56,sd*.2,o.body);sp(.07,Jm,0,0,0,sh);cy(.055,.05,.3,S,-.15,sh);
const el=o['e'+n]=at(new T.Group(),0,-.3,0,sh);cy(.048,.04,.28,S,-.14,el);o['h'+n]=sp(.058,S,0,-.29,0,el);
const hg=o['l'+n]=at(new T.Group(),0,0,sd*.09,o.hip);cy(.078,.062,.47,K,-.235,hg);const kn=o['k'+n]=at(new T.Group(),0,-.47,0,hg);cy(.056,.045,.48,S,-.24,kn);at(mesh(new T.BoxGeometry(.25,.07,.11),W),.06,-.5,0,kn)});
const sh=at(mesh(new T.CircleGeometry(.5,20),new T.MeshBasicMaterial({color:0,transparent:true,opacity:.22,depthWrite:false})),0,.02,0,rt);sh.rotation.x=-PI/2;return o}
const RN=Array.from({length:NR},(_,j)=>mk(PAL[j][0],skins[j]));

/* ---------- REFEREE + STARTING PISTOL: fires when scrolling reaches GS, runner 0 then drives out of the crouch ---------- */
const ref=mk(0x14161f,0xc68642);ref.root.position.set(-2.2,0,-5.9);
ref.aL.rotation.z=2.25;ref.eL.rotation.z=2.0;ref.eR.rotation.z=.12;ref.lR.rotation.z=.08;ref.lL.rotation.z=-.08;ref.body.rotation.z=-.03;
{const bm=new T.MeshStandardMaterial({color:0x111318,roughness:.4,metalness:.6});at(mesh(new T.BoxGeometry(.045,.2,.045),bm),0,-.4,0,ref.eR);at(mesh(new T.BoxGeometry(.05,.09,.06),bm),0,-.33,-.05,ref.eR)}
const flash=new T.Sprite(new T.SpriteMaterial({map:sun_.material.map,color:0xffc266,transparent:true,opacity:0,blending:T.AdditiveBlending,depthWrite:false,fog:false}));flash.position.set(0,-.55,0);ref.eR.add(flash);
const smk=Array.from({length:7},()=>{const sp=new T.Sprite(new T.SpriteMaterial({map:sun_.material.map,color:0x9a9aa5,transparent:true,opacity:0,depthWrite:false,fog:false}));sp.visible=false;scene.add(sp);return{sp,o:V(0,0,0),v:V((R()-.5)*.5,.6+R()*.5,(R()-.5)*.3)}});
function bang(){try{const A=new(window.AudioContext||window.webkitAudioContext)(),n=A.sampleRate*.35|0,b=A.createBuffer(1,n,A.sampleRate),d=b.getChannelData(0);for(let i=0;i<n;i++)d[i]=(Math.random()*2-1)*Math.pow(1-i/n,4);const s=A.createBufferSource(),g=A.createGain();s.buffer=b;g.gain.value=.35;s.connect(g);g.connect(A.destination);s.start()}catch(e){}}
let shot=false,shT=0;
function shoot(time,s){const on=s>GS;
if(on&&!shot){shot=true;shT=time;scene.updateMatrixWorld(true);const m=ref.eR.localToWorld(V(0,-.55,0));smk.forEach(k=>k.o.copy(m));bang()}
if(!on&&shot&&s<GS-.02){shot=false;smk.forEach(k=>k.sp.visible=false);flash.material.opacity=0}
const age=shot?time-shT:0;ref.aR.rotation.z=2.9+(shot?.32*Math.exp(-age*8):0);
if(shot){flash.material.opacity=Math.max(0,1-age/.14);flash.scale.setScalar(1.2+age*6);smk.forEach((k,i)=>{const a=age-i*.05;k.sp.visible=a>0&&a<3;if(a>0){k.sp.position.copy(k.o).addScaledVector(k.v,a);k.sp.scale.setScalar(.3+a*.9);k.sp.material.opacity=.5*Math.max(0,1-a/3)}})}}
const bt=new T.Group();scene.add(bt);{const pm=new T.MeshStandardMaterial({color:0xf6efe0,roughness:.9});bt.add(mesh(new T.CylinderGeometry(.045,.045,.44,16),pm));
[-.2,.2].forEach(y=>{const r=mesh(new T.TorusGeometry(.046,.008,6,20),new T.MeshStandardMaterial({color:0xcbb892}));r.rotation.x=PI/2;r.position.y=y;bt.add(r)});
const rb=mesh(new T.TorusGeometry(.05,.012,6,20),new T.MeshStandardMaterial({color:0xff8a3d}));rb.rotation.x=PI/2;bt.add(rb);
const hl=new T.Sprite(new T.SpriteMaterial({color:0xffb27a,transparent:true,opacity:.45,blending:T.AdditiveBlending,depthWrite:false,map:sun_.material.map}));hl.scale.set(.9,.9,1);bt.add(hl)}
function pose(o,j,s){const x=xOf(j,s),sp=Math.abs(xOf(j,s+.004)-xOf(j,s-.004))/.008/80,ra=ss(.04,.45,sp),ph=x*1.55,sn=Math.sin(ph),cs=Math.cos(ph),rs=RS(j),hc=rs+.61;
o.root.position.x=x;const tr=ss(rs+.5,rs+.64,s);
const rdy=[.5,-.7,-.45,-.25,-.6,1.1,-.4,.9,.42],tir=[.12,-.15,-.08,-.15,.2,.3,.25,.3,.5];
const rn=[sn*.85,-(.15+.95*Math.max(0,cs)),-sn*.85,-(.15+.95*Math.max(0,-cs)),sn*.95,1.3,-sn*.95,1.3,.3];
let [lR,kR,lL,kL,aL,eL,aR,eR,ln]=rn.map((a,i)=>lp(lp(rdy[i],tir[i],tr),a,ra));
if(j<NR-1){const h=ss(hc-.05,hc-.01,s)*(1-ss(hc+.03,hc+.09,s));aR=lp(aR,1.75,h);eR=lp(eR,.05,h);ln=lp(ln,.3,h)}
if(j>=1){const h0=RS(j-1)+.61,r=ss(h0-.11,h0-.03,s)*(1-ss(h0+.03,h0+.1,s));aR=lp(aR,-1.15,r);eR=lp(eR,0,r);ln=lp(ln,.3,r)}
if(j==NR-1){const f=ss(xFin+3.5,xFin+6.5,x);aR=lp(aR,2.95,f);aL=lp(aL,2.95,f);eR=lp(eR,.15,f);eL=lp(eL,.15,f);ln=lp(ln,.03,f)}
let cw=0;if(j==0){cw=1-ss(GS,GS+.12,s);lR=lp(lR,1.2,cw);kR=lp(kR,-1.97,cw);lL=lp(lL,-.2,cw);kL=lp(kL,-1.35,cw);aL=lp(aL,1.25,cw);aR=lp(aR,1.25,cw);eL=lp(eL,0,cw);eR=lp(eR,0,cw);ln=lp(ln,1.25,cw)}
o.root.position.x=x-.8*cw;o.hip.position.y=lp(.93+ra*.06*Math.abs(cs)-(1-ra)*(1-tr)*.05,.53,cw);o.body.rotation.z=-ln;o.head.rotation.z=lp(ln*.75,ln,cw);
o.lR.rotation.z=lR;o.kR.rotation.z=kR;o.lL.rotation.z=lL;o.kL.rotation.z=kL;o.aR.rotation.z=aR;o.eR.rotation.z=eR;o.aL.rotation.z=aL;o.eL.rotation.z=eL}
const hp=[V(0,0,0),V(0,0,0)],hd=[V(0,1,0),V(0,1,0)],q=new T.Quaternion();
function holder(j,i){RN[j].hR.getWorldPosition(hp[i]);RN[j].eR.getWorldQuaternion(q);hd[i].set(0,-1,0).applyQuaternion(q)}

/* ---------- FINISH CELEBRATION: confetti cannons + streamers + firework bursts, fired when the runner crosses the line ---------- */
const NC=mob?260:700,NSK=mob?120:360,BC=[...PAL.map(p=>p[0].clone()),new T.Color(0xffffff),new T.Color(0xffd166),new T.Color(0xff5d8f)],
conf=new T.InstancedMesh(new T.PlaneGeometry(.18,.11),new T.MeshBasicMaterial({side:T.DoubleSide}),NC),spk=new T.InstancedMesh(new T.SphereGeometry(.09,6,5),new T.MeshBasicMaterial(),NSK),
cf_=Array.from({length:NC},()=>({p:V(0,0,0),v:V(0,0,0),r:V(0,0,0),w:V(R()*8-4,R()*8-4,R()*8-4),a:0,L:6,ph:R()*6.3,g:0})),sk_=Array.from({length:NSK},()=>({p:V(0,0,0),v:V(0,0,0),a:0,L:1.6})),
bz=[-4,2,8,14].map((o,k)=>({c:V(xFin+o,4.6+(k%2)*1.2,-3-(k%2)*1.5),d:.5+k*.6}));
[conf,spk].forEach(m=>{m.frustumCulled=false;m.visible=false;scene.add(m)});
cf_.forEach((c,i)=>conf.setColorAt(i,BC[i%BC.length]));sk_.forEach((c,i)=>spk.setColorAt(i,BC[(Math.floor(i/(NSK/4))*3+i%3)%BC.length]));
let fired=false;const ZZ=new T.Object3D(),sCross=(()=>{const v=(xFin-X0[NR-1])/DD(NR-1);let a=0,b=1;for(let i=0;i<30;i++){const m=(a+b)/2;(3*m*m-2*m*m*m<v?a=m:b=m)}return RS(NR-1)+RL(NR-1)*a})();
const beam=c=>{c.p.set(xFin+(R()-.5)*15,7.4,(R()-.5)*10);c.v.set((R()-.5)*1.5,-R(),(R()-.5)*1.5);c.g=0;c.L=6+R()*3};
function blast(dt,s){const on=s>sCross;
if(on&&!fired){fired=true;
cf_.forEach((c,i)=>{if(i%2==0){const k=(i>>1)%4;c.p.set(xFin+[-2,3,8,13][k],.4,-5.5);c.v.set((R()-.5)*8,11+R()*7,1+R()*3.5);c.a=-(k*.25+R()*.9);c.L=9+R()*4;c.g=0}else{beam(c);c.a=-R()*2.8}c.r.set(R()*6,R()*6,R()*6)});
sk_.forEach((k,i)=>{const b=bz[Math.floor(i/(NSK/4))],th=R()*6.283,ph=Math.acos(2*R()-1),sp=4+R()*3.5;k.p.copy(b.c);k.v.set(Math.sin(ph)*Math.cos(th)*sp,Math.cos(ph)*sp,Math.sin(ph)*Math.sin(th)*sp*.6);k.a=-b.d;k.L=1.4+R()*.5});conf.visible=spk.visible=true}
if(!on&&fired&&s<sCross-.02){fired=false;conf.visible=spk.visible=false}
if(!fired)return;
cf_.forEach((c,i)=>{c.a+=dt;let sc=0;if(c.a>0){if(c.a>c.L&&i%2){beam(c);c.a=0}
if(!c.g){c.v.x*=1-.9*dt;c.v.z*=1-.9*dt;c.v.y=Math.max(c.v.y-9*dt,-2.2);c.p.addScaledVector(c.v,dt);c.p.x+=Math.sin(c.a*3+c.ph)*.012;if(c.p.y<.06){c.p.y=.06;c.g=1}}
sc=cl((c.L-c.a)/.8)*cl(c.a/.15+.01)}
ZZ.position.copy(sc?c.p:V(0,-50,0));ZZ.scale.setScalar(sc);if(c.g)ZZ.rotation.set(-PI/2,0,c.r.z);else ZZ.rotation.set(c.r.x+c.w.x*c.a,c.r.y+c.w.y*c.a,c.r.z+c.w.z*c.a);ZZ.updateMatrix();conf.setMatrixAt(i,ZZ.matrix)});
sk_.forEach((k,i)=>{k.a+=dt;let sc=0;if(k.a>0&&k.a<k.L){k.v.multiplyScalar(1-1.6*dt);k.v.y-=3.5*dt;k.p.addScaledVector(k.v,dt);sc=Math.pow(1-k.a/k.L,.7)*(k.a<.08?k.a/.08:1)}
ZZ.position.copy(sc?k.p:V(0,-50,0));ZZ.scale.setScalar(sc);ZZ.rotation.set(0,0,0);ZZ.updateMatrix();spk.setMatrixAt(i,ZZ.matrix)});
conf.instanceMatrix.needsUpdate=spk.instanceMatrix.needsUpdate=true}

/* ---------- UI ---------- */
const trk=document.getElementById('trk'),pan=[],dots=[],menu_=document.getElementById('menu'),lenis=new Lenis({lerp:.06,smoothWheel:true});
const secS=k=>k==0?0:k<9?P0+k-1+.8:P0+8.8;
const go=k=>{menu_.classList.remove('o');lenis.scrollTo(secS(k)/S_TOT*(document.documentElement.scrollHeight-innerHeight),{duration:3})};
PN.forEach((p,k)=>{const d=document.createElement('div');d.className='p '+p[4];
d.innerHTML=`<div class="num">${String(k+1).padStart(2,'0')}</div><small>${p[0]}</small><h2>${p[1]}</h2><p>${p[2]}</p>`+(Array.isArray(p[3])?'<ul>'+p[3].map(t=>`<li>${t}</li>`).join('')+'</ul>':'')+(p[3]===1?'<a class="btn" href="#contact">CONTACT US</a><a class="btn g" href="#" data-go="0">BACK TO START</a><div class="ft">KGLN Technologies<br>Infrastructure • Cloud • Software</div>':'');
document.body.appendChild(d);pan.push(d);
const b=document.createElement('button');b.style.left=(k/(NS-1)*100)+'%';b.title=PAL[k][2];b.onclick=()=>go(k);trk.appendChild(b);dots.push(b);
const a=document.createElement('a');a.innerHTML=`<span>${String(k+1).padStart(2,'0')}</span>${PAL[k][2]}`;a.onclick=()=>go(k);menu_.appendChild(a)});
document.querySelectorAll('[data-go]').forEach(a=>a.onclick=e=>{e.preventDefault();go(0)});
mb.onclick=()=>menu_.classList.toggle('o');
let mx=0,tmx=0;addEventListener('pointermove',e=>{tmx=e.clientX/innerWidth*2-1});
lenis.on('scroll',ScrollTrigger.update);let Pg=0,ps=0;ScrollTrigger.create({trigger:'#scroll',start:'top top',end:'bottom bottom',onUpdate:s=>Pg=s.progress});
function rs(){rd.setSize(innerWidth,innerHeight,false);camera.aspect=innerWidth/innerHeight}rs();addEventListener('resize',rs);addEventListener('orientationchange',()=>setTimeout(rs,200));
const cp=V(0,2,10),tp=V(0,1,0),rt_=document.documentElement.style,top_=new T.Color();let first=true;
gsap.ticker.lagSmoothing(0);
gsap.ticker.add((time,dtm)=>{lenis.raf(time*1000);const dt=Math.min(dtm/1000,.05);ps+=(Pg-ps)*(1-Math.exp(-dt*2.2));const s=cl(ps)*S_TOT;mx+=(tmx-mx)*.05;
RN.forEach((o,j)=>pose(o,j,s));scene.updateMatrixWorld(true);
/* baton: passes between hands at each handover */
const kk=cl(Math.floor(s-P0-.59)+1,0,NR-1);let bw=0,A=kk;if(kk>=1&&s<P0+kk-1+.63){bw=ss(P0+kk-1+.59,P0+kk-1+.63,s);A=kk-1}
holder(A,0);holder(kk,1);if(hd[0].dot(hd[1])<0)hd[1].negate();bt.position.lerpVectors(hp[0],hp[1],bw);{const dd=hd[0].clone().lerp(hd[1],bw);if(kk==0)dd.lerp(V(1,0,0),1-ss(GS,GS+.12,s));bt.quaternion.setFromUnitVectors(V(0,1,0),dd.normalize())}
/* camera: follows from behind the current carrier, swings to a close 3/4 rear view for each handover */
const k=cl(Math.floor(s-P0),0,NR-1),Rk=P0+k;let F=xOf(k,s),hw=0,cs=k;
if(k<NR-1){const hc=Rk+.61;F=lp(F,(xOf(k,s)+xOf(k+1,s))/2,ss(Rk+.45,Rk+.6,s));F=lp(F,xOf(k+1,s),ss(Rk+.8,Rk+.98,s));hw=ss(hc-.13,hc-.05,s)*(1-ss(hc+.06,hc+.16,s));cs=k+ss(Rk+.65,Rk+.98,s)}
const j=Math.floor(cs),u=cs-j,co=CO[j].map((a,i)=>lp(a,CO[Math.min(NR-1,j+1)][i],u)).map((a,i)=>lp(a,HO[i],hw));
const A_=camera.aspect,port=A_<1.15;let fv=co[3],dist=co[2],lead=co[0];
if(port){fv=50;const sb=1-ss(GS,GS+.3,s),W=lp(4.6,3.6,hw)+1.6*sb;dist=W/(2*Math.tan(fv*PI/360)*A_);lead=lead*.5-1.0*sb}   /* narrow screens: frame by visible width so runners (and the referee at the start) always fit */
const tgt=V(F+lead,co[1],dist);if(first){cp.copy(tgt);tp.set(tgt.x,1.25,0);first=false}
const kf=1-Math.exp(-dt*4);cp.lerp(tgt,kf);tp.lerp(V(tgt.x,1.25,0),kf);camera.position.copy(cp);camera.lookAt(tp);
camera.fov=lp(camera.fov,fv,kf);camera.updateProjectionMatrix();
crowd(time,Math.max(hw,ss(xFin+2,xFin+8,RN[NR-1].root.position.x)),F,false);tape.visible=RN[NR-1].root.position.x<tapeX;
const sk=colAt(F,1).clone(),tk=colAt(F,0).clone();scene.fog.color.copy(sk);fcU.value.copy(sk);hemi.color.copy(sk);hemi.groundColor.copy(tk).multiplyScalar(.8);
top_.copy(sk).lerp(tk,.28);rt_.setProperty('--sky',sk.getStyle());rt_.setProperty('--top',top_.getStyle());rt_.setProperty('--acc',tk.clone().multiplyScalar(.95).getStyle());
pan.forEach((el,i)=>{const o=opac(i,s);el.style.opacity=o;el.style.transform=`translateY(${(1-o)*18}px)`;el.style.pointerEvents=o>.5?'auto':'none'});
const fr=s-P0-Math.floor(s-P0),sec=s<P0?0:cl(Math.floor(s-P0)+(fr>.6?1:0),0,NS-1);
leg.textContent=`SECTION ${String(sec+1).padStart(2,'0')} / ${NS} — ${PAL[sec][2].toUpperCase()}`;dots.forEach((d,i)=>d.classList.toggle('on',i==sec));
{const c=s<.02?'':s<.3?'ON YOUR MARKS':s<GS?'SET':s<GS+.14?'GO!':'';callout.textContent=c||callout.textContent;callout.style.opacity=c?1:0}
bat.style.left=(cl(ps)*100)+'%';fill.style.width=(cl(ps)*100)+'%';cue.style.opacity=1-ss(0,.01,ps);
shoot(time,s);blast(dt,s);rd.render(scene,camera)});
requestAnimationFrame(()=>{ld.style.opacity=0;setTimeout(()=>ld.remove(),1100)});
}
