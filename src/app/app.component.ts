import {Component} from '@angular/core';
import {Product} from "./models/product";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BT-CRUD';

  products: Product[] = [];

  constructor() {
    this.products.push(new Product(1, 'Nguyen Hoai Nam', 'nam', '123', '05-04-1999', 'Nam', 'Thai Nguyen')),
      this.products.push(new Product(2, 'Hoang Thi Hien', 'hien', '123', '16-03-2000', 'Nu', 'Thai Nguyen')),
      this.products.push(new Product(3, 'Nguyen Quang Hung', 'hung', '123', '20-03-2000', 'Nam', 'Thai Nguyen'))
  }

  deleteProduct(id: any) {
    this.products = this.products.filter(products => {
      return products.id !== id;
    })
  }

  createProduct(product: Product) {
    this.products.push(product);
    console.log(product);
  }

  editProduct(product: Product) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === product.id) {
        this.products[i] = product
      }
    }
  }
}
