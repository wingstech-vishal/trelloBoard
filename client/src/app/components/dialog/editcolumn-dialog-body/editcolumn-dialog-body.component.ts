import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-editcolumn-dialog-body',
  templateUrl: './editcolumn-dialog-body.component.html',
  styleUrls: ['./editcolumn-dialog-body.component.scss']
})
export class EditcolumnDialogBodyComponent implements OnInit {

  route: any;
  mode: string;
  columnId: any;
  column: { id: string; title: string; color: string };

  // enteredTitle = "";
  // newColumn: Column
  // isLoading = false;
  // private mode = "create";
  // private postId: string;

  constructor(public dialogRef: MatDialogRef<EditcolumnDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public boardService: BoardService) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
     
     updateColumn(columnId){
    console.log(columnId)
    let id = columnId.id
    this.boardService.updateColumn(id).subscribe((result:any) =>{
            console.log(result)
            // if(result.status) {
            //   const index = this.getData.indexOf(columnId);
            //     if (index >= 0) {
            //         this.getData.splice(index, 1);
            //     }
            // }
          }, error =>{
            console.log(error);
          })
   }

  ngOnInit(): void {
    this.data = {
      text: this.data.cardData.title
    };
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
