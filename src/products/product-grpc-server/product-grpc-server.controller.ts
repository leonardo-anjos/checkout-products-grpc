import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';
import { ProductsService } from '../products.service';
import { CreateProductDto } from '../dto/create-product.dto';

@Controller()
export class ProductGrpcServerController {
  constructor(private productsService: ProductsService);

  @GrpcMethod('ProductService', 'Create')
  create(data: CreateProductDto, metadata: Metadata, call: ServerUnaryCall<CreateProductDto>) {
    console.log('data - ProductGrpcServerController', data);
    return this.productsService.create(data);
  }
}
