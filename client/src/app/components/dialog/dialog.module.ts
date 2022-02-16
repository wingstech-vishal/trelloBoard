import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



import { DialogComponent } from './dialog/dialog.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { ColumnDialogBodyComponent } from './column-dialog-body/column-dialog-body.component';
import { ColumnDialogComponent } from './column-dialog/column-dialog.component';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    DialogComponent,
    DialogBodyComponent,
    ColumnDialogBodyComponent,
    ColumnDialogComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    
  ],
  exports: [
    DialogComponent,
    ColumnDialogComponent
  ]
})
export class DialogModule { }
