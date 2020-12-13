import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import{UserServiceService} from "../../services/user-service.service"
import{passwordCustomValidator} from "../../customValidator/testPassword/testPassword.vali"

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  // firstFormControl:FormGroup
  // secondFormControl:FormGroup
  formUser:FormGroup
  roles:string[]=[]
    role="null"
  constructor(private fb:FormBuilder , private userServ:UserServiceService, public passval:passwordCustomValidator)  {
    this.userServ.getRoles().subscribe((data)=>{this.roles=data})
    // this.firstFormControl=this.fb.group({
    //   name:["",[Validators.required]],
    //   email:["",[Validators.required]],
    //   password:["",[Validators.required]],
    //   repassword:["",[Validators.required]]
    // })
    // this.secondFormControl= this.fb.group({
    //   phone:["",[Validators.required]],
    //   address:["",[Validators.required]]
    // })

this.formUser=this.fb.group({
  name:["",[Validators.required ,Validators.maxLength(12)]],
  email:["",[Validators.required, Validators.email]],
  password:["",[Validators.required , Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]],
  repassword:["",[Validators.required ]],
  phone:["",[Validators.required ,  Validators.maxLength(12), Validators.minLength(12)]],
  address:["",[Validators.required ,Validators.maxLength(30)]],
  role:this.fb.array(["user"],)

})

this.formUser.setValidators(passval.checkPassValidator("password","repassword"))
}


  ngOnInit(): void {
    this.userServ.getRoles().subscribe((data)=>{this.roles=data})
    console.log(this.roles);
    this.role=this.getRole()
  }
  // submit(){
  //   this.userServ.registerUser((this.firstFormControl.value,this.secondFormControl.value)).subscribe((data=>console.log(data)))
  // }


  // getRoles():FormArray{
  //   this.formUser.get("role") as   FormArray
  // }
  checkRole(event:any){
         const userRol:FormArray=this.formUser.get("role") as FormArray
         if(event.target.checked){
           userRol.push(new FormControl(event.target.value))
         }
         else{
           const index=userRol.controls.findIndex(e=>e.value === event.target.value)
           userRol.removeAt(index)
         }
  }

  supmitUser()
  {
     this.userServ.registerUser(this.formUser.value).subscribe(data=>console.log(data),(err)=>{console.log(err),()=>{     this.formUser.reset()
     };
     })
console.log(this.formUser.errors);


  }
  get name(){
    return this.formUser.get('name')
  }
  get email(){
    return this.formUser.get('email')
  }
  get password(){
    return this.formUser.get('password')
  }
  get address(){
    return this.formUser.get('address')
  }
  get phone(){
    return this.formUser.get('phone')
  }
  get repassword(){
    return this.formUser.get('repassword')
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
