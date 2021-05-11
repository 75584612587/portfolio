import { action, observable } from "mobx";
import { ICartItem } from "./cartState";

export class CurrentProductState {
    private static instance: CurrentProductState;
    public static get() {
        if (!CurrentProductState.instance) {
            CurrentProductState.instance = new CurrentProductState();
        }
        return CurrentProductState.instance;
    }

    @observable
    currentProduct?: ICartItem = undefined;

    @action
    setCurrentProduct(product: ICartItem) {
        this.currentProduct = product
        console.log(this.currentProduct)
        localStorage.setItem('currentProduct', JSON.stringify(this.currentProduct))

    }

    constructor() {
        console.log(this)
        const existingCurrentProduct = localStorage.getItem('currentProduct')
        if (existingCurrentProduct) {
            this.currentProduct = JSON.parse(existingCurrentProduct)
        }
    }
}

