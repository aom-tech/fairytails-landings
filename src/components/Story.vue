<script setup>
import { defineProps, ref } from 'vue'
import StoryLevel from './StoryLevel.vue'


const { content, storyId } = defineProps({ content: Array, storyId: Number })

const levels = ref([content])

const onSelected = (idx, newContent) => {
    if (levels.value.length > idx + 1) {
        levels.value.splice(idx + 1, levels.value.length - idx, newContent)
    } else {
        levels.value.push(newContent)
    }
}
</script>

<template>
    <template :id="idx" v-for="(level, idx) in levels" :key="idx" >
        <StoryLevel :level="idx" :content="level" :storyId="storyId" @select="(v) => onSelected(idx, v)" />
    </template>
</template>