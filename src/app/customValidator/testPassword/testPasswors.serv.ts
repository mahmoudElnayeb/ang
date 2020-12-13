import {Injectable} from "@angular/core"

@Injectable({providedIn:"root",})

export class passwordSevice{
  checkPass(password:string , repassword:string):boolean{
    if(password!=repassword){
    return false}
     return true
  }
}
