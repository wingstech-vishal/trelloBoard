import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from './header/header.module';
import {BoardModule} from './board/board.module';
import {HttpClientModule } from '@angular/common/http';
import {UserModule} from './user/user.module'
import {BoardService} from './services/board.service';
import { DashComponent } from './dash/dash.component'

@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderModule,
    BoardModule,
    HttpClientModule,
    UserModule
  
  ],
  providers: [BoardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
