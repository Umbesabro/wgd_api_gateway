import axios from 'axios';
import { SinonStub, stub } from 'sinon';
import { EventDto } from 'src/dto/event/event.dt';
import { ProductDto } from 'src/dto/product/product.dto';
import { SalesOrderDto } from 'src/dto/sales/sales-order.dto';
import { Config } from '../cfg/config';
import { QUEUES } from '../cfg/queues';
import { EventLogClient } from './event-log-client';

describe('EventLogClient', () => {
  let eventLogClient: EventLogClient;
  let axiosPostStub: SinonStub;

  beforeAll(() => {
    eventLogClient = new EventLogClient();
  });

  beforeEach(() => {
    axiosPostStub = stub(axios, 'post');
  });

  afterEach(() => {
    axiosPostStub.restore();
  });

  describe('createSalesOrder', () => {
    it('should create a new sales order event', async () => {
      const salesOrder: SalesOrderDto = {
        deliveryDate: new Date(),
        orderDate: new Date(),
        positions: [],
      };
      const event: EventDto = {
        payload: salesOrder,
        name: QUEUES.NEW_SALES_ORDER,
      };
      const responseData: EventDto = {
        name: 'event_name',
        payload: JSON.stringify(salesOrder),
      };

      axiosPostStub.resolves({ data: responseData });

      const result = await eventLogClient.createSalesOrder(salesOrder);

      expect(axiosPostStub.calledOnce).toBe(true);
      expect(axiosPostStub.calledWith(Config.createEventUrl, event)).toBe(true);
      expect(result).toEqual(responseData);
    });
  });

  describe('addProduct', () => {
    it('should create a new product event', async () => {
      const product: ProductDto = {
        name: 'Product',
        qty: 100,
      };
      const event: EventDto = {
        payload: product,
        name: QUEUES.ADD_PRODUCT,
      };
      const responseData: EventDto = { ...event };

      axiosPostStub.resolves({ data: responseData });

      const result = await eventLogClient.addProduct(product);

      expect(axiosPostStub.calledOnce).toBe(true);
      expect(axiosPostStub.calledWith(Config.createEventUrl, event)).toBe(true);
      expect(result).toEqual(responseData);
    });
  });

  describe('dispatchSalesOrder', () => {
    it('should create a request dispatch order event', async () => {
      const id = '123';
      const event: EventDto = {
        payload: { id },
        name: QUEUES.REQUEST_DISPATCH_ORDER,
      };
      const responseData: EventDto = { ...event };

      axiosPostStub.resolves({ data: responseData });

      const result = await eventLogClient.dispatchSalesOrder(id);

      expect(axiosPostStub.calledOnce).toBe(true);
      expect(axiosPostStub.calledWith(Config.createEventUrl, event)).toBe(true);
      expect(result).toEqual(responseData);
    });
  });
});
