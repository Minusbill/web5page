// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Starknet',
		category: '介绍 Starknet/l2/cairo',
		img: require('@/assets/images/starknet.jpg'),
		link:'/projects/starknet/stkIntroduce',
	},
	{
		id: 2,
		title: 'Starknet 底层原理',
		category: 'L1 <> L2 / zk-rollup',
		img: require('@/assets/images/stkerc.png'),
		link:'/projects/starknet/principle',
	},
	{
		id: 3,
		title: 'Cairo',
		category: 'Cairo入门教程、视频',
		img: require('@/assets/images/cairo.png'),
		link:'/projects/starknet/cairo',
	},
	{
		id: 4,
		title: ' Dojo ',
		category: '全链引擎',
		img: require('@/assets/images/dojo.png'),
		link:'/projects/starknet/dojo',
	},
	{
		id: 5,
		title: ' Starknet 全链游戏',
		category: 'fullChainOnGame',
		img: require('@/assets/images/focg.png'),
		link:'/projects/starknet/fullChainOnGame',
	},
	{
		id: 6,
		title: ' Starknet 生态 ',
		category: '生态介绍',
		img: require('@/assets/images/stkeco.png'),
		link: '/projects/starknet/eco',
	},
	{
		id: 7,
		title: ' Starknet的抽象账户 ',
		category: 'Account Abstraction',
		img: require('@/assets/starknet/aa.png'),
		link: '/projects/starknet/aa',
	},
	{
		id: 8,
		title: ' Starknet  证明器 ',
		category: 'prove/sharp',
		img: require('@/assets/images/sharp3.png'),
		link:'/projects/starknet/sharp',
	},
	{
		id: 9,
		title: ' Starknet 排序器 ',
		category: 'madara',
		img: require('@/assets/images/madara.png'),
		link:'/projects/starknet/madara',
	},
	{
		id: 10,
		title: ' Kakarot ',
		category: 'L3/EVM',
		img: require('@/assets/starknet/kakarot.png'),
		link:'/projects/starknet/kakarot',
	},
	{
		id: 11,
		title: ' zkml ',
		category: 'zk 机器学习',
		img: require('@/assets/starknet/zkMML.png'),
		link:'/projects/starknet/zkml',
	},
	{
		id: 12,
		title: ' Stone ',
		category: 'Starknet 开源的证明器',
		img: require('@/assets/starknet/stone.png'),
		link:'/projects/starknet/stone',
	},
	{
		id: 13,
		title: ' Dev Tools ',
		category: '七款受欢迎的开发工具',
		img: require('@/assets/starknet/tools.png'),
		link:'/projects/starknet/devTools',
	},
	{
		id: 14,
		title: ' Herodotus ',
		category: 'Starknet 存储证明',
		img: require('@/assets/starknet/Herodotus.png'),
		link:'/projects/starknet/herotus',
	},
	{
		id: 15,
		title: ' zig 语言 ',
		category: '探讨CairoVM与zig',
		img: require('@/assets/starknet/zig.png'),
		link:'/projects/starknet/zig',
	},

];

export default projects;
