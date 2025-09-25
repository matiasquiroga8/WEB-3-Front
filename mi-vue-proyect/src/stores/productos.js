import { reactive } from 'vue'

const state = reactive({
    products: [
        { id: 1, nombre: "Laptop", precio: 1200, stock: 10, descripcion: 'Una laptop potente para todas tus necesidades.' },
        { id: 2, nombre: "Mouse", precio: 25, stock: 5, descripcion: 'Un mouse ergonómico y preciso.' },
        { id: 3, nombre: "Teclado", precio: 45, stock: 7, descripcion: 'Teclado mecánico con retroiluminación.' },
        { id: 4, nombre: "Auriculares", precio: 80, stock: 0, descripcion: 'Auriculares con cancelación de ruido.' },
    ]
})

function decreaseStock(id, qty = 1) {
    const p = state.products.find(pr => pr.id === id)
    if (p && p.stock > 0) {
        p.stock = Math.max(0, p.stock - qty)
    }
}

function increaseStock(id, qty = 1) {
    const p = state.products.find(pr => pr.id === id)
    if (p) {
        p.stock += qty
    }
}

export default {
    state,
    decreaseStock,
    increaseStock
}