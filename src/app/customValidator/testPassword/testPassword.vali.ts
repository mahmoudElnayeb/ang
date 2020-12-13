import{Injectable}from "@angular/core"
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms'
import{passwordSevice}from "../../customValidator/testPassword/testPasswors.serv"
@Injectable({providedIn:'root'})

export class passwordCustomValidator{
  constructor(private passVal:passwordSevice){

  }

  checkPassValidator(pass:string,repass:string):ValidatorFn{
  return (control:AbstractControl):ValidationErrors |null  =>{
   // let repass= control.value
  let pass1=control.get(pass)?.value
  let repass1=control.get(repass)?.value

    if(!this.passVal.checkPass(pass1,repass1)){
      control.get(repass)?.setErrors({"notmuch":true})
      return {'mess':false}
    }

return null
  }
  }
}
