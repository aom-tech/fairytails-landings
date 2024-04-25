<script setup>
import { defineProps, toRefs, toRaw } from 'vue'

const { content } = defineProps({ content: Array })

const emit = defineEmits(['select'])



const onSelected = (idx, newContent) => {
    console.log('onSelected c', newContent)
    emit('select', newContent)
}
</script>

<template>
    <div>
        <template v-for="item in content">
                <div v-if="typeof item === 'object'">
                    <div v-for="(key, idx) in Object.keys(item)">
                        <input id="tab-btn-1" name="tab-btn" type="radio" value="" @change="(v) => onSelected(v, item[key])">
                        <label for="tab-btn-1">{{ idx }}. {{key}}</label>
                        <!-- <i>{{ item[key] }}</i> -->
                    </div>
                </div>
                <p v-if="typeof item === 'string'">{{ item }}</p>
                <p v-else-if="typeof item === 'string'">{{ item }}</p>
        </template>
    </div>
</template>

<style>

</style>