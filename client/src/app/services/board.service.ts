import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Card, Column, Comment } from '../models/column.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardService { 
  private initBoard = [ 
    {
      id: 1,
      columnTitle: 'To Do',
      color: '#009886',
      list: [
        {
          id: 1,
          text: 'Example card item',
          startDateTime: "18-Feb-2022 03:46 PM" ,
          endDateTime: "18-Feb-2022 03:46 PM" ,
          description: 'Trello board  example',
          priority: 'list component' ,
          status: 'pending',
          like: 1,
          comments: [
            { 
              id: 1,
              text: 'Some comment'
            }
          ]
        },
      ]
    },
  ]

  constructor(private http: HttpClient) { }

  API = 'http://localhost:3000';


  private board: Column[] = this.initBoard
  private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  getBoard$() {
    return this.board$.asObservable()
  }

  changeColumnColor(color: string, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.color = color;
      }
      return column;
    });
    this.board$.next([...this.board]);
  }

  addColumn(columnTitle: string) {
    const newColumn: Column = {
      id: Date.now(),
      columnTitle: columnTitle,
      color: '#009886',
      list: [],
    };

    this.board = [...this.board, newColumn];
    this.board$.next([...this.board]);

    return this.http.post(this.API + '/columns',columnTitle );
    // console.log("Check data", columnTitle);
    
  }

  addCard(text: string, 
    columnId: number, 
    // startDateTime: Date,
    // endDateTime: Date,
    description: string,
    // priority: string,
    // status: string 
    ) {
    const newCard: Card = {
      id: Date.now(),
      text:text,
      // startDateTime: startDateTime,
      // endDateTime: endDateTime,
      description: description,
      // priority: priority,
      // status: status,
      like: 0,
      comments: [],
    };
    console.log(newCard)
    
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = [newCard, ...column.list];
      }
      return column;
    });

    this.board$.next([...this.board]);
  }
  

  deleteColumn(columnId) {
    this.board = this.board.filter((column: Column) => column.id !== columnId);
    this.board$.next([...this.board]);
  }
  

  deleteCard(cardId: number, columnId: number) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        column.list = column.list.filter((card: Card) => card.id !== cardId);
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  changeLike(cardId: number, columnId: number, increase: boolean) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            if (increase) {
              card.like++;
            } else {
              if (card.like > 0) {
                card.like--;
              }
            }
          }
          return card;
        });

        column.list = list;
        return column;
      } else {
        return column;
      }
    });

    this.board$.next([...this.board]);
  }

  addComment(columnId: number, cardId: number, text: string) {
    this.board = this.board.map((column: Column) => {
      if (column.id === columnId) {
        const list = column.list.map((card: Card) => {
          if (card.id === cardId) {
            const newComment = {
              id: Date.now(),
              text,
            };
            card.comments = [newComment, ...card.comments];
          }
          return card;
        });

        column.list = list;
      }
      return column;
    });

    this.board$.next([...this.board]);
  }

  deleteComment(columnId, itemId, commentId) {
    this.board = this.board.map((column: Column) => {
      if(column.id === columnId) {
        const list = column.list.map((item)=> {
          if(item.id === itemId) {
            item.comments = item.comments.filter((comment: Comment) => {
              return comment.id !== commentId
            })
          }
          return item
        })
        column.list = list
      }
      return column
    })
    this.board$.next([...this.board])
  }
}