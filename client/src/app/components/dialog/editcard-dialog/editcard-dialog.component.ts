import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { EditcardDialogBodyComponent } from '../editcard-dialog-body/editcard-dialog-body.component';

@Component({
  selector: 'app-editcard-dialog',
  templateUrl: './editcard-dialog.component.html',
  styleUrls: ['./editcard-dialog.component.scss']
})
export class EditcardDialogComponent implements OnInit {

  @Output() emitText:EventEmitter<any> = new EventEmitter()
  @Input() question: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditcardDialogBodyComponent, {
      width: '400px',
      data: {question: this.question}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emitText.emit(result)
    });
  }

}
