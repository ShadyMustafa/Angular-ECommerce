import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  constructor(private cart:CartService){}
  cartItems:any[]=[]

  ngOnInit(): void {
    this.cartItems = this.cart.getCart()
  }

  get cartSummary(){
    return this.cartItems.reduce((acc,item)=>acc+item.price,0)
  }

  deleteItem(id:number):void{
     this.cartItems=this.cartItems.filter((d)=>d.id!==id)
    this.cart.deleteCart()
  }
}
