import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Column } from 'src/app/models/column.model';
import {BoardService} from 'src/app/services/board.service'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // enteredTitle = "";
  // newColumn: Column
  // isLoading = false;
  // private mode = "create";
  // private postId: string;
  
  constructor( public boardService: BoardService)
   { }

  ngOnInit(): void {
  }

 addColumn(title: string) {
  //   if(title){
  //    this.boardService.addColumn(title)
  //  }
   this.boardService.addColumn(title).subscribe((result:any) =>{
      console.log(result.title)
    }, error =>{
      console.log(error);
    })
   
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
