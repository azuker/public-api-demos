// npm i @fancybooks/fancybooks-axios-client
import { Book, BooksApi } from './api'; // @fancybooks/fancybooks-axios-client

async function demo() {
  const p = new BooksApi();

  const books = (await p.getBooks()).data;
  const b = books[0];

  const book = (await p.getBookByTitle(b.title)).data;

  const newBook: Book  = {
    author: 'a',
    country: 'Israel',
    language: 'English',
    link: '',
    pages: 1000,
    title: '',
    year: 1981,
  };

  await p.deleteBookByTitle(b.title);
}
