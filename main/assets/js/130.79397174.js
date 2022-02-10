(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{726:function(g,I,C){"use strict";C.r(I);var A=C(1),t=Object(A.a)({},(function(){var g=this,I=g.$createElement,C=g._self._c||I;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"hd-지갑"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#hd-지갑"}},[g._v("#")]),g._v(" HD 지갑")]),g._v(" "),C("p",[g._v("코스모스의 계정은 HD 월렛(Hierarchical Deterministic Wallet) 표준을 사용합니다. HD 월렛은 비트코인의 "),C("a",{attrs:{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki",target:"_blank",rel:"noopener noreferrer"}},[g._v("BIP32"),C("OutboundLink")],1),g._v("로 부터 정의되며, 유저가 하나의 시드로부터 다수의 계정을 생성할 수 있게 하는 시스템입니다. 더 자세하게 알아보기 위해서 관련 명칭을 설명하겠습니다:")]),g._v(" "),C("ul",[C("li",[C("strong",[g._v("지갑(Wallet)")]),g._v(": 특정 시드로부터 생성된 계정.")]),g._v(" "),C("li",[C("strong",[g._v("계정(Account)")]),g._v(": 퍼블릭 키/프라이빗 키 쌍.")]),g._v(" "),C("li",[C("strong",[g._v("프라이빗 키(Private Key)")]),g._v(": 프라이빗 키는 메시지를 서명할때 사용되는 비밀 정보입니다. 블록체인 업계에서 프라이빗 키는 계정의 소유자를 식별하는데 사용됩니다. 유저의 프라이빗 키는 절대 다른 이에게 알려지면 안됩니다.")]),g._v(" "),C("li",[C("strong",[g._v("퍼블릭 키(Public Key)")]),g._v(": 퍼블릭 키는 프라이빗 키로부터 일방적 수학 함수를 적용해 얻게되는 정보입니다. 퍼블릭 키를 기반으로 주소가 만들어지게 되며, 퍼블릭 키를 기반으로 프라이빗 키를 찾는 것은 불가능 합니다.")]),g._v(" "),C("li",[C("strong",[g._v("주소(Address)")]),g._v(": 주소는 쉽게 읽을 수 있는 prefix가 적용된 공개 string이며, 계정을 식별하는데 사용됩니다. 퍼블릭 키를 기반으로 수학적 함수를 적용해 생성됩니다.")]),g._v(" "),C("li",[C("strong",[g._v("디지털 서명(Digital Signature)")]),g._v(": 디지털 서명은 소유자의 프라이빗 키를 노출하지 않고  메시지를 서명한 프라이빗 키의 소유자를 검증하는 암호학적 정보입니다.")]),g._v(" "),C("li",[C("strong",[g._v("시드(Seed)")]),g._v(": 네모닉(mnemonic)과 동일합니다.")]),g._v(" "),C("li",[C("strong",[g._v("네모닉(Mnemonic)")]),g._v(": 네모닉은 프라이빗 키를 생성하는 단어 시리즈입니다. 모든 지갑은 관련 네모닉에서 생성됩니다. 네모닉은 절대 분실하면 안됩니다. 종이에 직접 적으시고 안전한 장소에 보관하세요. 분실 후 네모닉을 북구하는 방법은 없으며, 네모닉이 타인에게 노출될 경우, 해당 네모닉과 관련된 모든 계정의 소유권을 가지게 됩니다.")])]),g._v(" "),C("p",[g._v("모든 HD 지갑은 특정 시드에서 생성됩니다. 이 시드로 부터 유저는 결정론적으로 계쩡을 생성할 수 있습니다. 시드로 부터 계정을 생성하기 위해서는 일방형 수학적 변환을 사용합니다. 어떤 계정을 생성할지 결정하기 위해서 유저는 특정 "),C("code",[g._v("path")]),g._v("를 정의합니다. 대다수의 "),C("code",[g._v("path")]),g._v("는 "),C("code",[g._v("integer")]),g._v(" ("),C("code",[g._v("0")]),g._v(", "),C("code",[g._v("1")]),g._v(", "),C("code",[g._v("2")]),g._v(", ...) 값입니다.")]),g._v(" "),C("p",[g._v("예를 들어, "),C("code",[g._v("path")]),g._v(" 값이 "),C("code",[g._v("0")]),g._v("으로 지정된 경우, 지갑은 시드로부터 "),C("code",[g._v("Private Key 0")]),g._v("을 생성합니다. 이후 "),C("code",[g._v("Private Key 0")]),g._v("으로부터 "),C("code",[g._v("Public Key 0")]),g._v("을 생성하며, 마지막으로 "),C("code",[g._v("Public Key 0")]),g._v("으로 부터"),C("code",[g._v("Address 0")]),g._v("가 생성됩니다. 이 모든 과정을 일방적으로만 진행될 수 있습니다. 즉, "),C("code",[g._v("Address")]),g._v("로 부터 "),C("code",[g._v("Public Key")]),g._v("를 찾을 수 없고, "),C("code",[g._v("Public Key")]),g._v("로 부터 "),C("code",[g._v("Private Key")]),g._v(" 값을 찾을 수 없스비낟.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ICAgICBBY2NvdW50IDAgICAgICAgICAgICAgICAgICAgICAgICAgQWNjb3VudCAxICAgICAgICAgICAgICAgICAgICAgICAgIEFjY291bnQgMgoKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKfCAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgIHwKfCAgICBBZGRyZXNzIDAgICAgIHwgICAgICAgICAgICAgIHwgICAgQWRkcmVzcyAxICAgICB8ICAgICAgICAgICAgICAgfCAgICBBZGRyZXNzIDIgICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHVibGljIGtleSAwICAgIHwgICAgICAgICAgICAgIHwgIFB1YmxpYyBrZXkgMSAgICB8ICAgICAgICAgICAgICAgfCAgUHVibGljIGtleSAyICAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgfCAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIHwgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgfCAgICAgICAgIHwKfCAgICAgICAgKyAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgICsgICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgKyAgICAgICAgIHwKfCAgUHJpdmF0ZSBrZXkgMCAgIHwgICAgICAgICAgICAgIHwgIFByaXZhdGUga2V5IDEgICB8ICAgICAgICAgICAgICAgfCAgUHJpdmF0ZSBrZXkgMiAgIHwKfCAgICAgICAgXiAgICAgICAgIHwgICAgICAgICAgICAgIHwgICAgICAgIF4gICAgICAgICB8ICAgICAgICAgICAgICAgfCAgICAgICAgXiAgICAgICAgIHwKKy0tLS0tLS0tLS0tLS0tLS0tLSsgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0rICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLSsKICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKwogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tLS0tKy0tLS0tLS0tLSsKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICB8CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE1uZW1vbmljIChTZWVkKSAgfAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgIHwKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tLS0tLS0tLS0tLS0tLS0tLS0rCg=="}}),g._v(" "),C("p",[g._v("시드로부터 계정을 생성하는 과정은 결정론적(deterministic)입니다. 즉, 동일한 시드로 부터 동일한 "),C("code",[g._v("path")]),g._v("를 입력한 경우, 생성되는 "),C("code",[g._v("private key")]),g._v("는 언제나 동일합니다.")]),g._v(" "),C("p",[g._v("계정에 보관되어있는 자산은 프라이빗 키를 사용해 관리됩니다. 프라이빗 키는 네모닉으로 부터 일방적 함수를 적용해 생성됩니다. 만약 프라이빗 키를 분실하신 경우, 네모닉을 사용해 프라이빗 키를 다시 찾을 수 있으나, 네모닉을 분실하신 경우 연관된 모든 프라이빗 키에 대한 소유권을 잃으실 수 있습니다. 또한 유저의 네모닉이 타인에게 노출이된 경우, 네모닉과 연관된 모든 계정의 소유권을 가지게 됩니다.")]),g._v(" "),C("div",{staticClass:"custom-block danger"},[C("p",[C("strong",[g._v("24 단어로 구성된 네모닉을 누구와도 공유하지 마세요. 자산의 도난과 분실을 예방하기 위해서 다수의 네모닉 키를 안전한 곳에 보관하는 것이 좋습니다. 만약 타인이 당신의 네모닉을 소유하게 되면, 연관된 모든 계정의 소유권을 함께 가지게 됩니다.")])])])],1)}),[],!1,null,null,null);I.default=t.exports}}]);