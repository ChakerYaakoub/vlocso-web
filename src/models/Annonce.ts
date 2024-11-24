import { Image } from "./Image";

export interface Annonce {
  annonceId: number;
  title: string;
  price: number;
  startDate: Date;
  endDate: Date;
  quantity: number;
  payerId: number;
  transaction: string;
  annonceState: string;
  country: string;
  premium: boolean;
  city: string;
  phoneNumber: string;
  expirationDate: Date;
  remain?: number;
  createdAt?: Date;
  updatedAt?: Date;
  images: Image[];
  // getAnnonce(): void;
  // createAnnonce(): void;
  // updateAnnonce(): void;
  // deleteAnnonce(): void;
  // getPhone(): string;
  // getAnnonce(): void;
  // getImages(): Image[];
  // getConversations(): Conversation[];
}

export interface CreateAnnonce {
  annonce: {
    userId: number;
    title: string;
    price: string;
    transaction: string;
    quantity: number;
    city: string;
    phoneNumber: string;
  };
  vehicle: {
    type: string;
    mark: string;
    model: string;
    year: number;
    gearbox: string;
    climatisation: string;
    condition: string;
    fuelType: string;
    klm_counter: string;
    description: string;
  };
  images: string[];
}

export interface FormValuesCreateAnnonce {
  userId: number;
  title: string;
  price: string;
  transaction: string;
  quantity: number;
  city: string;
  phoneNumber: string;
  type: string;
  mark: string;
  model: string;
  year: number;
  gearbox: string;
  climatisation: string;
  condition: string;
  fuelType: string;
  klm_counter: string;
  description: string;
  images: string[];
}

export interface ImageUrl {
  secure_url: string;
}
