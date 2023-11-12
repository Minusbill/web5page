// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const hotProjects = [
	{
		id: 1,
		title: ' NostrAssets Fairmint',
		category: '怎么玩/细节/注意',
		img: require('@/assets/btc/nostr.png'),
		link:'/btc/nostrFairmint',
	},
	{
		id: 2,
		title: 'penumbra 仪式 极简版',
		category: '快速启动 penumbra 仪式',
		img: require('@/assets/hot/Penumbra.png'),
		link:'/hot/penumbra',
	},
];

export default hotProjects;
