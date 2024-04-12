import { defineStore } from "pinia";
// import { ref, computed } from 'vue';

// export const useListStore = defineStore("list", () => {
//     const list = ref([]);
//     function addList(param) {
//         list.value.push(param);
//     }
//     const getDataAll = computed(() => list.value);

//     return { list, addList, getDataAll };
// });

// export const userUserStore = defineStore("list", {
//     state: () => ({
//         title: null,
//     }),
//     getters: {
//         isBlank: (state) => {
//             return state.title != null;
//         },
//     },

//     actions: {},
// })


export const userUserStore = defineStore('storeUser', {
    state: () => ({
        title: '제목',
        date: '날짜',
        contents: '내용',
    }),
    persist: {
        enabled: true,
        strategies: [
            {
                storage: localStorage, paths: ['title', 'date', 'contents']
            },
        ],
    },
})