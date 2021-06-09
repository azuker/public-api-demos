export interface User {
  id: number;
  name: string;
}

export interface Book {
  author: string;
  title: string;
  year: number;
  country: string;
  language: string;
  link: string;
  pages: number;
}

export interface Order {
  id: number;
  userId: number;
  bookTitle: string;
  count: number;
}
