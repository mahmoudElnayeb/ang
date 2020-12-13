import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { param } from 'express-validator';
import { Observable } from 'rxjs';
import{productModel} from"../models/product.model"
@Injectable({
  providedIn: 'root'
})
export class GetProductServiceService {
  defaultUrl:string="http://localhost:3000/product/showAll"
  categoryUrl="http://localhost:3000/category/show"
  addCatUrl="http://localhost:3000/product/add"
  addUsercartUrl= "http://localhost:3000/card/add"
  getAdminCart="http://localhost:3000/card/show"
  deleteSingleProductCardUrl="http://localhost:3000/card/delete"
modSingleProductCardUrl="http://localhost:3000/card/mod"
deleteAll="http://localhost:3000/card/deleteAll"
allCatUrl="http://localhost:3000/category/show"
addCategoryUrl="http://localhost:3000/category/add"
productByCatUrl="http://localhost:3000/product/AllProdCat"

EmpEditUserProdUrl="http://localhost:3000/card/showEmp"
EmpDeleProd="http://localhost:3000/card/deleteEmp"
EmpChangeStatus="http://localhost:3000/card/modStatus"

  constructor(private http: HttpClient) { }

  grtProduct():Observable<any>{
    return this.http.get(this.defaultUrl)
  }
  getCategory():Observable<any>{
    return this.http.get<any>(this.categoryUrl)
  }
  addProduct(data:productModel):Observable<productModel>{
    return this.http.post<productModel>(this.addCatUrl , data)
  }
  addcart(amou:number , prodId:string):Observable<any>{
    //let token=sessionStorage.getItem("tokens")
    const params = new HttpParams().set("amount",amou.toString())
    return this.http.get(`${this.addUsercartUrl}/${prodId}`,{"params":params})
  }

  getAdminCartData():Observable<any>{
    return  this.http.get<any>(this.getAdminCart )
  }

  deleteSingleProductCard(prodId:string){
    return this.http.delete(`${this.deleteSingleProductCardUrl}/${prodId}`)
  }
  modifycard(prodId:string , amount:number){
    const params=new HttpParams().set("amount" , amount.toString())
    return this.http.patch(`${this.modSingleProductCardUrl}/${prodId}`, {"amount":amount})
  }

  deleteAllfun():Observable<any>{
    return this.http.delete(this.deleteAll)
  }
  getcategory():Observable<any>{
    return this.http.get<any>(this.categoryUrl)
  }
  getAllProdByCat(cat:string):Observable<any>{
    if(cat=="0"){return this.grtProduct() }
    else{
    const params=new HttpParams().set("category",cat)
     return this.http.get(this.productByCatUrl,{"params":params})}
  }
  addCategory(cat:string):Observable<any>{
   // const params=new HttpParams().set("category",cat)
   return this.http.post(this.addCategoryUrl,{"name":cat})
  }

  editEmpProd(email:string):Observable<any>{
    return this.http.get(`${this.EmpEditUserProdUrl}/${email}`)
  }

  EmpDeleteProduct(userId:string , productId:string):Observable<any>{
    const params=new HttpParams().set("userId",userId)
    return this.http.delete(`${this.EmpDeleProd}/${productId}`,{"params":params})
  }

  updateStatus(userId:string ,prodId:string, status:string):Observable<any>{
    const params=new HttpParams().set("pId",prodId).set("status",status)

    return this.http.get(`${this.EmpChangeStatus}/${userId}`,{"params":params})

  }
}
