import { Controller } from '@nestjs/common';
import { Body, Post } from '@nestjs/common/decorators';
import { ProductDto } from 'src/dto/product/product.dto';
import { ProductService } from './product.service';

@Controller('api/product')
export class ProductController {

    constructor(private readonly productService:ProductService){}

    @Post("add")
    addProduct(@Body() product: ProductDto) {
        this.productService.addProduct(product);
    }
}
