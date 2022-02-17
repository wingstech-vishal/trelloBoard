export interface Comment { 
    id: number,
    text: string,
  }
  
  export interface Card { 
    id: number,
    text: string,
    // startDateTime: Date;
    // endDateTime: Date;
    description: string;
    // priority: string;
    // status: string; 
    like: number,
    comments: Comment[]
  }
  
  export interface Column { 
    id: number,
    title: string,
    color: string,
    list: Card[]
  }
  