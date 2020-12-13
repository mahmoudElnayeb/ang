import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navpar',
  templateUrl: './navpar.component.html',
  styleUrls: ['./navpar.component.css']
})
export class NavparComponent implements OnInit {
email:string=''
token=false
role='null'
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.getEmail()
    this.token=this.getToken()
    this.role=this.getRole()
  }
  getEmail(){
    let foundEm=sessionStorage.getItem("email")
    if(foundEm){
      this.email=foundEm
    }
    else{
      this.email="user@yahoo.com"
    }
  }
  ngDoCheck(){
    this.getEmail()
    this.token=this.getToken()
    this.role=this.getRole()
console.log(this.role);

  }

  ngOnDestroy(){
    this.token=this.getToken()
    this.role=this.getRole()

  }
  getToken():boolean
  {
    if(sessionStorage.getItem("tokens")) {return true}
   return false
  }
  // getRole()
  // {
  //   if(sessionStorage.getItem("role")== "ADMIN") return "admin"
  //   if(sessionStorage.getItem("role")== "EMPLOYEE") return "emp"
  //   if(sessionStorage.getItem("role")== "USER") return "user"
  //    return "null"

  // }


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
    // if(sessionStorage.getItem("role")== "ADMIN") return "admin"
    // if(sessionStorage.getItem("role")== "EMPLOYEE") return "emp"
    // if(sessionStorage.getItem("role")== "USER") return "user"


  }
  logout(){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "Do You Want To LogOut ",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Logout ',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        swalWithBootstrapButtons.fire(
          'Logout!',
          'success'
        )
        sessionStorage.clear()
        this.router.navigateByUrl("/login")
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your Shopping Still Wail You ',
          'success'
        )
      }
    })

  }

}
