"use strict";(self.webpackChunkplugins=self.webpackChunkplugins||[]).push([[5627],{8974:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>b,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>d,toc:()=>h});var n=s(4848),i=s(8453),a=s(3611),o=s(5934);function u(){return(0,n.jsx)("div",{className:"card-demo",children:(0,n.jsx)("div",{className:"row",children:a.A.communityPlugins.map(((e,t)=>(0,n.jsx)(o.A,{name:e.name,githubRepo:e.githubRepo,npmPackage:e.npmPackage,author:e.author,authorUrl:e.authorUrl,description:e.description},t)))})})}function r(){return(0,n.jsx)("div",{className:"card-demo",children:(0,n.jsx)("div",{className:"row",children:a.A.officialPlugins.map(((e,t)=>(0,n.jsx)(o.A,{name:e.name,githubRepo:e.githubRepo,npmPackage:e.npmPackage,author:e.author,authorUrl:e.authorUrl,description:e.description},t)))})})}const c={},l="Subjektify Plugins",d={type:"mdx",permalink:"/subjektify",source:"@site/src/pages/subjektify.mdx",title:"Subjektify Plugins",description:"Official Plugins",frontMatter:{},unlisted:!1},b={},h=[];function f(e){const t={h1:"h1",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"subjektify-plugins",children:"Subjektify Plugins"}),"\n","\n",(0,n.jsx)("h2",{children:"Official Plugins"}),"\n",(0,n.jsx)(r,{}),"\n",(0,n.jsx)("h2",{children:"Community Plugins"}),"\n",(0,n.jsx)(u,{})]})}function j(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},5934:(e,t,s)=>{s.d(t,{A:()=>i});s(6540);var n=s(4848);function i(e){let{name:t,githubRepo:s,npmPackage:i,author:a,authorUrl:o,description:u}=e;return(0,n.jsx)("div",{className:"col col--4 margin-bottom--lg",children:(0,n.jsxs)("div",{className:"card shadow--sm",children:[(0,n.jsxs)("div",{className:"card__header",children:[(0,n.jsx)("h3",{className:"margin-bottom--xs",children:t}),(0,n.jsx)("a",{href:o,target:"_blank",rel:"noopener noreferrer",children:a})]}),(0,n.jsx)("div",{className:"card__body",children:(0,n.jsx)("p",{children:u})}),(0,n.jsx)("div",{className:"card__footer",children:(0,n.jsxs)("div",{className:"button-group button-group--block",children:[(0,n.jsx)("a",{href:`https://www.github.com/${s}`,target:"_blank",className:"button button--secondary button--block",children:"Github"}),(0,n.jsx)("a",{href:`https://www.npmjs.com/package/${i}`,target:"_blank",className:"button button--secondary button--block",children:"NPM"})]})})]})})}},3611:(e,t,s)=>{s.d(t,{A:()=>n});class n{static communityPlugins=[];static officialPlugins=[{name:"subjektify-build",githubRepo:"subjektify/subjektify",npmPackage:"@subjektifylabs/subjektify-build",author:"Subjektify Labs",authorUrl:"https://subjektify.dev",description:"Build, validate, and compile your Subjekt model."},{name:"subjektify-codegen",githubRepo:"subjektify/subjektify",npmPackage:"@subjektifylabs/subjektify-codegen",author:"Subjektify Labs",authorUrl:"https://subjektify.dev",description:"Generate code based on your Subjekt model."},{name:"subjektify-docgen",githubRepo:"subjektify/subjektify",npmPackage:"@subjektifylabs/subjektify-docgen",author:"Subjektify Labs",authorUrl:"https://subjektify.dev",description:"Generate documentation from your Subjekt model."},{name:"subjektify-deploy",githubRepo:"subjektify/subjektify",npmPackage:"@subjektifylabs/subjektify-deploy",author:"Subjektify Labs",authorUrl:"https://subjektify.dev",description:"Automate the deployment of your Subjektify projects."},{name:"subjektify-hardhat",githubRepo:"subjektify/subjektify",npmPackage:"@subjektifylabs/subjektify-hardhat",author:"Subjektify Labs",authorUrl:"https://subjektify.dev",description:"Integrate Hardhat into your Subjektify projects."}]}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>u});var n=s(6540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function u(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);