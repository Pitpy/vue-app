<script setup lang="ts">
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore()
</script>

<template>
    <div class="p-3">
        <p class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 to-pink-500">
            About Page
        </p>
        <button class="px-6 py-2 text-white bg-violet-500 hover:bg-violet-400 rounded-md" @click="counter.increment">
            Clicked: {{ counter.count }}
        </button>
    </div>
</template>

<style>
.router-link-active {
    @apply bg-slate-600 text-white
}
</style>