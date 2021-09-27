import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Validators, FormGroup, FormControl, FormBuilder} from "@angular/forms";
import {Product} from "../models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  validateProduct!: FormGroup;

  @Input()
  products: Product[] = [];

  @Output() deleteProducts = new EventEmitter<number>();
  @Output() createProducts = new EventEmitter<Product>();
  @Output() editProducts = new EventEmitter<Product>();



  constructor() {
  }

  ngOnInit(): void {
    this.validateProduct = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
      user: new FormControl('', Validators.required),
      passWord: new FormControl('', [Validators.required, Validators.minLength(6)]),
      birthDay: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required)
    })
  }

  createProduct() {
   this.createProducts.emit(this.validateProduct.value)
    this.validateProduct.reset();
  }

  showEdit(id: number) {
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        this.validateProduct.get('id')?.setValue(this.products[i].id);
        this.validateProduct.get('name')?.setValue(this.products[i].name);
        this.validateProduct.get('user')?.setValue(this.products[i].user);
        this.validateProduct.get('passWord')?.setValue(this.products[i].passWord);
        this.validateProduct.get('birthDay')?.setValue(this.products[i].birthDay);
        this.validateProduct.get('gender')?.setValue(this.products[i].gender);
        this.validateProduct.get('address')?.setValue(this.products[i].address);
        return;
      }
    }
  }

  deleteProduct(id: any) {
    this.deleteProducts.emit(id);
  }

  submitEdit() {
    this.editProducts.emit(this.validateProduct.value)
    this.validateProduct.reset();
  }

}
