import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventLogClient } from './event-log-client/sales/event-log-client';
import { SalesOrderController } from './sales-order/sales-order.controller';
import { SalesOrderService } from './sales-order/sales-order.service';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';

@Module({
  imports: [],
  controllers: [AppController, SalesOrderController, ProductController],
  providers: [AppService, EventLogClient, SalesOrderService, ProductService],
})
export class AppModule {}
