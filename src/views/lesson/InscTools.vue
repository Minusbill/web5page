<script setup>
import { onMounted, onUpdated } from 'vue';
import feather from 'feather-icons';
import ProjectHeader from '../../components/web5Component/Web5Header.vue';
import ProjectInfo from '../../components/web5Component/Web5ProjectInfo.vue';
import ProjectInfo2 from '../../components/web5Component/Web5ProjectInfo2.vue';
import ProjectRelatedProjects from '../../components/projects/ProjectRelatedProjects.vue';

const singleProjectHeader = {
  singleProjectTitle: '铭文网站 和 工具',
  singleProjectDate: 'Nov 3, 2023',
  singleProjectTag: 'insc / tools',
};
const projectImages = [

];

const projectInfo = {
  clientHeading: 'About Client',
  companyInfos: [

  ],
  objectivesHeading: '',
  objectivesDetails: '',
  technologies: [
    {

    },
  ],
  projectDetailsHeading: 'Challenge',
  projectDetails: [
    {
      id: 1,
      header: "BRC 主要网站 / 工具",
      details: 'BRC20(BRC20/NFT) : https://unisat.io/brc20',
    },
    {
      id: 2,
      details: 'mempool(内存、交易查看)：https://mempool.space/zh/',
    },
    {
      id: 3,
      details: '价格排名查看：https://ordspace.org/brc20',
    },
    {
      id: 4,
      details: '其他的铸造网站：https://idclub.io/brc20  、 https://looksordinal.com/',
    },
    {
      id: 5,
      header: "BTC 生态钱包",
      details: 'UniSat Wallet -UNI 钱包，通用插件钱包',
    },
    {
      id: 6,
      details: 'OK 钱包 - 功能全面钱包，越来越多人用',
    },
    {
      id: 7,
      details: 'Sparrow Wallet - 麻雀钱包，功能强大，可免密',
    },
    {
      id: 8,
      details: '其他钱包：Ordinals Wallet、Hiro Wallet、Xverse（APP） 等 ',
    },
    {
      id: 9,
      header: "监控",
      details: '推荐使用 MCT BTC 监控（免费）：https://mct.xyz/inscribe/monitor',
    },
    {
      id: 10,
      header: "——————",
      details:'',
    },
    {
      id: 11,
      header: "ATOM 网站/工具/可看进度",
      details: '主要网站：https://www.satsx.io/ 、https://atomicalmarket.com/',
    },
    {
      id: 12,
      header: "ATOM 钱包",
      details: 'Atomicals Wallet（当前有 BUG 慎重）：https://atomicalswallet.com/ ',
    },
    {
      id: 13,
      header: "——————",
      details: '',
    },
    {
      id: 14,
      header: "PIPE",
      details: '网站 ：https://ppline.app 、https://inspip.com 、satsx.io ',
    },
    {
      id: 15,
      header: "PIPE 钱包",
      details: 'xverse : https://www.xverse.app/',
    },
    {
      id: 16,
      header: "——————",
      details: '',
    },
    {
      id: 17,
      header: "ETHS",
      details: '网站：https://etch.market/ 、https://ethscriptions.com/',
    },
    {
      id: 18,
      details: '批量打 工具：https://www.nftsniper.club/',
    },
    {
      id: 19,
      header: "——————",
      details: '',
    },

    {
      id: 20,
      header: "Nostr Assets",
      details: '网站：https://mainnet.nostrassets.com/',
    },
    {
      id: 21,
      header: "Nostr 钱包",
      details: 'https://getalby.com/ ',
    },
  ],
  socialSharingsHeading: '',
  socialSharings: [

  ],
};


const projectInfo2 = {
  clientHeading: 'About Client',
  companyInfos: [

  ],
  objectivesHeading: 'Objective',
  objectivesDetails: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.',
  technologies: [
    {
      title: 'Tools & Technologies',
      techs: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'TailwindCSS', 'AdobeXD'],
    },
  ],
  projectDetailsHeading: 'Starknet 工作原理',
  projectDetails: [
    {
      id: 1,
      details: '1. 用户发起交易，并将交易发送给 Squencer 进行验证、排序和执行，并打包批次。目前 StarkNet 系统中只有一个 StarkWare 官方掌握的 Sequencer，但 StarkWare 团队计划后续将 Squencer 去中心化；Squencer 通过 Cairo OS 来执行交易，扮演了 EVM 的角色。',
    },
    {
      id: 2,
      details: '2. Squencer 将执行交易的踪迹递交给 Prover，由 Prover 对计算完整性生成一个有效性证明。执行踪迹是生成 zkp 的核心，记录执行踪迹是 Cairo 语言的 zk 友好特性；这里的 Prover 也为 StarkEx 生成有效性证明，且可以聚合来自不同 StarkEx 应用和 StarkNet 的交易，实现共享。',
    },
    {
      id: 3,
      details: '3. Squencer 和 Prover 将有效性证明和全局状态变化发送给全节点进行记录。全节点基于 P2P 网络构建，负责记录整个 Layer2 网络的交易历史和以太坊主网上与 Layer2 相关的交易。',
    },
    {
      id: 4,
      details: '4. Prover 将有效性证明递交给主网上的 Verifier。Verifier 是部署在以太坊主网上的智能合约，负责收取并验证 Prover 提供的有效性证明。',
    },
    {
      id: 5,
      details: '5. Verifier 将验证过的结果发送至主网上的 StarkNet Core 合约进行记录和保存。StarkNet Core 合约部署在以太坊主网上，用于接收 Layer2 全局状态变化信息，包括状态哈希以及数据可用性；经过 Verifier 验证过的结果是一串状态哈希，由 Verifier 写入一笔新的 Layer1 交易，并传递给 Core 合约进行保存。',
    },
    {
      id: 6,
      details: '6. StarkNet Core 合约接收到验证结果（状态哈希）后，从 Layer2 接收「Call data」形式的数据可用性并保存。该数据会同步给 Layer2 的全节点进行解码，以保证全节点能够记录和重建 Layer2 的历史交易；在 Validium 方案中，StarkNet Core 合约不保存数据可用性，仅保存状态哈希。',
    },
  ],
}
const relatedProject = {
  relatedProjectsHeading: 'Related Projects',
  relatedProjects: [
    {
      id: 1,
      title: 'Mobile UI',
      img: require('@/assets/images/starknet.jpg'),
    },
    {
      id: 2,
      title: 'Web Application',
      img: require('@/assets/images/raas.jpg'),
    },
    {
      id: 3,
      title: 'UI Design',
      img: require('@/assets/images/sui.jpg'),
    },
    {
      id: 4,
      title: 'Kabul Mobile App UI',
      img: require('@/assets/images/mev.jpg'),
    },
  ],
};


onMounted(() => {
  feather.replace();
});

onUpdated(() => {
  feather.replace();
});
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
<!--    <ProjectGallery :projectImages="projectImages" />-->

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

<!--    <ProjectInfo2 :projectInfo="projectInfo2" />-->

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
