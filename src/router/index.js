import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Home',
		}
	},
	{
		path: '/aboutUs',
		component: () =>
			import('../views/AbotUs.vue'),
		meta: {
			title: 'Web5 ｜ 关于我们',
		}
	},
	{
		path: '/projects',
		component: () =>
			import( '../views/Projects.vue'),
		meta: {
			title: 'Web5 ｜ 课程',
		}
	},
	{
		path: '/projects/single-project',
		component: () =>
			import(
				 '../views/SingleProject.vue'
			),
	},
	{
		path: '/projects/starknet',
		component: () =>
			import(
				 '../views/project/StarknetProjects.vue'
				),
		meta: {
			title: 'Web5 ｜ Starknet 生态学习',
		}
	},
	{
		path: '/projects/raas',
		component: () =>
			import(
				'../views/project/RollupAsAService.vue'
				),
		meta: {
			title: 'Web5 ｜ Raas 生态学习',
		}
	},
	{
		path: '/projects/starknet/stkIntroduce',
		component: () =>
			import(
				 '../views/lesson/Starknet.vue'
				),
	},
	{
		path: '/projects/ton/tonIntroduce',
		component: () =>
			import(
				'../views/lesson/TonIntroduce.vue'
				),
		meta: {
			title: 'Web5 ｜ Ton 介绍与入门',
		}
	},
	{
		path: '/projects/ton',
		component: () =>
			import(
				 '../views/project/TonProjects.vue'
				),
		meta: {
			title: 'Web5 ｜ Ton 生态学习',
		}
	},
	{
		path: '/projects/sol',
		component: () =>
			import(
				 '../views/lesson/Solidity.vue'
				),
	},
	{
		path: '/projects/starknet/cairo',
		component: () =>
			import(
				 '../views/lesson/Cairo.vue'
				),
	},
	{
		path: '/newComer',
		component: () =>
			import( '../views/NewComer.vue'),
		meta: {
			title: 'Web5 ｜ 新人学院',
		}
	},
	{
		path: '/dawanqu',
		component: () =>
			import( '../views/DaWanQu.vue'),
		meta: {
			title: 'Web5 ｜ 大湾区专区',
		}
	},
	{
		path: '/insc',
		component: () =>
			import( '../views/Inscription.vue'),
		meta: {
			title: 'Web5 ｜ 项目调研',
		}
	},
	{
		path: '/insc/whatisinsc',
		component: () =>
			import( '../views/insc/WhatIsInsc.vue'),
		meta: {
			title: 'Web5 ｜ 项目调研',
		}
	},
	{
		path: '/projects/ton/developTgBot',
		component: () =>
			import( '../views/lesson/DevelopTgBot.vue'),
		meta: {
			title: 'Web5 ｜ 开发一个 TG 机器人',
		}
	},
	{
		path: '/projects/ton/tact',
		component: () =>
			import( '../views/lesson/Tact.vue'),
		meta: {
			title: 'Web5 ｜ Tact 入门教程',
		}
	},
	{
		path: '/projects/starknet/dojo',
		component: () =>
			import( '../views/lesson/DojoIntro.vue'),
		meta: {
			title: 'Web5 ｜ Dojo 教程',
		}
	},
	{
		path: '/projects/starknet/principle',
		component: () =>
			import( '../views/lesson/StarknetPrinciple.vue'),
		meta: {
			title: 'Web5 ｜ Dojo 教程',
		}
	},
	{
		path: '/insc/tools',
		component: () =>
			import( '../views/lesson/InscTools.vue'),
		meta: {
			title: 'Web5 ｜ 铭文 网站和工具',
		}
	},
	{
		path: '/projects/starknet/sharp',
		component: () =>
			import( '../views/lesson/Sharp.vue'),
		meta: {
			title: 'Web5 ｜ Dojo 教程',
		}
	},
	{
		path: '/projects/starknet/fullChainOnGame',
		component: () =>
			import( '../views/lesson/StarknetFullChainOnGame.vue'),
		meta: {
			title: 'Web5 ｜ starknet 全链游戏',
		}
	},
	{
		path: '/projects/starknet/madara',
		component: () =>
			import( '../views/lesson/Madara.vue'),
		meta: {
			title: 'Web5 ｜ Madara 排序器',
		}
	},
	{
		path: '/projects/starknet/stone',
		component: () =>
			import( '../views/lesson/Stone.vue'),
		meta: {
			title: 'Web5 ｜ Stone 证明器',
		}
	},
	{
		path: '/insc/brc20',
		component: () =>
			import( '../views/lesson/Brc20.vue'),
		meta: {
			title: 'Web5 ｜ Brc20 铭文',
		}
	},
	{
		path: '/insc/btc',
		component: () =>
			import( '../views/project/BTC.vue'),
		meta: {
			title: 'Web5 ｜ BTC 生态',
		}
	},
	{
		path: '/eth',
		component: () =>
			import( '../views/project/ETH.vue'),
		meta: {
			title: 'Web5 ｜ ETH 生态',
		}
	},
	{
		path: '/l2',
		component: () =>
			import( '../views/project/L2.vue'),
		meta: {
			title: 'Web5 ｜ L2 全景',
		}
	},
	{
		path: '/insc/nostr',
		component: () =>
			import( '../views/lesson/Nostr.vue'),
		meta: {
			title: 'Web5 ｜ nostr 闪电',
		}
	},
	{
		path: '/insc/eths',
		component: () =>
			import( '../views/lesson/Eths.vue'),
		meta: {
			title: 'Web5 ｜ eths 铭文',
		}
	},
	{
		path: '/insc/pipe',
		component: () =>
			import( '../views/lesson/Pipe.vue'),
		meta: {
			title: 'Web5 ｜ pipe 铭文',
		}
	},
	{
		path: '/insc/mac_lnd',
		component: () =>
			import( '../views/lesson/LndLightSetupMac.vue'),
		meta: {
			title: 'Web5 ｜ LND 安装',
		}
	}
	,
	{
		path: '/insc/win_lnd',
		component: () =>
			import( '../views/lesson/LndLightSetupWindows.vue'),
		meta: {
			title: 'Web5 ｜ LND 安装',
		}
	}
	,
	{
		path: '/insc/atom',
		component: () =>
			import( '../views/lesson/AtomMap.vue'),
		meta: {
			title: 'Web5 ｜ ATOM 教程',
		}
	}
	,
	{
		path: '/nft/mint',
		component: () =>
			import( '../views/lesson/NFTMint.vue'),
		meta: {
			title: 'Web5 ｜ NFT Mint 教程',
		}
	}
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior() {
		document.getElementById('app').scrollIntoView();
	},
});

export default router;

/**
 * Below code will display the component/active page title
 * Powered by: Nangialai Stoman
 */

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
	// This goes through the matched routes from last to first, finding the closest route with a title.
	// e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
	// `/nested`'s will be chosen.
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);

	// Find the nearest route element with meta tags.
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	const previousNearestWithMeta = from.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	// If a route with a title was found, set the document (page) title to that value.
	if (nearestWithTitle) {
		document.title = nearestWithTitle.meta.title;
	} else if (previousNearestWithMeta) {
		document.title = previousNearestWithMeta.meta.title;
	}

	// Remove any stale meta tags from the document using the key attribute we set below.
	Array.from(
		document.querySelectorAll('[data-vue-router-controlled]')
	).map((el) => el.parentNode.removeChild(el));

	// Skip rendering meta tags if there are none.
	if (!nearestWithMeta) return next();

	// Turn the meta tag definitions into actual elements in the head.
	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement('meta');

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			// We use this to track which meta tags we create so we don't interfere with other ones.
			tag.setAttribute('data-vue-router-controlled', '');

			return tag;
		})
		// Add the meta tags to the document head.
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
