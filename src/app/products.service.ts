import { Injectable } from '@angular/core';
import { of,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products:any[]=[
  {
    id:1,
    name:'shirt1',
    price:30,
    category:'shirts',
    imageUrl:'images/shirt1.jpeg'
  },
  {
    id:2,
    name:'shirt2',
    price:30,
    category:'shirts',
    imageUrl:'images/shirt2.webp'
  },  {
    id:3,
    name:'shirt3',
    price:30,
    category:'shirts',
    imageUrl:'images/shirt3.jpg'
  },  {
    id:4,
    name:'shirt4',
    price:30,
    category:'shirts',
    imageUrl:'images/shirt5.webp'
  }, {
    id:5,
    name:'shirt6',
    price:30,
    category:'shirts',
    imageUrl:'images/shirt6.webp'
  },  {
    id:6,
    name:'jeans1',
    price:30,
    category:'jeans',
    imageUrl:'images/jeans1.jpg'
  },  {
    id:7,
    name:'jeans2',
    price:30,
    category:'jeans',
    imageUrl:'images/jeans2.jpg'
  },  {
    id:8,
    name:'jeans3',
    price:30,
    category:'jeans',
    imageUrl:'images/jeans3.webp'
  },  {
    id:9,
    name:'jeans4',
    price:30,
    category:'jeans',
    imageUrl:'images/jeans4.webp'
  },  {
    id:10,
    name:'jeans5',
    price:30,
    category:'jeans',
    imageUrl:'images/jeans5.webp'
  },  {
    id:11,
    name:'jeans6',
    price:30,
    category:'jeans',
    imageUrl:'images/jeans6.jpg'
  },  {
    id:12,
    name:'sneakers1',
    price:30,
    category:'sneakers',
    imageUrl:'images/sneakers1.avif'
  },  {
    id:13,
    name:'sneakers2',
    price:30,
    category:'sneakers',
    imageUrl:'images/sneakers2.jpg'
  },  {
    id:14,
    name:'sneakers3',
    price:30,
    category:'sneakers',
    imageUrl:'images/sneakers3.jpg'
  },  {
    id:15,
    name:'sneakers4',
    price:30,
    category:'sneakers',
    imageUrl:'images/sneakers4.webp'
  },  {
    id:16,
    name:'sneakers5',
    price:30,
    category:'sneakers',
    imageUrl:'images/sneakers5.webp'
  },  {
    id:17,
    name:'sneakers6',
    price:30,
    category:'sneakers',
    imageUrl:'images/sneakers6.avif'
  }
]

getProducts():Observable<any>{
  return of(this.products)
}
getProductId(id:number){
  return of (this.products.find((product)=>product.id===id))
}


}
