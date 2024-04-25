<script setup>
import { defineProps } from 'vue'

const { content, level } = defineProps({ content: Array, level: Number })

const emit = defineEmits(['select'])

const onSelected = (newContent) => {
    emit('select', newContent)
}
</script>

<template>
    <div>
        <template v-for="item in content">
            <template v-if="typeof item === 'object'">
                <form  class="flex flex-col items-start space-y-2 mt-6 mb-12">
                    Выбор:
                    <template v-for="(key, idx) in Object.keys(item)">
                        <input :id="`option-${level}-radio-${idx}`" name="tab-btn" type="radio" @change="(v) => onSelected(item[key])">
                        <label :for="`option-${level}-radio-${idx}`">{{ idx }}. {{key}}</label>
                    </template>
                </form>
            </template>
            <template v-else-if="typeof item === 'string' && item.includes('/')">
                <img class="py-2" :src="item" />
            </template>
            <template v-else >
                <p class="py-3">{{ item }}</p>
            </template>
        </template>
    </div>
</template>

<style >
.choice-tabs {
        padding: 10px 0;
    }

    .tab > input[type="radio"] {
        display: none;
    }

    .tab > input[type="radio"]:checked + label {
        @apply border-ochre text-ochre
    }   
    
    .tab {
        padding: 10px;
        @apply border border-coal;
    }

    .tab:hover {
        @apply border-ochre text-ochre
    }

    .tab:not(:first-child) {
        @apply mt-2;
    }

    .tab:has(input[type="radio"]:checked) {
        @apply border-ochre text-ochre
    }

    input[type="radio"] {
        display: none;
    }

    input[type="radio"] + label:before {
        content: "";
        @apply h-5 w-5 border-ochre border rounded-full;
    }

    input[type="radio"]:checked + label:before {
        @apply h-5 w-5 bg-ochre rounded-full;
    }

    input[type="radio"] + label {
        position: relative;
        cursor: pointer;
        display: inline-flex;
        align-items: center;
        gap: 0.8em;
        
        @apply border border-ochre text-ochre rounded-lg px-4 py-3;
    }

    /* input[type="radio"] {
  display: none;
}
label {
  position: relative;
  color: #4189e0;
  font-family: "Poppins", sans-serif;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.8em;
  border: 3px solid #4189e0;
  padding: 1em 2em;
  border-radius: 0.5em;
}
label:before {
  content: "";
  height: 2em;
  width: 2em;
  border: 3px solid #4189e0;
  border-radius: 50%;
}

input[type="radio"]:checked + label:before {
  height: 1em;
  width: 1em;
  border: 0.65em solid #ffffff;
  background-color: #4189e0;
}

input[type="radio"]:checked + label {
  background-color: #4189e0;
  color: #ffffff;
} */
</style>