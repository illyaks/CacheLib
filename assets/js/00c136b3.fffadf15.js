"use strict";(self.webpackChunkcachelib=self.webpackChunkcachelib||[]).push([[4702],{3905:function(e,n,t){t.r(n),t.d(n,{MDXContext:function(){return l},MDXProvider:function(){return p},mdx:function(){return f},useMDXComponents:function(){return s},withMDXComponents:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},o.apply(this,arguments)}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function m(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),d=function(e){return function(n){var t=s(n.components);return r.createElement(e,o({},n,{components:t}))}},s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},h=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),d=s(t),p=a,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||o;return t?r.createElement(h,i(i({ref:n},l),{},{components:t})):r.createElement(h,i({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=h;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}h.displayName="MDXCreateElement"},75602:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return m},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var r=t(83117),a=t(80102),o=(t(67294),t(3905)),c=["components"],i={id:"Remove_data_from_cache",title:"Remove data from cache"},m=void 0,l={unversionedId:"Cache_Library_User_Guides/Remove_data_from_cache",id:"Cache_Library_User_Guides/Remove_data_from_cache",title:"Remove data from cache",description:"To remove data from cache, call these methods declared in allocator/CacheAllocator.h:",source:"@site/docs/Cache_Library_User_Guides/Remove_data_from_cache.md",sourceDirName:"Cache_Library_User_Guides",slug:"/Cache_Library_User_Guides/Remove_data_from_cache",permalink:"/docs/Cache_Library_User_Guides/Remove_data_from_cache",draft:!1,editUrl:"https://github.com/facebook/CacheLib/edit/main/website/docs/Cache_Library_User_Guides/Remove_data_from_cache.md",tags:[],version:"current",frontMatter:{id:"Remove_data_from_cache",title:"Remove data from cache"},sidebar:"userguideSidebar",previous:{title:"Read data from cache",permalink:"/docs/Cache_Library_User_Guides/Read_data_from_cache"},next:{title:"Visit data in cache",permalink:"/docs/Cache_Library_User_Guides/Visit_data_in_cache"}},d={},s=[],p={toc:s};function u(e){var n=e.components,i=(0,a.Z)(e,c);return(0,o.mdx)("wrapper",(0,r.Z)({},p,i,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"To remove data from cache, call these methods declared in allocator/CacheAllocator.h:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"template <typename CacheTrait>\nclass CacheAllocator : public CacheBase {\n  public:\n    // Remove the item with the specified key.\n    RemoveRes remove(Key key);\n\n    // Remove the item pointed to by the specified handle.\n    RemoveRes remove(const ReadHandle& handle);\n\n    // Remove the first chained item pointed to by the parent handle.\n    WriteHandle popChainedItem(WriteHandle& parent)\n  ...\n};\n")),(0,o.mdx)("p",null,"where ",(0,o.mdx)("inlineCode",{parentName:"p"},"RemoveRes")," is an enum class defined in allocator/CacheAllocator.h:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"enum class RemoveRes : uint8_t {\n  kSuccess,\n  kNotFoundInRam,\n};\n")),(0,o.mdx)("p",null,"For example, the following code removes an item with key ",(0,o.mdx)("inlineCode",{parentName:"p"},'"key1"'),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},'auto rr = cache->remove("key1");\nif (rr == RemoveRes::kSuccess) {\n  std::cout << "Removed the item with key \\"key1\\"" << \'\\n\';\n}\n')),(0,o.mdx)("p",null,"You can also remove the item as follows:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},'auto handle = cache->find("key1");\nif (handle) {\n  auto rr = cache->remove(handle);\n  if (rr == RemoveRes::kSuccess) {\n    std::cout << "Removed the item with key \\"key1\\"" << \'\\n\';\n  }\n}\n')),(0,o.mdx)("p",null,"If you write the following three items to cache:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},'std::map<std::string, std::string> dict = {\n  { "key1", "item 1" },\n  { "key2", "item 2" },\n  { "key3", "item 3" },\n};\nfor (auto& itr : dict) {\n  auto handle = cache->allocate(poolId, itr.first, itr.second.size());\n  std::memcpy(handle->getMemory(), itr.first.data(), itr.second.size());\n  cache->insertOrReplace(handle);\n}\n')),(0,o.mdx)("p",null,"you can iterate and remove the three items:"),(0,o.mdx)("p",null,"For example:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"for (auto itr = cache->begin(); itr != cache->end(); ++itr) {\n  auto rr = cache->remove(itr.asHandle());\n  if (rr == RemoveRes::kSuccess) {\n    cout << \"Removed the item\" << '\\n';\n  }\n}\n\n")),(0,o.mdx)("p",null,"Note that ",(0,o.mdx)("inlineCode",{parentName:"p"},"it.asHandle()")," returns the item handle for the  iterator"),(0,o.mdx)("p",null,"Consider the following chained items:"),(0,o.mdx)("p",null,(0,o.mdx)("img",{src:t(71012).Z,width:"443",height:"59"})),(0,o.mdx)("p",null,"To remove the first chained item (",(0,o.mdx)("inlineCode",{parentName:"p"},"item 1"),"), call the ",(0,o.mdx)("inlineCode",{parentName:"p"},"popChainedItem()")," method:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"auto handle = cache->popChainedItem(parentItemHandle);\nif (handle) {\n  cout << \"Removed the first chained item\" << '\\n';\n}\n")),(0,o.mdx)("p",null,"If you remove the parent item, all its chained items are also removed:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-cpp"},"rr = cache->remove(parentItemHandle);\nif (rr == RemoveRes::kSuccess) {\n  parentItemHandle->reset();\n}\n")))}u.isMDXComponent=!0},71012:function(e,n){n.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAbsAAAA7CAYAAADiriRyAAAABmJLR0QA/wD/AP+gvaeTAAAJdUlEQVR4nO3dXWyTZQPG8f8+GBtOYXTQscRgJiYeaGKETVfxYDhSQhjIAoUNMkWNpkSiS6YHpEKiAXegByrTCRGiBumY1pG5xOIMfm28IAbQeGCIidmgmSPOMeYorPZ5D8yad4xVXtjTbnevX9JkbdPe9/1chYvnoyzNsiwLERERczWnJ3sGIiIidlPZiYiI8VR2IiJivMyrHzh79iydnZ3JmMuU4vF4kj2FG6J8r4/yNZvyNds187Wu0tTUZAG6/cttqlK+ylc35Wv67RoOjtmzG/HTTz+N91RKCwaD1NXVJXsaN035XpvyNZvyNVu8fHXOTkREjKeyExER46nsRETEeCo7ERExnspORESMp7ITERHjqexERMR4KjsRETGeyk5ERIynshMREeOp7ERExHgqOxERMZ7KTkREjKeyExER46nsRETEeCo7ERExnspuiopEIvT29iZ1DqFQiPvuuy9p4//666+0tLQkbXw7pXK+oVAIr9fLQw89xNKlS2lsbMSyrITPw06pnO/333+Px+OhuLiYFStW0NrampBxjS+7qqoqI3+r7+DgIIWFhZSXl/P+++8zMDCQ8DnMmjULn88Xu5/IbT00NMTbb7/NqVOnEjJeoqVqvpFIhMcff5y5c+cSCATYuXMnH330Ec3NzbaOm2ipmu/AwADPP/88K1asIBgM8txzz7Ft2zbOnDlj67gwBcrOsiyuXLlyw6/v6+sjEolM4Iwmj7///psjR47wxBNPkJ+fz6OPPkogECAcDidk/BkzZrBmzZrY/URt6zfffJPFixdz+PBh28dKplTM98cff6S3t5etW7fidDopLi6mqqqKI0eO2DpuMqRqvtnZ2dTU1DB79myWLl3KXXfdxenTp20dF2wuu46ODjZt2oTP56O0tJTy8nIaGhqIRqMAHDt2jPXr11NcXMySJUvYtWsXAH/88Qcul4ujR4+ybNkyTp48yblz59i8eTOlpaW43W4OHDgAQH9/Pw888ACBQICysjJKSkqora3l8uXLbNq0iZ6eHrZs2UIwGLRzqUkTjUaJRqMMDw/T1tbGmjVrcDgcbNy4kdbWVoaHh20bu7e3N3YY5FrbOl5mJSUl7Nq1i9LSUsrKyjhw4ACBQAC3201paSmNjY3jjrthwwYOHTrEqlWrbFvbZJFq+TocDnw+H9OnT489duHCBdLTJ/2/y29IquW7cOFC/H5/7H5fXx+hUIgFCxbYts4Rtn+CTpw4QTQaJRAIUF9fTyAQoKmpiXA4zLPPPsvy5cv5/PPPefXVV9m3bx8///wzAOFwmLa2Nvbv38/ChQt5+umnuffee2lra2PHjh3s3r2bzz77DIBLly7x1VdfEQgE2L9/PydOnKC1tZV9+/ZRUFDAW2+9hdvttnupSReJRLAsi6GhIZqamli5ciX5+fnU1NTQ3t5u63mPq7d1JBL518x+//132tvbeeqpp9i5cyfHjx/nk08+4cUXX6ShoWHcQzsOh4Pbb7+d2267zbb1TEapkO/8+fNH7W388MMPHDp0aNRjpkqFfHNycpgzZw5DQ0NUVlbidrtZv359Qs4dZto9wPTp03nppZfIyclh3rx5eL1ePv74Y9auXUtzczPz588H/vkLLCcnh/7+fgoKChgeHubJJ58kPz+fb775hqysLLxeLwCzZ89mw4YNdHR0sHjxYizLora2lry8PPLy8nC5XPT19dm6rmSfQ/jrr7/iPj9yOGJgYAC/38+HH35IYWEhJSUliZgenZ2dcTMD8Hq93HLLLaxevZr6+nq8Xi+5ubmsWrWKl19+mQsXLiSt0JRvfHbne/nyZRoaGvD7/bzyyiuUlZVN6PyVb3x255udnc3WrVv55Zdf2Lt3Ly6Xi/vvv9/WNdlednPnziUnJyd2v6ioiFAoREZGBt9++y0+nw/LsrjjjjvGHKqYN28eAGfPnqWrq2vMB/6ee+6J/ex0OmM/T5s2zY6ljOLxeGwfY6KMHAoJhUKxqxfb29spLy+3bczrySwvLw+AzMx/Poa5ubkApKenk5GRYdvcrofyjc/OfLu6utiyZQsOhwO/309RUdFET1/5/gu78h0cHMSyLG699VYWLVrEokWL6OrqorW1deqX3fnz5wmHw2RnZwPw22+/UVBQwHfffceePXvw+/0UFhYCsHz58lGvHSm//Px8CgoKaGtriz3X09Mz6nh2Wlqa3UsZJdmXQvf398c+bPFkZWVx5coV5syZQ1VVFQ6Hg+3bt9v6BwWuL7PJTPnGZ1e+w8PDbN68mYcffpgXXnjBtnN1yjc+u/JtaWnh6NGjNDQ0xB7LzMxMyNWotp+zC4fD7Nixg/Pnz3Pq1CneeecdVq5cycWLF2PtHw6H+eCDD+ju7ubSpUtj3sPlcjE4OMjevXv5888/OXnyJNXV1dd92fng4OCErmmyG9mzzc3NZd26dXzxxRf09PTwxhtvcPfdd9s69si2vtnMZHwm5/v111/T19fH2rVrOXfuHN3d3XR3dyf9O2mJZHK+LpeL48ePc/jwYQYGBjh27BgtLS22lzckYM/uzjvvxOl04vF4SE9PZ/Xq1VRXVxONRuns7KSyspJZs2bh8Xh45pln2LZtG++9996o98jNzWX37t3U19fz7rvvMnPmTGpqaqioqKC/vz/u+MuWLaOuro7t27eP2XM0SUZGBpZlkZmZSUVFBY899hhut5usrKyEzeHqbX2jmclYqZLvmTNnuHjx4pgrbR988EH27Nlzs0uYtFIl36KiIl5//XUaGxvx+Xw4nU5qa2t55JFHJnAl15ZmXbU/f/DgQdatWzchXy7s6Ojgtdde49NPP73p95osgsEgdXV1k+owyLRp03C73WzcuJGKigpmzJgx7usmMl8TKV+zKV+zxcm32fY9O7FHWloaS5Ysobq6msrKyus6/i9Th/I1m/JNPFvLzul0JuRYbCqaOXMmX375ZbKnITZRvmZTvolna9ktWLAgId+MFxERicfM/4NHRETkf6jsRETEeCo7ERExnspORESMp7ITERHjqexERMR4KjsRETGeyk5ERIynshMREeOp7ERExHgqOxERMZ7KTkREjKeyExER46nsRETEeCo7EREx3ri/zy4YDCZyHlPG6dOnkz2FCaF8r035mk35mi1evuOWXV1dnS2TkclB+ZpN+ZpN+f7/0izLspI9CRERERs165ydiIgYT2UnIiLGU9mJiIjxMoHmZE9CRETERv/5L+WkMQlqwL5rAAAAAElFTkSuQmCC"}}]);