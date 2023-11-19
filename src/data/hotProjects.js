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
		title: 'MacOS electrum X',
		category: '非docker、原生安装',
		img: require('@/assets/insc/atom.png'),
		link:'/hotPoint/macosElectrum',
	},
	{
		id: 7,
		title: 'Windows electrum X',
		category: '非docker、原生安装',
		img: require('@/assets/insc/atom.png'),
		link:'/hotPoint/windowsElectrum',
	},
	{
		id: 8,
		title: 'EVM 铭文， 他到底是什么',
		category: ' EVM 和 非 EVM 铭文',
		img: require('@/assets/hot/EVM.png'),
		link:'/hotPoint/whatIsEvmInsc',
	},

];

export default hotProjects;
