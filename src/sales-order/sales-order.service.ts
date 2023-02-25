import { Injectable } from '@nestjs/common';
import { EventDto } from 'src/dto/event/event.dt';
import { SalesOrderDto } from 'src/dto/sales/sales-order.dto';
import { EventLogClient } from 'src/event-log-client/sales/event-log-client';

@Injectable()
export class SalesOrderService {
  constructor(private readonly eventLogClient: EventLogClient) {}

  public createOrder(salesOrderDto: SalesOrderDto): Promise<EventDto> {
    return this.eventLogClient.createSalesOrder(salesOrderDto);
  }

  public dispatchSalesOrder(salesOrderId: string): Promise<EventDto> {
    return this.eventLogClient.dispatchSalesOrder(salesOrderId);
  }
}
