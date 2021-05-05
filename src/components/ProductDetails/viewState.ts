import { observable } from "mobx";
// @ts-ignore
import image150 from "@/assets/images/150.png";

export default class ViewModel {
    @observable
    quantities = [
        {
            value: 7.74,
            size: "3.5lbs",
        },
        {
            value: 13.44,
            size: "7lbs",
        },
        {
            value: 23.84,
            size: "16lbs",
        },
        {
            value: 29.97,
            size: "22lbs",
        },
    ];

    @observable
    picked = 0;

    @observable
    selectedQuantity = 1;

    @observable
    multiImages = [image150, image150, image150, image150, image150];

    constructor () {
        console.log(this)
    }
}