// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'BTC 生态详解',
		category: '闪电网络/Stacks/L2',
		img: require('@/assets/insc/btceco.png'),
		link:'/btc/eco',
	},
	{
		id: 2,
		title: '闪电网络和 Taproot',
		category: 'Taproot Assets 了解',
		img: require('@/assets/btc/lighting.png'),
		link:'/btc/lndAndTap',
	},
	{
		id: 3,
		title: '  Stacks ',
		category: '比特币的 L2',
		img: require('@/assets/btc/stacks.png'),
		link:'/btc/stx',
	},
	{
		id: 4,
		title: '  Rsk ',
		category: '比特币 L2',
		img: require('@/assets/btc/rsk.png'),
		link:'/btc/rsk',
	},
	{
		id: 5,
		title: ' Ordianl 与 Runes ',
		category: '铭文 和 符文',
		img: require('@/assets/btc/brc20.png'),
		link:'/btc/ordiAndRunes',
	},
	{
		id: 6,
		title: ' Color RGB 与 ATOM ',
		category: ' 染色币的前世今生',
		img: require('@/assets/btc/rbg.png'),
		link:'/btc/rgb',
	},
	{
		id: 7,
		title: ' BitVm ',
		category: 'BitVM 的扩展',
		img: require('@/assets/btc/bitvm.png'),
		link:'/btc/bitVM',
	},
	{
		id: 8,
		title: ' BTC 工具、钱包大全',
		category: '节点 网站 工具 钱包',
		img: require('@/assets/btc/btctools.png'),
		link:'/btc/tools',
	},
	{
		id: 9,
		title: ' BTC 节点搭建',
		category: '搭建教程',
		img: require('@/assets/btc/btcnode.png'),
		link:'/btc/node',
	},
	{
		id: 10,
		title: ' Tap-Assets轻节点Mac',
		category: '安装指导',
		img: require('@/assets/insc/lnd.png'),
		link:'/btc/mac_lnd',
	},
	{
		id: 11,
		title: ' Tap-Assets轻节点Windows',
		category: '安装指导',
		img: require('@/assets/insc/lnd2.png'),
		link:'/btc/win_lnd',
	},
	{
		id: 11,
		title: ' 极速同步Bitcoin 全节点',
		category: '极速 同步',
		img: require('@/assets/btc/btcfast.png'),
		link:'/btc/fastNode',
	},
];

export default projects;
