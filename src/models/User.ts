export interface User {
  userId?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role?: number;
  phoneNumber: string;
  country?: string;
  city: string;
  birthDate?: string; // new field
  urlImageUser?: string;
  unreadCountNotifications?: number;
  lastLogin?: Date;
  updatedAt?: Date;
  createdAt?: Date;
  // getUser(): void;
  // createUser(): void;
  // updateUser(): void;
  // deleteUser(): void;
  // login(): void;
  // register(): void;
  // getConversation(): Conversation [];
  // getPayments(): PaymentPremium[];
  // getInteractions(): Interaction[];
  // getNotifications(): Notification[];
}
