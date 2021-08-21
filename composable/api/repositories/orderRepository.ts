import {AxiosRequestConfig} from "axios";
import AbstractRepository from "~/composable/api/repositories/abstractRepository";
import {Order} from "~/composable/api/interfaces/Order";

export class OrderRepository extends AbstractRepository<Order> {
  protected baseUrl = '/api/orders'

  findByMe(config?: AxiosRequestConfig): Promise<Order[]>
  {
    return this.httpClient.$get(this.baseUrl+'/me', config)
  }
}