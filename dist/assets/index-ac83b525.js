import{G as h,j as e,r as n,I as g,u as w,s as m,R as f,a as u,f as j,L as v,H as L,P as b}from"./index-dcd38654.js";function S(r){return h({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"}}]})(r)}const N=()=>{let r=["All","Fresh","Buy again","Today's deal","Best Sellers","Home & Kitchen","Amazon miniTv","Sell","Amazon Pay","Gift Cards","Coupons","Gift ideas"];return e.jsxs("div",{className:"category-wrapper d-flex-spaceBetween d-flex-row",children:[e.jsx("div",{className:"category-container",children:e.jsx("ul",{className:"d-flex-row",children:r.map((t,o)=>t!=="All"?e.jsx("li",{children:t},o):e.jsxs("div",{className:"d-flex-row",children:[e.jsx(S,{}),e.jsx("li",{children:t},o)]},t))})}),e.jsx("div",{className:"new-launches",children:"New Launches from Mobile, Electronics & more"})]})};function y(r){return h({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M12 15.0006L7.75732 10.758L9.17154 9.34375L12 12.1722L14.8284 9.34375L16.2426 10.758L12 15.0006Z"}}]})(r)}const k=({onSelect:r,filterType:t})=>{const[o,s]=n.useState(!1),[i,c]=n.useState("Sort by : Featured"),d=()=>{s(!0)},p=a=>{r(a),s(!1),c(a)};return e.jsxs("div",{className:"dropdown-wrapper relative",children:[e.jsx("button",{className:"dropdown-input",onClick:d,children:e.jsxs("div",{className:"d-flex-row",children:[e.jsx("p",{children:i}),"  "," ",e.jsxs(g.Provider,{value:{size:"25px",className:"global-class-name"},children:[e.jsx(y,{})," "]})]})}),o?e.jsx("ul",{className:"absolute",children:t.map((a,l)=>e.jsx("li",{onClick:()=>p(a),children:a},l))}):null]})};let H=["Price : Low to high","Price : High to low","Avg. customer review","Newest arrivals"];const P=()=>{let r=w();const t=o=>{r(m(o))};return e.jsxs("div",{className:"category-wrapper-secondary d-flex-spaceBetween d-flex-row",children:[e.jsx("div",{children:'1-48 of over 50,000 results for "ear"'}),e.jsx(k,{onSelect:t,filterType:H})]})},x=(r,t)=>{console.log(r);let o="background:rgb(92, 229, 0);color:black;font-weight:bold;padding:6px 13px;border-radius:8px;",s="background:#ffc208;color:black;font-weight:bold;padding:6px 13px;border-radius:8px;",i="background:red;color:white;font-weight:bold;padding:6px 13px;border-radius:8px;";return{log:()=>{console.log(`%c${r}`,o,t)},warn:()=>{console.log(`%c${r}`,s)},error:()=>{console.error(`%c${r}`,i)}}},A=f.memo(()=>{let r=w(),t=u(c=>c.allProducts.productList),o=u(c=>c.allProducts.selectedFilter);const[s,i]=n.useState(t);return n.useEffect(()=>{t||r(j())},[r,t]),x("__success__",s).log(),x("!warn",s).warn(),n.useEffect(()=>{switch(o){case"Price : Low to high":let c=s.sort((a,l)=>a.price<l.price?1:l.price<a.price?-1:0);i(c);break;case"Price : High to low":let d=s.sort((a,l)=>a.price>l.price?1:l.price>a.price?-1:0);i(d);break;case"Avg. customer review":let p=s.sort((a,l)=>a.rating.rate<l.rating.rate?1:l.rating.rate<a.rating.rate?-1:0);i(p);break;case"Newest arrivals":i(s);break;default:i(s);break}},[o,s]),e.jsxs("div",{className:"homescreen-wrapper",children:[e.jsx(v,{}),e.jsx(L,{}),e.jsx(N,{}),e.jsx(P,{}),e.jsx("div",{className:"product-main",children:s?s.map(c=>e.jsx("div",{className:"d-flex-column",children:e.jsx(b,{product:c},c.id)})):e.jsx("p",{children:"Loading...."})})]})});export{A as default};
