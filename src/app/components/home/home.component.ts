import { Component, OnInit } from '@angular/core';
import { Product } from '../../interface/interface';
import { HttpService } from '../../services/http.service';
import { ServiceService } from '../../services/service.service';
import { MatSnackBar } from '@angular/material';
import { Cart } from '../../interface/cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private product : Product[]
  private badge : number
  private cart : Array<Cart>
  private totalPrice : number

  constructor( public http : HttpService , public service : ServiceService, public snackBar : MatSnackBar
    
    ) { }

  ngOnInit() {
    this.http.getproduct().subscribe(result => {
      this.product = result
    })
    this.cart = []
  }

  totalPrices(){
    this.totalPrice = 0
    this.cart.forEach(element => {
      // console.log(typeof(element.Product_price)) //เช็ค number ก่อน +
      this.totalPrice = this.totalPrice + (element.Product_price * element.Product_amount)
    }); //ไว้รีเซ็ตราคารวม
    // console.log(this.cart)
    // console.log(this.totalPrice)
  }

  badges(){
    this.badge = this.cart.length
  }

  addCart(item){
    if(!this.cart.includes(item)){
      item.Product_amount = 1
      // this.service.plusCart(item)  //ไว้เพิ่มเข้า service ตอนสุดท้าย
      this.cart.push(item)
      this.totalPrices()
      // console.log(this.badge)
      console.log(this.cart)
      console.log(this.totalPrice)
    }else{
      this.snackBar.open('มีสินค้าแล้วนะจ๊ะ', 'Done', {
        duration: 2000,
      });
    }
    this.badges()
  }

  increase(item){
    item.Product_amount += 1
    this.totalPrices()
  }
  decrease(item){
    item.Product_amount -= 1
    this.totalPrices()
  }

  delCart(item, index){
    this.cart.splice(index, 1)
    this.totalPrices()
    this.badge -= 1
  }


  // addCart(item){
  //   if(!this.service.getCart.includes(item)){
  //     item.Product_amount = 1
  //     this.service.plusCart(item)     //เพิ่มสินค้าเข้าไปใน cart service
  //     this.cart = this.service.getCart    //เพิ่มสินค้าเข้าไปใน cart home
  //     console.log(this.service.getCart)   
  //     item.Product_price =  parseInt(item.Product_price)
  //     this.totalPrice += item.Product_price
  //     console.log(this.totalPrice)
  //   }else{
  //     this.snackBar.open('มีสินค้าแล้วนะจ๊ะ', 'Done', {
  //       duration: 2000,
  //     });
  //   }
  //   this.badge = this.service.getCart.length
    
  // }

  // change(item) {
  //   item.Product_price =  parseInt(item.Product_price)
  //   this.totalPrice += item.Product_price
  // }

  // delCart(item,index){
  //   this.cart.splice(index , 1)
  //   this.badge -= 1
  //   this.totalPrice = this.totalPrice - item.Product_price
  //   console.log(this.totalPrice)
  // }
}


