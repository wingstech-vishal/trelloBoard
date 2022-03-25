import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Card, Column, Comment } from '../models/column.model';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BoardService {
  //   }
  //   return column;
  // });
  // this.board$.next([...this.board]);
  // return this.http.post<any>(this.API + '/columns', columnId );
  submitRegister //   return column;
    (value: any) {
      throw new Error('Method not implemented.');
  }
  AddCard(text: string) {
    throw new Error('Method not implemented.');
  }
  onDeleteColumn(columnId: number) {
    throw new Error('Method not implemented.');
  }
  onAddCard(text: string) {
    throw new Error('Method not implemented.');
  } 
  // private initBoard = [ 
  //   {
  //     id: 1,
  //     title: 'To Do',
  //     color: '#009886',
  //     list: [
  //       // {
  //       //   id: 1,
  //       //   text: 'Example card item',
  //       //   startDateTime: "18-Feb-2022 03:46 PM" ,
  //       //   endDateTime: "18-Feb-2022 03:46 PM" ,
  //       //   description: 'Trello board  example',
  //       //   priority: 'list component' ,
  //       //   // status: 'pending',
  //       //   like: 1,
  //       //   comments: [
  //       //     { 
  //       //       id: 1,
  //       //       text: 'Some comment'
  //       //     }
  //       //   ]
  //       // },
  //     ]
  //   },
  // ]

  constructor(private http: HttpClient) { }

  API = 'http://localhost:3000';


  // private board: Column[] = this.initBoard
  // private board$ = new BehaviorSubject<Column[]>(this.initBoard)

  // getBoard$() {
  //   return this.board$.asObservable()
  // }


  // #Change Color

  changeColumnColor(color: string, columnId: number) {
    // this.board = this.board.map((column: Column) => {
    //   if (column.id === columnId) {
    //     column.color = color;
    //   }
    //   return column;
    // });
    // this.board$.next([...this.board]);

    // return this.http.post<any>(this.API + '/columns', columnId );

  }


  // #Add Column

  addColumn(title: string) {
    const newColumn: Column = {
      id: Date.now(),
      title: title,
      color: '#009886',
      list: [],
    };

    // this.board = [...this.board, newColumn];
    // this.board$.next([...this.board]);
    // console.log("column data" + newColumn)
    return this.http.post<any>(this.API + '/columns', newColumn );

  }


    // #Delete Column

    deleteColumn(columnId) {
      // this.board = this.board.filter((column: Column) => column.id !== columnId);
      // this.board$.next([...this.board]);
      
      return this.http.delete(this.API + '/columns' + '/' + columnId);

      // return this.http.delete<any>(this.API + '/columns/:id', columnId );
    } 
    

  // #get column data
  getColumn(): Observable<any> {
    return this.http.get<any>(this.API + '/columns');
  }

  // #Update Column data
  updateColumn(columnId): Observable<any> {

    return this.http.put<any>(this.API + '/columns/:id', columnId);

  }

  // #get Card data

  getCard(): Observable<any> {
    return this.http.get<any>(this.API + '/cards/all');
  }

// #Add Card

  addCard(body) {
    console.log(body)
    // const newCard: Card = {
    //   id: Date.now(),
    //   text:text,
    //   startDateTime: startDateTime,
    //   endDateTime: endDateTime,
    //   description: description,
    //   priority: priority,
    //   // status: status,
    //   like: 0,
    //   comments: [],
    // };
    
    // console.log(newCard)
    
    // this.board = this.board.map((column: Column) => {
    //   if (column.id === columnId) {
    //     column.list = [newCard, ...column.list];
    //   }
    //   return column;
    // });

    // this.board$.next([...this.board]);
    return this.http.post<any>(this.API + '/cards', body );
    
  }

    // add Card test

    // addCard(text: string, startDateTime:string, endDateTime:string, description:string, priority:string,  columnId: number) {
    //   const newCard: Card = {
    //     id: Date.now(),
    //     text:text,
    //     startDateTime:startDateTime,
    //     endDateTime:endDateTime,
    //     description:description,
    //     priority:priority,
    //     like: 0,
    //     comments: [],
    //   };
    //   return this.http.post<any>(this.API + '/cards', newCard );
    // }
 
  
   // #Delete Card

   deleteCard(cardId: number) {
    // this.board = this.board.map((column: Column) => {
    //   if (column.id === columnId) {
    //     column.list = column.list.filter((card: Card) => card.id !== cardId);
    //   }
    //   return column;
    // });

    // this.board$.next([...this.board]);

    return this.http.delete<any>(this.API + '/cards' + '/' + cardId );
  }

  updateCard(cardId): Observable<any> {
    // this.board = this.board.map((column: Column) => {
    //   if (column.id === columnId) {
    //     column.list = column.list.filter((card: Card) => card.id !== cardId);
    //   }
    //   return column;
    // });

    // this.board$.next([...this.board]);
    return this.http.put<any>(this.API + '/cards/:id', cardId );
  }


   // #Change Like 

  // changeLike(cardId: number, columnId: number, increase: boolean) {
  //   // this.board = this.board.map((column: Column) => {
  //   //   if (column.id === columnId) {
  //   //     const list = column.list.map((card: Card) => {
  //   //       if (card.id === cardId) {
  //   //         if (increase) {
  //   //           card.like++;
  //   //         } else {
  //   //           if (card.like > 0) {
  //   //             card.like--;
  //   //           }
  //   //         }
  //   //       }
  //   //       return card;
  //   //     });

  //   //     column.list = list;
  //   //     return column;
  //   //   } else {
  //   //     return column;
  //   //   }
  //   // });

  //   // this.board$.next([...this.board]);

  //  return this.http.put<any>(this.API + '/likes', columnId );
  // }


  // #Add Comment

  // addComment(columnId: number, cardId: number, text: string) {
  //   // this.board = this.board.map((column: Column) => {
  //   //   if (column.id === columnId) {
  //   //     const list = column.list.map((card: Card) => {
  //   //       if (card.id === cardId) {
  //   //         const newComment = {
  //   //           id: Date.now(),
  //   //           text,
  //   //         };
  //   //         card.comments = [newComment, ...card.comments];
  //   //       }
  //   //       return card;
  //   //     });

  //   //     column.list = list;
  //   //   }
  //   //   return column;
  //   // });

  //   // this.board$.next([...this.board]);

  //   return this.http.put<any>(this.API + '/comment', columnId );
  // }


  // #Delete Comment

  // deleteComment(columnId, itemId, commentId) {
  //   // this.board = this.board.map((column: Column) => {
  //   //   if(column.id === columnId) {
  //   //     const list = column.list.map((item)=> {
  //   //       if(item.id === itemId) {
  //   //         item.comments = item.comments.filter((comment: Comment) => {
  //   //           return comment.id !== commentId
  //   //         })
  //   //       }
  //   //       return item
  //   //     })
  //   //     column.list = list
  //   //   }
  //   //   return column
  //   // })
  //   // this.board$.next([...this.board])

  //   return this.http.delete<any>(this.API + '/comment/:id', columnId );
  // }


  // User Registration

  newRegister(body:any){
    return this.http.post(this.API + '/users/register', body,{
      observe:'body'
    });
  }


  // login api

  login(body:any){
    return this.http.post(this.API +'/users/login', body,{
      observe:'body'
    });
  }

  // get user name

  getUserName() {
    return this.http.get( this.API +'/users/username', {
      observe: 'body',
      params: new HttpParams().append('token', localStorage.getItem('token'))
    });
  }

}
