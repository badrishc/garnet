"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8478],{686:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"dev/onboarding","title":"Onboarding","description":"Welcome to Garnet! In this page, you will find the main steps to set up your work environment for developing in Garnet.","source":"@site/docs/dev/onboarding.md","sourceDirName":"dev","slug":"/dev/onboarding","permalink":"/garnet/docs/dev/onboarding","draft":false,"unlisted":false,"editUrl":"https://github.com/microsoft/garnet/tree/main/website/docs/dev/onboarding.md","tags":[],"version":"current","frontMatter":{"id":"onboarding","sidebar_label":"Onboarding","title":"Onboarding"},"sidebar":"garnetDocSidebar","previous":{"title":"Key Migration","permalink":"/garnet/docs/cluster/key-migration"},"next":{"title":"Code Structure","permalink":"/garnet/docs/dev/code-structure"}}');var i=t(4848),s=t(8453);const o={id:"onboarding",sidebar_label:"Onboarding",title:"Onboarding"},l="Onboarding for Garnet Development",a={},c=[{value:"Quick start &amp; useful resources",id:"quick-start--useful-resources",level:2},{value:"Tools",id:"tools",level:3},{value:"Start hacking",id:"start-hacking",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Garnet API development",id:"garnet-api-development",level:2},{value:"Code Patterns",id:"code-patterns",level:3},{value:"Development concepts",id:"development-concepts",level:3},{value:"Pull Request protocol",id:"pull-request-protocol",level:2},{value:"Formatting style guide",id:"formatting-style-guide",level:2},{value:"Structure of the Garnet.sln Visual Studio Solution File",id:"structure-of-the-garnetsln-visual-studio-solution-file",level:2},{value:"Running the benchmark application",id:"running-the-benchmark-application",level:2},{value:"Build",id:"build",level:2},{value:"Test",id:"test",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"onboarding-for-garnet-development",children:"Onboarding for Garnet Development"})}),"\n",(0,i.jsx)(n.p,{children:"Welcome to Garnet! In this page, you will find the main steps to set up your work environment for developing in Garnet."}),"\n",(0,i.jsx)(n.h2,{id:"quick-start--useful-resources",children:"Quick start & useful resources"}),"\n",(0,i.jsxs)(n.p,{children:["For an introduction to Garnet and its capabilities, you can start with ",(0,i.jsx)(n.a,{href:"/garnet/docs/",children:"Welcome to Garnet"})," page."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Additionally the following pages and documentation might be helpful:"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://redis.io/docs/reference/protocol-spec/",children:"RESP specification"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://redis.io/docs/data-types/",children:"Redis data types"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://microsoft.github.io/FASTER/docs/fasterkv-basics/",children:"FASTER"}),", which we forked for use in Garnet"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tools",children:"Tools"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Visual Studio 2022 (Preview version recommended)"}),"\n",(0,i.jsx)(n.li,{children:".NET 8.x"}),"\n",(0,i.jsx)(n.li,{children:"Git"}),"\n",(0,i.jsx)(n.li,{children:"Azure Windows VM"}),"\n",(0,i.jsx)(n.li,{children:"Azure Linux VM"}),"\n",(0,i.jsxs)(n.li,{children:["An interactive RESP client, such as","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"On Linux: redis-cli, interactive RESP client in Linux"}),"\n",(0,i.jsx)(n.li,{children:"On Windows: Memurai (for using memurai-cli client) or redis-cli via WSL"}),"\n",(0,i.jsx)(n.li,{children:"RedisInsight for experimenting with contents of the store"}),"\n",(0,i.jsx)(n.li,{children:"telnet"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"start-hacking",children:"Start hacking"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Clone the repository"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["git clone ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/garnet.git",children:"https://github.com/microsoft/garnet.git"})]}),"\n",(0,i.jsx)(n.p,{children:"After cloning the repository you can either run the unit tests or run the server and use one of the RESP client suggested in Windows or Linux."}),"\n",(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:"Run the tests suite"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'    dotnet test -c Release -l "console;verbosity=detailed"\n'})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Run the server"}),"\n",(0,i.jsx)(n.p,{children:"Using a size memory of 4 GB and index size of 64 MB:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["cd ",(0,i.jsx)(n.code,{children:"<root>"}),"/main/GarnetServer/"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"dotnet run -c Debug -f net8.0 -- --logger-level Trace -m 4g -i 64m"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use the Memurai client in Windows to send commands to Garnet. A guide about how to install Memurai on Windows can be found ",(0,i.jsx)(n.a,{href:"https://docs.memurai.com/en/installation.html",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you are using Linux, you can use the redis-cli tool. Our official supported Linux distribution is Ubuntu."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["A third option is to install Redis-Insight on Windows. Follow the official guide ",(0,i.jsx)(n.a,{href:"https://redis.com/redis-enterprise/redis-insight/#insight-form",children:"here"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you need to use tls in linux follow the guide at:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<root>"}),"/Garnet/test/testcerts/README.md"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"If you need to run the local device library make sure to have these dependencies:"}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"sudo apt install -y g++ libaio-dev uuid-dev libtbb-dev"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"garnet-api-development",children:"Garnet API development"}),"\n",(0,i.jsx)(n.h3,{id:"code-patterns",children:"Code Patterns"}),"\n",(0,i.jsx)(n.p,{children:"All requests to the server are either basic RESP commands or array RESP commands. The following shows one example of each of them:"}),"\n",(0,i.jsx)(n.p,{children:"Basic Command: PING\r\nRESP representation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$4\\r\\nPING\\r\\n\n"})}),"\n",(0,i.jsx)(n.p,{children:"Array Command: SET mykey abc"}),"\n",(0,i.jsx)(n.p,{children:"RESP representation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"*3\\r\\n$3\\r\\nSET\\r\\n$5\\r\\nmykey\\r\\n$7\\r\\nabcdefg\\r\\n\n"})}),"\n",(0,i.jsx)(n.h3,{id:"development-concepts",children:"Development concepts"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Understanding of the types of memory in C#: Managed Heap, Stack memory, Unmanaged memory, etc."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Use of Span and SpanByte"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tsavorite"})," and ",(0,i.jsx)(n.strong,{children:"Garnet"})," rely heavily on these two types for allocating data in memory and then transfer it on the network layer. Understanding and familiarity with both of them will be very helpful for a better understanding of the code in general."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/api/system.span-1?view=net-7.0",children:"Documentation about Span"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/dotnet/csharp/language-reference/unsafe-code",children:"Use of pointers and unsafe code"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"In the project:"}),"\n",(0,i.jsx)(n.p,{children:"Implementation of SpanByte:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<root>"}),"\\Tsavorite\\cs\\src\\core\\VarLen\\SpanByte.cs"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"pull-request-protocol",children:"Pull Request protocol"}),"\n",(0,i.jsx)(n.p,{children:"Any new feature, change to existing functionality or bug fixing needs to be done using the following process:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Create a Issue Item on the ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/Garnet",children:"Garnet Project"}),", use the following criteria: Enhancement for new features, Bug for fixes, Task for small improvements or changes."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Is a good practice to create your own local branch with the following naming convention:"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"<username>"}),"/branch-name"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Include Unit Tests to test the new commands or feature."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once it is ready for review, create a ",(0,i.jsx)(n.a,{href:"https://github.com/microsoft/Garnet/pulls",children:"Pull Request"}),". Make sure to link it to your issue item in the development section."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"formatting-style-guide",children:"Formatting style guide"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Comments are an important part of the documentation. Make sure your code includes them."}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"The official format for comments is:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"//<one whitespace> Comment starting with a capital letter"})}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"// This comment has good formatting "})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"Methods should have their summary block comment and description for each parameter."}),"\n",(0,i.jsx)(n.p,{children:"Example:"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-csharp",children:'\r\n/// <summary>\r\n/// Iterates the set of keys in the main store.\r\n/// </summary>\r\n/// <param name="patternB">The pattern to apply for filtering</param>\r\n/// <param name="allKeys">When true the filter is ommited</param>\r\n/// <param name="cursor">The value of the cursor in the command request</param>\r\n/// <param name="storeCursor">Value of the cursor returned</param>\r\n/// <param name="Keys">The list of keys from the stores</param>\r\n/// <param name="count">The size of the batch of keys</param>\r\n/// <param name="type">Type of key to filter out</param>\r\n/// <returns></returns>\r\npublic bool DbScan(ArgSlice patternB, bool allKeys, long cursor, out long storeCursor, out List<byte[]> Keys,  long count = 10, Span<byte> type = default);\n'})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["As a good practice, follow the ",(0,i.jsx)("b",{children:"camel case C# naming convention."})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"structure-of-the-garnetsln-visual-studio-solution-file",children:"Structure of the Garnet.sln Visual Studio Solution File"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Refer to the Code Structure page for details ",(0,i.jsx)(n.a,{href:"/garnet/docs/dev/code-structure",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"running-the-benchmark-application",children:"Running the benchmark application"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Refer to the Resp benchmark page for details ",(0,i.jsx)(n.a,{href:"/garnet/docs/benchmarking/resp-bench",children:"here"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["For details refer to the ",(0,i.jsx)(n.a,{href:"/garnet/docs/getting-started",children:"Build and Test page"})]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"test",children:"Test"}),"\n",(0,i.jsx)(n.p,{children:"As a sanity check, you can run the Garnet test suite. The command to run tests in Release mode, for .NET 8, in shown below (make sure you are in the root folder of the repo)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'    dotnet test -c Release -f net8.0 -l "console;verbosity=detailed"\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Note that Tsavorite has its own solution file and test suite in the folder ",(0,i.jsx)(n.code,{children:"<root>"}),"/Garnet/libs/storage/Tsavorite."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," By default, Garnet listens to TCP port 6379, you can use this information to adjust your firewall settings if you need to access Garnet from remote machines."]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(6540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);