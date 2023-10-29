// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'Starknet',
		category: 'Cairo/Dojo/Rust',
		img: require('@/assets/images/starknet.jpg'),
	},
	{
		id: 2,
		title: 'Telegram/Ton',
		category: 'tg bot/ton/func/tact',
		img: require('@/assets/images/ton.jpg'),
	},
	{
		id: 3,
		title: 'Rollup as a service',
		category: 'SDK/DA',
		img: require('@/assets/images/raas.jpg'),
	},
	{
		id: 4,
		title: 'zero-knowledge proof',
		category: 'zk starks/zk narks',
		img: require('@/assets/images/mev.jpg'),
	},
	{
		id: 5,
		title: 'Monad',
		category: 'Monad',
		img: require('@/assets/images/monad.jpg'),
	},
	{
		id: 6,
		title: 'Sui',
		category: 'Move/FGOC',
		img: require('@/assets/images/sui.jpg'),
	},
];

export default projects;
