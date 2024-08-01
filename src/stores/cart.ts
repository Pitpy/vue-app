import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
    const cart = reactive<any[]>([])
    const view = ref(false);

    const addToCart = (item: any) => cart.push(item)

    const removeFromCart = (product: any) => cart.splice(cart.indexOf(product), 1)

    const isExist = (item: any) => cart.includes(item)

    const itemCount = () => cart.length

    const totalPrice = () => cart.reduce((acc, item) => acc + item.price, 0)

    const viewCart = () => view.value = !view.value

    const isViewCart = () => view.value

    return { cart, addToCart, removeFromCart, isExist, itemCount, totalPrice, isViewCart, viewCart }
})