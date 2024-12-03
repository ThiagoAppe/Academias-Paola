import{b as g,j as e,r as c,c as v}from"./react-Df5T0NLT.js";import{L as p,B as C,R as y,a as f}from"./react-router-BgmsEU8c.js";import{r as d}from"./@material-tailwind-DryfW4jF.js";import{a as k}from"./axios-CCb-kr4I.js";import"./@emotion-DbSep2O-.js";import"./scheduler-CzFDRTuY.js";import"./@remix-run-CrqJK5sb.js";import"./classnames-BarBPuyi.js";import"./tailwind-merge-BXtt6hLZ.js";import"./prop-types-BKNjMPK8.js";import"./deepmerge-MrQlWjp6.js";import"./framer-motion-DaJZbSZJ.js";import"./tslib-CoYpNssv.js";import"./hey-listen-KE_C_eS6.js";import"./style-value-types-Pspc_Zm6.js";import"./popmotion-DndbPlzv.js";import"./framesync-BCkQ-MAm.js";import"./@motionone-BbjnX2i8.js";import"./material-ripple-effects-BS6XNNYc.js";import"./@floating-ui-DyMVXwX2.js";import"./aria-hidden-DQ5UC2Eg.js";import"./tabbable-CjV0_wFH.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function l(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=l(s);fetch(s.href,r)}})();const L="https://thiagoappe.github.io/Academias-Paola/Academia-Paola-Logo.webp",P="https://thiagoappe.github.io/Academias-Paola/AP-Logo.webp";function A(){const[t,a]=g.useState(!1);g.useEffect(()=>{window.addEventListener("resize",()=>window.innerWidth>=960&&a(!1))},[]);const l=e.jsxs("ul",{className:"mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6",children:[e.jsx("li",{children:e.jsx(p,{to:"/",className:"font-bold text-black",children:"INICIO"})}),e.jsx("li",{children:e.jsx(p,{to:"/productos",className:"font-bold text-black",children:"PRODUCTOS"})}),e.jsx("li",{children:e.jsx(p,{to:"/contacto",className:"font-bold text-black",children:"CONTACTO"})})]});return e.jsxs(d.Navbar,{className:"mx-auto max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4 ",children:[e.jsxs("div",{className:"container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900",children:[e.jsxs("div",{children:[e.jsx("img",{className:"h-14 hidden lg:block",src:L,alt:"Logo"}),e.jsx("img",{className:"h-11 block lg:hidden",src:P,alt:"Logo"})]}),e.jsx("div",{className:"hidden lg:block",children:l}),e.jsxs("div",{className:"hidden items-center gap-x-2 lg:flex",children:[e.jsxs("div",{className:"relative flex w-full gap-2 md:w-max",children:[e.jsx(d.Input,{type:"search",placeholder:"Buscar",containerProps:{className:"min-w-[288px]"},className:" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300",labelProps:{className:"before:content-none after:content-none"}}),e.jsx("div",{className:"!absolute left-3 top-[13px]",children:e.jsxs("svg",{width:"13",height:"14",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z",fill:"#CFD8DC"}),e.jsx("path",{d:"M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z",stroke:"#CFD8DC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})})]}),e.jsx(d.Button,{size:"md",className:"rounded-lg ",children:"Buscar"})]}),e.jsx(d.IconButton,{variant:"text",className:"ml-auto h-6 w-6 text-black hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden",ripple:!1,onClick:()=>a(!t),children:t?e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",className:"h-6 w-6",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"})}):e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",stroke:"currentColor",strokeWidth:2,children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M4 6h16M4 12h16M4 18h16"})})})]}),e.jsx(d.MobileNav,{open:t,children:e.jsxs("div",{className:"container mx-auto",children:[l,e.jsxs("div",{className:"flex flex-col gap-x-2 sm:flex-row sm:items-center",children:[e.jsxs("div",{className:"relative w-full gap-2 md:w-max",children:[e.jsx(d.Input,{type:"search",placeholder:"Search",containerProps:{className:"min-w-[288px]"},className:" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300",labelProps:{className:"before:content-none after:content-none"}}),e.jsx("div",{className:"!absolute left-3 top-[13px]",children:e.jsxs("svg",{width:"13",height:"14",viewBox:"0 0 14 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z",fill:"#CFD8DC"}),e.jsx("path",{d:"M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z",stroke:"#CFD8DC","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"})]})})]}),e.jsx(d.Button,{size:"md",className:"mt-1 rounded-lg sm:mt-0",children:"Buscar"})]})]})})]})}function M(){const[t,a]=c.useState(0);return e.jsx("div",{className:"relative w-full max-w-4xl my-16",children:e.jsxs(d.Carousel,{activeIndex:t,onChange:a,className:"rounded-xl",navigation:({setActiveIndex:l,activeIndex:i,length:s})=>e.jsx("div",{className:"absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2",children:new Array(s).fill("").map((r,o)=>e.jsx("span",{className:`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${i===o?"w-8 bg-white":"w-4 bg-white/50"}`,onClick:()=>l(o)},o))}),children:[e.jsx("img",{src:"https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",alt:"Imagen 1",className:"h-80 w-full object-cover"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",alt:"Imagen 2",className:"h-80 w-full object-cover"}),e.jsx("img",{src:"https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",alt:"Imagen 3",className:"h-80 w-full object-cover"})]})})}const j=async t=>{try{return(await k.get(t)).data}catch(a){throw console.error(`Error al realizar el fetch en ${t}:`,a),a}},S=({endpoint:t})=>{const[a,l]=c.useState([]),[i,s]=c.useState(!0);return c.useEffect(()=>{t&&(async()=>{s(!0);try{const o=await j(t);l(o)}catch(o){console.error("Error al cargar los datos:",o)}finally{s(!1)}})()},[t]),e.jsxs("div",{className:"w-full max-w-7xl px-6 mb-16",children:[e.jsx("h2",{className:"text-3xl font-semibold text-center text-gray-800 mb-8",children:"Lo que dicen nuestros clientes"}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8",children:i||a.length===0?Array.from({length:3}).map((r,o)=>e.jsxs("div",{className:"bg-gray-200 p-6 rounded-lg shadow-md animate-pulse",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-4"}),e.jsx("div",{className:"h-4 bg-gray-300 rounded w-1/2 mb-4"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"h-12 w-12 rounded-full bg-gray-300 mr-4"}),e.jsxs("div",{className:"flex-1",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-1/3 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-300 rounded w-1/4"})]})]})]},o)):a.slice(0,3).map(({id:r,texto:o,nombre:m,ocupacion:x,imagen:h})=>e.jsxs("div",{className:"bg-white p-6 rounded-lg shadow-md",children:[e.jsx("p",{className:"text-gray-700 text-lg mb-4",children:`"${o}"`}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:h,alt:`Cliente ${r}`,className:"h-12 w-12 rounded-full mr-4"}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-gray-900 font-semibold",children:m}),e.jsx("p",{className:"text-gray-500 text-sm",children:x})]})]})]},r))})]})},E=({nombre:t,descripcion:a,imagen:l})=>e.jsxs("div",{className:"w-60 h-80 bg-white rounded-lg shadow-md flex-shrink-0",children:[e.jsx("img",{src:l,alt:t,className:"w-full h-40 object-cover rounded-t-lg"}),e.jsxs("div",{className:"p-4",children:[e.jsx("h3",{className:"text-lg font-semibold text-gray-800",children:t}),e.jsx("p",{className:"text-sm text-gray-600",children:a})]})]}),B=({endpoint:t})=>{const[a,l]=c.useState([]),[i,s]=c.useState(!0),r=c.useRef(null),[o,m]=c.useState(0),x=async()=>{s(!0);try{const n=await j(t);n&&n.length>0&&l(n)}catch(n){console.error("Error al cargar los productos:",n)}finally{s(!1)}};c.useEffect(()=>{t&&x()},[t]);const h=()=>m(n=>Math.max(n-1,0)),w=()=>m(n=>n+1);return c.useEffect(()=>{if(r.current){const n=r.current.offsetWidth*o;r.current.scrollTo({left:n,behavior:"smooth"})}},[o]),e.jsxs("div",{className:"w-full max-w-7xl px-6 mb-16",children:[e.jsx("h2",{className:"text-3xl font-semibold text-center text-gray-800 mb-8",children:"Productos Destacados"}),e.jsxs("div",{className:"relative w-full",children:[e.jsx("button",{className:"absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full pl-2",onClick:h,children:"❮"}),e.jsx("div",{className:"flex overflow-x-auto space-x-4 scrollbar-hide",ref:r,children:i?Array.from({length:5}).map((n,u)=>e.jsxs("div",{className:"w-60 h-80 bg-gray-200 rounded-lg animate-pulse",children:[e.jsx("div",{className:"h-40 bg-gray-300 rounded-t-lg"}),e.jsxs("div",{className:"p-4",children:[e.jsx("div",{className:"h-4 bg-gray-300 rounded w-3/4 mb-2"}),e.jsx("div",{className:"h-4 bg-gray-300 rounded w-1/2"})]})]},u)):a.map(({id:n,nombre:u,descripcion:b,imagen:N})=>e.jsx(E,{nombre:u,descripcion:b,imagen:N},n))}),e.jsx("button",{className:"absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full pr-2",onClick:w,children:"❯"})]})]})},D="https://raw.githubusercontent.com/ThiagoAppe/Academias-Paola/refs/heads/main/public/reseñas.json",I="https://raw.githubusercontent.com/ThiagoAppe/Academias-Paola/refs/heads/main/public/products.json";function O(){return e.jsxs("div",{className:"flex flex-col items-center justify-center min-h-screen bg-gray-100",children:[e.jsx("div",{children:e.jsx(M,{})}),e.jsx("div",{children:e.jsx("div",{className:"w-full max-w-7xl px-6 mb-16",children:e.jsx(S,{endpoint:D})})}),e.jsx(B,{endpoint:I}),e.jsxs("div",{className:"w-full max-w-7xl px-6 mb-16",children:[e.jsx("h2",{className:"text-3xl font-semibold text-center text-gray-800 mb-8",children:"Categorías de Productos"}),e.jsxs("div",{className:"flex flex-wrap justify-center gap-6",children:[e.jsx("button",{className:"bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition w-full sm:w-auto",children:"Shampoo"}),e.jsx("button",{className:"bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition w-full sm:w-auto",children:"Acondicionador"}),e.jsx("button",{className:"bg-yellow-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition w-full sm:w-auto",children:"Tratamientos"}),e.jsx("button",{className:"bg-pink-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-pink-600 transition w-full sm:w-auto",children:"Accesorios"})]})]})]})}const R=()=>{const[t,a]=c.useState(null),[l,i]=c.useState(null);return c.useEffect(()=>{fetch("https://net-kaylyn-appetec-91c554a9.koyeb.app/",{method:"GET",headers:{Origin:"http://localhost:3000"}}).then(s=>{if(!s.ok)throw new Error("No se pudo obtener los productos");return s.json()}).then(s=>{a(s)}).catch(s=>{i(s.message)})},[]),e.jsxs("div",{children:[e.jsx("h1",{children:"Lista de Productos"}),l&&e.jsxs("p",{style:{color:"red"},children:["Error: ",l]}),t?e.jsx("pre",{children:JSON.stringify(t,null,2)}):e.jsx("p",{children:"Cargando productos..."})]})};function H(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Productos"}),e.jsx("p",{children:"Aquí se mostrarán los productos de la tienda."}),e.jsx(R,{})]})}function T(){return e.jsxs("div",{children:[e.jsx("h1",{children:"Contacto"}),e.jsx("p",{children:"Puedes contactarnos a través de nuestro correo electrónico: contacto@tienda.com"})]})}function G(){return e.jsx(e.Fragment,{children:e.jsx("main",{className:" bg-gray-100",children:e.jsxs(C,{children:[e.jsx("div",{className:"pt-3",children:e.jsx(A,{})}),e.jsxs(y,{children:[e.jsx(f,{path:"/",element:e.jsx(O,{})}),e.jsx(f,{path:"/Productos",element:e.jsx(H,{})}),e.jsx(f,{path:"/Contacto",element:e.jsx(T,{})})]})]})})})}v(document.getElementById("root")).render(e.jsx(c.StrictMode,{children:e.jsx(G,{})}));