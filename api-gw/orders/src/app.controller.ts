import { Controller, Get, Param } from '@nestjs/common';

import { data } from './data';
import { Order } from './dtos';

@Controller('orders')
export class AppController {
  @Get()
  getOrders(): Order[] {
    return data.orders;
  }

  @Get(':id')
  getOrder(@Param('id') id: string): Order | undefined {
    const orderId = +id;
    return data.orders.find(o => o.id === orderId);
  }
}
