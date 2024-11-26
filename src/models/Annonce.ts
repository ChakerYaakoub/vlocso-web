import { Image } from "./Image";
import { User } from "./User";
import { Vehicle } from "./Vehicle";

export interface Annonce {
  annonceId: number;
  title: string;
  price: number;
  startDate: Date;
  endDate: Date;
  quantity: number;
  payerId: number;
  transaction: string;
  description: string;
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

// create annonce
export interface AnnonceResponse {
  data: {
    annonceId: number;
    title: string;
    price: string;
    startDate: string;
    endDate: string;
    quantity: number;
    transaction: string;
    annonceState: string;
    country: string;
    city: string;
    phoneNumber: string;
    premium: boolean;
    vehicle: Vehicle;
    images: null | any[];
    paymentsPremium: null | any[];
    interactions: null | any[];
    conversations: null | any[];
    notifications: null | any[];
    createdAt: string;
    updatedAt: string;
  };
  message: string;
}

// get annonce by id
export interface AnnonceById {
  annonceId: number;
  title: string;
  price: string;
  startDate: string;
  endDate: string;
  quantity: number;
  transaction: string;
  annonceState: string;
  country: string;
  city: string;
  phoneNumber: string;
  premium: boolean;
  vehicle: {
    vehicleId: number;
    type: string;
    mark: string;
    model: string;
    year: number;
    fuelType: string;
    gearbox: string;
    klmCounter: string;
    condition: string;
    climatisation: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
  images: Image[];
  paymentsPremium: any[];
  interactions: any[];
  conversations: any[];
  notifications: any[];
  createdAt: string;
  updatedAt: string;
}

export interface DataAnnonce {
  annonce: AnnonceById;
  user: User;
}
export interface AnnonceByIdResponse {
  data: DataAnnonce;
  message: string;
}

export interface AnnonceHome extends AnnonceByIdResponse {}
