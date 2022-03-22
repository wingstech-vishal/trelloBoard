import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppRoutingModule} from '../app-routing.module'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';


import { BoardComponent } from './board/board.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { CommentItemComponent } from './comment-item/comment-item.component';
import {DialogModule} from '../components/dialog/dialog.module';
import { ColorPanelComponent } from './color-panel/color-panel.component'
import {HeaderModule} from '../header/header.module'



@NgModule({
  declarations: [
    BoardComponent,
    BoardItemComponent,
    CommentItemComponent,
    ColorPanelComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DragDropModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatExpansionModule,
    DialogModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HeaderModule
  ],
  exports: [
    BoardComponent
  ]
})
export class BoardModule { }
