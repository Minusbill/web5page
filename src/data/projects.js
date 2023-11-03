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
		title: 'mev',
		category: 'mev/flashbots',
		img: require('@/assets/images/mev.jpg'),
		link:'/projects/single-project',
	},
	{
		id: 5,
		title: 'Monad',
		category: 'Monad',
		img: require('@/assets/images/monad.jpg'),
		link:'/projects/single-project',
	},
	{
		id: 6,
		title: 'Sui',
		category: 'Move/FGOC',
		img: require('@/assets/images/sui.jpg'),
		link:'/projects/single-project',
	},
];

export default projects;
