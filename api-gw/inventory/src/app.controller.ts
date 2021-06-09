import { Controller, Get, Param } from '@nestjs/common';

import { data } from './data';
import { Book } from './dtos';

@Controller('books')
export class AppController {
  @Get()
  getBooks(): Book[] {
    return data.books;
  }

  @Get(':title')
  getBook(@Param('title') title: string): Book | undefined {
    return data.books.find(b => b.title === title);
  }
}
