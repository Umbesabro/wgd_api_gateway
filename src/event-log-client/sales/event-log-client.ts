import { Injectable } from '@nestjs/common';
import axios from 'axios';

import { EventDto } from 'src/dto/event/event.dt';
import { ProductDto } from 'src/dto/product/product.dto';
import { SalesOrderDto } from 'src/dto/sales/sales-order.dto';
import { Config } from '../cfg/config';
import { QUEUES } from '../cfg/queues';

@Injectable()
export class EventLogClient {
  private readonly createEventUrl = Config.createEventUrl;

  async createSalesOrder(salesOrder: SalesOrderDto): Promise<EventDto> {
    const event: EventDto = {
      payload: salesOrder,
      name: QUEUES.NEW_SALES_ORDER,
    };
    const { data } = await axios.post<EventDto>(this.createEventUrl, event);
    return data;
  }

  async addProduct(product: ProductDto): Promise<EventDto> {
    const event: EventDto = {
      payload: product,
      name: QUEUES.ADD_PRODUCT,
    };
    const { data } = await axios.post<EventDto>(this.createEventUrl, event);
    return data;
  }

  async dispatchSalesOrder(id: string): Promise<EventDto> {
    const event: EventDto = {
      payload: { id },
      name: QUEUES.REQUEST_DISPATCH_ORDER,
    };
    const { data } = await axios.post<EventDto>(this.createEventUrl, event);
    return data;
  }
}
