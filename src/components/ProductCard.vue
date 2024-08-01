<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import { useCartStore } from '@/stores/cart';
const { products } = useProductStore();
const { addToCart, removeFromCart, isExist } = useCartStore();
</script>

<template>
    <div class="grid grid-cols-2 lg:grid-cols-3 gap-3 py-3">
        <template v-for="product in products">
            <div class="bg-white shadow-lg rounded-lg overflow-hidden border-solid border-2px border-gray-400">
                <div class="p-4">
                    <h3 class="text-xl font-medium text-gray-800">{{ product.name }}</h3>
                    <div class="flex items-center justify-between mt-4">
                        <span class="text-gray-800 font-bold">${{ product.price }}</span>
                        <button v-if="!isExist(product)" @click="addToCart(product)"
                            class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                            Add to Cart
                        </button>
                        <button v-else @click="removeFromCart(product)"
                            class="px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">
                            Remove
                        </button>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>
