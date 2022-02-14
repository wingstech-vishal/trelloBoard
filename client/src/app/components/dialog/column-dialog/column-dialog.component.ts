import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ColumnDialogBodyComponent } from '../column-dialog-body/column-dialog-body.component';

@Component({
  selector: 'app-column-dialog',
  templateUrl: './column-dialog.component.html',
  styleUrls: ['./column-dialog.component.scss']
})
export class ColumnDialogComponent implements OnInit {


  @Output() emitText:EventEmitter<any> = new EventEmitter()
  @Input() question: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ColumnDialogBodyComponent, {
      width: '400px',
      data: {question: this.question}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emitText.emit(result)
    });
  }

}

