import { Component, OnInit } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { BoardService } from 'src/app/services/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
})
export class BoardComponent implements OnInit {
  constructor(
    public boardService: BoardService
  ) {}

  ngOnInit(): void {
    console.log('BOARD - INIT')
    console.log(this.boardService.getBoard$())
  }

  onColorChange(color: string, columnId: number) {
    this.boardService.changeColumnColor(color, columnId)
  }

  onAddCard(
    text: string,
    columnId: number, 
    startDateTime: string,
    endDateTime: string,
    description: string,
    priority: string,
    // status: string
    ) {
    if(text) {
      this.boardService.addCard(text, 
        columnId, 
        startDateTime,
         endDateTime, 
         description, 
         priority, 
        //  status
        )
    }
  }


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
  //     this.boardService.onAddCard(text).subscribe((result:any) =>{
  //       console.log(result.text)
  //     }, error =>{
  //       console.log(error);
  //     })
  //   }
  // }


  onDeleteColumn(columnId: number){
    this.boardService.deleteColumn(columnId)
  }

  // deleteColumn(columnId: number){
  //   this.boardService.deleteColumn(columnId).subscribe((result:any) =>{
  //           console.log(result)
  //         }, error =>{
  //           console.log(error);
  //         })
  // }

  onDeleteCard(cardId: number, columnId: number){
    this.boardService.deleteCard(cardId, columnId)
  }

  // onDeleteCard(cardId: number, columnId: number){
  //   this.boardService.deleteCard(cardId, columnId).subscribe((result:any) =>{
  //               console.log(result)
  //             }, error =>{
  //               console.log(error);
  //             })
  // }

  onChangeLike(event:{card: any, increase: boolean}, columnId: number){
    const{card: {id}, increase} = event
    this.boardService.changeLike(id, columnId, increase)

  }

  onAddComment(event: {id: number, text:string}, columnId: number){
    this.boardService.addComment(columnId, event.id, event.text)
  }

  onDeleteComment(comment, columnId, item){
    this.boardService.deleteComment(columnId, item.id, comment.id)

  }

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
