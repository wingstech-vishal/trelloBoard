
import { EditcolumnDialogBodyComponent } from '../editcolumn-dialog-body/editcolumn-dialog-body.component';
import {  Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
@Component({
  selector: 'app-editcolumn-dialog',
  templateUrl: './editcolumn-dialog.component.html',
  styleUrls: ['./editcolumn-dialog.component.scss']
})
export class EditcolumnDialogComponent implements OnInit {

  @Output() emitText:EventEmitter<any> = new EventEmitter()
  @Input() question: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(EditcolumnDialogBodyComponent, {
      width: '400px',
      data: {question: this.question}
    });

    dialogRef.afterClosed().subscribe(result => {
      this.emitText.emit(result)
    });
  }

}

