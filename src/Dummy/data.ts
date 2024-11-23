import { Annonce } from "../models/Annonce";
import { Message } from "../models/Message";
import { Notification } from "../models/Notification";
import { User } from "../models/User";
import mark1 from "./images/mark1.png";
import mark2 from "./images/mark2.png";
import mark3 from "./images/mark3.png";
import mark4 from "./images/mark4.png";
import mark5 from "./images/mark5.png";
import mark6 from "./images/mark6.png";

export const marksVoiture = [
  { id: "1", imageUrl: mark1, altText: "Voiture 1" },
  { id: "2", imageUrl: mark2, altText: "Voiture 2" },
  { id: "3", imageUrl: mark3, altText: "Voiture 3" },
  { id: "4", imageUrl: mark4, altText: "Voiture 4" },
  { id: "5", imageUrl: mark5, altText: "Voiture 5" },
  { id: "6", imageUrl: mark6, altText: "Voiture 6" },
];

export const marksMoto = [
  { id: "1", imageUrl: mark6, altText: "Moto 1" },
  { id: "2", imageUrl: mark5, altText: "Moto 2" },
  { id: "3", imageUrl: mark4, altText: "Moto 3" },
  { id: "4", imageUrl: mark3, altText: "Moto 4" },
  { id: "5", imageUrl: mark2, altText: "Moto 5" },
  { id: "6", imageUrl: mark1, altText: "Moto 6" },
];

export const dummyUsers: User[] = [
  {
    userId: 1,
    firstName: "John",
    lastName: "Doe",
    email: "johndoe@example.com",
    password: "hashedpassword123",
    birthDate: "1990-01-01",
    role: 1,
    phoneNumber: "+1 555 555 5555",
    country: "USA",
    city: "New York",
    urlImageUser: "https://randomuser.me/api/portraits/men/1.jpg",
    unreadCountNotifications: 2,
    lastLogin: new Date("2024-10-01T09:30:00"),
    createdAt: new Date("2023-08-15"),
    updatedAt: new Date("2024-10-01"),
  },
  {
    user_id: 2,
    first_name: "Jane",
    last_name: "Smith",
    email: "janesmith@example.com",
    password: "hashedpassword456",
    date_of_birth: "1995-05-15",
    role: 1,
    phone_number: "+44 20 7946 0000",
    country: "UK",
    city: "London",
    url_image: "https://randomuser.me/api/portraits/women/2.jpg",
    unread_count_notifications: 5,
    last_login: new Date("2024-10-20T15:45:00"),
    created_at: new Date("2023-11-20"),
    updated_at: new Date("2024-10-20"),
  },
  {
    user_id: 3,
    first_name: "Alice",
    last_name: "Johnson",
    email: "alicej@example.com",
    password: "hashedpassword789",
    date_of_birth: "1995-05-15",
    role: 1,
    phone_number: "+33 1 40 20 20 20",
    country: "France",
    city: "Paris",
    url_image: "https://randomuser.me/api/portraits/women/3.jpg",
    unread_count_notifications: 1,
    last_login: new Date("2024-10-21T13:00:00"),
    created_at: new Date("2024-01-10"),
    updated_at: new Date("2024-10-21"),
  },
];

export const dummyNotifications: Notification[] = [
  {
    notification_id: 1,
    title: "New message from John",
    content:
      "You have a new message from John Doe regarding your apartment listing. ",
    url_image: "https://picsum.photos/200/300?random=1",
    global: false,
    annonce_id: 1,
    created_at: new Date("2024-10-20T10:30:00"),
    updated_at: new Date("2024-10-20T10:30:00"),
  },
  {
    notification_id: 2,
    title: "Price Update",
    content:
      "The price of your listing 'Luxury Apartment in Paris' has been updated.",
    url_image: "https://picsum.photos/200/300?random=2",
    global: false,
    annonce_id: 2,
    created_at: new Date("2024-10-19T11:00:00"),
    updated_at: new Date("2024-10-19T11:00:00"),
  },
  {
    notification_id: 3,
    title: "New Global Announcement",
    content: "We are launching new features next week. Stay tuned!",
    url_image: "https://picsum.photos/200/300?random=3",
    global: true,
    created_at: new Date("2024-10-15T09:00:00"),
    updated_at: new Date("2024-10-15T09:00:00"),
  },
];

export const dummyMessages: Message[] = [
  {
    message_id: 1,
    annonce_id: 1,
    from: "chaker yaakoub",
    annonce_title: "Luxury Apartment in Paris",
    content: "Hi, I'm interested in your listing. Is it still available?",
    created_at: new Date("2024-10-20T14:00:00"),
    updated_at: new Date("2024-10-20T14:00:00"),
  },
  {
    message_id: 2,
    from: "Jhon batchilie",
    annonce_id: 3,
    annonce_title: "Beach House in Malibu",
    content: "Yes, it is still available. Would you like to schedule a visit?",
    created_at: new Date("2024-10-20T14:10:00"),
    updated_at: new Date("2024-10-20T14:10:00"),
  },
  {
    message_id: 3,
    annonce_id: 2,
    from: "Lol Mdr",
    annonce_title: "Used Toyota Corolla 2015",
    content: "I can come by tomorrow at 5 PM. Does that work for you?",
    created_at: new Date("2024-10-20T14:20:00"),
    updated_at: new Date("2024-10-20T14:20:00"),
  },
];

export const dummyAnnonces: Annonce[] = [
  {
    annonce_id: 1,
    title: "Luxury Apartment in Paris",
    price: 250000,
    start_date: new Date("2024-01-01"),
    end_date: new Date("2024-12-31"),
    payer_id: 101,
    transaction: "Completed",
    annonce_state: "Available",
    country: "France",
    city: "Paris",
    phone_number: "+33 1 23 45 67 89",
    expiration_date: new Date("2024-12-31"),
    remain: 90,
    created_at: new Date("2023-11-01"),
    updated_at: new Date("2024-01-15"),
    images: [
      {
        image_id: 1,
        image_url:
          "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688",
        created_at: new Date("2023-11-01"),
        updated_at: new Date("2023-11-01"),
      },
      {
        image_id: 2,
        image_url:
          "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6",
        created_at: new Date("2023-11-02"),
        updated_at: new Date("2023-11-02"),
      },
    ],
  },
  {
    annonce_id: 2,
    title: "Used Toyota Corolla 2015",
    price: 12000,
    start_date: new Date("2024-02-10"),
    end_date: new Date("2024-03-10"),
    payer_id: 102,
    transaction: "Pending",
    annonce_state: "Pending",
    country: "USA",
    city: "New York",
    phone_number: "+1 212 555 1234",
    expiration_date: new Date("2024-03-10"),
    remain: 30,
    created_at: new Date("2024-01-15"),
    updated_at: new Date("2024-01-20"),
    images: [
      {
        image_id: 3,
        image_url:
          "https://images.unsplash.com/photo-1590362891991-f776e747a588",
        created_at: new Date("2024-01-15"),
        updated_at: new Date("2024-01-15"),
      },
      {
        image_id: 4,
        image_url:
          "https://images.unsplash.com/photo-1619767886558-efdc259cde1a",
        created_at: new Date("2024-01-16"),
        updated_at: new Date("2024-01-16"),
      },
    ],
  },
  {
    annonce_id: 3,
    title: "Modern Office Space for Rent",
    price: 5000,
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-03-01"),
    payer_id: 103,
    transaction: "Completed",
    annonce_state: "Rented",
    country: "UK",
    city: "London",
    phone_number: "+44 20 7946 0958",
    expiration_date: new Date("2025-03-01"),
    remain: 365,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-15"),
    images: [
      {
        image_id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
      },
      {
        image_id: 6,
        image_url:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        created_at: new Date("2024-02-02"),
        updated_at: new Date("2024-02-02"),
      },
    ],
  },
  {
    annonce_id: 4,
    title: "Beach House in Malibu",
    price: 3000000,
    start_date: new Date("2024-05-01"),
    end_date: new Date("2025-05-01"),
    payer_id: 104,
    transaction: "In Progress",
    annonce_state: "Under Offer",
    country: "USA",
    city: "Malibu",
    phone_number: "+1 310 555 7890",
    expiration_date: new Date("2025-05-01"),
    remain: 365,
    created_at: new Date("2024-04-01"),
    updated_at: new Date("2024-04-15"),
    images: [
      {
        image_id: 7,
        image_url:
          "https://images.unsplash.com/photo-1527030280862-64139fba04ca",
        created_at: new Date("2024-04-01"),
        updated_at: new Date("2024-04-01"),
      },
      {
        image_id: 8,
        image_url:
          "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab",
        created_at: new Date("2024-04-02"),
        updated_at: new Date("2024-04-02"),
      },
    ],
  },
  {
    annonce_id: 5,
    title: "Modern Office Space for Rent",
    price: 5000,
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-03-01"),
    payer_id: 103,
    transaction: "Completed",
    annonce_state: "Rented",
    country: "UK",
    city: "London",
    phone_number: "+44 20 7946 0958",
    expiration_date: new Date("2025-03-01"),
    remain: 365,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-15"),
    images: [
      {
        image_id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
      },
      {
        image_id: 6,
        image_url:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        created_at: new Date("2024-02-02"),
        updated_at: new Date("2024-02-02"),
      },
    ],
  },
  {
    annonce_id: 6,
    title: "Modern Office Space for Rent",
    price: 5000,
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-03-01"),
    payer_id: 103,
    transaction: "Completed",
    annonce_state: "Rented",
    country: "UK",
    city: "London",
    phone_number: "+44 20 7946 0958",
    expiration_date: new Date("2025-03-01"),
    remain: 365,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-15"),
    images: [
      {
        image_id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
      },
      {
        image_id: 6,
        image_url:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        created_at: new Date("2024-02-02"),
        updated_at: new Date("2024-02-02"),
      },
    ],
  },
  {
    annonce_id: 7,
    title: "Modern Office Space for Rent",
    price: 5000,
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-03-01"),
    payer_id: 103,
    transaction: "Completed",
    annonce_state: "Rented",
    country: "UK",
    city: "London",
    phone_number: "+44 20 7946 0958",
    expiration_date: new Date("2025-03-01"),
    remain: 365,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-15"),
    images: [
      {
        image_id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
      },
      {
        image_id: 6,
        image_url:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        created_at: new Date("2024-02-02"),
        updated_at: new Date("2024-02-02"),
      },
    ],
  },
  {
    annonce_id: 8,
    title: "Modern Office Space for Rent",
    price: 5000,
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-03-01"),
    payer_id: 103,
    transaction: "Completed",
    annonce_state: "Rented",
    country: "UK",
    city: "London",
    phone_number: "+44 20 7946 0958",
    expiration_date: new Date("2025-03-01"),
    remain: 365,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-15"),
    images: [
      {
        image_id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
      },
      {
        image_id: 6,
        image_url:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        created_at: new Date("2024-02-02"),
        updated_at: new Date("2024-02-02"),
      },
    ],
  },
  {
    annonce_id: 9,
    title: "Modern Office Space for Rent",
    price: 5000,
    start_date: new Date("2024-03-01"),
    end_date: new Date("2025-03-01"),
    payer_id: 103,
    transaction: "Completed",
    annonce_state: "Rented",
    country: "UK",
    city: "London",
    phone_number: "+44 20 7946 0958",
    expiration_date: new Date("2025-03-01"),
    remain: 365,
    created_at: new Date("2024-02-01"),
    updated_at: new Date("2024-02-15"),
    images: [
      {
        image_id: 5,
        image_url:
          "https://images.unsplash.com/photo-1497366754035-f200968a6e72",
        created_at: new Date("2024-02-01"),
        updated_at: new Date("2024-02-01"),
      },
      {
        image_id: 6,
        image_url:
          "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        created_at: new Date("2024-02-02"),
        updated_at: new Date("2024-02-02"),
      },
    ],
  },
];
