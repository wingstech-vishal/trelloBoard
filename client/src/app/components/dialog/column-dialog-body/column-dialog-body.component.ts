import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Column } from 'src/app/models/column.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-column-dialog-body',
  templateUrl: './column-dialog-body.component.html',
  styleUrls: ['./column-dialog-body.component.scss']
})
export class ColumnDialogBodyComponent implements OnInit {

  // enteredTitle = "";
  // newColumn: Column
  // isLoading = false;
  // private mode = "create";
  // private postId: string;

  constructor(public dialogRef: MatDialogRef<ColumnDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public boardService: BoardService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
     

  ngOnInit(): void {
    
  }


  onSubmit(data){
    console.log(data.value);
    // this.boardService.addColumn(this.data).subscribe((result:any) =>{
    //   console.log(result.data)
    // }, error =>{
    //   console.log(error);
    // })
  }

  // onSavePost(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  
  //   if (this.mode === "create") {
  //     this.boardService.addColumn(form.value.title);
  //   }
  //   form.resetForm();
  // }

}
