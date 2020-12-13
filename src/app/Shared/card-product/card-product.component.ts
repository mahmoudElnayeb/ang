import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { GetProductServiceService} from "../../services/get-product-service.service"
@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {
   amount=1
  @Input() product:any
  constructor(private getProduct:GetProductServiceService ,private router:Router) { }

  ngOnInit(): void {
  }
submit(){


  Swal.fire({
    title: 'Are you sure?',
    text: " Add This Product To Your Cart with "+this.amount+" Items ",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes,Add it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.getProduct.addcart(this.amount , this.product._id).subscribe((data)=>{
                 console.log(data);

       }
       ,
       (error)=>{Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Need To Be Registered!  Rgister Now ',
        footer: ' <a class="nav-link" href="/register"> Register Now </a> OR  <a class="nav-link" href="/login"> Login Now </a>'
      })}
      ,
      ()=>{
        Swal.fire(
          'Added Sucess !',
          'Your Product Will Arive Soon ',
          'success'
        )
        // console.log(data);
           this.router.navigateByUrl("/cart")
      } )

    }
  })

}
}
