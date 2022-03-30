import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, NgForm, Validators } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {BoardService} from 'src/app/services/board.service'

interface Priority {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-editcard-dialog-body',
  templateUrl: './editcard-dialog-body.component.html',
  styleUrls: ['./editcard-dialog-body.component.scss']
})
export class EditcardDialogBodyComponent implements OnInit {

  selectFormControl = new FormControl('', Validators.required);
  priority: Priority[] = [
    {value: 'high-0', viewValue: 'High'},
    {value: 'low-1', viewValue: 'Low'},
    {value: 'medium-2', viewValue: 'Medium'},
  ];

  userId:any;
  dialogObj: any = {};
  cardId: any;
  //card: { id: string; text: string; startDateTime: string; endDateTime: string; description: string; priority: string; };


  constructor( public dialogRef: MatDialogRef<EditcardDialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public boardService: BoardService
    ) {
      this.data = this.data.cardData;
      console.log("this.data", this.data);
    }
  

    onNoClick(): void {
      this.dialogRef.close();
    }
    

    updateCard(cardId){
      console.log("columnId",cardId)
      let id = cardId.id
      // this.boardService.updateCard(id).subscribe((result:any) =>{
      //         console.log(result)
      //       }, error =>{
      //         console.log(error);
      //       })
     }
    

  ngOnInit(): void {
    
    // this.data.columnId = this.data.columnId;
    
    // console.log("this.userId",this.data.columnId);
  }

 onSubmit(data){
     let body = {
      id : this.cardId,    
      text:data.value.text,
      startDateTime:data.value.startDateTime ,
      endDateTime:data.value.endDateTime,
      description:data.value.description,
      priority:data.value.priority
    }
    console.log("body",body); 
    this.boardService.updateCard(body).subscribe((result:any) =>{
      console.log(result)
    }, error =>{
      console.log(error);
    })

    // console.log(data);
    // let body = {
    //   id : this.cardId,
    //   title: data.value.title
    // }
    // console.log(body)
    // this.boardService.updateCard(body).subscribe((result:any) =>{
    //   console.log(result)
        

    // }, error =>{
    //   console.log(error);
    // })
  }

}

