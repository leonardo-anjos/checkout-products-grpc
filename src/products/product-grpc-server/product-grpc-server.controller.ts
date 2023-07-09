import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata, ServerUnaryCall } from 'grpc';

@Controller()
export class ProductGrpcServerController {
  @GrpcMethod('ProductService', 'Create')
  create(data, metadata: Metadata, call: ServerUnaryCall<any>) {
    console.log('data - ProductGrpcServerController', data);
    return { id: 1, ...data };
  }
}
