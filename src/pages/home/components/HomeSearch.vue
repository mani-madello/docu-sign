<script lang="ts" setup>
import { computed, ref } from 'vue';
import SignIcon from '@/components/SignIcon.vue';
import SvgSearch from '@/components/svg/SvgSearch.vue';

const keyword = defineModel();
const searchIconColor = ref('#CCCCCC');
const isShowClose = computed(() => keyword.value);

function focus() {
  searchIconColor.value = '#b7ec5d';
}

function blur() {
  searchIconColor.value = '#ffffff';
}

function clear() {
  keyword.value = '';
}
</script>

<template>
  <label class="w-[90%] relative m-3 max-w-[400px] md:absolute md:-top-16">
    <svg-search :color="searchIconColor" />
    <sign-icon
      v-show="isShowClose"
      name="close_s"
      class="absolute right-1 top-0 w-8 h-8"
      @click="clear"
    />
    <input
      v-model.trim="keyword"
      type="text"
      class="input pl-12"
      :placeholder="$t('placeholder.keyword')"
      @focus="focus"
      @blur="blur"
    />
  </label>
</template>
