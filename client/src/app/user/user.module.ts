import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {RegisterComponent} from'./register/register.component';
import {LoginComponent} from'./login/login.component';
import { MainDeskComponent } from './main-desk/main-desk.component';


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    MainDeskComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UserModule { }
