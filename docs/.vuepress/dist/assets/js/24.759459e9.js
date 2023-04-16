(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{296:function(t,a,s){"use strict";s.r(a);var r=s(14),_=Object(r.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"一、概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、概述"}},[t._v("#")]),t._v(" 一、概述")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#网络的网络"}},[t._v("网络的网络")])]),a("li",[a("a",{attrs:{href:"#isp"}},[t._v("ISP")])]),a("li",[a("a",{attrs:{href:"#主机之间的通信方式"}},[t._v("主机之间的通信方式")])]),a("li",[a("a",{attrs:{href:"#电路交换与分组交换"}},[t._v("电路交换与分组交换")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-电路交换"}},[t._v("1. 电路交换")])]),a("li",[a("a",{attrs:{href:"#_2-分组交换"}},[t._v("2. 分组交换")])])])]),a("li",[a("a",{attrs:{href:"#时延"}},[t._v("时延")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-排队时延"}},[t._v("1. 排队时延")])]),a("li",[a("a",{attrs:{href:"#_2-处理时延"}},[t._v("2. 处理时延")])]),a("li",[a("a",{attrs:{href:"#_3-传输时延"}},[t._v("3. 传输时延")])]),a("li",[a("a",{attrs:{href:"#_4-传播时延"}},[t._v("4. 传播时延")])])])]),a("li",[a("a",{attrs:{href:"#计算机网络体系结构"}},[t._v("计算机网络体系结构")]),a("ul",[a("li",[a("a",{attrs:{href:"#_1-五层协议"}},[t._v("1. 五层协议")])]),a("li",[a("a",{attrs:{href:"#_2-osi"}},[t._v("2. OSI")])]),a("li",[a("a",{attrs:{href:"#_3-tcp-ip"}},[t._v("3. TCP/IP")])]),a("li",[a("a",{attrs:{href:"#_4-数据在各层之间的传递过程"}},[t._v("4. 数据在各层之间的传递过程")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"网络的网络"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#网络的网络"}},[t._v("#")]),t._v(" 网络的网络")]),t._v(" "),a("p",[t._v("网络把主机连接起来，而互连网（internet）是把多种不同的网络连接起来，因此互连网是网络的网络。而互联网（Internet）是全球范围的互连网。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/network-of-networks.gif",width:"450"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"isp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isp"}},[t._v("#")]),t._v(" ISP")]),t._v(" "),a("p",[t._v("互联网服务提供商 ISP 可以从互联网管理机构获得许多 IP 地址，同时拥有通信线路以及路由器等联网设备，个人或机构向 ISP 缴纳一定的费用就可以接入互联网。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/72be01cd-41ae-45f7-99b9-a8d284e44dd4.png",width:"500"}})]),a("br"),t._v(" "),a("p",[t._v("目前的互联网是一种多层次 ISP 结构，ISP 根据覆盖面积的大小分为第一层 ISP、区域 ISP 和接入 ISP。互联网交换点 IXP 允许两个 ISP 直接相连而不用经过第三个 ISP。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/3be42601-9d33-4d29-8358-a9d16453af93.png",width:"500"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"主机之间的通信方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主机之间的通信方式"}},[t._v("#")]),t._v(" 主机之间的通信方式")]),t._v(" "),a("ul",[a("li",[t._v("客户-服务器（C/S）：客户是服务的请求方，服务器是服务的提供方。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/914894c2-0bc4-46b5-bef9-0316a69ef521.jpg",width:"240px"}})]),a("br"),t._v(" "),a("ul",[a("li",[t._v("对等（P2P）：不区分客户和服务器。")])]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/42430e94-3137-48c0-bdb6-3cebaf9102e3.jpg",width:"200px"}})]),a("br"),t._v(" "),a("h2",{attrs:{id:"电路交换与分组交换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#电路交换与分组交换"}},[t._v("#")]),t._v(" 电路交换与分组交换")]),t._v(" "),a("h3",{attrs:{id:"_1-电路交换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-电路交换"}},[t._v("#")]),t._v(" 1. 电路交换")]),t._v(" "),a("p",[t._v("电路交换用于电话通信系统，两个用户要通信之前需要建立一条专用的物理链路，并且在整个通信过程中始终占用该链路。由于通信的过程中不可能一直在使用传输线路，因此电路交换对线路的利用率很低，往往不到 10%。")]),t._v(" "),a("h3",{attrs:{id:"_2-分组交换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-分组交换"}},[t._v("#")]),t._v(" 2. 分组交换")]),t._v(" "),a("p",[t._v("每个分组都有首部和尾部，包含了源地址和目的地址等控制信息，在同一个传输线路上同时传输多个分组互相不会影响，因此在同一条传输线路上允许同时传输多个分组，也就是说分组交换不需要占用传输线路。")]),t._v(" "),a("p",[t._v("在一个邮局通信系统中，邮局收到一份邮件之后，先存储下来，然后把相同目的地的邮件一起转发到下一个目的地，这个过程就是存储转发过程，分组交换也使用了存储转发过程。")]),t._v(" "),a("h2",{attrs:{id:"时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#时延"}},[t._v("#")]),t._v(" 时延")]),t._v(" "),a("p",[t._v("总时延 = 排队时延 + 处理时延 + 传输时延 + 传播时延")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/4b2ae78c-e254-44df-9e37-578e2f2bef52.jpg",width:"380"}})]),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-排队时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-排队时延"}},[t._v("#")]),t._v(" 1. 排队时延")]),t._v(" "),a("p",[t._v("分组在路由器的输入队列和输出队列中排队等待的时间，取决于网络当前的通信量。")]),t._v(" "),a("h3",{attrs:{id:"_2-处理时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-处理时延"}},[t._v("#")]),t._v(" 2. 处理时延")]),t._v(" "),a("p",[t._v("主机或路由器收到分组时进行处理所需要的时间，例如分析首部、从分组中提取数据、进行差错检验或查找适当的路由等。")]),t._v(" "),a("h3",{attrs:{id:"_3-传输时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-传输时延"}},[t._v("#")]),t._v(" 3. 传输时延")]),t._v(" "),a("p",[t._v("主机或路由器传输数据帧所需要的时间。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/dcdbb96c-9077-4121-aeb8-743e54ac02a4.png",width:"150px"}})]),a("br"),t._v(" "),a("p",[t._v("其中 l 表示数据帧的长度，v 表示传输速率。")]),t._v(" "),a("h3",{attrs:{id:"_4-传播时延"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-传播时延"}},[t._v("#")]),t._v(" 4. 传播时延")]),t._v(" "),a("p",[t._v("电磁波在信道中传播所需要花费的时间，电磁波传播的速度接近光速。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/a1616dac-0e12-40b2-827d-9e3f7f0b940d.png",width:"150"}})]),a("br"),t._v(" "),a("p",[t._v("其中 l 表示信道长度，v 表示电磁波在信道上的传播速度。")]),t._v(" "),a("h2",{attrs:{id:"计算机网络体系结构"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机网络体系结构"}},[t._v("#")]),t._v(" 计算机网络体系结构")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/0fa6c237-a909-4e2a-a771-2c5485cd8ce0.png",width:"450"}})]),a("br"),t._v(" "),a("h3",{attrs:{id:"_1-五层协议"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-五层协议"}},[t._v("#")]),t._v(" 1. 五层协议")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("应用层")]),t._v("  ：为特定应用程序提供数据传输服务，例如 HTTP、DNS 等协议。数据单位为报文。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("传输层")]),t._v("  ：为进程提供通用数据传输服务。由于应用层协议很多，定义通用的传输层协议就可以支持不断增多的应用层协议。运输层包括两种协议：传输控制协议 TCP，提供面向连接、可靠的数据传输服务，数据单位为报文段；用户数据报协议 UDP，提供无连接、尽最大努力的数据传输服务，数据单位为用户数据报。TCP 主要提供完整性服务，UDP 主要提供及时性服务。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("网络层")]),t._v("  ：为主机提供数据传输服务。而传输层协议是为主机中的进程提供数据传输服务。网络层把传输层传递下来的报文段或者用户数据报封装成分组。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("数据链路层")]),t._v("  ：网络层针对的还是主机之间的数据传输服务，而主机之间可以有很多链路，链路层协议就是为同一链路的主机提供数据传输服务。数据链路层把网络层传下来的分组封装成帧。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("物理层")]),t._v("  ：考虑的是怎样在传输媒体上传输数据比特流，而不是指具体的传输媒体。物理层的作用是尽可能屏蔽传输媒体和通信手段的差异，使数据链路层感觉不到这些差异。")])])]),t._v(" "),a("h3",{attrs:{id:"_2-osi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-osi"}},[t._v("#")]),t._v(" 2. OSI")]),t._v(" "),a("p",[t._v("其中表示层和会话层用途如下：")]),t._v(" "),a("ul",[a("li",[a("p",[a("strong",[t._v("表示层")]),t._v("  ：数据压缩、加密以及数据描述，这使得应用程序不必关心在各台主机中数据内部格式不同的问题。")])]),t._v(" "),a("li",[a("p",[a("strong",[t._v("会话层")]),t._v("  ：建立及管理会话。")])])]),t._v(" "),a("p",[t._v("五层协议没有表示层和会话层，而是将这些功能留给应用程序开发者处理。")]),t._v(" "),a("h3",{attrs:{id:"_3-tcp-ip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-tcp-ip"}},[t._v("#")]),t._v(" 3. TCP/IP")]),t._v(" "),a("p",[t._v("它只有四层，相当于五层协议中数据链路层和物理层合并为网络接口层。")]),t._v(" "),a("p",[t._v("TCP/IP 体系结构不严格遵循 OSI 分层概念，应用层可能会直接使用 IP 层或者网络接口层。")]),t._v(" "),a("div",{attrs:{align:"center"}},[a("img",{attrs:{src:"https://cs-notes-1256109796.cos.ap-guangzhou.myqcloud.com/48d79be8-085b-4862-8a9d-18402eb93b31.png",width:"250"}})]),a("br"),t._v(" "),a("h3",{attrs:{id:"_4-数据在各层之间的传递过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-数据在各层之间的传递过程"}},[t._v("#")]),t._v(" 4. 数据在各层之间的传递过程")]),t._v(" "),a("p",[t._v("在向下的过程中，需要添加下层协议所需要的首部或者尾部，而在向上的过程中不断拆开首部和尾部。")]),t._v(" "),a("p",[t._v("路由器只有下面三层协议，因为路由器位于网络核心中，不需要为进程或者应用程序提供服务，因此也就不需要传输层和应用层。")])])}),[],!1,null,null,null);a.default=_.exports}}]);