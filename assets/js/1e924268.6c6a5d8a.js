"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[8614],{3905:function(e,n,i){i.r(n),i.d(n,{MDXContext:function(){return d},MDXProvider:function(){return u},mdx:function(){return h},useMDXComponents:function(){return p},withMDXComponents:function(){return c}});var t=i(67294);function a(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var i=arguments[n];for(var t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e},l.apply(this,arguments)}function o(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,t)}return i}function r(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?o(Object(i),!0).forEach((function(n){a(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function s(e,n){if(null==e)return{};var i,t,a=function(e,n){if(null==e)return{};var i,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||(a[i]=e[i]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)i=l[t],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=t.createContext({}),c=function(e){return function(n){var i=p(n.components);return t.createElement(e,l({},n,{components:i}))}},p=function(e){var n=t.useContext(d),i=n;return e&&(i="function"==typeof e?e(n):r(r({},n),e)),i},u=function(e){var n=p(e.components);return t.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var i=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(i),u=a,b=c["".concat(o,".").concat(u)]||c[u]||m[u]||l;return i?t.createElement(b,r(r({ref:n},d),{},{components:i})):t.createElement(b,r({ref:n},d))}));function h(e,n){var i=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=i.length,o=new Array(l);o[0]=b;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:a,o[1]=r;for(var d=2;d<l;d++)o[d]=i[d];return t.createElement.apply(null,o)}return t.createElement.apply(null,i)}b.displayName="MDXCreateElement"},94686:function(e,n,i){i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return p}});var t=i(83117),a=i(80102),l=(i(67294),i(3905)),o=["components"],r={title:"Installation",id:"installation"},s="Building CacheLib",d={unversionedId:"installation/installation",id:"installation/installation",title:"Installation",description:"Dependencies",source:"@site/docs/installation/installation.md",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/installation/",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/installation/installation.md",tags:[],version:"current",frontMatter:{title:"Installation",id:"installation"},sidebar:"installationSidebar",next:{title:"Testing",permalink:"/docs/installation/testing"}},c={},p=[{value:"Dependencies",id:"dependencies",level:2},{value:"Build Script",id:"build-script",level:2},{value:"Build Process Details",id:"build-process-details",level:2},{value:"Step 1 - System packages",id:"step-1---system-packages",level:4},{value:"Step 2 - Update Git-Submodules",id:"step-2---update-git-submodules",level:4},{value:"Step 3 - Build libraries from source code",id:"step-3---build-libraries-from-source-code",level:4},{value:"Step 4 - Build CacheLib",id:"step-4---build-cachelib",level:4},{value:"Step 5 - Test run",id:"step-5---test-run",level:4},{value:"Development Cycle",id:"development-cycle",level:2},{value:"Updating to latest source code version",id:"updating-to-latest-source-code-version",level:2},{value:"Downloading the source code without building",id:"downloading-the-source-code-without-building",level:2}],u={toc:p};function m(e){var n=e.components,i=(0,a.Z)(e,o);return(0,l.mdx)("wrapper",(0,t.Z)({},u,i,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"building-cachelib"},"Building CacheLib"),(0,l.mdx)("h2",{id:"dependencies"},"Dependencies"),(0,l.mdx)("p",null,"CacheLib depends on multiple libraries and programs.\nSome are available as system packages, and others need\nto be build from source."),(0,l.mdx)("p",null,"The primary dependecies are:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"a C++17 compiler (tested with GCC, CLANG)"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://cmake.org/"},"CMake")),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebook/folly"},"folly")," - Facebook's Open Source library"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebook/fbthrift"},"FBThrift")," - Facebook Thrift")),(0,l.mdx)("p",null,"These dependencies further require multiple libraries:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebookincubator/fizz"},"fizz")," - Facebook's TLS 1.3 implementation"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/facebook/wangle"},"wangle")," - C++ Networking Library"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/google/glog"},"glog")," - Google Log Library"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/gflags/gflags"},"gflags")," - Google Command-line flags Library"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/google/googletest.git"},"googletest")," - Google Testing Framework"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/fmtlib/fmt.git"},"fmt")," - open-source formatting library"),(0,l.mdx)("li",{parentName:"ul"},(0,l.mdx)("a",{parentName:"li",href:"https://github.com/Tessil/sparse-map.git"},"sparse-map")," - memory efficient hash map and hash set"),(0,l.mdx)("li",{parentName:"ul"},"And many more libraries, commonly available as installable packages, e.g:\n",(0,l.mdx)("inlineCode",{parentName:"li"},"boost"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"libevent"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"lz4"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"snappy"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"zlib"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"ssl"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"libunwind"),", ",(0,l.mdx)("inlineCode",{parentName:"li"},"libsodium"))),(0,l.mdx)("p",null,"Currently, some dependencies can be easily installed using the system's\npackage manager (e.g. ",(0,l.mdx)("inlineCode",{parentName:"p"},"dnf"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"yum"),"/",(0,l.mdx)("inlineCode",{parentName:"p"},"apt"),"), while others need to be rebuild\nfrom source code."),(0,l.mdx)("h2",{id:"build-script"},"Build Script"),(0,l.mdx)("p",null,"CacheLib provides a build script which prepares and installs all\ndependencies and prerequisites, then builds CacheLib.\nThe build script has been tested to work on CentOS 8,\nUbuntu 18.04, 20.04, and Debian 10, 11."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/facebook/CacheLib\ncd CacheLib\n./contrib/build.sh -j -T\n\n# The resulting library and executables:\n./opt/cachelib/bin/cachebench --help\n")),(0,l.mdx)("p",null,"Re-running ",(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/build.sh")," will update CacheLib and its dependencies\nto their latest versions and rebuild them."),(0,l.mdx)("p",null,"The build script supports the following options:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build.sh -h\nCacheLib dependencies builder\n\nusage: build.sh [-BdhijOStv]\n\noptions:\n  -B    skip build - just download packages and git source                                          \n  -d    build with DEBUG configuration\n        (default is RELEASE with debug information)\n  -h    This help screen\n  -j    build using all available CPUs ('make -j')\n        (default is to use single CPU)\n  -O    skip OS package installation (apt/yum/dnf)\n  -S    skip git-clone/git-pull step\n  -t    build tests\n        (default is to skip tests if supported by the package)\n  -T    build only CacheLib tests\n  -v    verbose build\n")),(0,l.mdx)("h2",{id:"build-process-details"},"Build Process Details"),(0,l.mdx)("p",null,"The build process involves the following steps.\nThese steps can be run manually for troubleshooting and/or\nadapting the build to a new system. The wrapper script ",(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/build.sh"),"\nperforms them one by one:"),(0,l.mdx)("h4",{id:"step-1---system-packages"},"Step 1 - System packages"),(0,l.mdx)("p",null,"Installs the suitable tools and packages for the operating\nsystem flavor and version (e.g. Debian 10).\nThis step requires ",(0,l.mdx)("inlineCode",{parentName:"p"},"sudo"),", and uses one of the following scripts:\n",(0,l.mdx)("inlineCode",{parentName:"p"},"contrib/prerequisites-centos8.sh"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"contrib/prerequisites-debian10.sh"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"contrib/prerequisites-ubuntu18.sh"),"."),(0,l.mdx)("p",null,"For Debian/Ubuntu it is a simple matter of running ",(0,l.mdx)("inlineCode",{parentName:"p"},"apt-get")," with\na known list of packages. For CentOS, the script first adds\nthe ",(0,l.mdx)("inlineCode",{parentName:"p"},"Power Tools")," repository (required for some of the packages)."),(0,l.mdx)("p",null,"It is safe to re-run these scripts - if the required packages are\nalready installed, the script will terminate quickly."),(0,l.mdx)("h4",{id:"step-2---update-git-submodules"},"Step 2 - Update Git-Submodules"),(0,l.mdx)("p",null,"The CacheLib project includes several library as git-submodules\n(folly,fbthrift,wangle,fizz).\nDue to the way internal facebook projects are\nconverted to git and exported to github, the updating process\nis slightly more complicated than a simple ",(0,l.mdx)("inlineCode",{parentName:"p"},"git submodule update"),"."),(0,l.mdx)("p",null,"The script ",(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/update-submodules.sh")," performs the required steps\nto synchronize the required git revisions."),(0,l.mdx)("p",null,"It is safe to re-run the ",(0,l.mdx)("inlineCode",{parentName:"p"},"update-submodules.sh")," script - it will simply\npull the latest changes (if any)."),(0,l.mdx)("h4",{id:"step-3---build-libraries-from-source-code"},"Step 3 - Build libraries from source code"),(0,l.mdx)("p",null,"Downloads the latest source code version of the following libraries,\nbuilds and installs them (using ",(0,l.mdx)("inlineCode",{parentName:"p"},"sudo"),"):\n",(0,l.mdx)("inlineCode",{parentName:"p"},"googleflags"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"googlelog"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"sparsemap"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"fmt"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"folly"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"fizz"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"wangle"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"fbthrift"),"."),(0,l.mdx)("p",null,"In some cases the operating system has a pre-packaged version of some\nof these libraries, but they are too old. In these cases the library\nis rebuilt from source code."),(0,l.mdx)("p",null,"Building each library is performed using the following script:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build-package.sh -h\nCacheLib dependencies builder\n\nusage: build-package.sh [-BdhijStv] NAME\n\noptions:\n  -B    skip build step\n        (default is to build with cmake & make)\n  -d    build with DEBUG configuration\n        (default is RELEASE with debug information)\n  -h    This help screen\n  -i    install after build using 'sudo make install'\n        (default is to build but not install)\n  -j    build using all available CPUs ('make -j')\n        (default is to use single CPU)\n  -S    skip git-clone/git-pull step\n        (default is to get the latest source)\n  -t    build tests\n        (default is to skip tests if supported by the package)\n  -v    verbose build\n\nNAME: the dependency to build supported values are:\n  googlelog, googleflags, googletest,\n  fmt, sparsemap,\n  folly, fizz, wangle, fbthrift,\n  cachelib\n")),(0,l.mdx)("p",null,"All the required packages use ",(0,l.mdx)("inlineCode",{parentName:"p"},"cmake"),", and will be built in a new subdirectory\nnamed ",(0,l.mdx)("inlineCode",{parentName:"p"},"build-[PACKAGE]")," (e.g. running ",(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/build-package.sh fmt")," will\ncreate the ",(0,l.mdx)("inlineCode",{parentName:"p"},"build-fmt")," subdirectory)."),(0,l.mdx)("p",null,"Example:\nRunning the command ",(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/build-package.sh -i -j -d -t fmt"),"\nis equivalent to the following commands:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"cd cachelib/external\ngit clone https://github.com/fmtlib/fmt.git\ncd ../..\nmkdir build-fmt\ncmake ../cachelib/external/fmt -DCMAKE_BUILD_TYPE=Debug\nmake -j\nsudo make install\n")),(0,l.mdx)("h4",{id:"step-4---build-cachelib"},"Step 4 - Build CacheLib"),(0,l.mdx)("p",null,"Building CacheLib is identical to installing packages (above),"),(0,l.mdx)("p",null,"To build cachelib, run:"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/build-package.sh -j -i -d -v -t cachelib")),(0,l.mdx)("p",null,"All files will be installed in a local subdirectory ",(0,l.mdx)("inlineCode",{parentName:"p"},"./opt/cachelib"),":"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Executables in ",(0,l.mdx)("inlineCode",{parentName:"li"},"./opt/cachelib/bin")," (",(0,l.mdx)("inlineCode",{parentName:"li"},"cachebench")," is available here)"),(0,l.mdx)("li",{parentName:"ul"},"Library files in ",(0,l.mdx)("inlineCode",{parentName:"li"},"./opt/cachelib/lib")," and ",(0,l.mdx)("inlineCode",{parentName:"li"},"./opt/cachelib/lib64")),(0,l.mdx)("li",{parentName:"ul"},"Header files in ",(0,l.mdx)("inlineCode",{parentName:"li"},"./opt/cachelib/include")),(0,l.mdx)("li",{parentName:"ul"},"Sample test configurations in ",(0,l.mdx)("inlineCode",{parentName:"li"},"./opt/cachelib/test_configs"))),(0,l.mdx)("h4",{id:"step-5---test-run"},"Step 5 - Test run"),(0,l.mdx)("p",null,"Example of using the ",(0,l.mdx)("inlineCode",{parentName:"p"},"cachebench")," binary:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/facebook/CacheLib\n$ cd CacheLib\n$ ./contrib/build.sh -j -T\n$ cd ./opt/cachelib\n$ ./bin/cachebench --help\n$ ./bin/cachebench --json_test_config test_configs/simple_test.json\n")),(0,l.mdx)("details",null,(0,l.mdx)("summary",null,"Expected Output of test run"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'$ git clone https://github.com/facebook/CacheLib\n$ cd CacheLib\n$ ./contrib/build.sh -j -T\n$ cd ./opt/cachelib\n$ ./bin/cachebench --json_test_config ./test_configs/simple_test.json\n===JSON Config===\n// @nolint instantiates a small cache and runs a quick run of basic operations.\n{\n  "cache_config" : {\n    "cacheSizeMB" : 512,\n    "poolRebalanceIntervalSec" : 1,\n    "moveOnSlabRelease" : false,\n\n    "numPools" : 2,\n    "poolSizes" : [0.3, 0.7]\n  },\n  "test_config" : {\n\n      "numOps" : 100000,\n      "numThreads" : 32,\n      "numKeys" : 1000000,\n\n      "keySizeRange" : [1, 8, 64],\n      "keySizeRangeProbability" : [0.3, 0.7],\n\n      "valSizeRange" : [1, 32, 10240, 409200],\n      "valSizeRangeProbability" : [0.1, 0.2, 0.7],\n\n      "getRatio" : 0.15,\n      "setRatio" : 0.8,\n      "delRatio" : 0.05,\n      "keyPoolDistribution": [0.4, 0.6],\n      "opPoolDistribution" : [0.5, 0.5]\n    }\n}\n\nWelcome to OSS version of cachebench\nCreated 897,355 keys in 0.00 mins\nGenerating 1.60M sampled accesses\nGenerating 1.60M sampled accesses\nGenerated access patterns in 0.00 mins\nTotal 3.20M ops to be run\n12:07:12       0.00M ops completed\n== Test Results ==\n== Allocator Stats ==\nItems in RAM  : 96,995\nItems in NVM  : 0\nAlloc Attempts: 2,559,176 Success: 100.00%\nRAM Evictions : 2,163,672\nCache Gets    : 480,592\nHit Ratio     :  10.97%\nNVM Gets      :               0, Coalesced : 100.00%\nNVM Puts      :               0, Success   :   0.00%, Clean   : 100.00%, AbortsFromDel   :        0, AbortsFromGet   :        0\nNVM Evicts    :               0, Clean     : 100.00%, Unclean :       0, Double          :        0\nNVM Deletes   :               0 Skipped Deletes: 100.00%\nReleased 21 slabs\n  Moves     : attempts:          0, success: 100.00%\n  Evictions : attempts:      3,040, success:  99.57%\n\n== Throughput for  ==\nTotal Ops : 3.20 million\nTotal sets: 2,559,176\nget       :    49,453/s, success   :  10.97%\nset       :   263,344/s, success   : 100.00%\ndel       :    16,488/s, found     :  10.83%\n'))),(0,l.mdx)("h2",{id:"development-cycle"},"Development Cycle"),(0,l.mdx)("p",null,"When working on CacheLib itself (e.g. tweaking caching algorithms or adding\nfeatures to ",(0,l.mdx)("inlineCode",{parentName:"p"},"cachebench"),"), the following is recommended:"),(0,l.mdx)("ul",null,(0,l.mdx)("li",{parentName:"ul"},"Run ",(0,l.mdx)("inlineCode",{parentName:"li"},"./contrib/build.sh -j -d -v")," to install dependencies and\nbuild ",(0,l.mdx)("inlineCode",{parentName:"li"},"cachelib"),"."),(0,l.mdx)("li",{parentName:"ul"},"The resulting cachelib files will be stored in the ",(0,l.mdx)("inlineCode",{parentName:"li"},"build-cachelib"),"\nsubdirectory."),(0,l.mdx)("li",{parentName:"ul"},"Modify source code files in ",(0,l.mdx)("inlineCode",{parentName:"li"},"./cachelib/")),(0,l.mdx)("li",{parentName:"ul"},"Rebuild the modified files in ",(0,l.mdx)("inlineCode",{parentName:"li"},"build-cachelib")," using ",(0,l.mdx)("inlineCode",{parentName:"li"},"make"),".")),(0,l.mdx)("p",null,"Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build.sh -d -j -v\n[... after build is complete ...]\n\n$ cd build-cachelib\n$ make\n[... cachelib and cachebench are rebuild ...]\n\n$ touch touch ../cachelib/cachebench/main.cpp\n$ make\n[... cachelib and cachebench are rebuild ...]\n")),(0,l.mdx)("h2",{id:"updating-to-latest-source-code-version"},"Updating to latest source code version"),(0,l.mdx)("p",null,"Facebook internal development cycle tightly couples\ncachelib with its dependencies (e.g. folly, fbthrifth, wangle, fizz),\nand all are frequently updated.\nParticularly, the folly library does not provide stable API,\nand using mismatched version can cause compilation errors."),(0,l.mdx)("p",null,"Therefore, it is recommended to ",(0,l.mdx)("em",{parentName:"p"},"always")," update (and rebuild)\nall dependencies before updating cachelib. That is,\na simple ",(0,l.mdx)("inlineCode",{parentName:"p"},"git pull")," for cachelib alone can often lead to failed builds."),(0,l.mdx)("p",null,"Running the ",(0,l.mdx)("inlineCode",{parentName:"p"},"contrib/build.sh")," script takes care of first updating\nand rebuilding all dependencies, and then updating and rebuilding cachelib.\nUse the ",(0,l.mdx)("inlineCode",{parentName:"p"},"-O")," option to skip the installation of system packages, e.g.\n",(0,l.mdx)("inlineCode",{parentName:"p"},"./contrib/build.sh -d -v -j -O"),"."),(0,l.mdx)("p",null,"As all dependencies use ",(0,l.mdx)("inlineCode",{parentName:"p"},"git/cmake/make"),", rebuilding the same code (if there\nwere no updates) will be very fast."),(0,l.mdx)("h2",{id:"downloading-the-source-code-without-building"},"Downloading the source code without building"),(0,l.mdx)("p",null,"The default ",(0,l.mdx)("inlineCode",{parentName:"p"},"build.sh")," wrapper script requires internet connection\n(for package installation and github updates)."),(0,l.mdx)("p",null,"For special build circumstances where internet connection is not available,\nit is possible to download the source code on one machine, then copy it\nand build it on another."),(0,l.mdx)("p",null,"Use ",(0,l.mdx)("inlineCode",{parentName:"p"},"build-package.sh -B")," option to only download the latest source code\n(using ",(0,l.mdx)("inlineCode",{parentName:"p"},"git clone/git pull"),") without building."),(0,l.mdx)("p",null,"Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"./contrib/build-package.sh -B googlelog\n./contrib/build-package.sh -B googleflags\n./contrib/build-package.sh -B googletest\n./contrib/build-package.sh -B fmt\n./contrib/build-package.sh -B sparsemap\n./contrib/build-package.sh -B folly\n./contrib/build-package.sh -B fizz\n./contrib/build-package.sh -B wangle\n./contrib/build-package.sh -B fbthrift\n./contrib/build-package.sh -B cachelib\n")),(0,l.mdx)("p",null,"Will download the latest source code of all libraries under\nthe ",(0,l.mdx)("inlineCode",{parentName:"p"},"./cachelib/external")," subdirectory."),(0,l.mdx)("p",null,"Then the entire build tree can be copied to another machine\n(one that does not have internet connectivity).\nCacheLib can then be build be adding the ",(0,l.mdx)("inlineCode",{parentName:"p"},"-S")," option to ",(0,l.mdx)("inlineCode",{parentName:"p"},"build.sh"),"\n(meaning: skip the ",(0,l.mdx)("inlineCode",{parentName:"p"},"git clone/git pull")," step):"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-sh"},"$ ./contrib/build.sh -d -j -v -S\n")))}m.isMDXComponent=!0}}]);