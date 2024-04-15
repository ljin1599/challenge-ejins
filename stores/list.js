import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useListStore = defineStore('list', () => {
    let id = 0;

    const list = ref([])

    // list 추가
    const addList = (lists) => {
        list.value.push({
            id: id++,
            title: lists.title,
            date: lists.date,
            contents: lists.contents,
        })
    }

    const searchList = (category) => {
        return list.value.filter((list) => list.title.includes(category.value));
    }

    const searchDate = () => {
        
    }

    return { list, addList, searchList, searchDate };
}, { persist: true })

// list 서치