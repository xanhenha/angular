import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  productinho: Product;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readByID(id).subscribe(product => {
      this.productinho = product;
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.productinho.id).subscribe(() => {
      this.productService.showMessage('Produto excluido com sucesso!');
      this.router.navigate(['/products']);
    })

    // this.productService.update(this.productinho).subscribe(() => {
    //   this.productService.showMessage('Produto atualizado com sucesso!');
    //   this.router.navigate(['/products']);
    // })
  }

  cancel(): void {
    this.router.navigate(['/products']);
  }

}
