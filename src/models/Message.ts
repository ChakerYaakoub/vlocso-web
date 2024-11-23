export interface Message {
    message_id: number;
    from : string 
    annonce_id : number 
    annonce_title:string
    content: string;
    created_at: Date;
    updated_at: Date;
    // getMessage(): void;
    // launchMessage(): void;
    // updateMessage(): void;
    // deleteMessage(): void;
  }
  