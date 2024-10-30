"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5115],{5344:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>o,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var l=s(4848),i=s(8453);const t={id:"analytics-commands",sidebar_label:"Analytics",title:"Analytics",slug:"analytics"},r=void 0,a={id:"commands/analytics-commands",title:"Analytics",description:"BITMAP",source:"@site/docs/commands/analytics.md",sourceDirName:"commands",slug:"/commands/analytics",permalink:"/garnet/docs/commands/analytics",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/commands/analytics.md",tags:[],version:"current",frontMatter:{id:"analytics-commands",sidebar_label:"Analytics",title:"Analytics",slug:"analytics"},sidebar:"garnetDocSidebar",previous:{title:"Generic",permalink:"/garnet/docs/commands/generic"},next:{title:"Data Structures",permalink:"/garnet/docs/commands/data-structures"}},d={},c=[{value:"BITMAP",id:"bitmap",level:2},{value:"BITCOUNT",id:"bitcount",level:3},{value:"Syntax",id:"syntax",level:4},{value:"Resp Reply",id:"resp-reply",level:4},{value:"BITFIELD",id:"bitfield",level:3},{value:"Syntax",id:"syntax-1",level:4},{value:"Resp Reply",id:"resp-reply-1",level:4},{value:"BITFIELD_RO",id:"bitfield_ro",level:3},{value:"Syntax",id:"syntax-2",level:4},{value:"Resp Reply",id:"resp-reply-2",level:4},{value:"BITOP AND",id:"bitop-and",level:3},{value:"Syntax",id:"syntax-3",level:4},{value:"Resp Reply",id:"resp-reply-3",level:4},{value:"BITOP NOT",id:"bitop-not",level:3},{value:"Syntax",id:"syntax-4",level:4},{value:"Resp Reply",id:"resp-reply-4",level:4},{value:"BITPOS",id:"bitpos",level:3},{value:"Syntax",id:"syntax-5",level:4},{value:"Resp Reply",id:"resp-reply-5",level:4},{value:"GETBIT",id:"getbit",level:3},{value:"Syntax",id:"syntax-6",level:4},{value:"Resp Reply",id:"resp-reply-6",level:4},{value:"SETBIT",id:"setbit",level:3},{value:"Syntax",id:"syntax-7",level:4},{value:"Resp Reply",id:"resp-reply-7",level:4},{value:"HYPERLOGLOG",id:"hyperloglog",level:2},{value:"PFADD",id:"pfadd",level:3},{value:"Syntax",id:"syntax-8",level:4},{value:"Resp Reply",id:"resp-reply-8",level:4},{value:"PFCOUNT",id:"pfcount",level:3},{value:"Syntax",id:"syntax-9",level:4},{value:"Resp Reply",id:"resp-reply-9",level:4},{value:"PFMERGE",id:"pfmerge",level:3},{value:"Syntax",id:"syntax-10",level:4},{value:"Resp Reply",id:"resp-reply-10",level:4},{value:"PUB/SUB",id:"pubsub",level:2},{value:"PSUBSCRIBE",id:"psubscribe",level:3},{value:"Syntax",id:"syntax-11",level:4},{value:"Resp Reply",id:"resp-reply-11",level:4},{value:"PUBLISH",id:"publish",level:3},{value:"Syntax",id:"syntax-12",level:4},{value:"Resp Reply",id:"resp-reply-12",level:4},{value:"PUBSUB CHANNELS",id:"pubsub-channels",level:3},{value:"Syntax",id:"syntax-13",level:4},{value:"Resp Reply",id:"resp-reply-13",level:4},{value:"PUBSUB NUMPAT",id:"pubsub-numpat",level:3},{value:"Syntax",id:"syntax-14",level:4},{value:"Resp Reply",id:"resp-reply-14",level:4},{value:"PUBSUB NUMSUB",id:"pubsub-numsub",level:3},{value:"Syntax",id:"syntax-15",level:4},{value:"Resp Reply",id:"resp-reply-15",level:4},{value:"PUNSUBSCRIBE",id:"punsubscribe",level:3},{value:"Syntax",id:"syntax-16",level:4},{value:"Resp Reply",id:"resp-reply-16",level:4},{value:"SUBSCRIBE",id:"subscribe",level:3},{value:"Syntax",id:"syntax-17",level:4},{value:"Resp Reply",id:"resp-reply-17",level:4},{value:"UNSUBSCRIBE",id:"unsubscribe",level:3},{value:"Syntax",id:"syntax-18",level:4},{value:"Resp Reply",id:"resp-reply-18",level:4}];function h(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h2,{id:"bitmap",children:"BITMAP"}),"\n",(0,l.jsx)(n.h3,{id:"bitcount",children:"BITCOUNT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    BITCOUNT key [start end [BYTE | BIT]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Count the number of set bits (population counting) in a string."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the number of bits set to 1."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"bitfield",children:"BITFIELD"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BITFIELD key [GET encoding offset | [OVERFLOW <WRAP | SAT | FAIL>]\n  <SET encoding offset value | INCRBY encoding offset increment>\n  [GET encoding offset | [OVERFLOW <WRAP | SAT | FAIL>]\n  <SET encoding offset value | INCRBY encoding offset increment>\n  ...]]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["The command treats a Garnet string as a array of bits, and is capable of addressing specific integer fields of varying bit widths and arbitrary non (necessary) aligned offset.\\\nIn practical terms using this command you can set, for example, a signed 5 bits integer at bit offset 1234 to a specific value, retrieve a 31 bit unsigned integer from offset 4567.",(0,l.jsx)(n.br,{}),"\n","Similarly the command handles increments and decrements of the specified integers, providing guaranteed and well specified overflow and underflow behavior that the user can configure."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-1",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer Reply: the bit value stored at offset."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"bitfield_ro",children:"BITFIELD_RO"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-2",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BITFIELD_RO key [GET encoding offset [GET encoding offset ...]]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Read-only variant of the ",(0,l.jsx)(n.a,{href:"#bitfield",children:"BITFIELD"})," command. It is like the original ",(0,l.jsx)(n.a,{href:"#bitfield",children:"BITFIELD"})," but only accepts GET subcommand and can safely be used in read-only replicas."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-2",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: each entry being the corresponding result of the sub-command given at the same position."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"bitop-and",children:"BITOP AND"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-3",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BITOP AND destkey srckey1 srckey2 srckey3 ... srckeyN\n"})}),"\n",(0,l.jsx)(n.p,{children:"Perform a bitwise AND operation between multiple keys (containing string values) and store the result in the destination key."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-3",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer Reply: the size of the string stored in the destination key, that is equal to the size of the longest input string."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"bitop-not",children:"BITOP NOT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-4",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"BITOP NOT destkey srckey\n"})}),"\n",(0,l.jsx)(n.p,{children:"Perform a bitwise NOT operation between multiple keys (containing string values) and store the result in the destination key."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-4",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer Reply: the size of the string stored in the destination key, that is equal to the size of the longest input string."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"bitpos",children:"BITPOS"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-5",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    BITPOS key bit [start [end [BYTE | BIT]]]    \n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the position of the first bit set to 1 or 0 in a string."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-5",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"One of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Integer reply: the position of the first bit set to 1 or 0 according to the request"}),"\n",(0,l.jsx)(n.li,{children:"Integer reply: -1. In case the bit argument is 1 and the string is empty or composed of just zero bytes"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"getbit",children:"GETBIT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-6",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"   GETBIT key offset \n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the bit value at offset in the string value stored at key."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-6",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"The bit value stored at offset, one of the following:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Integer reply: 0."}),"\n",(0,l.jsx)(n.li,{children:"Integer reply: 1."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"setbit",children:"SETBIT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-7",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"    SETBIT key offset value\n"})}),"\n",(0,l.jsx)(n.p,{children:"Sets or clears the bit at offset in the string value stored at key. The bit is either set or cleared depending on value, which can be either 0 or 1. When key does not exist, a new string value is created."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-7",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the original bit value stored at offset."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"hyperloglog",children:"HYPERLOGLOG"}),"\n",(0,l.jsx)(n.h3,{id:"pfadd",children:"PFADD"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-8",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PFADD <key> <element-1> ... <element-n>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Adds all the element arguments to the HyperLogLog data structure stored at the variable name specified as first argument."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-8",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer Reply: 1 if at least 1 HyperLogLog internal register was altered. 0 otherwise."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"pfcount",children:"PFCOUNT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-9",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PFCOUNT key [key ...]\n"})}),"\n",(0,l.jsxs)(n.p,{children:["When called with a single key, returns the approximated cardinality computed by the HyperLogLog data structure stored at the specified variable, which is 0 if the variable does not exist.",(0,l.jsx)(n.br,{}),"\n","When called with multiple keys, returns the approximated cardinality of the union of the HyperLogLogs passed, by internally merging the HyperLogLogs stored at the provided keys into a temporary HyperLogLog."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-9",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer Reply: the approximated number of unique elements observed via PFADD."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"pfmerge",children:"PFMERGE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-10",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PFMERGE <destination-key> <source-key-1> ... <source-key-n>\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Merge multiple HyperLogLog values into an unique value that will approximate the cardinality of the union of the observed Sets of the source HyperLogLog structures.",(0,l.jsx)(n.br,{}),"\n","The computed merged HyperLogLog is set to the destination variable, which is created if does not exist (defaulting to an empty HyperLogLog)."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-10",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Simple String Reply: the command just returns OK."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"pubsub",children:"PUB/SUB"}),"\n",(0,l.jsx)(n.h3,{id:"psubscribe",children:"PSUBSCRIBE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-11",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PSUBSCRIBE <pattern-1> ... <pattern-n>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Subscribes the client to the given patterns."}),"\n",(0,l.jsx)(n.p,{children:"Supported glob-style patterns:"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"h?llo"})," subscribes to ",(0,l.jsx)(n.code,{children:"hello"}),", ",(0,l.jsx)(n.code,{children:"hallo"})," and ",(0,l.jsx)(n.code,{children:"hxllo"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.code,{children:"h*llo"})," subscribes to ",(0,l.jsx)(n.code,{children:"hllo"})," and ",(0,l.jsx)(n.code,{children:"heeeello"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.code,{children:"h[ae]llo"})," subscribes to ",(0,l.jsx)(n.code,{children:"hello"})," and ",(0,l.jsx)(n.code,{children:"hallo"}),", but not ",(0,l.jsx)(n.code,{children:"hillo"}),(0,l.jsx)(n.br,{}),"\n","Use ",(0,l.jsx)(n.code,{children:"\\"})," to escape special characters if you want to match them verbatim."]}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-11",children:"Resp Reply"}),"\n",(0,l.jsxs)(n.p,{children:["When successful, this command doesn't return anything. Instead, for each pattern, one message with the first element being the string ",(0,l.jsx)(n.code,{children:"psubscribe"})," is pushed as a confirmation that the command succeeded."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"publish",children:"PUBLISH"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-12",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PUBLISH <channel> <message>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Posts a message to the given channel."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-12",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer Reply: the number of clients that received the message."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"pubsub-channels",children:"PUBSUB CHANNELS"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-13",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PUBSUB CHANNELS [pattern]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Lists the currently active channels. An active channel is a Pub/Sub channel with one or more subscribers (excluding clients subscribed to patterns)."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-13",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: a list of active channels, optionally matching the specified pattern."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"pubsub-numpat",children:"PUBSUB NUMPAT"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-14",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PUBSUB NUMPAT\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the number of unique patterns that are subscribed to by clients (that are performed using the PSUBSCRIBE command)."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-14",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Integer reply: the number of patterns all the clients are subscribed to."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"pubsub-numsub",children:"PUBSUB NUMSUB"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-15",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PUBSUB NUMSUB [channel [channel ...]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Returns the number of subscribers (exclusive of clients subscribed to patterns) for the specified channels."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-15",children:"Resp Reply"}),"\n",(0,l.jsx)(n.p,{children:"Array reply: the number of subscribers per channel, each even element (including the 0th) is channel name, each odd element is the number of subscribers"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"punsubscribe",children:"PUNSUBSCRIBE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-16",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"PUNSUBSCRIBE <pattern-1> ... <pattern-n>\n"})}),"\n",(0,l.jsx)(n.p,{children:"Unsubscribes the client from the given patterns, or from all of them if none is given."}),"\n",(0,l.jsx)(n.p,{children:"When no patterns are specified, the client is unsubscribed from all the previously subscribed patterns. In this case, a message for every unsubscribed pattern will be sent to the client."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-16",children:"Resp Reply"}),"\n",(0,l.jsxs)(n.p,{children:["When successful, this command doesn't return anything. Instead, for each pattern, one message with the first element being the string ",(0,l.jsx)(n.code,{children:"punsubscribe"})," is pushed as a confirmation that the command succeeded."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"subscribe",children:"SUBSCRIBE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-17",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"SUBSCRIBE channel [channel ...]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Subscribes the client to the specified channels."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-17",children:"Resp Reply"}),"\n",(0,l.jsxs)(n.p,{children:["When successful, this command doesn't return anything. Instead, for each channel, one message with the first element being the string ",(0,l.jsx)(n.code,{children:"subscribe"})," is pushed as a confirmation that the command succeeded."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"unsubscribe",children:"UNSUBSCRIBE"}),"\n",(0,l.jsx)(n.h4,{id:"syntax-18",children:"Syntax"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-bash",children:"UNSUBSCRIBE [channel [channel ...]]\n"})}),"\n",(0,l.jsx)(n.p,{children:"Unsubscribes the client from the given channels, or from all of them if none is given."}),"\n",(0,l.jsx)(n.h4,{id:"resp-reply-18",children:"Resp Reply"}),"\n",(0,l.jsxs)(n.p,{children:["When successful, this command doesn't return anything. Instead, for each channel, one message with the first element being the string ",(0,l.jsx)(n.code,{children:"unsubscribe"})," is pushed as a confirmation that the command succeeded."]}),"\n",(0,l.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>a});var l=s(6540);const i={},t=l.createContext(i);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);