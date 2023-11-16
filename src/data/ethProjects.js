// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'ETH 白皮书',
		category: 'ETH 白皮书',
		img: require('@/assets/eth/ethWp.png'),
		link:'/btc/btcEco',
	},
	{
		id: 2,
		title: 'Solidiy',
		category: 'Solidiy',
		img: require('@/assets/images/sol.png'),
		link:'/projects/sol',
	},
	{
		id: 3,
		title: 'Plasma',
		category: 'Plasma',
		img: require('@/assets/eth/plasma.png'),
		link:'/eth/plasma',
	},
];

export default projects;
