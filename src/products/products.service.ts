import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityNotFoundError, Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>,
  ) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepo.create(createProductDto);
    return this.productRepo.save(product);
  }

  findAll(): Promise<Product[]> {
    return this.productRepo.find();
  }

  findOne(id: number): Promise<Product> {
    return this.productRepo.findOne({ where: { id: id } });
  }

  async update(id: number, updateProductDto: UpdateProductDto): Promise<any> {
    const updateResult = await this.productRepo.update(id, updateProductDto);

    if (!updateResult.affected) {
      throw new EntityNotFoundError(Product, id);
    }

    return this.productRepo.findOne({ where: { id: id } });
  }

  async remove(id: number): Promise<any> {
    const deleteResult = await this.productRepo.delete(id);

    if (!deleteResult.affected) {
      throw new EntityNotFoundError(Product, id);
    }
  }
}
