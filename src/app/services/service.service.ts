import { Injectable } from '@angular/core';
import { Product } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private cart : Product[] = []

  constructor() {}

  plusCart(item){
    this.cart.push(item)
  }
  
  get getCart() {
    //เอาไว้ console.log
    return this.cart
  }

}
