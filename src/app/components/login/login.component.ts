import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import{UserServiceService}from"../../services/user-service.service"
import{loginUser} from '../../models/user.Models'
import { logging } from 'protractor';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  email=''
  mess=""
  satus=0
  constructor(private fb:FormBuilder , private loginsub:UserServiceService , private router:Router) {
    this.loginForm=this.fb.group({
      password:new FormControl("" ,[Validators.required]),
      email:new FormControl("" ,[Validators.required]),
      check:new FormControl()
    })
   }


  ngOnInit(): void {
  }
  loginSubmit(){
   this.loginsub.loginUser(this.loginForm.value).subscribe((data)=>{
     console.log(data);
     sessionStorage.setItem("tokens",data.AccessToken)
     sessionStorage.setItem("email",data.email)
     sessionStorage.setItem("role",JSON.stringify(data.ROLES))

        console.log(data);
   }
   ,
   (err)=>{this.mess=err.error.message
    this.satus= err.status
       console.log(err.status);
       Swal.fire({
        position: 'center',
        icon: 'error',
        title: err.error.message,
        showConfirmButton: false,
        timer: 1500
      })

   }
   ,
     ()=>{
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'You are Login Success',
        showConfirmButton: false,
        timer: 1500
      })
            this.mess="ok"
            setTimeout(() => {
              this.router.navigateByUrl('/home')
            }, 3000);
     }

   )

  }

  get emailC()
  { return this.loginForm.get("email")}
  get passwordC()
  { return this.loginForm.get("password")}
}
