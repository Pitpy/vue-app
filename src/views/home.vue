<script setup lang="ts">
import { useCartStore } from '@/stores/cart';

const { itemCount } = useCartStore();
</script>

<template>
    <div class="p-3">
        <p class="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-tr from-indigo-600 to-pink-500">
            Shopping
        </p>
        <div class="w-full flex flex-col lg:flex-row justify-between gap-6">
            <div class="w-full lg:w-1/2">
                <ProductCard />
            </div>
            <div v-if="itemCount()" class="w-full lg:w-1/6">
                <CartItem />
            </div>
        </div>
    </div>
</template>

<style>
.router-link-active {
    @apply bg-slate-600 text-white
}
</style>