import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { verify } from './auth';

import { data } from './data';
import { Order } from './dtos';

@Controller('orders')
export class AppController {
  @Get()
  getOrders(): Order[] {
    return data.orders;
  }

  @Get(':id')
  getOrder(@Req() req: Request, @Param('id') id: string): Order | undefined {
    const tokenPayload = verify(req);
    console.log('Received verified call: ', tokenPayload);

    const orderId = +id;
    return data.orders.find(o => o.id === orderId);
  }
}
