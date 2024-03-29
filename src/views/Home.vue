<script setup>
import AppBanner from '@/components/shared/AppBanner';
import ProjectsGrid from '../components/projects/ProjectsGrid.vue';
import Button from '../components/reusable/Button.vue';
import { inject } from '@vercel/analytics';
import Homepage from "@/views/Homepage.vue";
import {onMounted, ref} from 'vue';

const showAlert = ref(true);
const alertMessage = '欢迎来到web5，在这里你可以学习到web5各种技术';

function closeAlert() {
  showAlert.value = false;
}

onMounted(() => {
  // 在 mounted 钩子中监听全局点击事件
  document.addEventListener('click', handleClickOutside);
});

function handleClickOutside(event) {
  const alertElement = document.querySelector('.alert');
  // 检查点击的目标是否是弹窗以外的元素
  if (alertElement && !alertElement.contains(event.target)) {
    closeAlert();
  }
}

inject();
</script>

<template>
	<div class="container mx-auto">
		<!-- Banner -->
<!--		<AppBanner class="mb-5 sm:mb-8" />-->

    <Homepage />

		<!-- Projects -->
		<ProjectsGrid />

    <!-- Load more projects button -->
		<div class="mt-10 sm:mt-20 flex justify-center">
			<router-link
				to="/projects"
				class="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
				aria-label="More Projects"
			>
				<Button title="More Lesson" />
			</router-link>
		</div>
	</div>

  <div v-if="showAlert" class="overlay"></div>
  <div v-if="showAlert" class="alert">
    <h2 class="title">Web5 x BLAST Season</h2>
    <div class="content">
      <span class="message">现在是 Blast 学习/建设的季节</span><br>
      <span class="message">现在你可以在这里学习 如何建设 Blast，有机会获得未来的 Token 空投.</span><br>
      <br>
      <span class="message">如果你是普通用户 -- 你可以 在这里学习区块链的 知识和技巧</span><br>
      <span class="message">如果你是开发者 -- 你可以 学习开发区块链和 Blast</span><br>
      <span class="message">如果你是链上深度用户 -- 你可以 和我们一起探索 Blast 的 Earn</span><br>

      <br>
      <span class="message">你可以 Mint 纪念版 NFT 以参加活动 </span><br>
      <br>
      <div class="image-container">
      <img src="@/assets/eth/blast.png" alt="" class="rounded-lg bg-gray-100" style="width: 600px" />
      </div>
    </div>
    <button @click="closeAlert">Close</button>
  </div>
</template>

<style scoped>

.alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #000; /* 弹窗背景颜色 */
  color: #c6ff00; /* 文字颜色 */
  padding: 20px;
  border: 2px solid #000; /* 边框颜色 */
  border-radius: 10px;
  width: 50vw;
  max-width: 800px; /* 设置最大宽度，以免在大屏幕上变得太宽 */
  text-align: center;
  z-index: 1000; /* 确保在朦胧层之上 */
  font-weight: bold; /* 设置为粗体 */
}

.title {
  font-size: 48px; /* 设置标题字体大小 */
  margin-bottom: 10px; /* 设置标题与内容之间的间距 */
  font-style: italic; /* 设置为斜体 */
  color: #ade629; /* 设置文本颜色为黄绿色 */
}


.alert .content {
  margin-bottom: 10px;
}


.alert button {
  margin-top: 10px;
  padding: 5px 15px;
  border: none;
  background-color: #e6e6c8; /* 按钮背景颜色 */
  color: #000; /* 按钮文字颜色 */
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-weight: bold; /* 设置为粗体 */
}

.alert button:hover {
  background-color: #a6cc00; /* 按钮悬停背景颜色 */
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 半透明黑色背景 */
  z-index: 999; /* 确保在最上层 */
  pointer-events: none; /* 不阻挡鼠标事件 */
}

.image-container img {
  margin: 0 auto;
}

.message {
  font-weight: bold; /* 设置为粗体 */
  font-size: 20px; /* 设置字体大小 */
  color: #e6e6c8; /* 设置文本颜色为黄绿色 */
}

</style>
