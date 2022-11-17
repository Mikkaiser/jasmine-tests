import { ProductInterface } from './interfaces/product.interface';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AppService } from './app.service';
import { of } from 'rxjs';

const mockProduct: ProductInterface = {
  id: 1,
  name: 'itemOne',
  price: 1.99,
};

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AppService],
    });
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a product list from observable', (done: DoneFn) => {
    spyOn(service, 'getProducts').and.returnValue(of([mockProduct]));

    service.getProducts().subscribe((products: ProductInterface[]) => {
      expect(products).toEqual([mockProduct]);
      done();
    });
  });
});
