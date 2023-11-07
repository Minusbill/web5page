<script>
import feather from 'feather-icons';
import Clipboard from 'clipboard';

export default {
  props: ['projectInfo'],

  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  data() {
    return {
      showCopied: false // 控制提示信息显示的变量
    };
  },
  methods: {
    copyText(text) {
      // 创建新的clipboard对象
      const clipboard = new Clipboard(this.$el, {
        text: () => text
      });

      clipboard.on('success', () => {
        // 显示提示信息
        this.showCopied = true;

        // 设置定时器，几秒后隐藏提示信息
        setTimeout(() => {
          this.showCopied = false;
        }, 2000);

        // 释放clipboard实例
        clipboard.destroy();
      });

      clipboard.on('error', () => {
        // 处理复制失败的情况
        console.error('复制失败');
      });

      // 触发复制操作
      clipboard.onClick(event);
    }
  }
};

</script>

<template>
  <div class="block sm:flex gap-0 sm:gap-10 mt-14">
    <!-- Single project left section details -->
    <div class="w-full sm:w-1/3 text-left">
      <!-- Single project client details -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"
        >
          {{ projectInfo.clientHeading }}
        </p>
        <ul class="leading-loose">
          <li
              v-for="info in projectInfo.companyInfos"
              :key="info"
              class="font-general-regular text-ternary-dark dark:text-ternary-light"
          >
            <span>{{ info.title }}: </span>
            <a
                href="#"
                :class="
								info.title == 'Website' || info.title == 'Phone'
									? 'hover:underline cursor-pointer'
									: ''
							"
                aria-label="Project Website and Phone"
            >{{ info.details }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Single project objectives -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.objectivesHeading }}
        </p>
        <p
            class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.objectivesDetails }}
        </p>
      </div>

      <!-- Single project technologies -->
      <div class="mb-7">
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          {{ projectInfo.technologies[0].title }}
        </p>
        <p
            class="font-general-regular text-primary-dark dark:text-ternary-light"
        >
          {{ projectInfo.technologies[0].techs.join(', ') }}
        </p>
      </div>

      <!-- Single project social sharing -->
      <div>
        <p
            class="font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"
        >
          <b>捐赠的地址（为了更好发展）</b>
        </p>
        <div>
          <!-- 绑定点击事件 -->
          <div  class="flex items-center gap-3 mt-5 copy-text" @click="copyText('0x3C91bdf9232D0FDf669b10B9Af51c49c7BC78604')">0x3C91bdf9232D0FDf669b10B9Af51c49c7BC78604</div>
          <!-- 条件渲染提示信息 -->
          <div v-if="showCopied">已复制!</div>
        </div>
      </div>
    </div>

    <!-- Single project right section details -->
    <div class="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
      <p
          class="font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"
      >
        <iframe :src="projectInfo.pptUrl" frameborder="0" width="880" height="535" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>      </p>
    </div>
  </div>
</template>
