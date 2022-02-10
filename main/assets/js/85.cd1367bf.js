(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{650:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"slashing-subspace"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slashing-subspace"}},[e._v("#")]),e._v(" "),o("code",[e._v("slashing")]),e._v(" subspace")]),e._v(" "),o("p",[e._v("The "),o("code",[e._v("slashing")]),e._v(" module is responsible for enabling the Cosmos Hub to penalize any validator for an attributable violation of protocol rules by slashing (ie. partially destroying) the bonded ATOMs of their stake-backing. Penalties may include a) burning some amount of a staked bond and b) removing the ability to vote on future blocks and governance proposals for a period of time. Parameters include:")]),e._v(" "),o("table",[o("tr",[o("th",[e._v("Key")]),e._v(" "),o("th",[e._v("Value")])]),e._v(" "),e._l(e.$themeConfig.currentParameters.slashing,(function(t,a){return o("tr",[o("td",[o("a",{attrs:{href:"#"+a}},[o("code",[e._v(e._s(a))])])]),e._v(" "),o("td",[o("code",[e._v(e._s(t))])])])}))],2),e._v(" "),o("h2",{attrs:{id:"governance-notes-on-parameters"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#governance-notes-on-parameters"}},[e._v("#")]),e._v(" Governance notes on parameters")]),e._v(" "),o("h3",{attrs:{id:"signedblockswindow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#signedblockswindow"}},[e._v("#")]),e._v(" "),o("code",[e._v("SignedBlocksWindow")])]),e._v(" "),o("p",[o("strong",[e._v("Window for being offline without being slashed, in blocks.")])]),e._v(" "),o("ul",[o("li",[e._v("on-chain value: "),o("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.SignedBlocksWindow))])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-4")]),e._v(" default: "),o("code",[e._v("0.200000000000000000")])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-3")]),e._v(" default: "),o("code",[e._v("0.200000000000000000")])])]),e._v(" "),o("p",[e._v("If a validator in the active set is offline for too long, the validator will be slashed by "),o("a",{attrs:{href:"#SlashFractionDowntime"}},[o("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least the "),o("a",{attrs:{href:"#DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(", which is 10 minutes.")]),e._v(" "),o("p",[e._v("How long is being offline for too long? There are two components: "),o("code",[e._v("SignedBlocksWindow")]),e._v(" and "),o("a",{attrs:{href:"#MinSignedPerWindow"}},[o("code",[e._v("MinSignedPerWindow")])]),e._v(". Since "),o("code",[e._v("MinSignedPerWindow")]),e._v(" is 5% and "),o("code",[e._v("SignedBlocksWindow")]),e._v(" is 10,000, a validator must have signed at least 5% of 10,000 blocks (500 out of 10,000) at any given time to comply with protocol rules. That means a validator that misses 9,500 consecutive blocks will be considered by the system to have committed a liveness violation. The time window for being offline without breaking system rules is proportional to this parameter.")]),e._v(" "),o("p",[e._v("All in Bits has published more about liveness "),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/04_begin_block.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"decreasing-the-value-of-signedblockswindow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-signedblockswindow"}},[e._v("#")]),e._v(" Decreasing the value of "),o("code",[e._v("SignedBlocksWindow")])]),e._v(" "),o("p",[e._v("Decreasing the value of the "),o("code",[e._v("SignedBlocksWindow")]),e._v(" parameter will decrease the window for complying with the system's liveness rules. This will make it more likely that offline validators will be slashed by "),o("a",{attrs:{href:"#SlashFractionDowntime"}},[o("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),o("a",{attrs:{href:"#DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(". While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("p",[e._v("If we pass a proposal to cut "),o("code",[e._v("SignedBlocksWindow")]),e._v(" in half from 10,000 to 5,000 blocks, what happens?")]),e._v(" "),o("p",[e._v("Validators must now sign at least 5% of 5,000 blocks, which is 250 blocks. That means that a validator that misses 4,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),o("p",[e._v("That's ~9.25 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),o("h4",{attrs:{id:"increasing-the-value-of-signedblockswindow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-signedblockswindow"}},[e._v("#")]),e._v(" Increasing the value of "),o("code",[e._v("SignedBlocksWindow")])]),e._v(" "),o("p",[e._v("Increasing the value of the "),o("code",[e._v("SignedBlocksWindow")]),e._v(" parameter will increase the window for complying with the system's liveness rules. This will make it less likely that offline validators will be slashed by "),o("a",{attrs:{href:"#SlashFractionDowntime"}},[o("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),o("a",{attrs:{href:"#DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(".")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("p",[e._v("If we pass a proposal to double "),o("code",[e._v("SignedBlocksWindow")]),e._v(" from 10,000 to 20,000 blocks, what happens?")]),e._v(" "),o("p",[e._v("Validators must now sign at least 5% of 20,000 blocks, which is 1000 blocks. That means that a validator that misses 19,000 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),o("p",[e._v("That's ~37 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),o("h3",{attrs:{id:"minsignedperwindow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#minsignedperwindow"}},[e._v("#")]),e._v(" "),o("code",[e._v("MinSignedPerWindow")])]),e._v(" "),o("p",[o("strong",[e._v("Minimum proportion of blocks signed per window without being slashed.")])]),e._v(" "),o("ul",[o("li",[e._v("on-chain value: "),o("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.MinSignedPerWindow))])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-4")]),e._v(" default: "),o("code",[e._v("0.050000000000000000")])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-3")]),e._v(" default: "),o("code",[e._v("0.050000000000000000")])])]),e._v(" "),o("p",[e._v("If a validator in the active set is offline for too long, the validator will be slashed by "),o("a",{attrs:{href:"#SlashFractionDowntime"}},[o("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least the "),o("a",{attrs:{href:"#DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(", which is 10 minutes.")]),e._v(" "),o("p",[e._v("How long is being offline for too long? There are two components: "),o("a",{attrs:{href:"#SignedBlocksWindow"}},[o("code",[e._v("SignedBlocksWindow")])]),e._v(" and "),o("code",[e._v("MinSignedPerWindow")]),e._v(". Since "),o("code",[e._v("MinSignedPerWindow")]),e._v(" is 5% and "),o("code",[e._v("SignedBlocksWindow")]),e._v(" is 10,000, a validator must have signed at least 5% of 10,000 blocks (500 out of 10,000) at any given time to comply with protocol rules. That means a validator that misses 9,500 consecutive blocks will be considered by the system to have committed a liveness violation. The threshold-proportion of blocks is determined by this parameter, so the greater that "),o("code",[e._v("MinSignedPerWindow")]),e._v(" is, the lower the tolerance for missed blocks by the system.")]),e._v(" "),o("p",[e._v("All in Bits has published more about liveness "),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/04_begin_block.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"decreasing-the-value-of-minsignedperwindow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-minsignedperwindow"}},[e._v("#")]),e._v(" Decreasing the value of "),o("code",[e._v("MinSignedPerWindow")])]),e._v(" "),o("p",[e._v("Decreasing the value of the "),o("code",[e._v("MinSignedPerWindow")]),e._v(" parameter will increase the threshold for complying with the system's liveness rules. This will make it less likely that offline validators will be slashed by "),o("a",{attrs:{href:"#5-SlashFractionDowntime"}},[o("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),o("a",{attrs:{href:"#3-DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(". While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("p",[e._v("If we pass a proposal to cut "),o("code",[e._v("MinSignedPerWindow")]),e._v(" in half from "),o("code",[e._v("0.050000000000000000")]),e._v(" (5%) to "),o("code",[e._v("0.025000000000000000")]),e._v(" (2.5%), what happens?")]),e._v(" "),o("p",[e._v("Validators must now sign at least 2.5% of 10,000 blocks, which is 250 blocks. That means that a validator that misses 9,750 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),o("p",[e._v("That's ~19 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),o("h4",{attrs:{id:"increasing-the-value-of-minsignedperwindow"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-minsignedperwindow"}},[e._v("#")]),e._v(" Increasing the value of "),o("code",[e._v("MinSignedPerWindow")])]),e._v(" "),o("p",[e._v("Increasing the value of the "),o("code",[e._v("MinSignedPerWindow")]),e._v(" parameter will decrease the threshold for complying with the system's liveness rules. This will make it more likely that offline validators will be slashed by "),o("a",{attrs:{href:"#SlashFractionDowntime"}},[o("code",[e._v("SlashFractionDowntime")])]),e._v(" and temporarily removed from the active set for at least "),o("a",{attrs:{href:"#DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(". While out of the active set, the votes of the validator and its delegators do not count toward governance proposals.")]),e._v(" "),o("p",[o("strong",[e._v("Example:")])]),e._v(" "),o("p",[e._v("If we pass a proposal to double the "),o("code",[e._v("MinSignedPerWindow")]),e._v(" from "),o("code",[e._v("0.050000000000000000")]),e._v(" (5%) to "),o("code",[e._v("0.100000000000000000")]),e._v(" (10%), what happens?")]),e._v(" "),o("p",[e._v("Validators must now sign at least 10% of 10,000 blocks, which is 1000 blocks. That means that a validator that misses 9,000 consecutive blocks will be considered by the system to have committed a liveness violation, where previously 9,500 consecutive blocks would need to have been missed to violate these system rules.")]),e._v(" "),o("p",[e._v("That's ~17.5 hours instead of ~18.5 hours, assuming 7s block times.")]),e._v(" "),o("h3",{attrs:{id:"downtimejailduration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#downtimejailduration"}},[e._v("#")]),e._v(" "),o("code",[e._v("DowntimeJailDuration")])]),e._v(" "),o("p",[o("strong",[e._v("The suspension time (aka jail time) for a validator that is offline too long, in nanoseconds.")])]),e._v(" "),o("ul",[o("li",[e._v("on-chain value: "),o("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.DowntimeJailDuration))])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-4")]),e._v(" default: "),o("code",[e._v("600000000000")])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-3")]),e._v(" default: "),o("code",[e._v("600000000000")])])]),e._v(" "),o("p",[e._v("A validator in the active set that's offline for too long, besides being slashed, will be temporarily removed from the active set (aka \""),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/03_messages.html#unjail",target:"_blank",rel:"noopener noreferrer"}},[e._v("jailed"),o("OutboundLink")],1),e._v('") for at least '),o("a",{attrs:{href:"#DowntimeJailDuration"}},[o("code",[e._v("DowntimeJailDuration")])]),e._v(", which is 10 minutes ("),o("code",[e._v("600000000000")]),e._v(" nanoseconds). During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards. After the "),o("code",[e._v("DowntimeJailDuration")]),e._v(' period has passed, the validator operator may send an "'),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/03_messages.html#unjail",target:"_blank",rel:"noopener noreferrer"}},[e._v("unjail"),o("OutboundLink")],1),e._v('" transaction to resume validator operations.')]),e._v(" "),o("p",[e._v("All in Bits has published more about liveness "),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/04_begin_block.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("h4",{attrs:{id:"decreasing-the-value-of-downtimejailduration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-downtimejailduration"}},[e._v("#")]),e._v(" Decreasing the value of "),o("code",[e._v("DowntimeJailDuration")])]),e._v(" "),o("p",[e._v("Decreasing the value of the "),o("code",[e._v("DowntimeJailDuration")]),e._v(" parameter will require a validator to wait less time before resuming validator operations. During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards.")]),e._v(" "),o("h4",{attrs:{id:"increasing-the-value-of-downtimejailduration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-downtimejailduration"}},[e._v("#")]),e._v(" Increasing the value of "),o("code",[e._v("DowntimeJailDuration")])]),e._v(" "),o("p",[e._v("Increasing the value of the "),o("code",[e._v("DowntimeJailDuration")]),e._v(" parameter will require a validator to wait more time before resuming validator operations. During this time, a validator is not able to sign blocks and its delegators will not earn staking rewards.")]),e._v(" "),o("h3",{attrs:{id:"slashfractiondoublesign"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondoublesign"}},[e._v("#")]),e._v(" "),o("code",[e._v("SlashFractionDoubleSign")])]),e._v(" "),o("p",[o("strong",[e._v("Proportion of stake-backing that is bruned for equivocation (aka double-signing).")])]),e._v(" "),o("ul",[o("li",[e._v("on-chain value: "),o("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.SlashFractionDoubleSign))])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-4")]),e._v(" default: "),o("code",[e._v("0.050000000000000000")])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-3")]),e._v(" default: "),o("code",[e._v("0.050000000000000000")])])]),e._v(" "),o("p",[e._v('A validator proven to have signed two blocks at the same height is considered to have committed equivocation, and the system will then permanently burn ("slash") that validator\'s total delegations (aka stake-backing) by '),o("code",[e._v("0.050000000000000000")]),e._v(' (5%). All delegators to an offending validator will lose 5% of all ATOMs delegated to this validator. At this point the validator will be "'),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/01_concepts.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("tombstoned"),o("OutboundLink")],1),e._v(",\" which means the validator will be permanently removed from the active set of validators, and the validator's stake-backing will only be slashed one time (regardless of how many equivocations).")]),e._v(" "),o("h4",{attrs:{id:"decreasing-the-value-of-slashfractiondoublesign"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-slashfractiondoublesign"}},[e._v("#")]),e._v(" Decreasing the value of "),o("code",[e._v("SlashFractionDoubleSign")])]),e._v(" "),o("p",[e._v("Decreasing the value of the "),o("code",[e._v("SlashFractionDoubleSign")]),e._v(" parameter will lessen the penalty for equivocation, and offending validators will have a smaller proportion of their stake-backing burned. This may reduce the motivation for operators to ensure that their validators are secure.")]),e._v(" "),o("h4",{attrs:{id:"increasing-the-value-of-slashfractiondoublesign"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-slashfractiondoublesign"}},[e._v("#")]),e._v(" Increasing the value of "),o("code",[e._v("SlashFractionDoubleSign")])]),e._v(" "),o("p",[e._v("Increasing the value of the "),o("code",[e._v("SlashFractionDoubleSign")]),e._v(" parameter will heighten the penalty for equivocation, and offending validators will have a larger proportion of their stake-backing burned. This may increase the motivation for operators to ensure that their validators are secure.")]),e._v(" "),o("h3",{attrs:{id:"slashfractiondowntime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#slashfractiondowntime"}},[e._v("#")]),e._v(" "),o("code",[e._v("SlashFractionDowntime")])]),e._v(" "),o("p",[o("strong",[e._v("Proportion of stake that is slashed for being offline too long.")])]),e._v(" "),o("ul",[o("li",[e._v("on-chain value: "),o("code",[e._v(e._s(e.$themeConfig.currentParameters.slashing.SlashFractionDowntime))])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-4")]),e._v(" default: "),o("code",[e._v("0.000100000000000000")])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-3")]),e._v(" default: "),o("code",[e._v("0.000100000000000000")])])]),e._v(" "),o("p",[e._v('If a validator in the active set is offline for too long, the system will permanently burn ("slash") that validator\'s total delegations (aka stake-backing) by a '),o("code",[e._v("SlashFractionDowntime")]),e._v(" of "),o("code",[e._v("0.000100000000000000")]),e._v(' (0.01%). All delegators to an offending validator will lose 0.01% of all ATOMs delegated to this validator. At this point the validator will be "'),o("a",{attrs:{href:"https://docs.cosmos.network/master/modules/slashing/03_messages.html#unjail",target:"_blank",rel:"noopener noreferrer"}},[e._v("jailed"),o("OutboundLink")],1),e._v(",\" which means the validator will be temporarily removed from the active set of validators so the validator's stake-backing will only be slashed one time.")]),e._v(" "),o("h4",{attrs:{id:"decreasing-the-value-of-slashfractiondowntime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#decreasing-the-value-of-slashfractiondowntime"}},[e._v("#")]),e._v(" Decreasing the value of "),o("code",[e._v("SlashFractionDowntime")])]),e._v(" "),o("p",[e._v("Decreasing the value of the "),o("code",[e._v("SlashFractionDowntime")]),e._v(" parameter will lessen the penalty for liveness violations, and offending validators will have a smaller proportion of their stake-backing burned. This may reduce the motivation for operators to ensure that their validators are online.")]),e._v(" "),o("h4",{attrs:{id:"increasing-the-value-of-slashfractiondowntime"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#increasing-the-value-of-slashfractiondowntime"}},[e._v("#")]),e._v(" Increasing the value of "),o("code",[e._v("SlashFractionDowntime")])]),e._v(" "),o("p",[e._v("Increasing the value of the "),o("code",[e._v("SlashFractionDowntime")]),e._v(" parameter will heighten the penalty for liveness violations, and offending validators will have a larger proportion of their stake-backing burned. This may increase the motivation for operators to ensure that their validators are online.")]),e._v(" "),o("h3",{attrs:{id:"maxevidenceage"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#maxevidenceage"}},[e._v("#")]),e._v(" "),o("code",[e._v("MaxEvidenceAge")])]),e._v(" "),o("ul",[o("li",[e._v("deprecated in "),o("code",[e._v("cosmoshub-4")])]),e._v(" "),o("li",[o("code",[e._v("cosmoshub-3")]),e._v(" default: "),o("code",[e._v("1814400000000000")])])]),e._v(" "),o("p",[e._v("This parameter was present in "),o("code",[e._v("cosmoshub-3")]),e._v(", but was "),o("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/pull/5952",target:"_blank",rel:"noopener noreferrer"}},[e._v("deprecated"),o("OutboundLink")],1),e._v(" for "),o("code",[e._v("cosmoshub-4")]),e._v(" genesis.")])])}),[],!1,null,null,null);t.default=s.exports}}]);