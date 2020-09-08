import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-reader',
  templateUrl: './product-reader.component.html',
  styleUrls: ['./product-reader.component.css']
})
export class ProductReaderComponent implements OnInit {

  products: Product[];
  displayedColumns = ['ID', 'Name', 'Price', 'Action'];


  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.read().subscribe(products => {
      this.products = products;
    });
  }

}
