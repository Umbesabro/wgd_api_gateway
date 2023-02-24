import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { EventDto } from 'src/dto/event/event.dt';
import { SalesOrderDto } from 'src/dto/sales/sales-order.dto';
import { Config } from '../cfg/config';
import { QUEUES } from '../cfg/queues';

@Injectable()
export class SalesClient {
  async createSalesOrder(salesOrder: SalesOrderDto): Promise<EventDto> {
    const r = await axios.post(`${Config.url}/api/event/create`, {
      payload: salesOrder,
      name: QUEUES.NEW_SALES_ORDER,
    });
    return r.data;
  }
}
