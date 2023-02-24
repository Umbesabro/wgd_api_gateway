import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalesClient } from './event-log-client/sales/sales-client';
import { SalesOrderController } from './sales-order/sales-order.controller';
import { SalesOrderService } from './sales-order/sales-order.service';

@Module({
  imports: [],
  controllers: [AppController, SalesOrderController],
  providers: [AppService, SalesClient, SalesOrderService],
})
export class AppModule {}
