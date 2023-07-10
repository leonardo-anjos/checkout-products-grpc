import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { CreateProductDto } from '../dto/create-product.dto';
import { ProductsService } from '../products.service';

@Controller()
export class ProductGrpcServerController {
  constructor(private productsService: ProductsService);

  @GrpcMethod('ProductService')
  create(data: CreateProductDto, metadata: Metadata, call: ServerUnaryCall<CreateProductDto>) {
    return this.productsService.create(data);
  }

  @GrpcMethod('ProductService')
  update(data: { id: number, name: string, price: number }, metadata: Metadata, call: ServerUnaryCall<CreateProductDto>) {
    const { id, ...rest } = data;
    return this.productsService.update(id, rest);
  }

  @GrpcMethod('ProductService')
  findOne(data: { id: number }) {
    const { id } = data;
    return this.productsService.findOne(id);
  }

  @GrpcMethod('ProductService')
  async findAll(data) {
    const products = await this.productsService.findAll();
    return { data: products };
  }

  @GrpcMethod('ProductService')
  remove(data: { id: number }) {
    const { id } = data;
    this.productsService.remove(id);
  }
}
