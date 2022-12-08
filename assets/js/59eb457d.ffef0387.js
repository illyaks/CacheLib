"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[8842],{3905:function(e,t,n){n.r(t),n.d(t,{MDXContext:function(){return p},MDXProvider:function(){return u},mdx:function(){return _},useMDXComponents:function(){return s},withMDXComponents:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),m=function(e){return function(t){var n=s(t.components);return a.createElement(e,r({},t,{components:n}))}},s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),u=o,h=m["".concat(c,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<r;p++)c[p]=n[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},21475:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return s}});var a=n(83117),o=n(80102),r=(n(67294),n(3905)),c=["components"],i={id:"How_To_Debug_A_Core",title:"How To Debug A Core"},l=void 0,p={unversionedId:"facebook/Cachelib_Developers/How_To_Debug_A_Core",id:"facebook/Cachelib_Developers/How_To_Debug_A_Core",title:"How To Debug A Core",description:"[WORK IN PROGRESS]",source:"@site/docs/facebook/Cachelib_Developers/How_To_Debug_A_Core.md",sourceDirName:"facebook/Cachelib_Developers",slug:"/facebook/Cachelib_Developers/How_To_Debug_A_Core",permalink:"/docs/facebook/Cachelib_Developers/How_To_Debug_A_Core",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/facebook/Cachelib_Developers/How_To_Debug_A_Core.md",tags:[],version:"current",frontMatter:{id:"How_To_Debug_A_Core",title:"How To Debug A Core"}},m={},s=[{value:"Find the core file",id:"find-the-core-file",level:2},{value:"How to access CacheAllocator",id:"how-to-access-cacheallocator",level:2},{value:"How to examine CacheAllocator",id:"how-to-examine-cacheallocator",level:2}],u={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,r.mdx)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"[WORK IN PROGRESS]")),(0,r.mdx)("p",null,"GDB is your friend. Here's a quick-start guide to using GDB. ",(0,r.mdx)("a",{parentName:"p",href:"http://beej.us/guide/bggdb/"},"http://beej.us/guide/bggdb/")),(0,r.mdx)("h2",{id:"find-the-core-file"},"Find the core file"),(0,r.mdx)("p",null,"Find out where the core is located. It's typically in ",(0,r.mdx)("inlineCode",{parentName:"p"},"/var/tmp/cores/")," on the host where a crash had happened. You can also manually trigger a coredump via ",(0,r.mdx)("inlineCode",{parentName:"p"},"kill -3")," on the process that you want to dump a core. To find the process, you can search for its name. (E.g. ",(0,r.mdx)("inlineCode",{parentName:"p"},"ps aux | grep <name>"),")."),(0,r.mdx)("p",null,"Alternatively, see if you can find the core via ",(0,r.mdx)("a",{parentName:"p",href:"https://fburl.com/scuba/coredumper/s85b6cvg"},"coredumper"),". You can follow ",(0,r.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Coredumper/User_Guide/Remote_Coredumps/#quickstart-guide"},"this guide")," to figure out how to download and access the core."),(0,r.mdx)("p",null,"Once you have the location of the core, use fbpkg to fetch the package. You can do this by ",(0,r.mdx)("inlineCode",{parentName:"p"},"fbpkg.fetch <package_name>"),". Typically, if you get a task about a crash while oncall, it should contain the package and version for the service that had the crash. Simply ",(0,r.mdx)("inlineCode",{parentName:"p"},"sush")," onto the host, fetch the package, and examine the core ",(0,r.mdx)("inlineCode",{parentName:"p"},"gdb <binary> /var/tmp/cores/<core>"),". Some times the task itself has the complete command for you to log onto a host and examine the core, so you can copy-paste that as well."),(0,r.mdx)("p",null,"This wiki has a few helper commands for you to navigate around cachelib."),(0,r.mdx)("h2",{id:"how-to-access-cacheallocator"},"How to access CacheAllocator"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"TAO")),(0,r.mdx)("p",null,"To examine cache, first make sure you have loaded all the debug symbols."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"fbload auto_debuginfo\nauto-load-debuginfo\nfbload debuginfo_fbpkg\nload_debuginfo\n")),(0,r.mdx)("p",null,"Next, navigate to a place where you have visibility to global variables defined in ",(0,r.mdx)("inlineCode",{parentName:"p"},"tao/server/globals.cpp"),". A frame that is located in ",(0,r.mdx)("inlineCode",{parentName:"p"},"main.cpp")," will give you visibility. After this, you can examine the caches. We have two caches for TAO: gCache and gRecentWritesCache."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"// Look inside gRecentWritesCache\np *gRecentWritesCache._M_t._M_t._M_head_impl\n\n// Examine cache-allocator object inside gRecentWritesCache\np *gRecentWritesCache._M_t._M_t._M_head_impl->cache_._M_t._M_t._M_head_impl\n\n// Look inside gCache\np *gCache._M_t._M_t._M_head_impl\n\n// Examine cache-allocator object inside gCache\np *gCache._M_t._M_t._M_head_impl->cache_._M_t._M_t._M_head_impl\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"BigCache")),(0,r.mdx)("p",null,"tbd"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Memcache")),(0,r.mdx)("p",null,"tbd"),(0,r.mdx)("h2",{id:"how-to-examine-cacheallocator"},"How to examine CacheAllocator"),(0,r.mdx)("p",null,"First verify if we have a full coredump. You can check that by using our cache allocator config scuba dataset. Filter by the host which the crash happened on. Then, check \"disableFullCoredump\". If it's true, then we don't have a full core which means we cannot look inside the cache memory. We can still examine other members of the CacheAllocator though. You can look at access container, and mm container for example. You can also examine navy's index and various components if using nvmcache."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Examine cache memory")),(0,r.mdx)("p",null,"There're several ways. You can examine access container or mm container, and navigate to a cachelib item from there. Or, you can start from the beginning of cache memory and examine slab headers, and then cachelib items one by one."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"// Look at the beginning of cache memory\n<cache ptr>->allocator_._M_t._M_t._M_head_impl->slabAllocator_.slabMemoryStart_\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Examine MMContainers")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-cpp"},"// Look at cacheAllocator_->mmContainers_[0][64]\np this->mmContainers_._M_elems[0]._M_elems[64]._M_t._M_t._M_head_imp\n// Look at the tail of LRU.\np (this->mmContainers_._M_elems[0]._M_elems[64]._M_t._M_t._M_head_imp->lru_.lists_.M_impl._M_start+2->_M_t._M_t._M_head_impl.tail_\n")))}d.isMDXComponent=!0}}]);