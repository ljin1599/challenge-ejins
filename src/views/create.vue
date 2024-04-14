<template>
  <div>
    <h4>생성 페이지</h4>

    <input v-model.trim="title" type="text" placeholder="제목을 입력하세요." />
    <input v-model="date" type="date" />
    <textarea v-model="contents"></textarea>

    <button @click="submit">등록</button>
  </div>
</template>

<script setup>
import { useListStore } from '../../stores/list';
import router from '@/router';
import { ref } from 'vue'

const store = useListStore();
const title = ref(''); 
const date = ref('');
const contents = ref('');

const submit = () => {
  store.addList({title, date, contents});
  router.push({name:'home'});
}
</script>