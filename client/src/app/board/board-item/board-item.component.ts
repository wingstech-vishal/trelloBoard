import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/components/dialog/dialog-body/dialog-body.component';

@Component({
  selector: 'app-board-item',
  templateUrl: './board-item.component.html',
  styleUrls: ['./board-item.component.scss']
})
export class BoardItemComponent implements OnInit {
  // getCardData=[];
  @Input() item;
  @Output() emitText: EventEmitter<{id: number; text:string; item:any;}> = new EventEmitter();
  @Output() emitCardItem: EventEmitter<{card: any; increase:boolean}> = new EventEmitter();
  @Output() emitDeleteCard: EventEmitter<number> = new EventEmitter();
  
  commentInput= ""
  open = false;
  boardService: any;


  constructor(
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    // this.getCard();
  }

  onOpenComment(){
    this.open = !this.open
  }

  onCommentTextEmit(id:number) {
    this.emitText.emit({id, text:this.commentInput, item:this.item});
    this.commentInput= ''
  }

  onCardItemEmit(card: any, increase: boolean){
    this.emitCardItem.emit({card, increase});
  }

  onCardDelete(id: number){
    this.emitDeleteCard.emit(id)
  }

  onEdit(data: any){
    const dialogRef = this._matDialog.open(DialogBodyComponent, {
      data: { cardData: data }
    });
    dialogRef.afterClosed().subscribe((result) => {
      // console.log('Compose dialog was closed!');
      // if(result.event == 'Update'){
      //   this.updateData(result.data);
      // }
    });
  }


  // getCard(){
  //   this.boardService.getCard().subscribe(data =>{
  //     this.getCardData = data.cardData
  //           console.log(data)
  //         }, error =>{
  //           console.log(error);
  //         })
  // }
  

  // onUpdateCard(){
  //   // this.htalService.updateHospital(this.hospitalToUpdate).subscribe(
  //   //   (resp) => {
  //   //     console.log(resp);
  //   //   },
  //   //   (err) => {
  //   //     console.log(err);
  //   //   }
  //   // );
  // }

}
