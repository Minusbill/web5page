<script setup>
import {defineProps} from 'vue'
import AppFlowMenu from "@/components/shared/AppFlowMenu.vue";
import InscFlowMenu from "@/components/shared/InscFlowMenu.vue";
import DevLabs from "@/components/shared/DevLabs.vue";
import HotMenu from "@/components/shared/HotMenu.vue";

// 使用 defineProps 在 <script setup> 中声明 props
const props = defineProps({
  showModal: Boolean,
  isOpen: Boolean,
})
</script>


<template>
  <!-- Header links -->
  <!--  <AppFlowMenu />-->

  <div
      :class="isOpen ? 'block' : 'hidden'"
      class="m-0 sm:ml-4 mt-5 sm:mt-3 sm:flex p-5 sm:p-0 justify-center items-center shadow-lg sm:shadow-none"
  >
    <HotMenu/>
    <AppFlowMenu/>
    <InscFlowMenu/>
    <DevLabs/>
    <div
        class="border-t-2 pt-3 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark"
    >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
