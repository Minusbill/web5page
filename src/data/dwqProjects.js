// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const dwqProjects = [
	{
		id: 1,
		title: 'Soldity',
		category: '粤语学习 sol',
		img: require('@/assets/images/learnsolidity.png'),
		link:'/projects/sol',
	},
	{
		id: 2,
		title: 'Animoca Brands',
		category: '了解 Animoca Brands',
		img: require('@/assets/dawanqu/animoca.png'),
		link:'/Animoca',
	},{
		id: 3,
		title: ' Memeland',
		category: 'memeland',
		img: require('@/assets/dawanqu/memeland.png'),
		link:'/memeland',
	},
	{
		id: 4,
		title: ' NFT ',
		category: '白话 NFT',
		img: require('@/assets/dawanqu/nft.png'),
		link:'/NFT',
	},
];

export default dwqProjects;
