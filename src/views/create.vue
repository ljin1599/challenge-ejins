<template>
  <div class="create">
    <h1>입력 화면</h1>
    <!-- {{ userStore.title }} -->
    {{ date }}
    <input v-model="title" type="text">
    <input type="date" v-model="date" />
    <textarea v-model="contents"></textarea>
    <button @click="goHome">확인</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import router from '@/router';
import { useUserStore } from  "../../stores/list";


export default {
  setup() {
    const title = ref(''); 
    const date = ref('');
    const contents = ref('');

    // const userStore = useUserStore;
    
    function goHome() {
      router.push({ name: 'home', state: {
      }});
    }

    return {
      title, date, contents, goHome
    }
  }
}
</script>