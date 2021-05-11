import { observable } from "mobx";

// @ts-ignore
import product1 from "@/assets/images/petFood1.jpeg";
// @ts-ignore
import product2 from "@/assets/images/petFood2.jpeg";
// @ts-ignore
import product3 from "@/assets/images/petFood3.jpeg";
// @ts-ignore
import product4 from "@/assets/images/petFood4.jpeg";
// @ts-ignore
import product5 from "@/assets/images/petFood5.jpeg";
// @ts-ignore
import product6 from "@/assets/images/petFood6.jpeg";
// @ts-ignore
import product7 from "@/assets/images/petFood7.jpeg";
// @ts-ignore
import product8 from "@/assets/images/petFood8.png";
// @ts-ignore
import product9 from "@/assets/images/petFood9.png";
// @ts-ignore
import product10 from "@/assets/images/petFood10.png";

export class HomeState {
    @observable
    products = [
        {
          image: product1,
          name: "IAMS PROACTIVE HEALTH Adult Indoor Weight Control & Hairball Control Dry Cat Food with Chicken, Turkey, and Garden Greens, 22 lb. Bag",
          price: 29.97,
          freeShipping: true,
        },
        {
          image: product2,
          name: "(24 Pack) CESAR Wet Dog Food Classic Loaf in Sauce Poultry Variety Pack, 3.5 oz. Easy Peel Trays with Real Chicken, Turkey or Duck",
          price: 19.47,
          freeShipping: true,
        },
        {
          image: product3,
          name: "PEDIGREE Complete Nutrition Adult Dry Dog Food Grilled Steak & Vegetable Flavor, 46.8 lb. Bag",
          price: 25.83,
          freeShipping: false,
        },
        {
          image: product4,
          name: "Vitakraft Menu Care Complex Vitamin Fortified Pet Rabbit Food, 4 lbs.",
          price: 5.86,
          freeShipping: true,
        },
        {
          image: product5,
          name: "(40 Pack) Friskies Gravy Wet Cat Food Variety Pack, TurChicken Extra Gravy Chunky, Meaty Bits & Shreds, 5.5 oz. Cans",
          price: 20.48,
          freeShipping: true,
        },
        {
          image: product6,
          name: "Purina Cat Chow High Protein Dry Cat Food, Complete, 20 lb. Bag",
          price: 18.78,
          freeShipping: true,
        },
        {
          image: product7,
          name: "Meow Mix Original Choice Dry Cat Food, 30 Pounds",
          price: 19.94,
          freeShipping: false,
        },
        {
          image: product8,
          name: "Purina Kit & Kaboodle Dry Cat Food, Original, 30 lb. Bag",
          price: 17.98,
          freeShipping: true,
        },
        {
          image: product9,
          name: "(6 Pack) Purina ONE Natural, High Protein Gravy Wet Dog Food Variety Pack, SmartBlend Tender Cuts in Gravy, 13 oz. Cans",
          price: 8.42,
          freeShipping: true,
        },
        {
          image: product10,
          name: "(8 Pack) Friskies Natural, Grain Free Wet Cat Food Complement, Lil' Soups With Tuna in Chicken Broth, 1.2 oz. Cups",
          price: 0.94,
          freeShipping: false
        },
      ];

}