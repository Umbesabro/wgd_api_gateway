import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/dto/event/event.dt';
import { SalesOrderDto } from 'src/dto/sales/sales-order.dto';
import { SalesClient } from 'src/event-log-client/sales/sales-client';

@Injectable()
export class SalesOrderService {
  constructor(private readonly salesClient: SalesClient) {}

  public createOrder(salesOrderDto: SalesOrderDto): Promise<EventDto> {
    return this.salesClient.createSalesOrder(salesOrderDto);
  }
}
