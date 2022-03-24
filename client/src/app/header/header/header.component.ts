import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Column } from 'src/app/models/column.model';
import {BoardService} from 'src/app/services/board.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // getData=[];

  // enteredTitle = "";
  // newColumn: Column
  // isLoading = false;
  // private mode = "create";
  // private postId: string;
  username = '';
  constructor( public boardService: BoardService,
    private _router: Router)
   {
    // this.boardService.getUserName()
    // .subscribe(
    //   data => this.username= data.toString(),
    //   error => this._router.navigate(['/main/login'])
    // )
    }

  ngOnInit(): void {

  }

  logout(){
    localStorage.removeItem('token');
    this._router.navigate(['/main/login']);
  }

  // #Add Column

 addColumn(title: string ) {
    if(title){
      this.boardService.addColumn(title).subscribe((result:any) =>{
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
