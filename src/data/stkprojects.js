// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Starknet',
		category: '介绍 Starknet/l2/cairo',
		img: require('@/assets/images/starknet.jpg'),
		link:'/projects/starknet/cairo',
	},
	{
		id: 2,
		title: 'Cairo',
		category: 'Cairo入门教程、视频',
		img: require('@/assets/images/cairo.png'),
		link:'/projects/starknet/cairo',
	},
	{
		id: 3,
		title: 'Cairo 实战',
		category: ' ERC20/721 等',
		img: require('@/assets/images/stkerc.png'),
		link:'/projects/single-project',
	},
	{
		id: 4,
		title: ' Dojo ',
		category: '全链引擎',
		img: require('@/assets/images/dojo.png'),
		link:'/projects/single-project',
	},
	{
		id: 5,
		title: ' 全链游戏',
		category: ' Dark Forest、 StarkLand',
		img: require('@/assets/images/focg.png'),
		link:'/projects/single-project',
	},
	{
		id: 6,
		title: ' Starknet 生态 ',
		category: '生态介绍',
		img: require('@/assets/images/stkeco.png'),
		link:'/projects/single-project',
	},
	{
		id: 7,
		title: ' Starknet  证明器 ',
		category: 'prove/sharp',
		img: require('@/assets/images/sharp3.png'),
		link:'/projects/single-project',
	},
	{
		id: 8,
		title: ' Starknet 排序器 ',
		category: 'madara',
		img: require('@/assets/images/madara.png'),
		link:'/projects/single-project',
	},
];

export default projects;
