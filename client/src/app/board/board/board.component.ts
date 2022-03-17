import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/services/board.service';
import { Column } from 'src/app/models/column.model';
import { MatDialog } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/components/dialog/dialog-body/dialog-body.component';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {

  getData=[];
  getCardData=[];

  

  constructor(
    public boardService: BoardService,
    private _matDialog: MatDialog,
  ) {}

  // columnsList: Column[];

  ngOnInit(): void {
    console.log('BOARD - INIT')
    // console.log(this.boardService.getBoard$())

    //  #Get Columns

  // this.boardService.getColumn().subscribe(
  //   data => {
  //     this.columnsList = data;
  //   }
  // )
  this.getColumns();
  // this.getData=this.getData

  }

  // #Change Color

  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId)
  }

  // #Delete Column

  // onDeleteColumn(columnId: number){
  //   this.boardService.deleteColumn(columnId)
  // }

  onDeleteColumn(columnId){
    console.log(columnId)
    let id = columnId._id
    this.boardService.deleteColumn(id).subscribe((result:any) =>{
            console.log(result)
            if(result.status) {
              const index = this.getData.indexOf(columnId);
                if (index >= 0) {
                    this.getData.splice(index, 1);
                }
            }
          }, error =>{
            console.log(error);
          })
   }



  //  update column
  onUpdateColumn(columnId){
    console.log(columnId)
    let id = columnId._id
    this.boardService.updateColumn(id).subscribe((result:any) =>{
            console.log(result)
            if(result.status) {
              const index = this.getData.indexOf(columnId);
                if (index >= 0) {
                    this.getData.splice(index, 1);
                }
            }
          }, error =>{
            console.log(error);
          })
   }


  // #get Columns

  // getColumns(){
  //   this.boardService.getColumn().subscribe((result:any) =>{
  //     this
  //           console.log(result)
  //         }, error =>{
  //           console.log(error);
  //         })
  // }


  getColumns(){
    this.boardService.getColumn().subscribe(data =>{
      this.getData = data.columnData;
  this.getCard();

      console.log(this.getData)
            console.log(data)
          }, error =>{
            console.log(error);
          })
  }


  // #get Card

  getCard(){
    this.boardService.getCard().subscribe(data =>{
      this.getCardData = data.cardData;
      this.getCardData.filter((data) => {
        this.getData.map((data2) =>{
          if(data.columnId == data2._id) {
            data2.list.push(data);
          return data2

          }
        });
      });
      console.log(this.getData)
            console.log(data)
          }, error =>{
            console.log(error);
          })
  }

  openDialogBody(id:string): void {
    console.log(id)
    const dialogRef = this._matDialog.open(DialogBodyComponent, {
      data: { question: 'Add new card in' ,columnId: id}
    });

    dialogRef.afterClosed().subscribe((result) => {

      console.log(result);
      // this.getCard();
      this.getColumns();
    });
  }


  // #Add Card

  // onAddCard(
  //   text: string,
  //   columnId: number, 
  //   startDateTime: string,
  //   endDateTime: string,
  //   description: string,
  //   priority: string,
  //   // status: string
  //   ) {
  //   if(text) {
  //     this.boardService.addCard(text, 
  //       columnId, 
  //       startDateTime,
  //        endDateTime, 
  //        description, 
  //        priority, 
  //       //  status
  //       ).subscribe((result:any) =>{
  //         console.log(result.title)
  //       }, error =>{
  //         console.log(error);
  //       })
  //   }
  // }


  // test card add
  // onAddCard(event: {id: number, text:string,startDateTime:string, endDateTime:string, description:string, priority:string}, columnId: number) {
    
  //     this.boardService.addCard(columnId, event.id, event.text, event.startDateTime, event.endDateTime, event.description, event.priority).subscribe((result:any) =>{
  //     console.log(result)
  //   }, error =>{
  //     console.log(error);
  //   })
   
  // }

  

   // #Delete Card

  // onDeleteCard(cardId: number, columnId: number){
  //   this.boardService.deleteCard(cardId, columnId)
  // }

  // onDeleteCard(cardId: number, columnId: number){
  //   this.boardService.deleteCard(cardId, columnId).subscribe((result:any) =>{
  //               console.log(result)
  //             }, error =>{
  //               console.log(error);
  //             })
  // }


 // #Change Like 

  // onChangeLike(event:{card: any, increase: boolean}, columnId: number){
  //   const{card: {id}, increase} = event
  //   this.boardService.changeLike(id, columnId, increase)
  // }


//   onChangeLike(event:{card: any, increase: boolean}, columnId: number){
//     const{card: {id}, increase} = event
//     this.boardService.changeLike(id, columnId, increase).subscribe((result:any) =>{
//       console.log(result)
//     }, error =>{
//       console.log(error);
//     })
// }

// #Add Comment

  // onAddComment(event: {id: number, text:string}, columnId: number){
  //   this.boardService.addComment(columnId, event.id, event.text)
  // }

//   onAddComment(event: {id: number, text:string}, columnId: number){
//     this.boardService.addComment(columnId, event.id, event.text).subscribe((result:any) =>{
//       console.log(result)
//     }, error =>{
//       console.log(error);
//     })
// }


// #Delete Comment

  // onDeleteComment(comment, columnId, item){
  //   this.boardService.deleteComment(columnId, item.id, comment.id)
  // }

  // onDeleteComment(comment, columnId, item){
  //   this.boardService.deleteComment(columnId, item.id, comment.id).subscribe((result:any) =>{
  //           console.log(result)
  //         }, error =>{
  //           console.log(error);
  //         })
  // }




  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

}
