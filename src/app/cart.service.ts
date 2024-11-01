import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

 cartItems:any[]=[]
 cartCount = new BehaviorSubject<number>(0)
 cartCount$= this.cartCount.asObservable()

 addCart(product:any){
  this.cartItems.push(product)
  this.cartCount.next(this.cartCount.value+1)
 }
 getCart(){
  return this.cartItems
 }
 deleteCart(){
  this.cartCount.next(this.cartCount.value-1)
 }
}
