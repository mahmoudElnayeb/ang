import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{ HttpClientModule ,HTTP_INTERCEPTORS,HttpParams} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CardProductComponent } from './Shared/card-product/card-product.component';
import { NavparComponent } from './Shared/navpar/navpar.component';
import { AboutUsComponent } from './Shared/about-us/about-us.component';
import { LoginComponent } from './components/login/login.component';
import{ReactiveFormsModule , FormsModule}from '@angular/forms'
import { RouterModule } from '@angular/router';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import {UserInterceptorInterceptor} from'../app/interceptor/user-interceptor.interceptor';
import { CartcomponentComponent } from './components/cartcomponent/cartcomponent.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatStepperModule} from"@angular/material/stepper"
import{MatInputModule} from"@angular/material/input"
import{MatListModule} from"@angular/material/list"
import{MatButtonModule} from"@angular/material/button"
import {MatFormFieldModule} from '@angular/material/form-field';
import { CategoryComponent } from './components/category/category.component';
import{ConfirmationPopoverModule}from "angular-confirmation-popover";
import { EmpSessionComponent } from './components/emp-session/emp-session.component';
import { ShowAllUserCompComponent } from './EmpSession/show-all-user-comp/show-all-user-comp.component';
import { EditUserDataComponent } from './EmpSession/edit-user-data/edit-user-data.component'
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CardProductComponent,
    NavparComponent,
    CartcomponentComponent,
    AboutUsComponent,
    LoginComponent,
    AddproductComponent,
    RegisterUserComponent,
    CategoryComponent,
    EmpSessionComponent,
    ShowAllUserCompComponent,
    EditUserDataComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    MatFormFieldModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger', // set defaults here

    }),

  ],
  providers: [
    {provide :HTTP_INTERCEPTORS , useClass:UserInterceptorInterceptor ,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
