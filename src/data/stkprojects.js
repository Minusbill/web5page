// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Starknet',
		category: '介绍 Starknet/l2/cairo',
		img: require('@/assets/images/starknet.jpg'),
		link:'/starknet/stkIntroduce',
	},
	{
		id: 2,
		title: 'Starknet 底层原理',
		category: 'L1 <> L2 / zk-rollup',
		img: require('@/assets/images/stkerc.png'),
		link:'/starknet/principle',
	},
	{
		id: 2,
		title: 'Starknet路线图、代币',
		category: '路线与代币模型',
		img: require('@/assets/starknet/roadmap.png'),
		link:'/starknet/roadmap',
	},
	{
		id: 3,
		title: 'Cairo',
		category: 'Cairo入门教程',
		img: require('@/assets/images/cairo.png'),
		link:'/starknet/cairo',
	},
	{
		id: 4,
		title: ' Cairo 实现ERC20 ',
		category: 'ERC20实现例子',
		img: require('@/assets/starknet/erc20.png'),
		link:'/starknet/erc20',
	},
	{
		id: 5,
		title: ' Dojo',
		category: '全链引擎学习',
		img: require('@/assets/images/dojo.png'),
		link:'/starknet/dojo',
	},
	{
		id: 6,
		title: ' Starknet 全链游戏',
		category: 'fullChainOnGame',
		img: require('@/assets/images/focg.png'),
		link:'/projects/starknet/fullChainOnGame',
	},
	{
		id: 7,
		title: ' Starknet 生态项目介绍 ',
		category: '项目介绍',
		img: require('@/assets/images/stkeco.png'),
		link:'/starknet/ecoProjects',
	},
	{
		id: 8,
		title: ' Starknet的抽象账户 ',
		category: 'Account Abstraction',
		img: require('@/assets/starknet/aa.png'),
		link: '/starknet/aa',
	},
	{
		id: 9,
		title: ' Starknet  证明器 ',
		category: 'prove/sharp',
		img: require('@/assets/images/sharp3.png'),
		link:'/starknet/sharp',
	},
	{
		id: 10,
		title: ' Starknet 排序器 ',
		category: 'madara',
		img: require('@/assets/images/madara.png'),
		link:'/starknet/madara',
	},
	{
		id: 11,
		title: ' Kakarot ',
		category: 'L3/EVM',
		img: require('@/assets/starknet/kkr.png'),
		link:'/starknet/kakarot',
	},
	{
		id: 12,
		title: ' zkml ',
		category: 'zk 机器学习',
		img: require('@/assets/starknet/zkMML.png'),
		link:'/starknet/zkml',
	},
	{
		id: 13,
		title: ' Stone ',
		category: 'Starknet 开源的证明器',
		img: require('@/assets/starknet/stone.png'),
		link:'/starknet/stone',
	},
	{
		id: 14,
		title: ' Dev Tools ',
		category: '七款受欢迎的开发工具',
		img: require('@/assets/starknet/tools.png'),
		link:'/starknet/devTools',
	},
	{
		id: 15,
		title: ' Herodotus ',
		category: 'Starknet 存储证明',
		img: require('@/assets/starknet/Herodotus.png'),
		link:'/starknet/herotus',
	},
	{
		id: 16,
		title: ' zig 语言 ',
		category: '探讨CairoVM与zig',
		img: require('@/assets/starknet/zig.png'),
		link:'/starknet/zig',
	},
	{
		id: 17,
		title: ' Starknet 生态概览',
		category: '生态介绍',
		img: require('@/assets/starknet/projects.png'),
		link: '/starknet/eco',
	},
	{
		id: 18,
		title: ' Starknet 去中心化路线',
		category: '去中心化路线',
		img: require('@/assets/starknet/dec.png'),
		link: '/starknet/dec',
	},
];

export default projects;
