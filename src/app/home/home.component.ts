import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  addedItem : any =[]
  itemList : any = []
  show : boolean = false
  constructor(private _cartService:CartService) {
    this._cartService.itemAdded.subscribe(item =>{
      this.addedItem = item
      // console.log('this.addedItem++++++++++',this.addedItem )
    })
    this._cartService.shoeCheckout.subscribe(show =>{
      console.log('show',show)
    })
    // console.log('this.itemList++++++++++',this.itemList)
  }
  data : any = [
    {
      id: "1",
      img : "../../assets/img/1.jpg",
      shoesTitle  : "Fluidstreet Shoes",
      price : "₹3959.50"
    },
    {
      id: "2",
      img : "../../assets/img/2.jpg",
      shoesTitle  : "Grand Court Base Shoes",
      price : "₹3349.90"
    },
    {
      id: "3",
      img : "../../assets/img/3.jpg",
      shoesTitle  : "Ultimashow Shoes",
      price : "₹2429.10"
    },
    {
      id: "4",
      img : "../../assets/img/4.jpg",
      shoesTitle  : "Galaxy 5 Shoes",
      price : "₹2339.50"
    },
    {
      id: "5",
      img : "../../assets/img/5.jpg",
      shoesTitle  : "Easy Vulc 2.0 Shoes",
      price : "₹8769.90"
    },
    {
      id: "6",
      img : "../../assets/img/6.jpg",
      shoesTitle  : "Adivat Shoes",
      price : "₹6579.80"
    },
    {
      id: "7",
      img : "../../assets/img/7.jpg",
      shoesTitle  : "Easy Vulc 2.0 Shoes",
      price : "₹4559.40"
    },
    {
      id: "8",
      img : "../../assets/img/8.jpg",
      shoesTitle  : "Uniflow Shoes",
      price : "₹6758.20"
    },
    {
      id: "9",
      img : "../../assets/img/9.jpg",
      shoesTitle  : "Adivat Shoes",
      price : "₹3987.50"
    },
    {
      id: "10",
      img : "../../assets/img/10.jpg",
      shoesTitle  : "Shereton Shoes",
      price : "₹7659.50"
    },
    {
      id: "11",
      img : "../../assets/img/11.jpg",
      shoesTitle  : "ASWEEMOVE Shoes",
      price : "₹3979.10"
    },
    {
      id: "12",
      img : "../../assets/img/12.jpg",
      shoesTitle  : "Adi Trend M",
      price : "₹3759.20"
    },
    {
      id: "13",
      img : "../../assets/img/13.jpg",
      shoesTitle  : "Bound Shoes",
      price : "₹3956.50"
    },
    {
      id: "14",
      img : "../../assets/img/14.jpg",
      shoesTitle  : "Galaxy 5 Shoes",
      price : "₹3339.70"
    },
    {
      id: "15",
      img : "../../assets/img/15.jpg",
      shoesTitle  : "Adi-Pace M",
      price : "₹9879.50"
    },
    {
      id: "6",
      img : "../../assets/img/16.jpg",
      shoesTitle  : "Strret Icon M",
      price : "₹5659.90"
    },
    {
      id: "17",
      img : "../../assets/img/17.jpg",
      shoesTitle  : "Grand Court Base Shoes",
      price : "₹3769.50"
    },
    {
      id: "18",
      img : "../../assets/img/18.jpg",
      shoesTitle  : "Fassona 1.0 Shoes",
      price : "₹2345.50"
    },
    {
      id: "19",
      img : "../../assets/img/19.jpg",
      shoesTitle  : "WhirlZ Shoes",
      price : "₹3987"
    },
    {
      id: "20",
      img : "../../assets/img/20.jpg",
      shoesTitle  : "Proxima Shoes",
      price : "₹2349.50"
    },
  ]
  ngOnInit(): void {
  }
  
  addToCart(value:any){
    if(this.addedItem.length == this.itemList.length){
      this.itemList.push(value)
      this._cartService.itemAdded.next(Object.assign([],this.itemList))
      this._cartService.shoeCheckout.next(this.show = true)
    }
    else{
      this.addedItem.push(value)
      this._cartService.itemAdded.next(Object.assign([],this.addedItem))
    }
  }
  
}
