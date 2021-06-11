export class User {
  id: number;
  name: string;
}

export class Book {
  author: string;
  title: string;
  year: number;
  country: string;
  language: string;
  link: string;
  pages: number;
}

export class OrderRef {
  id: number;
  userId: number;
  bookTitle: string;
  count: number;
}

export class Order {
  id: number;
  user: User;
  book: Book;
  count: number;
}
