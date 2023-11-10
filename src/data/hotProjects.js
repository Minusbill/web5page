// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const hotProjects = [
	{
		id: 1,
		title: 'Facet Cards',
		category: 'Facet Cards 怎么玩',
		img: require('@/assets/hot/faectcard.png'),
		link:'/hotPoint/facetCards',
	},
	{
		id: 2,
		title: ' NostrAssets Fairmint',
		category: '怎么玩/细节/注意',
		img: require('@/assets/btc/nostr.png'),
		link:'/btc/nostrFairmint',
	},
];

export default hotProjects;
