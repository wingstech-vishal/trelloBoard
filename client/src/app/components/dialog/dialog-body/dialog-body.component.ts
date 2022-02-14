import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {BoardService} from 'src/app/services/board.service'

interface Status {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-dialog-body',
  templateUrl: './dialog-body.component.html',
  styleUrls: ['./dialog-body.component.scss']
})
export class DialogBodyComponent implements OnInit {


  status: Status[] = [
    {value: 'holding-0', viewValue: 'Holding'},
    {value: 'Started-1', viewValue: 'Started'},
    {value: 'finished-2', viewValue: 'Finished'},
  ];


  constructor( public dialogRef: MatDialogRef<DialogBodyComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    public boardService: BoardService
    ) {}

    onNoClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

 

}
