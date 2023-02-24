import { Body, Controller, Post } from '@nestjs/common';
import { EventDto } from 'src/dto/event/event.dt';
import { SalesOrderDto } from 'src/dto/sales/sales-order.dto';
import { SalesOrderService } from './sales-order.service';

@Controller('api/order/sales')
export class SalesOrderController {
  constructor(private readonly salesOrderService: SalesOrderService) {}

  @Post('/create')
  async createSalesOrder(
    @Body() salesOrderDto: SalesOrderDto,
  ): Promise<EventDto> {
    return await this.salesOrderService.createOrder(salesOrderDto);
  }
}
