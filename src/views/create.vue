<script setup>
  import { useListStore } from '../../stores/list';
  import router from '@/router';
  import { ref } from 'vue'

  const store = useListStore();
  const title = ref(''); 
  const date = ref('');
  const contents = ref('');

  // 현재 날짜 가져오기
  let today = new Date();

  var year = today.getFullYear();
  var month = "0" + (today.getMonth() + 1);
  var day = today.getDate();

  const submit = () => {
    if (title.value !== '' && contents.value !== '') {
      if (date.value === '') date.value = (year + '-' + month + '-' + day);
      store.addList({title, date, contents});
      router.push({name:'home'});
    }
  }
</script>

<template>
  <h4>Create</h4>
  <form class="createForm">
    <input v-model="title" type="text" placeholder="제목을 입력하세요." />
    <input v-model="date" type="date" />
    <textarea v-model="contents" placeholder="내용을 입력하세요."></textarea>

    <button @click.prevent="submit">등록</button>
  </form>
</template>

<style>
  .createForm {
    display: flex; 
    justify-content: center; 
    flex-direction: column;
    gap: 10px;
    margin: 0 auto;
    width: 300px;

    button {
      margin: 0 auto;
      width: 100px;
      border: none;
      border-radius: 16px;
      background-color: #0068ff;
      color: #ffffff;
    }

    textarea {
      height: 150px;
    }
  }
</style>



