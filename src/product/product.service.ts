import { Injectable } from '@nestjs/common';
import { ProductDto } from 'src/dto/product/product.dto';
import { EventLogClient } from 'src/event-log-client/sales/event-log-client';

@Injectable()
export class ProductService {
  constructor(private readonly eventLogClient: EventLogClient) {}

  addProduct(product: ProductDto) {
    this.eventLogClient.addProduct(product);
  }
}
