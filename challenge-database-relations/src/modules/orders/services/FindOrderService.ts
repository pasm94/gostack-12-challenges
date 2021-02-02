import { inject, injectable } from 'tsyringe';

import IProductsRepository from '@modules/products/repositories/IProductsRepository';
import ICustomersRepository from '@modules/customers/repositories/ICustomersRepository';
import Order from '../infra/typeorm/entities/Order';
import IOrdersRepository from '../repositories/IOrdersRepository';

interface IRequest {
  id: string;
}

@injectable()
class FindOrderService {
  constructor(
    @inject('OrdersRepository')
    private ordersRepository: IOrdersRepository,

    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,

    @inject('CustomersRepository')
    private customersRepository: ICustomersRepository,
  ) {}

  public async execute({ id }: IRequest): Promise<Order | undefined> {
    // TODO
    const order = await this.ordersRepository.findById(id);

    // if (order) {
    //   const customer = await this.customersRepository.findById(
    //     order.customer.id,
    //   );

    //   if (customer) {
    //     order.customer = customer;
    //   }

    //   const productsIds = order.order_products.map(ord => ord.product);

    //   const orderProducts = await this.productsRepository.findAllById(
    //     productsIds,
    //   );

    //   if (orderProducts) {
    //     order.order_products = orderProducts;
    //   }
    // }

    return order;
  }
}

export default FindOrderService;
