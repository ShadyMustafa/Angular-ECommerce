import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  constructor(private product:ProductsService , private cart:CartService){}
  products:any[]=[]
  sortType:string='All'
  filteredProducts:any[]=[]
  searchText:string=''
  ngOnInit(): void {
    this.product.getProducts().subscribe((data)=>{
      this.products=data
      this.filteredProducts=data
    })
  }
  search(){
    this.filteredProducts = [...this.products].filter((d)=>{
     return d.name.toLowerCase().includes(this.searchText.toLowerCase())
    })
  }
  sortByCategory(){
    switch(this.sortType){
      case 'shirts':
        this.filteredProducts = this.products.filter((product)=>product.category==='shirts')
        break
      case 'jeans':
        this.filteredProducts = this.products.filter((product)=>product.category === 'jeans')
        break
      case 'sneakers':
        this.filteredProducts = this.products.filter((product)=>product.category === 'sneakers')
        break
      default:
        this.filteredProducts = this.products
    }
  }
  addCart(product:any){
    this.cart.addCart(product)
  }
}

