<template>
  <div class="bg-white">
    <div class="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 class="font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light">欢迎来到 Web5 平台</h2>
        <p class="mt-4 text-gray-500">在这里，无论你是 Web3 新人、区块链项目开发者、项目方 或者是 铭文爱好者、比特币生态爱好者等等，都可以找到你想要的.</p>

        <dl class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
          <div v-for="feature in features" :key="feature.name" class="border-t border-gray-200 pt-4">
            <router-link
                :to="feature.link"
                aria-label="Projects"
            >
            <dt class="font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2">{{ feature.name }}</dt>
            <dd 				class="font-general-medium text-lg text-ternary-dark dark:text-ternary-light"
            >{{ feature.description }}</dd>
            </router-link>
          </div>
        </dl>
      </div>
      <div class="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="@/assets/newComer/metamask.png" alt="Walnut card tray with white powder coated steel divider and 3 punchout holes." class="rounded-lg bg-gray-100" />
        <img src="@/assets/insc/btc.png" alt="Top down view of walnut card tray with embedded magnets and card groove." class="rounded-lg bg-gray-100" />
        <img src="@/assets/images/starknet.jpg" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
        <img src="@/assets/products/btccat.png" alt="Walnut card tray filled with cards and card angled in dedicated groove." class="rounded-lg bg-gray-100" />
        <img src="@/assets/ton/tgbot.png" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />
        <img src="@/assets/btcnft/megapunk.png" alt="Side of walnut card tray with card groove and recessed card area." class="rounded-lg bg-gray-100" />

      </div>
    </div>
  </div>
</template>

<script setup>
const features = [
  { name: '热门课程', description: '了解最新的区块链前沿项目和技术',link:"/projects" },
  { name: '新人学院', description: '拥有新入门的全套课程和流程培训',link:"/newComer"  },
  { name: '比特币生态和铭文', description: '了解当前最热门的比特币铭文概念',link:"/insc"  },
  { name: '每天热点', description: '跟踪和解释每天热点题材和项目',link:"/hotPoint"  },
  { name: '开发平台', description: '与行业开发者沟通和合作',link:"/dev/products"  },
  { name: '科技宝箱', description: ' Web5研发/合作的科技工具',link:""  },
]
</script>
