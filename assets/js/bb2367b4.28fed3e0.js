"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[435],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(n),h=i,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4302:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return r},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(7462),i=n(3366),o=(n(7294),n(3905)),s=["components"],r={sidebar_position:5},l="Integrate Snapshot",c={unversionedId:"tutorial-module-reality/integrate-snapshot",id:"tutorial-module-reality/integrate-snapshot",isDocsHomePage:!1,title:"Integrate Snapshot",description:"Once the module is set up, it is possible to integrate a space on Snapshot with the Reality Module plugin.",source:"@site/docs/tutorial-module-reality/integrate-snapshot.md",sourceDirName:"tutorial-module-reality",slug:"/tutorial-module-reality/integrate-snapshot",permalink:"/zodiac/docs/tutorial-module-reality/integrate-snapshot",editUrl:"https://github.com/gnosis/zodiac/edit/master/website/docs/tutorial-module-reality/integrate-snapshot.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Review module",permalink:"/zodiac/docs/tutorial-module-reality/review-module"},next:{title:"Monitor module",permalink:"/zodiac/docs/tutorial-module-reality/monitor-module"}},p=[{value:"To setup SafeSnap using the UI:",id:"to-setup-safesnap-using-the-ui",children:[{value:"1. Open the Snapshot Settings page",id:"1-open-the-snapshot-settings-page",children:[]},{value:"2. Add the Safesnap plugin",id:"2-add-the-safesnap-plugin",children:[]}]},{value:"Using the Safesnap plugin",id:"using-the-safesnap-plugin",children:[{value:"Add transactions to a proposal",id:"add-transactions-to-a-proposal",children:[]},{value:"Kicking off the Reality Oracle",id:"kicking-off-the-reality-oracle",children:[]},{value:"Setting an outcome",id:"setting-an-outcome",children:[]},{value:"Waiting for an outcome to finalize",id:"waiting-for-an-outcome-to-finalize",children:[]},{value:"Outcome cooldown period",id:"outcome-cooldown-period",children:[]},{value:"Executing the transactions",id:"executing-the-transactions",children:[]}]}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"integrate-snapshot"},"Integrate Snapshot"),(0,o.kt)("p",null,"Once the module is set up, it is possible to integrate a space on ",(0,o.kt)("a",{parentName:"p",href:"https://snapshot.org/"},"Snapshot")," with the Reality Module plugin."),(0,o.kt)("p",null,"To accomplish this you can set it up through the Snapshot Space settings, or by setting the space's configuration JSON directly. Both methods require the address of the Reality Module, which can be found at the top of its interface on Gnosis Safe:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configured Reality Module",src:n(372).Z})),(0,o.kt)("p",null,"To set the JSON directly, the space configuration needs to include ",(0,o.kt)("inlineCode",{parentName:"p"},'"plugins": { "daoModule": { "address": "<module_address>"} }'),"."),(0,o.kt)("p",null,"More information and an example of this can be found here ",(0,o.kt)("a",{parentName:"p",href:"https://docs.snapshot.org/spaces/alternative-way-to-create-a-space"},"Snapshot documentation."),"."),(0,o.kt)("p",null,"Note that your plugins field should look similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"plugins": {\n    "safeSnap": {\n      "address": "0xSWITCH_WITH_REALITY_MODULE_ADDRESS"\n    }\n  },\n')),(0,o.kt)("h2",{id:"to-setup-safesnap-using-the-ui"},"To setup SafeSnap using the UI:"),(0,o.kt)("h3",{id:"1-open-the-snapshot-settings-page"},"1. Open the Snapshot Settings page"),(0,o.kt)("p",null,"The settings to your Snapshot page live at a link similar to this one: ",(0,o.kt)("a",{parentName:"p",href:"https://snapshot.org/#/org_name/settings"},"https://snapshot.org/#/org_name/settings"),', where "org_name" should be switched with your group\'s name.'),(0,o.kt)("p",null,"Scroll down to the bottom of the page, where the plugin settings are."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Snapshot settings page",src:n(943).Z})),(0,o.kt)("h3",{id:"2-add-the-safesnap-plugin"},"2. Add the Safesnap plugin"),(0,o.kt)("p",null,"Click on the Safesnap plugin:\n",(0,o.kt)("img",{alt:"Snapshot plugin popup",src:n(3697).Z})),(0,o.kt)("p",null,"Enter in the following JSON, with your Reality module address substituted."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  "address": "0xSWITCH_WITH_REALITY_MODULE_ADDRESS"\n}\n')),(0,o.kt)("p",null,"It should look similar to this:\n",(0,o.kt)("img",{alt:"Setting up the Safesnap plugin",src:n(9718).Z})),(0,o.kt)("h2",{id:"using-the-safesnap-plugin"},"Using the Safesnap plugin"),(0,o.kt)("h3",{id:"add-transactions-to-a-proposal"},"Add transactions to a proposal"),(0,o.kt)("p",null,'If configured correctly, a "Transactions" container will show below the "Choices" container when creating a new proposal.\n',(0,o.kt)("img",{alt:"The transactions container",src:n(2036).Z})),(0,o.kt)("h3",{id:"kicking-off-the-reality-oracle"},"Kicking off the Reality Oracle"),(0,o.kt)("p",null,'Once a vote closes on Snapshot, you will be able to \'Request Execution" in the "Safesnap Transactions" window.\n',(0,o.kt)("img",{alt:"The Reality Oracle initial state",src:n(1302).Z})),(0,o.kt)("h3",{id:"setting-an-outcome"},"Setting an outcome"),(0,o.kt)("p",null,"Once the Oracle has been initialized, an initial outcome must be set. The person setting this outcome must offer a Bond, that can be claimed by them later if their answer is selected (this Bond value is set in an earlier step).\n",(0,o.kt)("img",{alt:"Changing the outcome of the vote",src:n(670).Z}),"\n",(0,o.kt)("img",{alt:"Selecting the outcome popup",src:n(6917).Z})),(0,o.kt)("h3",{id:"waiting-for-an-outcome-to-finalize"},"Waiting for an outcome to finalize"),(0,o.kt)("p",null,"Once an outcome has been set, the Safesnap window will show how long until that vote is finalized (this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"Timeout")," value we set in an earlier step).\n",(0,o.kt)("img",{alt:"The outcome finalizing timer",src:n(3629).Z})),(0,o.kt)("h3",{id:"outcome-cooldown-period"},"Outcome cooldown period"),(0,o.kt)("p",null,"Once the outcome is finalized, the Safesnap plugin will enter it's ",(0,o.kt)("inlineCode",{parentName:"p"},"Cooldown")," period, the waiting period after an outcome is finalized and before the transaction can be executed (we set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Cooldown")," duration in an earlier step).\n",(0,o.kt)("img",{alt:"Showing the cooldown timer",src:n(8568).Z})),(0,o.kt)("h3",{id:"executing-the-transactions"},"Executing the transactions"),(0,o.kt)("p",null,"After the cooldown period, the transaction will be executable, and the bond put up to finalize the outcome can be claimed.\n",(0,o.kt)("img",{alt:"The transaction is ready to execute",src:n(9094).Z})))}d.isMDXComponent=!0},372:function(e,t,n){t.Z=n.p+"assets/images/reality_review_3-7c2c13d5ed97d925c84c9a973f1323a2.jpg"},943:function(e,t,n){t.Z=n.p+"assets/images/safesnap_1-c1cb5ea1eadcf28492511165e3973ad1.jpg"},9094:function(e,t,n){t.Z=n.p+"assets/images/safesnap_10-31bd54c289d0513d9b36c2148806e2ac.jpg"},3697:function(e,t,n){t.Z=n.p+"assets/images/safesnap_2-fa48c37b3c736f7001775c5917698480.jpg"},9718:function(e,t,n){t.Z=n.p+"assets/images/safesnap_3-fe845815b1a7ca16247c16225c306215.jpg"},2036:function(e,t,n){t.Z=n.p+"assets/images/safesnap_4-8dab9a4cb1280efcece025be5bd589ec.jpg"},1302:function(e,t,n){t.Z=n.p+"assets/images/safesnap_5-6c87f506fb9f84dbad6bf98e2c35b172.jpg"},670:function(e,t,n){t.Z=n.p+"assets/images/safesnap_6-626b6ff47cf2d9cd2041d3bd5ea255bc.jpg"},6917:function(e,t,n){t.Z=n.p+"assets/images/safesnap_7-a707ad11b22cedfd378905fe9f5aa7c0.jpg"},3629:function(e,t,n){t.Z=n.p+"assets/images/safesnap_8-710b6dc6a3a2170abd5dc28d9d21a5eb.jpg"},8568:function(e,t,n){t.Z=n.p+"assets/images/safesnap_9-5bf1631f3e9f40d82489aa6f1f4f73e6.jpg"}}]);