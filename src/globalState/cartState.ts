import { action, observable } from "mobx";

export interface ICartItem {
    name: string;
    price: number;
    product_image_url: string;
    quantity: number;
    // token: string;
}

export class CartState {
    private static instance: CartState;
    public static get() {
        if (!CartState.instance) {
            CartState.instance = new CartState();
        }
        return CartState.instance;
    }

    @observable
    cart: ICartItem[] = [];

    @action
    addItemToCart(item: ICartItem) {
        const cartItemIndex = this.cart.findIndex(cartItem => cartItem.name === item.name && cartItem.price === item.price)
        if (cartItemIndex >= 0) {
            this.cart[cartItemIndex].quantity += item.quantity;
        }
        else {
            this.cart.push(item);
        }
        localStorage.setItem('cart', JSON.stringify(this.cart))
    }

    constructor() {
        console.log(this)
        const existingCart = localStorage.getItem('cart')
        if (existingCart){
            this.cart = JSON.parse(existingCart)
        }
    }
}