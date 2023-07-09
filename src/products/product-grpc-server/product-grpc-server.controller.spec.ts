import { Test, TestingModule } from '@nestjs/testing';
import { ProductsGrpcServerController } from './product-grpc-server.controller';

describe('ProductsGrpcServerController', () => {
  let controller: ProductsGrpcServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsGrpcServerController],
    }).compile();

    controller = module.get<ProductsGrpcServerController>(ProductsGrpcServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
