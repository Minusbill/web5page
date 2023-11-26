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
		title: 'Blast 详细介绍',
		category: ' Blast:L2、空投、分数',
		img: require('@/assets/eth/blast.png'),
		link:'/eth/blast',
	},
];

export default hotProjects;
