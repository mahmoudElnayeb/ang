import { HttpClient } from '@angular/common/http';
import { CATCH_ERROR_VAR } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{loginUser , user} from '../models/user.Models'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
loginUrl="http://localhost:3000/user/login"
registerUrl="http://localhost:3000/user/register"
roles="http://localhost:3000/user/roles"
AllUser="http://localhost:3000/user/AllUser"
searchUserUrl="http://localhost:3000/user/search"
  constructor(private http:HttpClient) { }

  loginUser(user:loginUser):Observable<any>{
    return this.http.post(this.loginUrl,user)
  }

  registerUser(data:user):Observable<user>{
    return this.http.post<user>(this.registerUrl,data)
  }

  getRoles():Observable<string[]>{
  return this.http.get<string[]>(this.roles)
  }
  getAllUser():Observable<any>{
    return this.http.get(this.AllUser)
  }
  searchUser(user:string):Observable<any>{
    return this.http.get(`${this.searchUserUrl}/${user.toString()}`)
  }
}
