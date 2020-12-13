import { Component, Input, OnInit, ViewChild } from '@angular/core';
import{GetProductServiceService}from"../../services/get-product-service.service"
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { __await } from 'tslib';
import { NgForm } from '@angular/forms';
import { productModel } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
import { Route } from '@angular/compiler/src/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-edit-user-data',
  templateUrl: './edit-user-data.component.html',
  styleUrls: ['./edit-user-data.component.css']
})
export class EditUserDataComponent implements OnInit {

  selectVal=''
  options=[{id:"delivered",value:"Delivered"},{id:"notdelivered",value:"Not Delivered"},{id:"way",value:"In Way To You "}]
  poptitle=" Delete Message"
  popMessage=" Are You Sure You Want To Delete Product ?"
  poptitle1=" Update Message"
  popMessage2=" Are You Sure You Want To Update Product ?"
  confirmClicked = false;
  cancleClicked = false;
   products=[{

    productId:{name:"",
       amount:0,
       image:'',
       _id:'',
       price:0,
       description:'',
       category:''},
       _id:'',
       amount:0,
       operationDate:"",
       status:"",
       userId:{_id:'', name:'',email:""}
   }]
   amount:number=0
   @ViewChild("prodForm",{static:true}) prodForm!:NgForm
  constructor(private getService:GetProductServiceService ,private router:ActivatedRoute) {this.getAdminData()
   }

  ngOnInit(): void {
    // this.emailSer= this.router.snapshot.params["email"]
    this.getAdminData()
  }
  ngDoCheck(){
   //console.log(this.products);
  //  this.emailSer= this.router.snapshot.params["email"]
  }
  ngAfterViewInit(){ }
  ngOnChanges(){this.products}

    getAdminData(){


 this.getService.editEmpProd(this.router.snapshot.params["email"]).subscribe((data)=>{this.products=data.cardData},

    (err)=>{console.log(err);},
    ()=>{
      console.log(this.products);

    }
    )
  }

  deletesingleProd(userId:string,prodId:string){
    this.getService.EmpDeleteProduct(userId,prodId).subscribe((data)=>{

     this.getAdminData()
     return data
    })
  }


  modeifycard(userId:string ,prodId:string ){
    console.log(this.selectVal);

   this.getService.updateStatus(userId,prodId,this.selectVal).subscribe((data)=>{console.log(data);
    this.getAdminData()
   })


  }



}
