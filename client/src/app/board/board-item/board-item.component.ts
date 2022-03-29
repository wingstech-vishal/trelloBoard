import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/components/dialog/dialog-body/dialog-body.component';
import { EditcardDialogBodyComponent } from 'src/app/components/dialog/editcard-dialog-body/editcard-dialog-body.component';
import {BoardService} from'src/app/services/board.service'
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

  getData=[];


  constructor(
    public boardService: BoardService,
    private _matDialog: MatDialog,

  ) {
    console.log("test" +this.item)
  }

  ngOnInit(): void {
    // this.onDeleteCard(cardId);
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

  // onCardDelete(id: number){
  //   this.emitDeleteCard.emit(id)
  // }

  // Delete Card 

  onDeleteCard(cardId){
    console.log(cardId)
    let id = cardId._id
    this.boardService.deleteCard(id).subscribe((result:any) =>{
            console.log(result)
            if(result.status) {
              const index = this.getData.indexOf(cardId);
                if (index >= 0) {
                    this.getData.splice(index, 1);
                }
            }
          }, error =>{
            console.log(error);
          })
   }

  // onDeleteCard(cardId: number){
  //   this.boardService.deleteCard(cardId)
  // }


  
  onEdit(data: any){
    console.log(data)
    const dialogRef = this._matDialog.open(EditcardDialogBodyComponent, {
      data: { cardData: data }
      
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log("result",result)
      for(let data in this.getData) {
        if(result.cardData._id == this.getData[data]._id) {
          this.getData[data].text = result.cardData.text;
          this.getData[data].startDateTime = result.cardData.startDateTime;
          this.getData[data].endDateTime = result.cardData.endDateTime;
          this.getData[data].description = result.cardData.description;
          this.getData[data].priority = result.cardData.priority;
        }
      }
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
