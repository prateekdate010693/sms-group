import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 

  itemAdded = new BehaviorSubject<any>("")
  shoeCheckout = new Subject<any>()
  constructor() { 
    console.log('itemAdded',this.itemAdded)
  }
}
