import{u as V}from"./auth.4644c288.js";import{J as I,G as N,aN as z,B as F,k as b,C as G,r as p,o as n,l as c,w as a,h as t,u as e,e as u,y as v,m as x,i as d,t as l,F as w,f as r,a9 as O,b4 as E,b5 as J,ab as P,b6 as T,b7 as q,b8 as H,b9 as K,ba as Q,j as W}from"./vendor.01d0adc5.js";import{u as U}from"./global.08b6a984.js";import{f as X}from"./main.75722495.js";import{N as Y}from"./NotificationRoot.a98180ab.js";const Z={class:"mx-auto px-8"},tt={class:"flex justify-between h-16 w-full"},et={class:"flex"},st={class:"shrink-0 flex items-center"},ot=["href"],rt=["src"],at={class:"hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8"},nt={class:"hidden sm:ml-6 sm:flex sm:items-center"},it=t("button",{type:"button",class:"bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},null,-1),lt=["src"],ct={class:"-mr-2 flex items-center sm:hidden"},ut=t("span",{class:"sr-only"},"Open main menu",-1),dt={class:"pt-2 pb-3 space-y-1"},mt={class:"pt-4 pb-3 border-t border-gray-200"},ft={class:"flex items-center px-4"},pt={class:"shrink-0"},ht=["src"],gt={class:"ml-3"},_t={class:"text-base font-medium text-gray-800"},yt={class:"text-sm font-medium text-gray-500"},bt=t("button",{type:"button",class:"ml-auto bg-white shrink-0 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},null,-1),vt={class:"mt-3 space-y-1"},xt={setup(C){const{t:m}=I(),f=N(),o=U(),h=[{title:m("navigation.logout"),link:`/${o.companySlug}/customer/login`}],k=V(),$=z(),g=F(""),B=b(()=>o.currentUser&&o.currentUser.avatar!==0?o.currentUser.avatar:A());function A(){return new URL("/build/img/default-avatar.jpg",self.location)}G(f,i=>{g.value=i.path},{immediate:!0});const S=b(()=>window.customer_logo?window.customer_logo:!1);function _(i){return f.path.indexOf(i)>-1}function R(){k.logout(o.companySlug).then(i=>{i&&$.push({name:"customer.login"})})}return(i,D)=>{const y=p("router-link"),j=p("BaseDropdownItem"),L=p("BaseDropdown");return n(),c(e(Q),{as:"nav",class:"bg-white shadow-sm fixed top-0 left-0 z-20 w-full"},{default:a(({open:M})=>[t("div",Z,[t("div",tt,[t("div",et,[t("div",st,[t("a",{href:`/${e(o).companySlug}/customer/dashboard`,class:"float-none text-lg not-italic font-black tracking-wider text-white brand-main md:float-left font-base"},[e(S)?(n(),u("img",{key:1,src:e(S),class:"h-6"},null,8,rt)):(n(),c(X,{key:0,class:"h-6"}))],8,ot)]),t("div",at,[(n(!0),u(w,null,v(e(o).mainMenu,s=>(n(),c(y,{key:s.title,to:`/${e(o).companySlug}${s.link}`,class:x([_(s.link)?"border-primary-500 text-primary-600":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300","inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"])},{default:a(()=>[d(l(s.title),1)]),_:2},1032,["to","class"]))),128))])]),t("div",nt,[it,r(e(P),{as:"div",class:"ml-3 relative"},{default:a(()=>[r(L,{"width-class":"w-48"},{activator:a(()=>[r(e(O),{class:"bg-white flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},{default:a(()=>[t("img",{class:"h-8 w-8 rounded-full",src:e(B),alt:""},null,8,lt)]),_:1})]),default:a(()=>[r(j,{onClick:D[0]||(D[0]=s=>i.$router.push({name:"customer.profile"}))},{default:a(()=>[r(e(E),{class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),d(" "+l(i.$t("navigation.settings")),1)]),_:1}),r(j,{onClick:R},{default:a(()=>[r(e(J),{class:"w-5 h-5 mr-3 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),d(" "+l(i.$t("navigation.logout")),1)]),_:1})]),_:1})]),_:1})]),t("div",ct,[r(e(H),{class:"bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"},{default:a(()=>[ut,M?(n(),c(e(q),{key:1,class:"block h-6 w-6","aria-hidden":"true"})):(n(),c(e(T),{key:0,class:"block h-6 w-6","aria-hidden":"true"}))]),_:2},1024)])])]),r(e(K),{class:"sm:hidden"},{default:a(()=>[t("div",dt,[(n(!0),u(w,null,v(e(o).mainMenu,s=>(n(),c(y,{key:s.title,to:`/${e(o).companySlug}${s.link}`,class:x([_(s.link)?"bg-primary-50 border-primary-500 text-primary-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"]),"aria-current":s.current?"page":void 0},{default:a(()=>[d(l(s.title),1)]),_:2},1032,["to","class","aria-current"]))),128))]),t("div",mt,[t("div",ft,[t("div",pt,[t("img",{class:"h-10 w-10 rounded-full",src:e(B),alt:""},null,8,ht)]),t("div",gt,[t("div",_t,l(e(o).currentUser.title),1),t("div",yt,l(e(o).currentUser.email),1)]),bt]),t("div",vt,[(n(),u(w,null,v(h,s=>r(y,{key:s.title,to:s.link,class:x([_(s.link)?"bg-primary-50 border-primary-500 text-primary-700":"border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800","block pl-3 pr-4 py-2 border-l-4 text-base font-medium"])},{default:a(()=>[d(l(s.title),1)]),_:2},1032,["to","class"])),64))])])]),_:1})]),_:1})}}},wt={key:0,class:"h-full"},kt={class:"mt-16 pb-16 h-screen h-screen-ios overflow-y-auto min-h-0"},Nt={setup(C){const m=U(),f=N(),o=b(()=>m.isAppLoaded);h();async function h(){await m.bootstrap(f.params.company)}return(k,$)=>{const g=p("router-view");return e(o)?(n(),u("div",wt,[r(Y),r(xt),t("main",kt,[r(g)])])):W("",!0)}}};export{Nt as default};