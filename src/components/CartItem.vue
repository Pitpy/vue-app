<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
const { cart, removeFromCart, totalPrice, isViewCart } = useCartStore();
</script>

<template>
    <div v-if="isViewCart()">
        <div class="flex justify-between">
            <div>Your Cart Items: {{ cart.length }}</div>
            <div>Total: ${{ totalPrice() }}</div>
        </div>
        <div class="flex flex-col gap-3 py-3">
            <template v-for="product in cart">
                <div class="bg-white shadow-lg rounded-lg overflow-hidden border-solid border-2px border-gray-400">
                    <div class="p-4">
                        <h3 class="text-xl font-medium text-gray-800">{{ product.name }}</h3>
                        <div class="flex items-center justify-between mt-4">
                            <span class="text-gray-800 font-bold">${{ product.price }}</span>
                            <button @click="removeFromCart(product)"
                                class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>
