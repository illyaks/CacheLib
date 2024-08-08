"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[3791],{3905:function(e,a,t){t.r(a),t.d(a,{MDXContext:function(){return c},MDXProvider:function(){return d},mdx:function(){return b},useMDXComponents:function(){return h},withMDXComponents:function(){return m}});var o=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,i=function(e,a){if(null==e)return{};var t,o,i={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),m=function(e){return function(a){var t=h(a.components);return o.createElement(e,n({},a,{components:t}))}},h=function(e){var a=o.useContext(c),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},d=function(e){var a=h(e.components);return o.createElement(c.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=h(t),d=i,p=m["".concat(l,".").concat(d)]||m[d]||u[d]||n;return t?o.createElement(p,r(r({ref:a},c),{},{components:t})):o.createElement(p,r({ref:a},c))}));function b(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=p;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var c=2;c<n;c++)l[c]=t[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},62554:function(e,a,t){t.r(a),t.d(a,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return r},metadata:function(){return c},toc:function(){return h}});var o=t(83117),i=t(80102),n=(t(67294),t(3905)),l=["components"],r={id:"monitoring",title:"Monitoring cache health"},s=void 0,c={unversionedId:"facebook/Cache_Monitoring/monitoring",id:"facebook/Cache_Monitoring/monitoring",title:"Monitoring cache health",description:"Cachelib offers both ODS and Scuba monitoring for your cache health. To enable monitoring, see Add monitoring for cache. In Scuba and ODS, you can find such information as hit rate, rate of allocations, eviction age, fragmentation, etc. This comprehensive set of metrics helps you to know how well your cache is performing or to debug issues related to your cachelib usage.",source:"@site/docs/facebook/Cache_Monitoring/monitoring.md",sourceDirName:"facebook/Cache_Monitoring",slug:"/facebook/Cache_Monitoring/monitoring",permalink:"/docs/facebook/Cache_Monitoring/monitoring",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/facebook/Cache_Monitoring/monitoring.md",tags:[],version:"current",frontMatter:{id:"monitoring",title:"Monitoring cache health"}},m={},h=[{value:"CacheLib Monitoring Dashboards",id:"cachelib-monitoring-dashboards",level:2},{value:"ODS",id:"ods",level:2},{value:"Scuba",id:"scuba",level:2},{value:"Cachelib Admin pool stats",id:"cachelib-admin-pool-stats",level:3},{value:"Cachelib Admin Ac Stats",id:"cachelib-admin-ac-stats",level:3},{value:"Cachelib Admin Items stats",id:"cachelib-admin-items-stats",level:3},{value:"Misc Scuba Tables for Debugging",id:"misc-scuba-tables-for-debugging",level:2},{value:"Cachelib Logs",id:"cachelib-logs",level:3},{value:"Cachelib Admin Metadata",id:"cachelib-admin-metadata",level:3},{value:"Cachelib Admin allocator config",id:"cachelib-admin-allocator-config",level:3}],d={toc:h};function u(e){var a=e.components,t=(0,i.Z)(e,l);return(0,n.mdx)("wrapper",(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.mdx)("p",null,"Cachelib offers both ODS and Scuba monitoring for your cache health. To enable monitoring, see ",(0,n.mdx)("a",{parentName:"p",href:"Add_monitoring_for_cache"},"Add monitoring for cache"),". In Scuba and ODS, you can find such information as hit rate, rate of allocations, eviction age, fragmentation, etc. This comprehensive set of metrics helps you to know how well your cache is performing or to debug issues related to your cachelib usage."),(0,n.mdx)("h2",{id:"cachelib-monitoring-dashboards"},"CacheLib Monitoring Dashboards"),(0,n.mdx)("p",null,"In addition to building your own dashboard (and adding alarms), you can also use Cachelib's dashboards for high level metrics on how your cache is doing. We offer two dashboards:"),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},(0,n.mdx)("a",{parentName:"strong",href:"https://fburl.com/unidash/ehpb743v"},"Main")," - Most of the relevant cachelib metrics for our users")),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},(0,n.mdx)("a",{parentName:"strong",href:"https://fburl.com/unidash/5l3bbo4u"},"Allocation Class")," - Deeper dive into cachelib's ram cache behavior split by allocation classes"))),(0,n.mdx)("p",null,"Please contact our oncall if you have a feature request or any ideas to improve these dashboards further."),(0,n.mdx)("h2",{id:"ods"},"ODS"),(0,n.mdx)("p",null,"Cachelib publishes ODS stats via ",(0,n.mdx)("em",{parentName:"p"},"service data")," (which exports to the fb303 port). If you already use Thrift, you should already get the fb303 port free. Otherwise, you need to open a fb303 port in your service. For cachelib stats to show up on ODS, you must set up a monitoring config that registers cachelib\u2019s stats. For example, ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/diffusion/tk55n07s"},"see Feed Leaf's fb303 monitoring"),". Essentially you just need to add the following to your configerator config:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'import cache.cachelib.cachelib.mon.cinc as cachelib\ncachelib.add_cachelib_collector(cfg, "cachelib_fb303", <OPTIONAL: YOUR_FB303_PORT>)\n')),(0,n.mdx)("p",null,"Cachelib ODS stats start with the prefix ",(0,n.mdx)("inlineCode",{parentName:"p"},"cachelib.<your_cache_name>"),". Many cachelib stats comes in the accumulative form. For example, ",(0,n.mdx)("inlineCode",{parentName:"p"},"cachelib.<your_cache_name>.items.total")," is the accumulative number of items in cache since your service has started. Other stats are offered in rate variants (for example, ",(0,n.mdx)("inlineCode",{parentName:"p"},"cachelib.<your_cache_name>.cache.alloc_attempts.60"),"). If you think certain stats should be exported but are missing, reach out cachelib oncall for assistance."),(0,n.mdx)("p",null,"The status is also broken down by pools. For example on DRAM cache size:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},"cachelib.<cache-name>.mem.size\ncachelib.<cache-name>.mem.usable_size\ncachelib.<cache-name>.mem.advised_size\n")),(0,n.mdx)("p",null,"To obtain break-down of advised memory per pool:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},"cachelib.<cache-name>.<pool-name>.size\ncachelib.<cache-name>.<pool-name>.usable_size\ncachelib.<cache-name>.<pool-name>.advised_size\n")),(0,n.mdx)("p",null,"Use our ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/unidash/7uqai4oc"},"ODS dashboard")," to check key stats (you need to select the cacheName and enter the entity). For a complete list of cachelib ODS stats, see ",(0,n.mdx)("a",{parentName:"p",href:"https://docs.google.com/spreadsheets/d/1udXP8uavr3wFjOhRoU9Eb_FI5IS8FDrPkz_O9LwNz0k/edit?usp=sharing"},"this sheet")," and the ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/code/84oidxl8"},"code pointer")," that generate all cachelib ODS stats."),(0,n.mdx)("h2",{id:"scuba"},"Scuba"),(0,n.mdx)("p",null,"We have several Scuba tables, each servering a different purpose. They help you to triage different type of issues. We'll describe the three most relevant tables first, covering other tables in ",(0,n.mdx)("a",{parentName:"p",href:"https://www.internalfb.com/intern/wiki/Cache_Library_User_Guides/monitoring/#Misc_Scuba_tables_for_debugging"},"Misc_Scuba_tables_for_debugging"),". If you find any stat missing in this list of tables, contact us and we'll add them here. Note that all our counters, Scuba or ODS, are accumulative counters. They are not rate of change counters."),(0,n.mdx)("h3",{id:"cachelib-admin-pool-stats"},"Cachelib Admin pool stats"),(0,n.mdx)("p",null,"This dataset gives you high level information on how well your cache is doing. On a per-pool basis, you can find the following information: How many allocs are happening? How many items are there in my cache? How much fragmentation am I seeing? What's the rate of eviction? See the sample ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/scuba/nwhc6gb8"},"Cachelib Admin Pool Stats"),"."),(0,n.mdx)("p",null,"Note all stats applies to an individual memory pool. If you only have one pool, then this is basically the global cache stats. Otherwise, you need to sum the stats for each pool to get true global cache stats."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Active Allocs"),"\nNumber of outstanding allocations (items)."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Alloc Attempts"),"\nHow many times you have called the ",(0,n.mdx)("inlineCode",{parentName:"li"},"allocate()")," function for this pool."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Alloc Failures")," How many times of the above resulted in a failure. The cause is usually no free memory. A high rate of this indicates the rate of allocation is too much and evictions cannot keep up."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Evictable Items")," Number of evictable allocations (items). Please recall cachelib also lets you allocate non-evictable items. This number should be always be less than or equal to Active Allocs."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Unevictable Items")," We let you allocate permanent items (items that will never be evicted). This is the number of those. Beware that if this number is high (i.e., more than a few percent of the unevictable items), you may see performance impacts (suboptimal hit-rate and longer amount of time to rebalance your cache)."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Evictions")," Number of evictions since cache started."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Fragmentation Size")," How much fragmentation there is. If this figure is more than 10% of your total pool size, it means you should consider customizing your allocation sizes in this pool to fit your allocations better. We have had use cases where we cut their fragmentation down from 15% to 5%, effectively giving them 10% more memory for caching."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Free Allocs")," Number of allocations that are freed. Usually if you have not configured your cache with TTL or have logic that explicitly invalidates cached items, you should not see a high number for this stat."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Free Memory")," This is the total memory footprint from Free Allocs and Free Slabs."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Free Slabs")," This indicates how many slabs in your pool that are not being used. You're expected to see this number when your cache is still warming up. However, in steady state, you should expect 0 or (very close to 0) across your tier."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Invalid Allocs")," How many allocations were rejected because you requested for an invalid size; that is, the size requested is too big. We have a hard ceiling of 4 MB for the entire item, which means (4 MB - 31 bytes) for your key and value. Also you can lower this ceiling yourself (but not increase it)."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Items")," This is the same as Active Allocs. It's redundant."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Pool Get Hits")," How many hits there have been in this pool since the cache started. Unfortunately we're not able to give you a hit-rate because we do not know which pool the misses went. If you only have one pool, then divide this number by the total requests to cache to get the equivalent to hit rate."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Pool Size")," Configured size of this pool. This does not indicate how big this pool really is at this moment. It means how big this pool can grow to be. In general, in steady state, you should expect the total slabs stat to match this."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Total Slabs")," The number of slabs in this pool. Used and unused. This stat multiplied by 4MB should be equal to ",(0,n.mdx)("em",{parentName:"li"},"Pool Size")," in steady state."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Unallocated Slabs")," Number of slabs not yet allocated from the slab allocator. You're expected to see this number when your cache is still warming up. However, in steady state, you should expect 0 or (very close to 0) across your tier."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Min/Max Eviction Age")," This is the minimum and maximum eviction age for the allocation classes in this pool. Cachelib uses a slab allocator so different alloc sizes may have different eviction age. In general, this tells you that if you insert an item into this pool and never read it, how long you can expect this item to stay cached. It is a good approximate for retention time.")),(0,n.mdx)("h3",{id:"cachelib-admin-ac-stats"},"Cachelib Admin Ac Stats"),(0,n.mdx)("p",null,"This is similar to ",(0,n.mdx)("em",{parentName:"p"},"cachelib admin pool stats")," but a more in-depth view at each allocation class. Cachelib uses a slab allocator underneath, so we divide memory inside each pool into a set of allocation sizes. Each allocation size is an allocation class. This table gives you the following information: How many items are in this allocation size? How much fragmentation is there? Rate of eviction? How many free allocations are available? What is the eviction age? See the sample ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/scuba/1yhoxsuu"},"Cachelib Admin Ac Stats"),"."),(0,n.mdx)("p",null,"All the stats here applies to an individual allocation class. For example, your cache may be configured to have only two allocation sizes: 80 bytes and 1 MB. This means all your allocations will either be allocated from 80 bytes (if what you request via ",(0,n.mdx)("inlineCode",{parentName:"p"},"CacheAllocator::allocate()")," is less than or equal to 80 bytes) or 1 MB. Anything above 1 MB will result in an exception (reflected in the number of Invalid Allocs in Pool Stats). You will see two sets of AC stats for your pool. One refers to the 80-byte class and the other refers to the 1 MB class."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Active Allocs")," Same as Pool Stats but only for this allocation class."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Alloc Attempts")," Same as above."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Alloc Failures")," Same as above."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Alloc Size")," The allocation size for this class. This is the real allocation you get when you request for a size that is less than or equal to this allocation class's size. For example, if you have two AC's: 80 bytes and 100 bytes. And you request for 92 bytes. You will get an allocation that is actually 100 bytes and thus you have just incurred a fragmentation of 8 bytes."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Evictable Items")," Same as Pool Stats but only for this allocation class."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Eviction Age")," This is how long your item for this allocation class will be cached if you never access it again after insertion. Use this to get a sense of how long the cache retention time is for all of your objects that are of this allocation size."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Evictions")," Number of evictions in this allocation class since cache started up."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Fragmentation Size")," Total amount of fragmentation incurred in this allocation class."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Free Allocs")," Same as Pool stats but only apply for this allocation class."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Free Slabs")," Same as above."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Full")," This allocation class is full, which means it has zero free slab. Eviction is the only way to obtain new allocations."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Lru Refresh Time Evictable")," How often do we promote an item on read or write? This applies only to evictable items."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Lru Refresh Time Unevictable")," Same as above. Only applies to unevictable items."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Num Hits")," Number of cache hits that are from items in this allocation class."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Total Free Memory"),": The total available memory for allocations."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Total Used Bytes")," How many bytes are used for allocations (this includes all the fragmentation incurred by allocations)."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Unevictable Items")," Same as Pool Stats but only for this allocation class."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Used Slabs")," How many slabs are used currently by this allocation class.")),(0,n.mdx)("h3",{id:"cachelib-admin-items-stats"},"Cachelib Admin Items stats"),(0,n.mdx)("p",null,"This table  gives you information on individual items that can help you reason about the composition of the cache. The table is populated by picking a random item weighted by its size and uploading the  metadata for  this item. Overtime (several days to a few weeks), you can get a very good idea on what sort of items live in your cache. For example, if you're running a service like Memcache, you may be interested in finding out what are the top key families that consume most of your cache memory (items that start with the same key prefix is one key family). Some of the other stats we offer is how long this item has been around in cache and how much fragmentation was introduced by allocating this item. See the sample ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/scuba/pnxdevhe"},"Cachelib Admin Items Stats"),"."),(0,n.mdx)("p",null,"The following columns are available for sampled items."),(0,n.mdx)("ol",null,(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Item Age"),"   - time since the creation of the item."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Key Size")," - the size of the key for the item."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Value Size")," - the allocation size requested for the item in bytes."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Total Item Size")," - the size requested for key and the value and item metadata."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Alloc Size")," - the size class the item was allocated to."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Fragmenation Size")," - unused fragmentation size for the item."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Class Id")," - class id corresponding to the allocation."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Pool Id")," - pool id corresponding to the allocation."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Creation Time")," - time when the item was created."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Est Lifetime")," - the ttl which was used to allocate the item."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Ttl")," - time remaining from the sampling point to actual expiry of the item."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Expiry Time")," - time when the item"),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Is Chained Item")," - if the item is a  chained allocation that belongs to a chain of allocations."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Has Chained Item")," - if the item is the parent item and has chained allocations."),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Key")," - the key for the item in binary format"),(0,n.mdx)("li",{parentName:"ol"},(0,n.mdx)("strong",{parentName:"li"},"Hex Key")," - the key represented in hexadecimal format.")),(0,n.mdx)("blockquote",null,(0,n.mdx)("p",{parentName:"blockquote"},"\u2757 IMPORTANT:"),(0,n.mdx)("p",{parentName:"blockquote"},"The cachelib_admin_item_stats table contains senstive cache information in raw form (key/hex-key). Due to this, the access to the table is restricted to cachelib team. If this data would be useful to debugging for your team in a particular issue, you can request temporary access through the scuba workflow.")),(0,n.mdx)("h2",{id:"misc-scuba-tables-for-debugging"},"Misc Scuba Tables for Debugging"),(0,n.mdx)("h3",{id:"cachelib-logs"},"Cachelib Logs"),(0,n.mdx)("p",null,"This table has all the logs cachelib internally writes (at a sampled rate). This can be useful for debugging. For example, suppose you notice one day that cachelib's slab rebalancing is stuck on a few machines; you then filter for these hosts in this dataset, and you may find we're logging some items are stuck in moving, which could then indicate a deadlock in the ",(0,n.mdx)("inlineCode",{parentName:"p"},"movingSync")," you supplied to us or point to an internal cachelib bug. You look at this table only when things are not working as expected."),(0,n.mdx)("p",null,"Add the following to enable cachelib logging:"),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-cpp"},'// In your program\'s main.cpp:\nnamespace folly {\nconst char* getBaseLoggingConfig() {\n  facebook::cachelib::registerCachelibScubaLogger();\n  return CACHELIB_FOLLY_LOGGING_CONFIG;\n  // Alternatively, you can configure your own log levels.\n  //  return "cachelib=<LOG_LEVEL>"\n  //                 ":<LOG_HANDLER>"\n  //                 ";<LOG_HANDLER>=<NAME_OF_LOG_HANDLER>";\n  //  e.g., "cachelib=ERR:cachelib_scuba;cachelib_scuba=cachelib_scuba_logger"\n}\n} // namespace folly\n')),(0,n.mdx)("p",null,"To override the default folly logging level, pass in a command line option when starting your binary or set the option via Thrift fb303. Refer to the folly logging documentation for more information on log levels and categories."),(0,n.mdx)("pre",null,(0,n.mdx)("code",{parentName:"pre",className:"language-none"},'# Change log level on startup.\n# Changes the default logging level to "WARN". By default cachelib logs everything at INFO.\n<your_binary> --logging "WARN"\n\n# Change log level during runtime.\n# Changes cachelib logging level to "DBG". By default cachelib logs everything at INFO.\nbuck build common/fb303/scripts:fb303_logging_config\nbuck-out/gen/common/fb303/scripts/fb303_logging_config.par \\\n  --host <YOUR_HOST>:<YOUR_FB303_PORT> \\\n  --update \'cachelib:=DBG\'\n')),(0,n.mdx)("h3",{id:"cachelib-admin-metadata"},"Cachelib Admin Metadata"),(0,n.mdx)("p",null,"(",(0,n.mdx)("strong",{parentName:"p"},"Deprecated"),") This table has some basic information such as cache version, cache size, and cache name. When a service running cachelib first starts, it sends a sample to this table. In general, this is a good way to visualize what version every cachelib user is running on. It is ",(0,n.mdx)("strong",{parentName:"p"},"deprecated")," in favor of ",(0,n.mdx)("em",{parentName:"p"},"Cachelib Admin Allocator Config"),". See the sample ",(0,n.mdx)("a",{parentName:"p",href:"https://fburl.com/scuba/0daj3xn9"},"Cachelib Admin Metadata"),"."),(0,n.mdx)("h3",{id:"cachelib-admin-allocator-config"},"Cachelib Admin allocator config"),(0,n.mdx)("p",null,"This is intended to replace ",(0,n.mdx)("em",{parentName:"p"},"Cachelib Admin Metadata"),". It uploads everything the metadata table does and also uploads all the cache configurations. This will be very useful to check what config your service is running (when you're rolling out a new change for example or debugging an on-going issue). For example, you can find out which host has slab rebalancing enabled or how big the hash table is configured for a particular tier."))}u.isMDXComponent=!0}}]);