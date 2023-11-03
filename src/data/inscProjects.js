// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: '什么是铭文',
		category: '怎么玩、怎么赚',
		img: require('@/assets/insc/ordiInsc.png'),
		link:'/insc/whatisinsc',
	},
	{
		id: 2,
		title: '铭文工具介绍',
		category: '监控、批量打、交易',
		img: require('@/assets/insc/bot.png'),
		link:'/projects/starknet/principle',
	},
	{
		id: 3,
		title: '比特币铭文',
		category: 'brc20快速铸造和赚钱',
		img: require('@/assets/insc/brc20.png'),
		link:'/projects/starknet/cairo',
	},
	{
		id: 4,
		title: ' nostr 闪电 ',
		category: '如何获得闪电网络空投',
		img: require('@/assets/insc/Nostr.png'),
		link:'/projects/starknet/dojo',
	},
	{
		id: 5,
		title: ' ATOM 铭文 ',
		category: 'Atom 入门到入坑',
		img: require('@/assets/insc/atom.png'),
		link:'/projects/starknet/dojo',
	},
	{
		id: 6,
		title: ' Pipe 生态 ',
		category: 'pipe 铸造教导',
		img: require('@/assets/insc/pipe.png'),
		link:'/projects/single-project',
	},
	{
		id: 7,
		title: ' ETH 铭文 ',
		category: '铭文批量、人人都是科学家',
		img: require('@/assets/insc/eths.png'),
		link:'/projects/starknet/sharp',
	},
	{
		id: 8,
		title: ' BSCS 铭文 ',
		category: '教程和交易',
		img: require('@/assets/insc/bscs.png'),
		link:'/projects/starknet/madara',
	},
];

export default projects;
