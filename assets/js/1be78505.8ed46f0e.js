"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[9514,4972],{19963:function(e,t,a){a.r(t),a.d(t,{default:function(){return Te}});var n=a(67294),l=a(86010),r=a(10833),i=a(35281),o=a(43320),c=a(24575),d=a(74477),s=a(1116),u=a(34660),m=a(95999),b=a(12466),f=a(85936);var p="backToTopButton_sjWU",v="backToTopButtonShow_xfvO";function h(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),l=a[0],r=a[1],i=(0,n.useRef)(!1),o=(0,b.Ct)(),c=o.startScroll,d=o.cancelScroll;return(0,b.RF)((function(e,a){var n=e.scrollY,l=null==a?void 0:a.scrollY;l&&(i.current?i.current=!1:n>=l?(d(),r(!1)):n<t?r(!1):n+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,f.S)((function(e){e.location.hash&&(i.current=!0,r(!1))})),{shown:l,scrollToTop:function(){return c(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.default)("clean-btn",i.k.common.backToTopButton,p,t&&v),type:"button",onClick:a})}var E=a(76775),g=a(87524),k=a(86668),_=a(21327),C=a(83117);function N(e){return n.createElement("svg",(0,C.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}var S="collapseSidebarButton_PEFL",I="collapseSidebarButtonIcon_kv0_";function x(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,m.translate)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.default)("button button--secondary button--outline",S),onClick:t},n.createElement(N,{className:I}))}var y=a(59689),T=a(80102),w=a(44700),L=Symbol("EmptyContext"),M=n.createContext(L);function A(e){var t=e.children,a=(0,n.useState)(null),l=a[0],r=a[1],i=(0,n.useMemo)((function(){return{expandedItem:l,setExpandedItem:r}}),[l]);return n.createElement(M.Provider,{value:i},t)}var B=a(86043),F=a(48596),P=a(39960),Z=a(72389),H=["item","onItemClick","activePath","level","index"];function W(e){var t=e.categoryLabel,a=e.onClick;return n.createElement("button",{"aria-label":(0,m.translate)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function D(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=e.level,d=e.index,s=(0,T.Z)(e,H),u=t.items,m=t.label,b=t.collapsible,f=t.className,p=t.href,v=(0,k.L)().docs.sidebar.autoCollapseCategories,h=function(e){var t=(0,Z.default)();return(0,n.useMemo)((function(){return e.href?e.href:!t&&e.collapsible?(0,c.Wl)(e):void 0}),[e,t])}(t),E=(0,c._F)(t,r),g=(0,F.Mg)(p,r),_=(0,B.u)({initialState:function(){return!!b&&(!E&&t.collapsed)}}),N=_.collapsed,S=_.setCollapsed,I=function(){var e=(0,n.useContext)(M);if(e===L)throw new w.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=I.expandedItem,y=I.setExpandedItem,A=function(e){void 0===e&&(e=!N),y(e?null:d),S(e)};return function(e){var t=e.isActive,a=e.collapsed,l=e.updateCollapsed,r=(0,w.D9)(t);(0,n.useEffect)((function(){t&&!r&&a&&l(!1)}),[t,r,a,l])}({isActive:E,collapsed:N,updateCollapsed:A}),(0,n.useEffect)((function(){b&&null!=x&&x!==d&&v&&S(!0)}),[b,x,d,S,v]),n.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemCategory,i.k.docs.docSidebarItemCategoryLevel(o),"menu__list-item",{"menu__list-item--collapsed":N},f)},n.createElement("div",{className:(0,l.default)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g})},n.createElement(P.default,(0,C.Z)({className:(0,l.default)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!p&&b,"menu__link--active":E}),onClick:b?function(e){null==a||a(t),p?A(!1):(e.preventDefault(),A())}:function(){null==a||a(t)},"aria-current":g?"page":void 0,"aria-expanded":b?!N:void 0,href:b?null!=h?h:"#":h},s),m),p&&b&&n.createElement(W,{categoryLabel:m,onClick:function(e){e.preventDefault(),A()}})),n.createElement(B.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:N},n.createElement(J,{items:u,tabIndex:N?-1:0,onItemClick:a,activePath:r,level:o+1})))}var R=a(13919),z=a(39471),U="menuExternalLink_NmtK",V=["item","onItemClick","activePath","level","index"];function K(e){var t=e.item,a=e.onItemClick,r=e.activePath,o=e.level,d=(e.index,(0,T.Z)(e,V)),s=t.href,u=t.label,m=t.className,b=t.autoAddBaseUrl,f=(0,c._F)(t,r),p=(0,R.Z)(s);return n.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(o),"menu__list-item",m),key:u},n.createElement(P.default,(0,C.Z)({className:(0,l.default)("menu__link",!p&&U,{"menu__link--active":f}),autoAddBaseUrl:b,"aria-current":f?"page":void 0,to:s},p&&{onClick:a?function(){return a(t)}:void 0},d),u,!p&&n.createElement(z.Z,null)))}var j="menuHtmlItem_M9Kj";function q(e){var t=e.item,a=e.level,r=e.index,o=t.value,c=t.defaultStyle,d=t.className;return n.createElement("li",{className:(0,l.default)(i.k.docs.docSidebarItemLink,i.k.docs.docSidebarItemLinkLevel(a),c&&[j,"menu__list-item"],d),key:r,dangerouslySetInnerHTML:{__html:o}})}var G=["item"];function Y(e){var t=e.item,a=(0,T.Z)(e,G);switch(t.type){case"category":return n.createElement(D,(0,C.Z)({item:t},a));case"html":return n.createElement(q,(0,C.Z)({item:t},a));default:return n.createElement(K,(0,C.Z)({item:t},a))}}var O=["items"];function X(e){var t=e.items,a=(0,T.Z)(e,O);return n.createElement(A,null,t.map((function(e,t){return n.createElement(Y,(0,C.Z)({key:t,item:e,index:t},a))})))}var J=(0,n.memo)(X),Q="menu_SIkG",$="menuWithAnnouncementBar_GW3s";function ee(e){var t=e.path,a=e.sidebar,r=e.className,o=function(){var e=(0,y.nT)().isActive,t=(0,n.useState)(e),a=t[0],l=t[1];return(0,b.RF)((function(t){var a=t.scrollY;e&&l(0===a)}),[e]),e&&a}();return n.createElement("nav",{className:(0,l.default)("menu thin-scrollbar",Q,o&&$,r)},n.createElement("ul",{className:(0,l.default)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(J,{items:a,activePath:t,level:1})))}var te="sidebar_njMd",ae="sidebarWithHideableNavbar_wUlq",ne="sidebarHidden_VK0M",le="sidebarLogo_isFc";function re(e){var t=e.path,a=e.sidebar,r=e.onCollapse,i=e.isHidden,o=(0,k.L)(),c=o.navbar.hideOnScroll,d=o.docs.sidebar.hideable;return n.createElement("div",{className:(0,l.default)(te,c&&ae,i&&ne)},c&&n.createElement(_.Z,{tabIndex:-1,className:le}),n.createElement(ee,{path:t,sidebar:a}),d&&n.createElement(x,{onClick:r}))}var ie=n.memo(re),oe=a(13102),ce=a(72961),de=function(e){var t=e.sidebar,a=e.path,r=(0,ce.e)();return n.createElement("ul",{className:(0,l.default)(i.k.docs.docSidebarMenu,"menu__list")},n.createElement(J,{items:t,activePath:a,onItemClick:function(e){"category"===e.type&&e.href&&r.toggle(),"link"===e.type&&r.toggle()},level:1}))};function se(e){return n.createElement(oe.Zo,{component:de,props:e})}var ue=n.memo(se);function me(e){var t=(0,g.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(ie,e),l&&n.createElement(ue,e))}var be="expandButton_m80_",fe="expandButtonIcon_BlDH";function pe(e){var t=e.toggleSidebar;return n.createElement("div",{className:be,title:(0,m.translate)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,m.translate)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(N,{className:fe}))}var ve="docSidebarContainer_b6E3",he="docSidebarContainerHidden_b3ry";function Ee(e){var t,a=e.children,l=(0,s.V)();return n.createElement(n.Fragment,{key:null!=(t=null==l?void 0:l.name)?t:"noSidebar"},a)}function ge(e){var t=e.sidebar,a=e.hiddenSidebarContainer,r=e.setHiddenSidebarContainer,o=(0,E.TH)().pathname,c=(0,n.useState)(!1),d=c[0],s=c[1],u=(0,n.useCallback)((function(){d&&s(!1),r((function(e){return!e}))}),[r,d]);return n.createElement("aside",{className:(0,l.default)(i.k.docs.docSidebarContainer,ve,a&&he),onTransitionEnd:function(e){e.currentTarget.classList.contains(ve)&&a&&s(!0)}},n.createElement(Ee,null,n.createElement(me,{sidebar:t,path:o,onCollapse:u,isHidden:d})),d&&n.createElement(pe,{toggleSidebar:u}))}var ke={docMainContainer:"docMainContainer_gTbr",docMainContainerEnhanced:"docMainContainerEnhanced_Uz_u",docItemWrapperEnhanced:"docItemWrapperEnhanced_czyv"};function _e(e){var t=e.hiddenSidebarContainer,a=e.children,r=(0,s.V)();return n.createElement("main",{className:(0,l.default)(ke.docMainContainer,(t||!r)&&ke.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.default)("container padding-top--md padding-bottom--lg",ke.docItemWrapper,t&&ke.docItemWrapperEnhanced)},a))}var Ce="docPage__5DB",Ne="docsWrapper_BCFX";function Se(e){var t=e.children,a=(0,s.V)(),l=(0,n.useState)(!1),r=l[0],i=l[1];return n.createElement(u.Z,{wrapperClassName:Ne},n.createElement(h,null),n.createElement("div",{className:Ce},a&&n.createElement(ge,{sidebar:a.items,hiddenSidebarContainer:r,setHiddenSidebarContainer:i}),n.createElement(_e,{hiddenSidebarContainer:r},t)))}var Ie=a(4972),xe=a(90197);function ye(e){var t=e.versionMetadata;return n.createElement(n.Fragment,null,n.createElement(xe.Z,{version:t.version,tag:(0,o.os)(t.pluginId,t.version)}),n.createElement(r.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function Te(e){var t=e.versionMetadata,a=(0,c.hI)(e);if(!a)return n.createElement(Ie.default,null);var o=a.docElement,u=a.sidebarName,m=a.sidebarItems;return n.createElement(n.Fragment,null,n.createElement(ye,e),n.createElement(r.FG,{className:(0,l.default)(i.k.wrapper.docsPages,i.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(d.q,{version:t},n.createElement(s.b,{name:u,items:m},n.createElement(Se,null,o)))))}},4972:function(e,t,a){a.r(t),a.d(t,{default:function(){return o}});var n=a(67294),l=a(95999),r=a(10833),i=a(34660);function o(){return n.createElement(n.Fragment,null,n.createElement(r.d,{title:(0,l.translate)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(i.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.default,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.default,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.default,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},74477:function(e,t,a){a.d(t,{E:function(){return o},q:function(){return i}});var n=a(67294),l=a(44700),r=n.createContext(null);function i(e){var t=e.children,a=e.version;return n.createElement(r.Provider,{value:a},t)}function o(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);