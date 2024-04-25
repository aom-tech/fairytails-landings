<script setup>
import { defineProps, ref } from 'vue'
import StoryLevel from './StoryLevel.vue'


const { content } = defineProps({ content: Array })

const levels = ref([content])

const onSelected = (idx, newContent) => {
    console.log('onSelected p', idx, newContent)
    if (levels.value.length > idx + 1) {
        levels.value.splice(idx + 1, levels.value.length - idx, newContent)
        // levels.value[idx] = newContent
    } else {
        levels.value.push(newContent)
    }
}

console.log('content', content)
</script>

<template>
    <template :id="idx" v-for="(level, idx) in levels" :key="idx" >
        -------Level: {{ idx }}
        <StoryLevel :content="level" @select="(v) => onSelected(idx, v)" />
    </template>
</template>