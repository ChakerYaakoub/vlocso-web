export interface Notification {
  notification_id: number;
  title: string;
  content: string;
  url_image: string;
  global: boolean;
  annonce_id?: number;
  created_at: Date;
  updated_at: Date;
  // getNotification(): void;
  // createNotification(): void;
  // updateNotification(): void;
  // deleteNotification(): void;
}
