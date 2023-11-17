// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Starknet',
		category: 'Cairo/zk/Rust',
		img: require('@/assets/images/starknet.jpg'),
		link:'/projects/starknet',
	},
	{
		id: 2,
		title: 'Telegram/Ton',
		category: 'tg bot/ton/func/tact',
		img: require('@/assets/images/ton.jpg'),
		link:'/projects/ton',
	},
	{
		id: 3,
		title: 'Rollup as a service',
		category: 'SDK/DA',
		img: require('@/assets/images/raas.jpg'),
		link:'/projects/raas',
	},
	{
		id: 4,
		title: 'L2 Summer',
		category: 'l2/rollup',
		img: require('@/assets/images/l2.png'),
		link:'/l2',
	},
	{
		id: 5,
		title: 'Monad',
		category: 'Monad',
		img: require('@/assets/images/monad.png'),
		link:'/monad',
	},

	{
		id: 6,
		title: 'Sui',
		category: 'Move/FGOC',
		img: require('@/assets/images/sui.jpg'),
		link:'/sui',
	},{
		id: 7,
		title: 'BTC',
		category: 'BTC 生态',
		img: require('@/assets/insc/btc.png'),
		link:'/insc/btc',
	},
	{
		id: 8,
		title: 'ETH DEV',
		category: 'DeepLearn ETH',
		img: require('@/assets/images/eth.png'),
		link:'/eth',
	},
	{
		id: 9,
		title: 'MEV',
		category: 'MEV',
		img: require('@/assets/images/mev.png'),
		link:'/mev',
	},
	{
		id: 10,
		title: 'zero knowledge proof',
		category: '零知识证明',
		img: require('@/assets/images/zk.png'),
		link:'/zkp',
	},
	{
		id: 11,
		title: 'namada',
		category: 'namada',
		img: require('@/assets/images/namada.png'),
		link:'/namada',
	},
	{
		id: 12,
		title: 'Solana',
		category: 'Solana',
		img: require('@/assets/images/solana.png'),
		link:'/Solana',
	},

];

export default projects;
