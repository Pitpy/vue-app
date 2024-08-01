        
<script setup lang="ts">
import { reactive } from 'vue';
import { useCartStore } from '@/stores/cart';

const { itemCount, viewCart } = useCartStore();

const menus = reactive([
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
]);
</script>

<template>
    <header class="p-3 sticky top-0 left-0 bg-white/50 backdrop-blur">
        <nav class="flex justify-between items-center">
            <div class="flex gap-2">
                <template v-for="menu in menus">
                    <RouterLink :to="menu.path" exact="bg-red" class="py-2 px-4 bg-slate-300 hover:bg-slate-400">{{
                        menu.name }}
                    </RouterLink>
                </template>
            </div>
            <div>
                <button class="relative" @click="viewCart()">
                    <Cart class="size-8" />
                    <span class="absolute top-0 right-0 text-xs text-white bg-red-500 px-1 rounded-full">
                        {{ itemCount() }}
                    </span>
                </button>
            </div>
        </nav>
    </header>
</template>
