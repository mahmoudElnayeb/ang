import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import {UserServiceService} from "../../services/user-service.service"
@Component({
  selector: 'app-show-all-user-comp',
  templateUrl: './show-all-user-comp.component.html',
  styleUrls: ['./show-all-user-comp.component.css']
})
export class ShowAllUserCompComponent implements OnInit {
users=[
   { _id:'',name:'' ,email:'',phone:'',address:''}
]
colonUsers=this.users
inpuEmail=''
@ViewChild("empSearch",{static:true}) empSearch!:NgForm
  constructor(private userServ:UserServiceService , private router: Router) {
  }

  ngOnInit(): void {
    this.getAllUser()

  }

  getAllUser(){
    this.userServ.getAllUser().subscribe((data)=>{
      this.users=data.data
    })
  }
  searchUser(emp:NgForm){
   this.userServ.searchUser(this.inpuEmail).subscribe((data)=>{this.users=[data.data]; console.log(this.users);
   })
  }
  ngOnChange(){
  }
  filterTable(event:any){
   this.colonUsers=this.users.filter((el=>{ return el.email.includes(event.target.value)}))
  }
  showAll(){
    this.colonUsers=this.users
  }
//   navigateEm(email:string)
// {
//   console.log(email);

//   // this.router.navigate(["/editUser/"+email])
// }
}
