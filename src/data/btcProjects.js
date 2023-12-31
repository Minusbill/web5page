// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'BTC 生态详解',
		category: 'BTC 生态',
		img: require('@/assets/insc/btceco.png'),
		link:'/btc/eco',
	},
	{
		id: 1,
		title: 'BTC生态导航🧭',
		category: 'BTByte',
		img: require('@/assets/btc/btbyte.png'),
		link:'/btc/BTByte',
	},
	{
		id: 2,
		title: '闪电网络',
		category: 'Taproot Assets',
		img: require('@/assets/btc/lighting.png'),
		link:'/btc/lndAndTap',
	},
	{
		id: 3,
		title: '  Stacks ',
		category: 'Stacks/STX',
		img: require('@/assets/btc/stacks.png'),
		link:'/btc/stx',
	},
	{
		id: 4,
		title: '  RSK ',
		category: 'RSK/RIF',
		img: require('@/assets/btc/rsk.png'),
		link:'/btc/rsk',
	},
	{
		id: 5,
		title: ' Ordianls ',
		category: '铭文 和 符文',
		img: require('@/assets/btc/brc20.png'),
		link:'/insc/brc20',
	},
	{
		id: 6,
		title: ' RGB  ',
		category: ' RGB的前世今生',
		img: require('@/assets/btc/rbg.png'),
		link:'/btc/rgb',
	},
	{
		id: 7,
		title: ' RGB 环境安装',
		category: ' RGB 安装',
		img: require('@/assets/btc/RGBSetup.png'),
		link:'/btc/rgbSetup',
	},
	{
		id: 8,
		title: ' BitVm ',
		category: 'BitVM 的扩展',
		img: require('@/assets/btc/bitvm.png'),
		link:'/btc/bitVM',
	},
	{
		id: 9,
		title: ' UTXO ',
		category: 'UTXO 账户模型',
		img: require('@/assets/btc/utxo.png'),
		link:'/btc/utxo',
	},
	{
		id: 10,
		title: '  BRC-20 原理 ',
		category: ' 详解 BRC20',
		img: require('@/assets/btc/brc20new.png'),
		link:'/btc/brc20new',
	},
	{
		id: 11,
		title: '  BRC-420 ',
		category: ' BTC 的元宇宙资产',
		img: require('@/assets/btc/brc420.png'),
		link:'/btc/brc420',
	},
	{
		id: 12,
		title: '  BRC-100 ',
		category: 'BRC 100 应用协议',
		img: require('@/assets/btc/brc100.png'),
		link:'/btc/brc100',
	},
	{
		id: 13,
		title: ' BTC 节点搭建',
		category: '搭建教程',
		img: require('@/assets/btc/btcnode.png'),
		link:'/btc/node',
	},
	{
		id: 14,
		title: ' Tap-Assets轻节点Mac',
		category: '安装指导',
		img: require('@/assets/insc/lnd.png'),
		link:'/insc/mac_lnd',
	},
	{
		id: 15,
		title: ' Tap-Assets轻节点Windows',
		category: '安装指导',
		img: require('@/assets/insc/lnd2.png'),
		link:'/insc/win_lnd',
	},
	{
		id: 16,
		title: ' 极速同步全节点',
		category: '极速 同步',
		img: require('@/assets/btc/btcfast.png'),
		link:'/btc/fastNode',
	},
	{
		id: 17,
		title: ' NostrAssets Fairmint',
		category: '怎么玩/细节/注意',
		img: require('@/assets/btc/nostr.png'),
		link:'/btc/nostrFairmint',
	},
	{
		id: 18,
		title: ' BTC NFT',
		category: ' 走进 BTC NFT ',
		img: require('@/assets/btc/btcnft.png'),
		link:'/btc/nft',
	},
	{
		id: 19,
		title: 'ATOM CLI 安装',
		category: '适用挖矿和 Dmint',
		img: require('@/assets/btc/atom.png'),
		link:'/insc/atomInstall',
	},
	{
		id: 20,
		title: 'Bitmap 和 蓝盒子 科普',
		category: ' Brc-420、 bitmap、 RCSV',
		img: require('@/assets/hot/box.png'),
		link:'/hotPoint/blueBox',
	},
	{
		id: 5,
		title: 'ATOM 节点和安装',
		category: '更好的节点和安装',
		img: require('@/assets/insc/atom.png'),
		link:'/insc/atomNode',
	},
	{
		id: 6,
		title: 'MacOS electrum X',
		category: '非docker原生安装',
		img: require('@/assets/insc/atom.png'),
		link:'/hotPoint/macosElectrum',
	},
	{
		id: 7,
		title: 'Windows electrum X',
		category: '非docker原生安装',
		img: require('@/assets/insc/atom.png'),
		link:'/hotPoint/windowsElectrum',
	},

];

export default projects;
