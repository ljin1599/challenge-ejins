<template>
  <div>
    <div> home</div>
    제목: {{ list.title }}
    날짜: {{ lsit.date }}
    내용: {{ list.contents }}
  </div>
</template>

<script>
import { userUserStore } from '../../stores/list'

const list = userUserStore();

export default {

}
</script>
