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
		title: '   BTC 朋克 ',
		category: ' BTC 朋克',
		img: require('@/assets/btcnft/btcpunk.png'),
		link:'/btc/rsk',
	},
	{
		id: 5,
		title: '  BTC 域名 ',
		category: '铭文 和 符文',
		img: require('@/assets/btc/brc20.png'),
		link:'/insc/brc20',
	},
	{
		id: 6,
		title: '  Megapunk   ',
		category: ' Megapunk',
		img: require('@/assets/btc/rbg.png'),
		link:'/btc/rgb',
	},
	{
		id: 7,
		title: ' 大鹅',
		category: ' 大鹅',
		img: require('@/assets/btc/RGBSetup.png'),
		link:'/btc/rgbSetup',
	},
	{
		id: 8,
		title: '  巫师',
		category: ' 巫师',
		img: require('@/assets/btc/RGBSetup.png'),
		link:'/btc/rgbSetup',
	},

];

export default projects;
