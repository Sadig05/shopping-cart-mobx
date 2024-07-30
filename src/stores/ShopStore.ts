import { makeAutoObservable } from "mobx";
import { IProduct } from "../models/Shop";
import { toast } from "react-toastify";

class ShopStore {
    products: IProduct[] = JSON.parse(localStorage.getItem("cartItems") || "[]");
    mainPage: boolean = true;
    size: number = JSON.parse(localStorage.getItem("cartItems") || "[]").length;
    constructor() {
        makeAutoObservable(this);
    }

    addToCart = (product: IProduct) => {
        let isFound = this.products.some(el => el.id === product.id);
    
        if (!isFound) {
          this.products = [...this.products, product];
          localStorage.setItem("cartItems", JSON.stringify(this.products));
          this.size = this.products.length;
          
          toast.success('Item added to cart!', {
            position: "bottom-left",
            autoClose: 3000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        } else {
          let index = this.products.findIndex(el => el.id === product.id);
          this.products[index].amount += 1;
          localStorage.setItem("cartItems", JSON.stringify(this.products));
        }
      }

    removeFromCart = (id: number) => {
        this.products = this.products.filter((product: IProduct) => product.id != id)   
        this.size = this.products.length;
        localStorage.setItem("cartItems", JSON.stringify(this.products))
    }

    incAmount = (product: IProduct) => {
        let index = this.products.indexOf(product);
        this.products[index].amount += 1;
        localStorage.setItem("cartItems", JSON.stringify(this.products))
    };

    decAmount = (product: IProduct) => {
        if(product.amount >= 2){
            let index = this.products.indexOf(product);
            this.products[index].amount -= 1;
            localStorage.setItem("cartItems", JSON.stringify(this.products))
        }
    }

    get totalPrice(): number {        
        return this.products.reduce((prev, {amount, price}) => {
            return prev + amount * price
        }, 0)
    }



    showMainPage = () => { 
        this.mainPage = true;
    };

    showCart = () => {
        this.mainPage = false;
    };
}

export default ShopStore;
