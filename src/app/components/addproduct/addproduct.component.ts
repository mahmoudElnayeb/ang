import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{GetProductServiceService}from"../../services/get-product-service.service"
import{FileUploader}from"ng2-file-upload"
@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  addProduct:FormGroup
  category=[{_id:"",name:""}]
  image:FileUploader=new FileUploader({
    url:"http://localhost:3000/product/add",
    itemAlias:'image'
  })
  role="null"
  constructor(private fb:FormBuilder , private productServ:GetProductServiceService ) {

    this.getCategorys()
     this.addProduct =this.fb.group({

           name:new FormControl("",[Validators.required]),
           amount:new FormControl("",[Validators.required]),
           price:new FormControl("",[Validators.required]),
           description:new FormControl("",[Validators.required]),
           category:new FormControl("",[Validators.required]),
           userProduct:new FormControl("",[Validators.required]),
           image:new FormControl("",[Validators.required])
     })

   }

  ngOnInit(): void {
    this.image.onAfterAddingFile=(file)=>{file.withCredentials=false}
    this.role=this.getRole()

  }
  getCategorys(){
    this.productServ.getCategory().subscribe((data)=>{
      this.category=data.category
     // console.log(this.category);


    })
  }
  submit(){
    //this.addProduct.get("image")?.setValue(this.image)
   // console.log(this.addProduct.get("category")?.value);

    this.productServ.addProduct(this.addProduct.value).subscribe(data=>console.log(data)
    )

  }

  update(event:any){
   this.getCategorys()
  }
  ngOnChange(){

  }
  getRole()
  {
    let x=JSON.parse(sessionStorage.getItem("role")!)
    if(x){
      for(let i=0 ; i<x.length ;i++)
    {
      if(x[i]=='ADMIN')return "admin"
      else if(x[i]=='EMPLOYEE')return "emp"
     else  if(x[i]=='USER')return "user"
     else  if(x[i]=='SUPERADMIN')return "super"

    }
    }

    return "null"
  }
}
