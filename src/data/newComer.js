// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Crypto 的第一课',
		category: '区块链入门',
		img: require('@/assets/newComer/crypto2.png'),
		link:'/newComer/starknet/cairo',
	},
	{
		id: 2,
		title: ' BTC 与 ETH',
		category: '比特币与以太坊',
		img: require('@/assets/newComer/btceth.png'),
		link:'/newComer/starknet/cairo',
	},
	{
		id: 3,
		title: '交易所介绍',
		category: '交易所介绍',
		img: require('@/assets/newComer/dex.png'),
		link:'/newComer/single-project',
	},
	{
		id: 4,
		title: '  web3 ',
		category: '该如何理解web3',
		img: require('@/assets/newComer/web3.png'),
		link:'/newComer/single-project',
	},
	{
		id: 5,
		title: '代币 与 NFT',
		category: ' Token',
		img: require('@/assets/newComer/nft.png'),
		link:'/newComer/single-project',
	},
	{
		id: 6,
		title: ' 怎么使用去中心化钱包 ',
		category: '生态介绍',
		img: require('@/assets/newComer/metamask.png'),
		link:'/newComer/single-project',
	},
	{
		id: 7,
		title: ' 热门项目介绍 ',
		category: ' 常用网站',
		img: require('@/assets/newComer/bananagun.png'),
		link:'/newComer/single-project',
	},
	{
		id: 8,
		title: '  Web3 学习路径 ',
		category: ' Defi Gamefi',
		img: require('@/assets/newComer/learndefi.png'),
		link:'/newComer/single-project',
	},
	{
		id: 9,
		title: '  NFT 批量 Mint 教程 ',
		category: '  NFT Mint',
		img: require('@/assets/nft/mint.png'),
		link:'/nft/mint',
	},
];

export default projects;
