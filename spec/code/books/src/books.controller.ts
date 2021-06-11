import { Controller, Delete, Get, HttpStatus, Param } from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { Book } from './all.dto';

@Controller('books')
@ApiTags('books')
export class BooksController {

  @Get()
  @ApiOperation({ operationId: 'getBooks' })
  @ApiUnauthorizedResponse()
  getBooks(): Book[] {
    throw new Error('not implemented');
  }

  @Get(':title')
  @ApiOperation({ operationId: 'getBookByTitle' })
  @ApiParam({ name: 'title', example: 'LOTR' })
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  getBook(@Param('title') title: string): Book {
    throw new Error('not implemented');
  }

  @Delete(':title')
  @ApiOperation({ operationId: 'deleteBookByTitle' })
  @ApiOkResponse({ status: HttpStatus.NO_CONTENT })
  @ApiParam({ name: 'title', example: 'LOTR' })
  @ApiUnauthorizedResponse()
  @ApiNotFoundResponse()
  deleteBook(@Param('title') title: string): void {
    throw new Error('not implemented');
  }
}
