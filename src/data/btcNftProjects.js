// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		id: 1,
		title: 'BTC NFT 了解',
		category: '了解 BTC NFT',
		img: require('@/assets/btcnft/btcnft.png'),
		link:'/btc/eco',
	},
	{
		id: 2,
		title: 'BTC NFT 工具',
		category: '网站 和 工具',
		img: require('@/assets/btcnft/nfttool.png'),
		link:'/btc/lndAndTap',
	},
	{
		id: 3,
		title: '  BTC 青蛙 ',
		category: 'BTC 青蛙',
		img: require('@/assets/btcnft/frog.png'),
		link:'/btc/stx',
	},
	{
		id: 4,
		title: '  Megapunk 超级朋克 ',
		category: 'Megapunk',
		img: require('@/assets/btcnft/megapunk.png'),
		link:'/btc/rsk',
	},
	{
		id: 5,
		title: '  TaprootWizards 巫师 ',
		category: 'TaprootWizards',
		img: require('@/assets/btcnft/wizards.png'),
		link:'/insc/brc20',
	},
	{
		id: 6,
		title: '  Bitcoin Punks   ',
		category: ' 比特朋克',
		img: require('@/assets/btcnft/btcpunk.png'),
		link:'/btc/rgb',
	},
	{
		id: 7,
		title: ' Goosinals 大鹅',
		category: ' 大鹅',
		img: require('@/assets/btcnft/goosinals.png'),
		link:'/btc/rgbSetup',
	},
	{
		id: 8,
		title: '  bitmap',
		category: ' 比特币卖地',
		img: require('@/assets/btcnft/bitmap.png'),
		link:'/btc/rgbSetup',
	},

];

export default projects;
