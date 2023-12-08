"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[9780],{3905:function(e,i,n){n.r(i),n.d(i,{MDXContext:function(){return s},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return m},withMDXComponents:function(){return c}});var t=n(67294);function a(e,i,n){return i in e?Object.defineProperty(e,i,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[i]=n,e}function r(){return r=Object.assign||function(e){for(var i=1;i<arguments.length;i++){var n=arguments[i];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},r.apply(this,arguments)}function o(e,i){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?o(Object(n),!0).forEach((function(i){a(e,i,n[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(n,i))}))}return e}function d(e,i){if(null==e)return{};var n,t,a=function(e,i){if(null==e)return{};var n,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||(a[n]=e[n]);return a}(e,i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)n=r[t],i.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),c=function(e){return function(i){var n=m(i.components);return t.createElement(e,r({},i,{components:n}))}},m=function(e){var i=t.useContext(s),n=i;return e&&(n="function"==typeof e?e(i):l(l({},i),e)),n},p=function(e){var i=m(e.components);return t.createElement(s.Provider,{value:i},e.children)},h={inlineCode:"code",wrapper:function(e){var i=e.children;return t.createElement(t.Fragment,{},i)}},u=t.forwardRef((function(e,i){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),c=m(n),p=a,u=c["".concat(o,".").concat(p)]||c[p]||h[p]||r;return n?t.createElement(u,l(l({ref:i},s),{},{components:n})):t.createElement(u,l({ref:i},s))}));function f(e,i){var n=arguments,a=i&&i.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var d in i)hasOwnProperty.call(i,d)&&(l[d]=i[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},56694:function(e,i,n){n.r(i),n.d(i,{assets:function(){return c},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return m}});var t=n(83117),a=n(80102),r=(n(67294),n(3905)),o=["components"],l={id:"navy_overview",title:"Navy Overview"},d=void 0,s={unversionedId:"Cache_Library_Architecture_Guide/navy_overview",id:"Cache_Library_Architecture_Guide/navy_overview",title:"Navy Overview",description:"Navy is the SSD optimized cache engine leveraged for Hybrid Cache. Navy is plugged into cachelib via the nvmcache interface and turned on by NavyConfig.",source:"@site/docs/Cache_Library_Architecture_Guide/Navy_Overview.md",sourceDirName:"Cache_Library_Architecture_Guide",slug:"/Cache_Library_Architecture_Guide/navy_overview",permalink:"/docs/Cache_Library_Architecture_Guide/navy_overview",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_Architecture_Guide/Navy_Overview.md",tags:[],version:"current",frontMatter:{id:"navy_overview",title:"Navy Overview"},sidebar:"archguideSideBar",previous:{title:"Hybrid Cache",permalink:"/docs/Cache_Library_Architecture_Guide/hybrid_cache"},next:{title:"Small Object Cache",permalink:"/docs/Cache_Library_Architecture_Guide/small_object_cache"}},c={},m=[{value:"Features",id:"features",level:2},{value:"Design overview",id:"design-overview",level:2},{value:"Architecture overview",id:"architecture-overview",level:2},{value:"Engine Driver",id:"engine-driver",level:3},{value:"NVM Admission Policy",id:"nvm-admission-policy",level:4},{value:"Navy Admission Policy",id:"navy-admission-policy",level:4},{value:"Job Scheduler",id:"job-scheduler",level:3},{value:"OrderedThreadPoolScheduler (<em>to be deprecated</em>)",id:"orderedthreadpoolscheduler-to-be-deprecated",level:4},{value:"NavyRequestScheduler",id:"navyrequestscheduler",level:4},{value:"Engine",id:"engine",level:3},{value:"BigHash",id:"bighash",level:4},{value:"Block Cache",id:"block-cache",level:4},{value:"Device",id:"device",level:3},{value:"FileDevice",id:"filedevice",level:4}],p={toc:m};function h(e){var i=e.components,l=(0,a.Z)(e,o);return(0,r.mdx)("wrapper",(0,t.Z)({},p,l,{components:i,mdxType:"MDXLayout"}),(0,r.mdx)("p",null,"Navy is the SSD optimized cache engine leveraged for Hybrid Cache. Navy is plugged into cachelib via the ",(0,r.mdx)("inlineCode",{parentName:"p"},"nvmcache")," interface and turned on by ",(0,r.mdx)("a",{parentName:"p",href:"/docs/Cache_Library_User_Guides/Configure_HybridCache/"},"NavyConfig"),"."),(0,r.mdx)("h2",{id:"features"},"Features"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Manages terabytes of data"),(0,r.mdx)("li",{parentName:"ul"},"Efficiently supports both small (~100 bytes) and large (~10KBs to ~1 MBs) objects"),(0,r.mdx)("li",{parentName:"ul"},"Sync and async API (supports custom executors for async ops)"),(0,r.mdx)("li",{parentName:"ul"},"Cache persistence on safe shutdown"),(0,r.mdx)("li",{parentName:"ul"},"Comprehensive cache stats"),(0,r.mdx)("li",{parentName:"ul"},"Different admission policies to optimize write endurance, hit ratio, IOPS"),(0,r.mdx)("li",{parentName:"ul"},"Supports Direct IO and raw devices"),(0,r.mdx)("li",{parentName:"ul"},"Supports async IO with either ",(0,r.mdx)("a",{parentName:"li",href:"https://lwn.net/Articles/776703/"},"io_uring")," or libaio")),(0,r.mdx)("h2",{id:"design-overview"},"Design overview"),(0,r.mdx)("p",null,"There are three over-arching goals in the design of Navy"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},"efficient caching for billions of small (\\<1KB) and millions of large objects (1KB - 16MB)  on SSDs."),(0,r.mdx)("li",{parentName:"ol"},"read optimized point lookups"),(0,r.mdx)("li",{parentName:"ol"},"low DRAM overhead")),(0,r.mdx)("p",null,"Since Navy is designed for a cache, it chooses to sacrifice the durability of data when it enables the accomplishment of the goals above. Caches are effective by constantly churning through the items based on popularity, making them write intensive. Since ",(0,r.mdx)("strong",{parentName:"p"},"write-endurance")," is a constraint for NVM, the design of Navy optimizes for write-endurance as well."),(0,r.mdx)("h2",{id:"architecture-overview"},"Architecture overview"),(0,r.mdx)("p",null,"Below figure shows the main components of Navy engine."),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:n(42578).Z,width:"734",height:"846"})),(0,r.mdx)("h3",{id:"engine-driver"},"Engine Driver"),(0,r.mdx)("p",null,"The engine driver is a simple layer providing the NVM cache interface (i.e., ",(0,r.mdx)("inlineCode",{parentName:"p"},"AbstractCache"),") to DRAM cache."),(0,r.mdx)("p",null,"Other than that, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Driver")," is also responsible for performing admission control for insertion  and reinsertions (for BlockCache only). Specifically, the admission policy determines whether to accept items to NVM cache or not depending on different criteria or conditions in order to control the burn rate of the SSD or optimize the NVM cache usage for hit rate or overhead."),(0,r.mdx)("p",null,"There are two levels of admission policies employed; NVM admission policy and Navy admission policy."),(0,r.mdx)("h4",{id:"nvm-admission-policy"},"NVM Admission Policy"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/Cache_Library_User_Guides/Configure_HybridCache/#admission"},"NVM admission policy")," is mainly to optimize the NVM space usage (for, e.g., higher hit ratio) and the user can provide an arbitrary admission policy implementation."),(0,r.mdx)("h4",{id:"navy-admission-policy"},"Navy Admission Policy"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("a",{parentName:"p",href:"/docs/Cache_Library_User_Guides/Configure_HybridCache/#4-admission-policy-settings"},"Navy admission policy")," is more focused on controlling the burn rate of the SSD by rejecting items randomly for optimizing the endurance of SSD and IOPS. Currently, Navy implements the following Navy admission policy mechanisms that can be enabled:"),(0,r.mdx)("ol",null,(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"RejectRandomAP"),": Writes are probabilistically rejected based on a configured probabilty.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"This policy just rejects P% of inserts, picking victims randomly. This policy lets user to reduce the write rate (and so, increase flash lifetime)."))),(0,r.mdx)("li",{parentName:"ol"},(0,r.mdx)("inlineCode",{parentName:"li"},"DynamicRandomAP"),": Tracks the bytes written at device level and ensures the daily budget is under a specified write rate. This is done by doing probabilistic rejection where the rejection probability is updated every X seconds based on the bytes written so far and the budget available for the future. To support this, the bytes written from ",(0,r.mdx)("inlineCode",{parentName:"li"},"Device")," is plumbed into the admission policy.",(0,r.mdx)("ul",{parentName:"li"},(0,r.mdx)("li",{parentName:"ul"},"This is smart ",(0,r.mdx)("inlineCode",{parentName:"li"},"RejectRandomAP"),". User specifies maximum amount of data that can be written to the device per day. Policy monitors write traffic and as it grows beyond target (how much can be written up to this time of the day) it starts randomly reject inserts. It prefers to reject larger items to make hit ratio better. This behavior is tunable. It allows user ultimately control flash wear out.")))),(0,r.mdx)("p",null,"There are also several parameters that can affect whether the item will be rejected:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"MaxConcurrentInserts"),": writes are rejected once the number of the outstanding inserts including those queued for spooling reached the specified limit"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"MaxParcelMemory"),": Each insert job has a memory footprint associated. Writes are rejected once the total amount of memory footprint for all outstanding inserts has reached the limit")),(0,r.mdx)("h3",{id:"job-scheduler"},"Job Scheduler"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Driver")," enqueues the API request as a ",(0,r.mdx)("inlineCode",{parentName:"p"},"Job")," to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobScheduler"),". The jobs can be one of the following types; ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobType::Read")," for jobs corresponding to read APIs for Navy (i.e., lookups), ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobType::Write")," for jobs corresponding to write APIs for Navy (inserts and deletes). ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobScheduler")," is responsible for executing the jobs using its Navy threads."),(0,r.mdx)("p",null,"In order to avoid data races, the job scheduler makes sure at most one job is running for each key via spooling; i.e., the succeeding jobs for the same key are spooled in a queue until the preceding (outstanding) job has been completed. This is important given the async nature of the navy API. With this guarantee, callers can make assumptions about the concurrency of operations once enqueued to navy. This is relevant to using  optimistic concurrency by ",(0,r.mdx)("inlineCode",{parentName:"p"},"NvmCache")," implementation."),(0,r.mdx)("p",null,"For the time being, there are two types of the job scheduler provided; ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler"),". The difference is that ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler")," runs jobs to completions (including retries), while ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler")," schedules jobs fully asynchronously as ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/folly/blob/main/folly/fibers/README.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"Fiber"))," (i.e., lightweight application thread) to ",(0,r.mdx)("inlineCode",{parentName:"p"},"FiberManager"),". Since ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler")," is more lightweight and scalable, ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler")," will soon be deprecated."),(0,r.mdx)("h4",{id:"orderedthreadpoolscheduler-to-be-deprecated"},"OrderedThreadPoolScheduler (",(0,r.mdx)("em",{parentName:"h4"},"to be deprecated"),")"),(0,r.mdx)("p",null,"To order the jobs, ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler")," shards the jobs based on its key into one of several fine grained shards (millions). There can be only one job executed for a given request ordering shard at any given time, and if there is already one being executed, the rest are queued up in a pending job queue. Once the ordering condition is met, Jobs are sharded to be enqueued into one of several ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobQueue"),"."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler")," has two executor thread pools (read and write) and Jobs are sharded by key to the appropriate thread pools. Except ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobType::Read")," all other jobs are executed by the writer pool. Each  thread in the pool has a corresponding ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobQueue")," and a dedicated thread associate with processing its jobs."),(0,r.mdx)("p",null,"Jobs are processed in FIFO manner and always run to completion, meaning any blocking of a job execution (e.g., for device IO) will block the whole thread until being unblocked."),(0,r.mdx)("p",null,"Jobs can also be retried based on their exit status returned from the implementation. For example, when performing an insert, the job returns to scheduler with returning RETRY if there is no space left for insertion, so that the scheduler can invoke it again later for retry. Jobs are always enqueued to the back of their queue for retry.\n",(0,r.mdx)("img",{src:n(98058).Z,width:"1770",height:"1518"})),(0,r.mdx)("h4",{id:"navyrequestscheduler"},"NavyRequestScheduler"),(0,r.mdx)("p",null,"To order the jobs, ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler")," also uses the same mechanism as ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler"),". I.e., ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler")," shards the jobs based on its key into one of several fine grained shards (millions) and make sure only one job is outstanding by spooling jobs on the shard-specific pending queue."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler")," also has two executor thread pools (read and write) and Jobs are sharded by key to the appropriate thread pools. Except ",(0,r.mdx)("inlineCode",{parentName:"p"},"JobType::Read")," all other jobs (i.e., insert and delete) are executed by the writer pool."),(0,r.mdx)("p",null,"However, unlike ",(0,r.mdx)("inlineCode",{parentName:"p"},"OrderedThreadPoolScheduler"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"NavyRequestScheduler")," schedules jobs simply submitting the job as a fiber to the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/folly/blob/main/folly/fibers/README.md"},(0,r.mdx)("inlineCode",{parentName:"a"},"FiberManager"))," that are driven by the Navy worker thread. The jobs are dispatched to workers in the pool in round-robin manner."),(0,r.mdx)("p",null,"Since the jobs are running as a fiber, the job is simply descheduled on blocking for mutex (",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/folly/blob/main/folly/fibers/TimedMutex.h"},"TimedMutex")," which is fiber compatible) and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FiberManager")," schedules the next fiber in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"FiberManager")," queue. Note that this needs to be paired with appropriate async IO engines at ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," layer to run the Navy jobs fully async. Below figure shows the queuing architecture of async navy and io operation using ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/folly/blob/main/folly/experimental/io/IoUring.h"},"IoUring"),"."),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:n(86627).Z,width:"1710",height:"534"})),(0,r.mdx)("h3",{id:"engine"},"Engine"),(0,r.mdx)("p",null,"The engine is the core of Navy and implements actual NVM caching algorithms. In order to support wide range of item sizes, Navy provides two types of engines (i.e., ",(0,r.mdx)("inlineCode",{parentName:"p"},"BigHash")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"BlockCache"),") which are paired as ",(0,r.mdx)("inlineCode",{parentName:"p"},"EnginePair"),". The user can configure multiple ",(0,r.mdx)("inlineCode",{parentName:"p"},"EnginePair"),"s on a same ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," for space isolation purposes, where ",(0,r.mdx)("inlineCode",{parentName:"p"},"EnginePair")," serves as analogous to the pool for DRAM cache. The user can provide the engine pair selector to decide which ",(0,r.mdx)("inlineCode",{parentName:"p"},"EnginePair")," to be used for given item."),(0,r.mdx)("p",null,(0,r.mdx)("img",{src:n(94633).Z,width:"1040",height:"688"})),(0,r.mdx)("p",null,"BigHash is an engine to store small items (less than device block size). Block Cache (BC) is an engine to store large items (about or greater than device block size). Engines operate independently. The user can set the maximum item size for BigHash which is then used to determine which engine to use to insert items."),(0,r.mdx)("p",null,"This implies that items can be cached in either the small or the large item engine depending on their size. While, size is known during insert, lookups and deletes don't, and hence must check both engines before concluding. Specifically, for lookup, driver performs the lookup in the Large Item engine first and upon a miss, it performs the another lookup on the small item engine. For delete, driver performs the delete to both the small and large item engines."),(0,r.mdx)("p",null,"Besides this, there are no high level locks per key to synchronize concurrent operations across both the engines."),(0,r.mdx)("h4",{id:"bighash"},"BigHash"),(0,r.mdx)("p",null,"BigHash is effectively a giant fixed-bucket hash map on the device. To read or write, the entire bucket is read (in case of write, updated and written back). Bloom filter used to reduce number of IO. When bucket is full, items evicted in FIFO manner. You don't pay any RAM price here (except Bloom filter, which is 2GB for 1TB BigHash, tunable)."),(0,r.mdx)("p",null,"Read more in ",(0,r.mdx)("a",{parentName:"p",href:"small_object_cache"},"Small Object Cache")),(0,r.mdx)("h4",{id:"block-cache"},"Block Cache"),(0,r.mdx)("p",null,"On the other hand, BlockCache divides device into equally sized regions (16MB, tunable) and fills a region with items of arbitrary sizes in append only manner."),(0,r.mdx)("p",null,"BlockCache stores compact index in memory: key hash to offset. We do not store full key in memory and if collision happens (super rare), old item will look like evicted. In your calculations, use 12 bytes overhead per item to estimate RAM usage. For example, if your average item size is 4KB and cache size is 500GB you'll need around 1.4GB of memory."),(0,r.mdx)("p",null,"Since BlockCache stores insert data in append manner to the active regions, it requires to perform the reclaim (a.k.a. garbage collection), which basically select a region and reinsert or evict still valid items. The reclaims are performed by one or more of dedicated threads called ",(0,r.mdx)("inlineCode",{parentName:"p"},"region_manager")," threads when the number of reserved clean regions go below the threshold (e.g., 10). Usually, one ",(0,r.mdx)("inlineCode",{parentName:"p"},"region_manager")," should be enough for most of the use cases, but need to be increased if needed."),(0,r.mdx)("p",null,"Read more in ",(0,r.mdx)("a",{parentName:"p",href:"large_object_cache"},"Large Object Cache")),(0,r.mdx)("h3",{id:"device"},"Device"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," is an abstraction of the backing NVM cache storage and provides APIs to read and write data onto the backing storage."),(0,r.mdx)("p",null,"All IO operations within Navy happen over a range of block offsets. ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," provides a virtual interface for reads and writes into these offsets. Underneath, the Device could be either a ",(0,r.mdx)("inlineCode",{parentName:"p"},"FileDevice")," implementation over one or more regular or raw block device files or an ",(0,r.mdx)("inlineCode",{parentName:"p"},"InMemoryDevice")," using a malloc-ed buffer (for testing). ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," aligns all reads  from its calles to ",(0,r.mdx)("inlineCode",{parentName:"p"},"ioalignSize")," that is used to configured the ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," and trims any extra data that is read.  ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," also handles opaque functionality like encryption, chunking, latency measurements for reading and writing while delegating the actual reads or writes to underlying implementation."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Encryption"),": ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," can be initialized with a ",(0,r.mdx)("inlineCode",{parentName:"p"},"DeviceEncrytor")," to support block level encryption. All reads and writes pass through the encryption layer and is done at the granularity of encryption block size. Usually the block size for encryption is as small as 4KB. The IO alignment for reads and writes must match the block size used for encryption."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Chunking"),":  Large writes (MBs) can cause head of line blocking for reads on SSDs. To avoid the negative impact on the tail latency for reads, ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," can be configured to break up writes into chunks and issue them sequentially. While this can increase the latency for writes, read latency can be improved. Reads are not broken into chunks."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"LatencyTracking"),": Device also tracks the overall latency for reads and writes in a uniform way across all implementations of Device."),(0,r.mdx)("h4",{id:"filedevice"},"FileDevice"),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"FileDevice")," implements ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device")," over one or more regular or block device files. When multiple regular or block devices are used, ",(0,r.mdx)("inlineCode",{parentName:"p"},"FileDevice")," operates like a software RAID-0 where a single IO can be splitted into multiple IOs in the unit of fixed ",(0,r.mdx)("inlineCode",{parentName:"p"},"stripe")," size.  Note, this striping is orthogonal to the chunking that happens with ",(0,r.mdx)("inlineCode",{parentName:"p"},"Device"),". Usually, the stripe size is set to the size of a Navy region(16-64MB)."),(0,r.mdx)("p",null,"For actual IO operations, ",(0,r.mdx)("inlineCode",{parentName:"p"},"FileDevice")," supports both sync and async operations. For async operations, ",(0,r.mdx)("inlineCode",{parentName:"p"},"FileDevice")," supports ",(0,r.mdx)("a",{parentName:"p",href:"https://lwn.net/Articles/776703/"},(0,r.mdx)("inlineCode",{parentName:"a"},"io_uring"))," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"libaio")," which are supported by ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/facebook/folly"},"folly")," as ",(0,r.mdx)("inlineCode",{parentName:"p"},"folly::IoUring")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"folly::AsyncIO"),", respectively."))}h.isMDXComponent=!0},98058:function(e,i,n){i.Z=n.p+"assets/images/Job_Scheduler-445b781038884832fe0396958a9a7f20.png"},42578:function(e,i,n){i.Z=n.p+"assets/images/navy_architecture-04f7e32f458b3c4cc0e9c708226bc448.png"},86627:function(e,i,n){i.Z=n.p+"assets/images/navy_async_io-1b23df02a16d8f40eaeddc0f6cd3a639.png"},94633:function(e,i,n){i.Z=n.p+"assets/images/navy_engine_pair-bf1f56910441a2b674b2139c499f2b30.png"}}]);