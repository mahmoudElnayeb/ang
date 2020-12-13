import { Component, OnInit, ViewChild } from '@angular/core';
import{GetProductServiceService}from"../../services/get-product-service.service"
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { __await } from 'tslib';
import { NgForm } from '@angular/forms';
import { productModel } from 'src/app/models/product.model';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-cartcomponent',
  templateUrl: './cartcomponent.component.html',
  styleUrls: ['./cartcomponent.component.css']
})

export class CartcomponentComponent implements OnInit {
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
       price:0,
       description:'',
       category:''},
       _id:'',
       amount:0,
       operationDate:"",
       status:"",
       userId:{name:'',email:""}
   }]
   amount:number=0
   @ViewChild("prodForm",{static:true}) prodForm!:NgForm
  constructor(private getService:GetProductServiceService) {this.getAdminData() }

  ngOnInit(): void {

    this.getAdminData()
  }
  ngDoCheck(){
   //console.log(this.products);
  }
  ngAfterViewInit(){ }
  ngOnChanges(){this.products}

    getAdminData(){
 this.getService.getAdminCartData().subscribe(data=>this.products=data.cardData,
    (err)=>{console.log(err);},
    ()=>{
      console.log(this.products);

    }
    )
  }

  deletesingleProd(prodId:string){
    this.getService.deleteSingleProductCard(prodId).subscribe((data)=>{

     this.getAdminData()
     return data
    })
  }


  modeifycard(prodId:string ,amount:number){
   if(amount!=0){


    this.getService.modifycard(prodId ,amount).subscribe((data)=>{
      this.getAdminData()
     return data
    })
   }
   else{
     this.amountVal()
   }



  }
  deleteAllCart(){
    this.getService.deleteAllfun().subscribe(data=> console.log (data))
    this.getAdminData()

  }

   amountVal(){


  if(this.amount == 0){
    Swal.fire({
      title: ' You Myst Enter Value More Than 0',
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      }
    })


  }

}
}

