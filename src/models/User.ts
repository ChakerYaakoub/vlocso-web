export interface User {
  userId: number;
  firstName: string;
  lastName: string;
  email: string;
  role?: string;
  type?: string;
  password: string;
  phoneNumber: string;
  country: string;
  city: string;
  birthDate: string;
  urlImageUser: string | null;
  unreadCountNotifications?: number;
  lastLogin?: string;
  emailVerified?: boolean;
  emailVerificationToken?: string;
  emailVerificationTokenExpiration?: string;
  passwordVerificationToken?: string;
  passwordVerificationTokenExpiration?: string;
  isActive?: boolean;
  createdAt?: string;
  updatedAt?: string;
  // annonces: any[];
  // interactions: any[];
  // notifications: any[];
  // conversations: any[];
  // messagesSent: any[];
  // messagesReceived: any[];
  // authProviders: any[];
  // refreshTokensBlacklist: {
  //   refreshTokenBlackListId: number;
  //   refreshToken: string;
  //   createdAt: string;
  // }[];
}
