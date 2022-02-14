import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  selector: 'app-column-dialog-body',
  templateUrl: './column-dialog-body.component.html',
  styleUrls: ['./column-dialog-body.component.scss']
})
export class ColumnDialogBodyComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ColumnDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
    
  ngOnInit(): void {
  }

}
