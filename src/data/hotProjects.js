// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const hotProjects = [
	{
		id: 1,
		title: ' NostrAssets Fairmint',
		category: '怎么玩/细节/注意',
		img: require('@/assets/btc/nostr.png'),
		link:'/btc/nostrFairmint',
	},
	{
		id: 2,
		title: 'penumbra 仪式 极简版',
		category: '快速启动 penumbra 仪式',
		img: require('@/assets/hot/Penumbra.png'),
		link:'/hot/penumbra',
	},
	{
		id: 3,
		title: '关于大家热议的 Dmint',
		category: 'Atom NFT Dmint',
		img: require('@/assets/hot/dmint.png'),
		link:'/hot/dmint',
	},
	{
		id: 4,
		title: 'ATOM CLI 安装',
		category: '适用挖矿和 Dmint',
		img: require('@/assets/btc/atom.png'),
		link:'/insc/atomInstall',
	},
	{
		id: 5,
		title: 'ATOM 节点和安装',
		category: '使用更好的节点和安装',
		img: require('@/assets/insc/atom.png'),
		link:'/insc/atomNode',
	},
	{
		id: 6,
		title: 'Bitmap 和 蓝盒子 科普',
		category: ' Brc-420、 bitmap、 RCSV',
		img: require('@/assets/hot/box.png'),
		link:'/hotPoint/blueBox',
	},
	{
		id: 6,
		title: ' Backpack Exchange',
		category: ' 下一个 FTX? 以及打新攻略',
		img: require('@/assets/hot/backpack.png'),
		link:'/hotPoint/backpack',
	},
];

export default hotProjects;
