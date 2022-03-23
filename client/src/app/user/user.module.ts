import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule,
    MatSnackBarModule,
    MatButtonModule

  ],
  exports: [
    RegisterComponent,
    LoginComponent
  ]
})
export class UserModule { }
