import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GetProductServiceService } from 'src/app/services/get-product-service.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  @ViewChild('catform',{static:true}) catform!:NgForm
@Output() catChange:EventEmitter<any>=new EventEmitter<any>()
  cat=[
    {_id:"",name:""}
  ]
  newCat=""
  constructor(private getProduct:GetProductServiceService ) {

  }

  ngOnInit(): void {
    this.getAllCat()
  }
  getAllCat(){
    this.getProduct.getcategory().subscribe(((data)=>{this.cat=data.category; console.log( "dataaaaa",data);
    }))
  }

  addCat(cat:NgForm){
    this.getProduct.addCategory(this.newCat).subscribe(data=>{console.log(data);
      this.getAllCat()
      this.update()
    },
    (err)=>{console.log(err);
    })
  }
  ngOnChange(){

         }

  update(){
    this.catChange.emit(this.cat)
  }
}
