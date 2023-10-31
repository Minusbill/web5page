// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const dwqProjects = [
	{
		id: 1,
		title: 'Starknet',
		category: '屎大粒',
		img: require('@/assets/images/starknet.jpg'),
		link:'/projects/starknet',
	},
	{
		id: 2,
		title: 'Soldity',
		category: '粤语 sol',
		img: require('@/assets/images/sol.png'),
		link:'/projects/sol',
	},
];

export default dwqProjects;
