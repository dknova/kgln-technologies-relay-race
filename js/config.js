
const T=THREE,V=(x,y,z)=>new T.Vector3(x,y,z),R=Math.random,PI=Math.PI,cl=(x,a=0,b=1)=>Math.min(b,Math.max(a,x)),lp=(a,b,u)=>a+(b-a)*u,ss=(a,b,x)=>{x=cl((x-a)/(b-a));return x*x*(3-2*x)};
const mob=matchMedia('(max-width:820px),(pointer:coarse)').matches;
/* ---------- RELAY TIMELINE ----------
   prologue P0 (intro text) -> for each runner j: run [RS,RS+.55] -> handover at RS+.61 -> info text -> next runner starts at RS+1 */
const NR=9,NS=10,G=1.2,P0=.55,RS=j=>P0+j,RL=j=>j<NR-1?.55:.75,DD=j=>j<NR-1?34:44,S_TOT=P0+NR-1+.95,GS=P0-.06;
const X0=[],XE=[];for(let j=0;j<NR;j++){X0[j]=j?XE[j-1]+G:0;XE[j]=X0[j]+DD(j)}
const HX=k=>XE[k-1]+G/2,xFin=X0[NR-1]+33,ANC=[2,...Array.from({length:8},(_,i)=>HX(i+1)),xFin];
const xOf=(j,s)=>{const u=cl((s-RS(j))/RL(j));return X0[j]+DD(j)*u*u*(3-2*u)};
const PAL=[['#FFB27A','#FFEBD9','Start'],['#FFC77D','#FFF2D6','Our Story'],['#3FC9B5','#DAF6F1','Managed Hosting'],['#9F7AEA','#EADFFB','Cybersecurity'],['#4DA8F0','#DCEEFF','Cloud & VPS'],['#F47BA8','#FFE1EC','Business Mailing'],['#3DBB7B','#DDF6E8','Enterprise Data'],['#6C7CF0','#E2E6FF','Infrastructure'],['#F0C43C','#FFF6CC','Technology'],['#FF9B54','#FFF0E0','Finish']].map(a=>[new T.Color(a[0]),new T.Color(a[1]),a[2]]);
const _c=new T.Color(),colAt=(x,ch)=>{if(x<=ANC[0])return _c.copy(PAL[0][ch]);if(x>=ANC[NS-1])return _c.copy(PAL[NS-1][ch]);let i=0;while(x>=ANC[i+1])i++;return _c.copy(PAL[i][ch]).lerp(PAL[i+1][ch],ss(ANC[i]+5,ANC[i+1]-5,x))};
const PN=[
['START','INFRASTRUCTURE.<br>IN MOTION.','Engineering reliable digital infrastructure for businesses and enterprises. Follow the baton: every KGLN service is one leg of the same relay, and nothing is dropped between them.',['Infrastructure','Cloud','Software'],'l'],
['OUR STORY','SINCE 2002','Since 2002, KGLN Technologies has evolved alongside the changing infrastructure and technology landscape, carrying reliability from one era of technology to the next.',['2002 Foundation','2010 Infrastructure','2018 Expansion','2024 Digital Evolution'],'r'],
['MANAGED HOSTING','PERFORMANCE THAT KEEPS THE PACE','Reliable infrastructure designed for performance, availability and scalability, so your applications never lose stride.',['Servers & storage','Network & monitoring','Built for availability'],'l'],
['CYBERSECURITY','DEFEND WHAT MATTERS.','Protecting infrastructure, systems and data from evolving threats, with protection built into every layer instead of bolted on at the end.',['Threat Detection','Network Security','Infrastructure Protection','Vulnerability Assessment'],'r'],
['CLOUD & VPS','INFRASTRUCTURE WITHOUT LIMITS.','Flexible cloud and virtual infrastructure for modern workloads: start small, and scale when the track opens up.',['Cloud servers','Virtual private servers','Scale on demand'],'l'],
['BUSINESS MAILING','COMMUNICATION BUILT FOR BUSINESS.','Secure and reliable business communication infrastructure, so every message reaches the next pair of hands.',['Secure Mail','Business Communication','Reliable Infrastructure','Enterprise Support'],'r'],
['ENTERPRISE DATA','TURNING INFRASTRUCTURE INTO INTELLIGENCE.','Enterprise-grade data infrastructure designed for reliability and scale, from storage systems to the databases your decisions run on.',['Storage systems','Databases','Data management'],'l'],
['INFRASTRUCTURE MANAGEMENT','THE HANDOFF NEVER DROPS.','Day-to-day management of the systems your business depends on, so transitions between teams, tools and technologies stay seamless.',['Monitoring','Maintenance','Expert support'],'r'],
['TECHNOLOGY SOLUTIONS','BUILT FOR WHAT COMES NEXT.','Automation, connected systems and modern technology solutions, engineered around the way your business actually runs.',['Automation','Connected systems','Custom solutions'],'l'],
['FINISH','LET\'S BUILD TOGETHER.','Every handover made cleanly, all the way to the line. Pass the baton to KGLN and let us carry your infrastructure forward.',1,'r']];
/* camera per runner: pure side-on view [x lead, height, distance from track, fov]; closer at handovers */
const CO=[[1.2,1.5,8.6,42],[1.2,1.55,8.8,42],[1.2,1.5,8.6,43],[1.2,1.6,8.8,42],[1.2,1.5,8.6,43],[1.2,1.55,8.8,42],[1.2,1.5,8.6,42],[1.2,1.6,8.8,43],[1.2,1.5,8.6,42]],HO=[0,1.35,5.4,36];
const opac=(i,s)=>{if(i==0)return 1-ss(P0-.2,P0-.08,s);const hc=P0+i-1+.61;if(i<9)return ss(hc+.05,hc+.13,s)*(1-ss(hc+.26,hc+.34,s));return ss(P0+8.6,P0+8.72,s)};
