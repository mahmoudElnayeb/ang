import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { CartcomponentComponent } from './components/cartcomponent/cartcomponent.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { EditUserDataComponent } from './EmpSession/edit-user-data/edit-user-data.component';
import { ShowAllUserCompComponent } from './EmpSession/show-all-user-comp/show-all-user-comp.component';

const routes: Routes = [
  {path:'login' ,component:LoginComponent},
  {path:'home' , component:ProductComponent},
  {path:"addproduct" , component:AddproductComponent},
  {path:"cart" , component:CartcomponentComponent},
  {path:"register" ,component:RegisterUserComponent},
  {path:"editUser/:email" ,component:EditUserDataComponent},
  {path:"AllUser" ,component:ShowAllUserCompComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
