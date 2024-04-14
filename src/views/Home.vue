<template>
  <div>
    <div> home(todolist.vue)</div>

    <input v-model.trim="searchList" type="text" placeholder="검색어를 입력해주세요" />
    <button @click="onSearch">검색</button>

    <div v-if="searchList === ''" v-for="list in store.list" :key="list.id">
      제목: {{ list.title }}<br>
      날짜: {{ list.date }}<br>
      내용: {{ list.contents }}<br><br>
    </div>

    <div v-else v-for="(list,idx) in reset" :key="idx">
      제목: {{ list.title }}<br>
      날짜: {{ list.date }}<br>
      내용: {{ list.contents }}<br><br>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '../../stores/list';

const store = useListStore();
const searchList = ref('');
const searchResult = ref([]);

const onSearch = (reset) => {
  return reset
  // searchResult.value = store.searchList(searchList);
}

const reset = computed(() => {
  if(searchResult == '') {
    return searchResult.value = '';
  } else {
    return searchResult.value = store.searchList(searchList);
  }
  
})
</script>

  
