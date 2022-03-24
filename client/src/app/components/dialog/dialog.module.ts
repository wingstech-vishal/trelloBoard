import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';



import { DialogComponent } from './dialog/dialog.component';
import { DialogBodyComponent } from './dialog-body/dialog-body.component';
import { ColumnDialogBodyComponent } from './column-dialog-body/column-dialog-body.component';
import { ColumnDialogComponent } from './column-dialog/column-dialog.component';
import {MatSelectModule} from '@angular/material/select';
import { EditcolumnDialogComponent } from './editcolumn-dialog/editcolumn-dialog.component';
import { EditcolumnDialogBodyComponent } from './editcolumn-dialog-body/editcolumn-dialog-body.component';


@NgModule({
  declarations: [
    DialogComponent,
    DialogBodyComponent,
    ColumnDialogBodyComponent,
    ColumnDialogComponent,
    EditcolumnDialogComponent,
    EditcolumnDialogBodyComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule
    
  ],
  exports: [
    DialogComponent,
    ColumnDialogComponent
  ]
})
export class DialogModule { }
