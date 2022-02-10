(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{678:function(t,e,a){"use strict";a.r(e);var s=a(1),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"加入公共测试网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加入公共测试网"}},[t._v("#")]),t._v(" 加入公共测试网")]),t._v(" "),a("p",[t._v("::: 提示 当前测试网\n请查看"),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v("获取最新的公共测试网信息，包含了所使用的 Cosmos-SDK 的正确版本和 genesis 文件。\n:::")]),t._v(" "),a("p",[t._v("::: 警告\n你需要先完成"),a("RouterLink",{attrs:{to:"/zh/gaia-tutorials/installation.html"}},[t._v("安装"),a("code",[t._v("gaia")])]),t._v("\n:::")],1),t._v(" "),a("h2",{attrs:{id:"创建一个新节点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建一个新节点"}},[t._v("#")]),t._v(" 创建一个新节点")]),t._v(" "),a("blockquote",[a("p",[t._v("注意：如果你在之前的测试网中运行过一个全节点，请跳至"),a("a",{attrs:{href:"#upgrading-from-previous-testnet"}},[t._v("升级之前的 Testnet")]),t._v("。")])]),t._v(" "),a("p",[t._v("要创建一个新节点，主网的指令同样适用：")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/zh/gaia-tutorials/join-mainnet.html"}},[t._v("加入 mainnet")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/zh/gaia-tutorials/validators/validator-setup.html"}},[t._v("部署验证人节点")])],1)]),t._v(" "),a("p",[t._v("只有 SDK 的版本和 genesis 文件不同。查看"),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v("\n获取测试网的信息，包括 Cosmos-SDK 正确的版本和 genesis 文件。")]),t._v(" "),a("h2",{attrs:{id:"升级之前的-testnet"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级之前的-testnet"}},[t._v("#")]),t._v(" 升级之前的 Testnet")]),t._v(" "),a("p",[t._v("这些指令用以把运行过以前测试网络的全节点升级至最新的测试网络。")]),t._v(" "),a("h3",{attrs:{id:"重置数据"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重置数据"}},[t._v("#")]),t._v(" 重置数据")]),t._v(" "),a("p",[t._v("首先，移除过期的文件并重置数据：")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"cm0gJEhPTUUvLmdhaWEvY29uZmlnL2FkZHJib29rLmpzb24gJEhPTUUvLmdhaWEvY29uZmlnL2dlbmVzaXMuanNvbgpnYWlhZCB1bnNhZmUtcmVzZXQtYWxsCg=="}}),t._v(" "),a("p",[t._v("你的节点现在处于原始状态并保留了最初的"),a("code",[t._v("priv_validator.json")]),t._v("文件和"),a("code",[t._v("config.toml")]),t._v("文件。如果之前你还有其他的哨兵节点或者全节点，你的节点仍然会连接他们，但是会失败，因为他们还没有升级。")]),t._v(" "),a("p",[t._v("::: 警告\n确保每个节点有一个独一无二的"),a("code",[t._v("priv_validator.json")]),t._v("文件。不要从一个旧节点拷贝"),a("code",[t._v("priv_validator.json")]),t._v("到多个新的节点。运行两个有着相同"),a("code",[t._v("priv_validator.json")]),t._v("文件的节点会导致双签。\n:::")]),t._v(" "),a("h3",{attrs:{id:"升级软件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#升级软件"}},[t._v("#")]),t._v(" 升级软件")]),t._v(" "),a("p",[t._v("现在升级软件：")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Ntb3MvY29zbW9zLXNkay5naXQKY2QgY29zbW9zLXNkawpnaXQgZmV0Y2ggLS1hbGwgJmFtcDsmYW1wOyBnaXQgY2hlY2tvdXQgbWFzdGVyCm1ha2UgaW5zdGFsbAo="}}),t._v(" "),a("p",[t._v("::: 提示\n"),a("em",[t._v("注意")]),t._v("：如果在这一步出现问题，请检查是否安装了最新稳定版本的 Go。\n:::")]),t._v(" "),a("p",[t._v("注意这里我们使用的是包含最新稳定发布版本的"),a("code",[t._v("master")]),t._v("分支。请查看"),a("a",{attrs:{href:"https://github.com/cosmos/testnets",target:"_blank",rel:"noopener noreferrer"}},[t._v("testnet repo"),a("OutboundLink")],1),t._v("查看哪个版本的测试网需要哪一个 Cosmos-SDK 版本，在"),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("SDK 发布版"),a("OutboundLink")],1),t._v("中对应的详细信息。")]),t._v(" "),a("p",[t._v("你的全节点已经升级成功！")])],1)}),[],!1,null,null,null);e.default=r.exports}}]);