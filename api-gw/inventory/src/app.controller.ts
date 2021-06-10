import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { verify } from './auth';

import { data } from './data';
import { Book } from './dtos';

@Controller('books')
export class AppController {
  @Get()
  getBooks(): Book[] {
    return data.books;
  }

  @Get(':title')
  getBook(@Req() req: Request, @Param('title') title: string): Book | undefined {
    const tokenPayload = verify(req);
    console.log('Received verified call: ', tokenPayload);

    return data.books.find(b => b.title === title);
  }
}
