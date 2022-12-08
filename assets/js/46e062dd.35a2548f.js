"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[9047],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return s},MDXProvider:function(){return m},mdx:function(){return h},useMDXComponents:function(){return d},withMDXComponents:function(){return u}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){return function(n){var t=d(n.components);return r.createElement(e,i({},n,{components:t}))}},d=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},m=function(e){var n=d(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return t?r.createElement(f,l(l({ref:n},s),{},{components:t})):r.createElement(f,l({ref:n},s))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},73784:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var r=t(83117),a=t(80102),i=(t(67294),t(3905)),o=["components"],l={id:"understanding_nvm_latency",title:"Understanding Nvm Latency"},c=void 0,s={unversionedId:"facebook/Cache_Monitoring/understanding_nvm_latency",id:"facebook/Cache_Monitoring/understanding_nvm_latency",title:"Understanding Nvm Latency",description:"In this doc, we describe how to interpret the latency numbers in NVM operations.",source:"@site/docs/facebook/Cache_Monitoring/Understanding_Nvm_Latency.md",sourceDirName:"facebook/Cache_Monitoring",slug:"/facebook/Cache_Monitoring/understanding_nvm_latency",permalink:"/docs/facebook/Cache_Monitoring/understanding_nvm_latency",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/facebook/Cache_Monitoring/Understanding_Nvm_Latency.md",tags:[],version:"current",frontMatter:{id:"understanding_nvm_latency",title:"Understanding Nvm Latency"}},u={},d=[],m={toc:d};function p(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.mdx)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("p",null,"In this doc, we describe how to interpret the latency numbers in NVM operations."),(0,i.mdx)("p",null,"There are two types of latency stats exported to ODS."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Overall latency: ",(0,i.mdx)("inlineCode",{parentName:"li"},"nvm.lookup.latency_us"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"nvm.insert.latency_us"),". This latency counts everything related starting from the calling of nvmCache_->find/put to scheduling, reading/writing from device, and callbacks."),(0,i.mdx)("li",{parentName:"ul"},"Device latency: ",(0,i.mdx)("inlineCode",{parentName:"li"},"nvm.navy_device_write_latency_us"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},"nvm.navy_device_read_latency_us"),". This latency counts only the device operations (for example, ",(0,i.mdx)("inlineCode",{parentName:"li"},":pread"),", ",(0,i.mdx)("inlineCode",{parentName:"li"},":pwrite"),").")),(0,i.mdx)("p",null,"If the two latency is similar, it means the NVM operations are bottlenecked by the device. If the overall latency is not acceptable, you can consider standard approaches to reduce device latencies. This typically means reduce the number of IOs to the device. An example would be checking the alignment size to see if we are running more IOs than we should."),(0,i.mdx)("p",null,"If device latency is lower than overall latency by a large factor, it probably means a lot of time is spent in scheduling. We can then look at navy worker pool stats (take readers for example)."),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"All stats can be found at ",(0,i.mdx)("inlineCode",{parentName:"li"},"regex(.*reader_pool.*)")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"jobs_done.60")," is the number of jobs completed in the past 60 seconds."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"reschedules.60")," is the number of retries in the past 60 seconds."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"high_reschedule")," is the number of jobs completed that has been rescheduled more than 250 times since the process started."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"max_queue_len")," is the maximum size of queue in the past 60 seconds. (We have a number of queues configured by ",(0,i.mdx)("inlineCode",{parentName:"li"},"navyConfig.setReaderAndWriterThreads"),")"),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"pending_jobs")," is the sum of ",(0,i.mdx)("inlineCode",{parentName:"li"},"max_queue_len")," across all queues.")),(0,i.mdx)("p",null,"Below are some of the common situations:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"If ",(0,i.mdx)("inlineCode",{parentName:"li"},"max_queue_len")," is large, it means you are likely going to have a large p95+ because it takes a long wait time in one of the queues."),(0,i.mdx)("li",{parentName:"ul"},"If ",(0,i.mdx)("inlineCode",{parentName:"li"},"pending_jobs~=max_queue_len*num_reader_threads"),", it means all queues are equally busy, which is most likely the case because tasks are assigned by round-robin. In this case, increasing the number of readers would help."),(0,i.mdx)("li",{parentName:"ul"},"If ",(0,i.mdx)("inlineCode",{parentName:"li"},"reschedules.60")," is high, it means there are lots of retries. You can then look into the possible reasons for retries, such as concurrent inserts.")))}p.isMDXComponent=!0}}]);