import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import{GetProductServiceService}from "src/app/services/get-product-service.service"
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @ViewChild("search" ,{static:true}) search!:NgForm
  allProduct=[]
  isLoaded:boolean=true
  ErrorMessage=''
  cat=[
    {_id:"",name:""}
  ]
  constructor(private getProduct:GetProductServiceService ) {

  }

  ngOnInit(): void {
   setTimeout(() => {
    this.getAllProducts()
    this.getAllCat()
   }, 1000);
  }

  getAllProducts(){
    this.getProduct.grtProduct().subscribe((datas)=>{
      this.isLoaded=true
      this.allProduct= datas.data
    },
    (err)=>{ this.ErrorMessage = err ; this.isLoaded=false},
    ()=>{
      this.isLoaded=false
    }
    )
  }

  getAllCat(){
    this.getProduct.getcategory().subscribe(((data)=>{this.cat=data.category; console.log( "dataaaaa",data);
    }))
  }
  searchProd(event:any)
  {
    if(event.target.value=="0") {this.getAllProducts()}else{
   this.getProduct.getAllProdByCat(event.target.value).subscribe((data)=>{this.allProduct=data.data ; console.log(data);
   })}


  }
}
