<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '../../stores/list';

const store = useListStore();
const searchList = ref('');
const searchResult = ref([]);

const today = Date();
const minDate = ref('');
const maxDate = ref('');

const reset = computed(() => {
  console.log(today)
  if(searchResult === '') return store.list;
  
  else if (minDate.value !== '' && maxDate.value !== '') {
    console.log('321');
  }

  else return searchResult.value = store.searchList(searchList);
})
</script>

<template>
  <div class="homePage">
    <div>Home</div>
    
    <input v-model.trim="searchList" type="text" placeholder="검색어를 입력해주세요" /><br/>
    <div >
      <input v-model="minDate" type="date" /> ~ <input v-model="maxDate" type="date"/>
    </div>
    <div v-for="({title, date, contents},idx) in reset" :key="idx" class="resultForm">
      제목: {{ title }}<br>
      날짜: {{ date }}<br>
      내용: {{ contents }}<br><br>
    </div>
  </div>
</template>

<style>
.homePage {
  display: flex; 
    justify-content: center; 
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    width: 300px;

  .resultForm {
    text-align: left;
  }
}
</style>