import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsGrpcServerController } from './products-grpc-server/products-grpc-server.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Product])],
  controllers: [ProductsController, ProductsGrpcServerController],
  providers: [ProductsService],
})
export class ProductsModule {}
