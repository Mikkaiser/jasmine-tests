import { ProductInterface } from './interfaces/product.interface';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jasmine-angular';
  products!: ProductInterface[];

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.appService.getProducts().subscribe((products: ProductInterface[]) => {
      console.log(products);
      this.products = products;
    });
  }
}
