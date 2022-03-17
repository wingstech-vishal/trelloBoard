import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {BoardService} from 'src/app/services/board.service'

interface Priority {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {


  selectFormControl = new FormControl('', Validators.required);
  priority: Priority[] = [
    {value: 'high-0', viewValue: 'High'},
    {value: 'low-1', viewValue: 'Low'},
    {value: 'medium-2', viewValue: 'Medium'},
  ];

  userId:any;
  dialogObj: any = {};


  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public boardService: BoardService
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
    
    this.data.columnId = this.data.columnId;
    
    console.log("this.userId",this.data.columnId);
  }

 onSubmit(data){
    console.log(data.value); 
    this.boardService.addCard(this.data).subscribe((result:any) =>{
      console.log(result)
    }, error =>{
      console.log(error);
    })
  }

}
