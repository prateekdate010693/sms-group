import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  img : string ="";
  title : string =""
  price : string =""
  addedItem : any = []
  totalPrice : any;
  show : boolean = false
  constructor(private _cartService:CartService,private modalService:NgbModal) {
    this._cartService.itemAdded.subscribe(item =>{
      this.addedItem = item
    });
    this._cartService.shoeCheckout.subscribe(show =>{
      console.log('show',show)
      this.show = show
    })
  }
  ngOnInit(): void {
  }
  delete(val:any){
    console.log('val',val)
    this.addedItem.splice(val,1)
    // console.log('this.addedItem',this.addedItem)
    this._cartService.itemAdded.next(this.addedItem)

  }
  open(content :any) {
    this.modalService.open(content,
      
   {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
      console.log('result',result)
    }, (reason) => {
      // this.closeResult = 
      //    `Dismissed ${this.getDismissReason(reason)}`;
      console.log('reason',reason)
    });
    var priceInNumber : Number
    const result = this.addedItem.map((el : any,index:any) => {
      var price = el.price.substring(1)
      priceInNumber = Number(price)
      return priceInNumber;
    })
    const sum = result.reduce(function(sum:any, number : any) {
      const updatedSum = sum + number;
      return updatedSum;
    }, 0);
    this.totalPrice = "₹" + sum + "0"
  }
}
