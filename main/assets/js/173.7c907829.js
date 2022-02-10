(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{674:function(g,t,e){"use strict";e.r(t);var a=e(1),c=Object(a.a)({},(function(){var g=this,t=g.$createElement,e=g._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[e("h1",{attrs:{id:"gaia-创世状态-genesis-state"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#gaia-创世状态-genesis-state"}},[g._v("#")]),g._v(" Gaia 创世状态（Genesis State）")]),g._v(" "),e("p",[g._v("Gaia 创世状态"),e("code",[g._v("GenesisState")]),g._v("由账户、各种模块状态和元数据组成，例如创世交易。 每个模块可以指定自己的"),e("code",[g._v("GenesisState")]),g._v("。 此外，每个模块可以指定自己的创世状态有效性验证、导入和导出功能。")]),g._v(" "),e("p",[g._v("在 Gaia 的 ABCI"),e("code",[g._v("initChainer")]),g._v("定义中调用"),e("code",[g._v("initFromGenesisState")]),g._v("，它在内部调用每个模块的"),e("code",[g._v("InitGenesis")]),g._v("，提供它自己的"),e("code",[g._v("GenesisState")]),g._v("作为参数。")]),g._v(" "),e("h2",{attrs:{id:"账户-accounts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#账户-accounts"}},[g._v("#")]),g._v(" 账户（Accounts）")]),g._v(" "),e("p",[e("code",[g._v("GenesisState")]),g._v(" 中的创世账户定义如下：")]),g._v(" "),e("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBHZW5lc2lzQWNjb3VudCBzdHJ1Y3QgewogIEFkZHJlc3MgICAgICAgc2RrLkFjY0FkZHJlc3MgYGpzb246JnF1b3Q7YWRkcmVzcyZxdW90O2AKICBDb2lucyAgICAgICAgIHNkay5Db2lucyAgICAgIGBqc29uOiZxdW90O2NvaW5zJnF1b3Q7YAogIFNlcXVlbmNlICAgICAgdWludDY0ICAgICAgICAgYGpzb246JnF1b3Q7c2VxdWVuY2VfbnVtYmVyJnF1b3Q7YAogIEFjY291bnROdW1iZXIgdWludDY0ICAgICAgICAgYGpzb246JnF1b3Q7YWNjb3VudF9udW1iZXImcXVvdDtgCgogIC8vIHZlc3RpbmcgYWNjb3VudCBmaWVsZHMKICBPcmlnaW5hbFZlc3RpbmcgIHNkay5Db2lucyBganNvbjomcXVvdDtvcmlnaW5hbF92ZXN0aW5nJnF1b3Q7YCAgLy8gdG90YWwgdmVzdGluZyBjb2lucyB1cG9uIGluaXRpYWxpemF0aW9uCiAgRGVsZWdhdGVkRnJlZSAgICBzZGsuQ29pbnMgYGpzb246JnF1b3Q7ZGVsZWdhdGVkX2ZyZWUmcXVvdDtgICAgIC8vIGRlbGVnYXRlZCB2ZXN0ZWQgY29pbnMgYXQgdGltZSBvZiBkZWxlZ2F0aW9uCiAgRGVsZWdhdGVkVmVzdGluZyBzZGsuQ29pbnMgYGpzb246JnF1b3Q7ZGVsZWdhdGVkX3Zlc3RpbmcmcXVvdDtgIC8vIGRlbGVnYXRlZCB2ZXN0aW5nIGNvaW5zIGF0IHRpbWUgb2YgZGVsZWdhdGlvbgogIFN0YXJ0VGltZSAgICAgICAgaW50NjQgICAgIGBqc29uOiZxdW90O3N0YXJ0X3RpbWUmcXVvdDtgICAgICAgICAvLyB2ZXN0aW5nIHN0YXJ0IHRpbWUgKFVOSVggRXBvY2ggdGltZSkKICBFbmRUaW1lICAgICAgICAgIGludDY0ICAgICBganNvbjomcXVvdDtlbmRfdGltZSZxdW90O2AgICAgICAgICAgLy8gdmVzdGluZyBlbmQgdGltZSAoVU5JWCBFcG9jaCB0aW1lKQp9Cg=="}}),g._v(" "),e("p",[g._v("除序列号（nonce）和地址外，每个帐户还必须具有有效且唯一的账户编号。")]),g._v(" "),e("p",[g._v("账户也可能锁仓，此时他们必须提供必要的锁仓信息，锁仓帐户必须至少提供"),e("code",[g._v("OriginalVesting")]),g._v("和"),e("code",[g._v("EndTime")]),g._v("。如果还提供了"),e("code",[g._v("StartTime")]),g._v("，则该帐户将被视为“连续”锁仓帐户，其中按预定义的时间表锁仓 coins。 提供的"),e("code",[g._v("StartTime")]),g._v("必须小于"),e("code",[g._v("EndTime")]),g._v("，但可能是未来的时间。 换句话说，它不必等于创世时间。 在从新状态（未导出）开始的新链中，"),e("code",[g._v("OriginalVesting")]),g._v("必须小于或等于"),e("code",[g._v("Coins")]),g._v("。")])],1)}),[],!1,null,null,null);t.default=c.exports}}]);