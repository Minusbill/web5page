<!--
  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
                         enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                         leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25"/>
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                           enter-from="-translate-x-full" enter-to="translate-x-0"
                           leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                           leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button"
                        class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                        @click="open = false">
                  <span class="absolute -inset-0.5"/>
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true"/>
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab as="template" v-for="category in navigation.categories" :key="category.name"
                         v-slot="{ selected }">
                      <button
                          :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium']">
                        {{ category.name }}
                      </button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel v-for="category in navigation.categories" :key="category.name"
                            class="space-y-10 px-4 pb-8 pt-10">
                    <div class="grid grid-cols-2 gap-x-4">
                      <div v-for="item in category.featured" :key="item.name" class="group relative text-sm">
                        <div
                            class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                          <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center"/>
                        </div>
                        <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                          <span class="absolute inset-0 z-10" aria-hidden="true"/>
                          {{ item.name }}
                        </a>

                        <p aria-hidden="true" class="mt-1">Enter</p>
                      </div>
                    </div>
                    <div v-for="section in category.sections" :key="section.name">
                      <p :id="`${category.id}-${section.id}-heading-mobile`" class="font-medium text-gray-900">
                        {{ section.name }}
                      </p>
                      <ul role="list" :aria-labelledby="`${category.id}-${section.id}-heading-mobile`"
                          class="mt-6 flex flex-col space-y-6">
                        <li v-for="item in section.items" :key="item.name" class="flow-root">
                          <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{ item.name }}</a>
                        </li>
                      </ul>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
<!--                <div class="flow-root">-->
<!--                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create account</a>-->
<!--                </div>-->
              </div>

              <div class="border-t border-gray-200 px-4 py-6">
                <a href="#" class="-m-2 flex items-center p-2">
                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt=""
                       class="block h-auto w-5 flex-shrink-0"/>
                  <span class="ml-3 block text-base font-medium text-gray-900">CAD</span>
                  <span class="sr-only">, change currency</span>
                </a>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">
<!--      <p class="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">-->
<!--        欢迎来到web5 学院</p>-->

      <nav aria-label="Top" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="flex h-16 items-center">
            <button type="button" class="relative rounded-md bg-white p-2 text-gray-400 lg:hidden" @click="open = true">
              <span class="absolute -inset-0.5"/>
              <span class="sr-only">Open menu</span>
              <Bars3Icon class="h-6 w-6" aria-hidden="true"/>
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <router-link to="/">
                <img class="h-8 w-auto" src="/Blast.png" alt=""/>
                </router-link>
              </a>
            </div>

            <!-- Flyout menus -->
            <PopoverGroup class="hidden lg:ml-8 lg:block lg:self-stretch">
              <div class="flex h-full space-x-8">
                <Popover v-for="category in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                  <div class="relative flex">
                    <PopoverButton @click="openPopover"
                        :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']" >
                      {{ category.name }}
                    </PopoverButton>
                  </div>

                  <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0"
                              enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150"
                              leave-from-class="opacity-100" leave-to-class="opacity-0">
                    <PopoverPanel class="absolute inset-x-0 top-full text-sm text-gray-500" v-if="showPopover">
                      <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                      <div class="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true"/>

                      <div class="relative bg-white">
                        <div class="mx-auto max-w-7xl px-8">
                          <div class="grid grid-cols-2 gap-x-8 gap-y-10 py-16">
                            <div class="col-start-2 grid grid-cols-2 gap-x-8">
                              <div v-for="item in category.featured" :key="item.name"
                                   class="group relative text-base sm:text-sm">
                                <div
                                    class="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                  <img :src="item.imageSrc" :alt="item.imageAlt" class="object-cover object-center"/>
                                </div>
                                <a :href="item.href" class="mt-6 block font-medium text-gray-900">
                                  <span class="absolute inset-0 z-10" aria-hidden="true"/>
                                  {{ item.name }}
                                </a>
                                <p aria-hidden="true" class="mt-1">Enter</p>
                              </div>
                            </div>
                            <div class="row-start-1 grid grid-cols-3 gap-x-8 gap-y-10 text-sm">
                              <div v-for="section in category.sections" :key="section.name">
                                <p :id="`${section.name}-heading`" class="font-medium text-gray-900">{{
                                    section.name
                                  }}</p>
                                <ul role="list" :aria-labelledby="`${section.name}-heading`"
                                    class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                  <li v-for="item in section.items" :key="item.name" class="flex">
                                    <router-link @click="togglePopover" v-if="item.link" :to="item.link" class="hover:text-gray-800">{{ item.name }}</router-link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </PopoverPanel>
                  </transition>
                </Popover>

                <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
                   class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
              </div>
            </PopoverGroup>

            <div class="ml-auto flex items-center">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true"/>
<!--                <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>-->
              </div>

<!--              <div class="hidden lg:ml-8 lg:flex">-->
<!--                <a href="#" class="flex items-center text-gray-700 hover:text-gray-800">-->
<!--                  <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt=""-->
<!--                       class="block h-auto w-5 flex-shrink-0"/>-->
<!--                  <span class="ml-3 block text-sm font-medium">CAD</span>-->
<!--                  <span class="sr-only">, change currency</span>-->
<!--                </a>-->
<!--              </div>-->

              <!-- Search -->
              <div class="flex lg:ml-6">
                <a href="#" class="p-2 text-gray-400 hover:text-gray-500">
                  <span class="sr-only">Search</span>
                  <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true"/>
                </a>
              </div>

              <!-- Cart -->
              <div class="ml-4 flow-root lg:ml-6">
                <a href="#" class="group -m-2 flex items-center p-2">
                  <UserCircleIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                   aria-hidden="true"/>
<!--                  <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>-->
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {Bars3Icon, MagnifyingGlassIcon, UserCircleIcon, XMarkIcon} from '@heroicons/vue/24/outline'

const navigation = {
  categories: [
    {
      id: 'hotLesson',
      name: 'BlastBigBang🔥',
      featured: [
        {
          name: 'Blast Big Bang',
          href: '#',
          imageSrc: 'https://blast.io/_next/image?url=%2Fimages%2Fbulletin-big-bang.png&w=640&q=75',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Blast',
          href: '#',
          imageSrc: 'https://blockcast.it/wp-content/uploads/2023/11/92f6bd4f39c4c86e2095c36dc4660430f449823a.png',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'About Blast',
          items: [
            {name: 'Blast 是什么', href: '#', link: '/projects/blast'},
            {name: 'L2 与 Blast', href: '#', link: '/l2'},
            {name: 'Blast 与 Blur', href: '#', link: '/projects/raas'},
            {name: 'Blast Earn', href: '#', link: '/sui'},
            {name: 'Lido Blur 和 Blast', href: '#', link: '/mev'},
          ],
        },
        {
          id: 'accessories',
          name: 'Join Blast',
          items: [
            {name: 'Blast 的项目', href: '#', link: '/insc'},
            {name: '参与 Blast 的机会', href: '#', link: '/insc/btc'},
            {name: 'Blast 的项目盘点', href: '#', link: '/hotpoint'},
          ],
        },
        {
          id: 'brands',
          name: 'Develop Blast',
          items: [
            {name: '关于开发 Blast 的技能', href: '#', link: '/eth'},
            {name: '怎么开发 Blast 的 Token', href: '#', link: '/projects/sol'},
            {name: 'Blast NFT', href: '#', link: '/mev'},
            {name: '怎么开发 Blast 的 Dapp', href: '#', link: '/projects/starknet'},
          ],
        },
      ],
    },
    {
      id: 'hotLesson',
      name: '热门课程',
      featured: [
        {
          name: 'Starknet',
          href: '#',
          imageSrc: 'https://www.starknet-ecosystem.com/astro_3.png',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Blast',
          href: '#',
          imageSrc: 'https://blockcast.it/wp-content/uploads/2023/11/92f6bd4f39c4c86e2095c36dc4660430f449823a.png',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: '热门课程',
          items: [
            {name: 'Starknet 研究与开发学习', href: '#', link: '/projects/starknet'},
            {name: 'L2 研究', href: '#', link: '/l2'},
            {name: 'Raas Rollup即服务', href: '#', link: '/projects/raas'},
            {name: 'Sui生态与开发', href: '#', link: '/sui'},
            {name: 'Mev 深度探索', href: '#', link: '/mev'},
            {name: '零知识证明', href: '#', link: '/zkp'},
            {name: 'Namada 隐私公链研究', href: '#', link: '/namada'},
            {name: '高性能公链 Monad', href: '#', link: '/monad'},
            {name: 'Ton公链与telegram', href: '#', link: '/projects/ton'},
          ],
        },
        {
          id: 'accessories',
          name: '比特币生态以及铭文',
          items: [
            {name: '铭文学习', href: '#', link: '/insc'},
            {name: '比特币生态', href: '#', link: '/insc/btc'},
            {name: '铭文热点', href: '#', link: '/hotpoint'},
          ],
        },
        {
          id: 'brands',
          name: '以太坊生态',
          items: [
            {name: '以太坊生态学习', href: '#', link: '/eth'},
            {name: 'Solidity', href: '#', link: '/projects/sol'},
            {name: 'EVM 以及 MEV', href: '#', link: '/mev'},
            {name: 'Defi', href: '#', link: '/projects/starknet'},
            {name: 'ETH DAPP开发', href: '#', link: '/projects/starknet'},
          ],
        },
      ],
    },
    {
      id: 'men',
      name: '新人学院',
      featured: [
        {
          name: 'Metamask',
          href: '#',
          imageSrc: 'https://elluminatimedia.s3.us-west-2.amazonaws.com/wp-content/uploads/2020/07/whatismetametamask.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Solidity',
          href: '#',
          imageSrc: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/solidity.png',
          imageAlt:
              'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: '新人入门',
          items: [
            {name: '新手村', link: '/newComer'},
            {name: '交易所', link: '/projects/starknet'},
            {name: '去中心化以及钱包', link: '/projects/starknet'},
            {name: 'DEFI以及NFT', link: '/projects/starknet'},
            {name: '热门项目介绍',  link: '/projects/starknet'},
            {name: 'Web3学习', link: '/projects/starknet'},
            {name: 'NFT学习',  link: '/projects/starknet'},
          ],
        },
        {
          id: 'accessories',
          name: '开发者入门',
          items: [
            {name: '以太坊白皮书 黄皮书',  link: '/projects/starknet'},
            {name: '开发者的学习路径',  link: '/projects/starknet'},
            {name: 'Solidity学习',  link: '/projects/starknet'},
            {name: '合约的发布以测试',  link: '/projects/starknet'},
            {name: 'DAPP开发',  link: '/projects/starknet'},
            {name: '开发进阶',  link: '/projects/starknet'},
          ],
        },
        {
          id: 'brands',
          name: '链上项目入门',
          items: [
            {name: '钱包的具体使用',  link: '/projects/starknet'},
            {name: '链上抢购', link: '/projects/starknet'},
            {name: 'BOT的学习和了解',  link: '/projects/starknet'},
            {name: 'MEV使用',  link: '/projects/starknet'},
          ],
        },
      ],
    },
  ],
  pages: [
    {name: '科技平台', href: '#'},
    {name: '-->抢救被盗钱包👨‍🚒', href: '#'},
  ],
}

const open = ref(false)

const showPopover = ref(true);

function togglePopover() {
  showPopover.value = !showPopover.value;
}
function openPopover() {
  showPopover.value = true;
}
</script>

