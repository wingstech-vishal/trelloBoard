import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ParamMap } from '@angular/router';
import { Column } from 'src/app/models/column.model';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-column-dialog-body',
  templateUrl: './column-dialog-body.component.html',
  styleUrls: ['./column-dialog-body.component.scss']
})
export class ColumnDialogBodyComponent implements OnInit {
  route: any;
  mode: string;
  columnId: any;
  column: { id: string; title: string; color: string };

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

    // this.route.paramMap.subscribe((paramMap: ParamMap) => {
    //   if (paramMap.has("columnId")) {
    //     this.mode = "edit";
    //     this.columnId = paramMap.get("columnId");
    //     this.boardService.getColumn().subscribe(columnData => {
      
    //       this.column = {id: columnData._id, title: columnData.title, color: columnData.color};
    //     });
    //   } else {
    //     this.mode = "create";
    //     this.columnId = null;
    //   }
    // });


    // this.boardService.getColumn().subscribe(columnData => {
      
    //   this.column = {id: columnData._id, title: columnData.title, color: columnData.color};
    // });
    
  }


  onSubmit(data){
    console.log(data.value);
    // this.boardService.addColumn(this.data).subscribe((result:any) =>{
    //   console.log(result)
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
