import { AppService } from './app.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductInterface } from './interfaces/product.interface';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let appService: AppService;

  class MockAppService extends AppService {}
  const mockProduct: ProductInterface = {
    id: 1,
    name: 'itemOne',
    price: 1.99,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [
        AppComponent,
        { provide: AppService, useClass: MockAppService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = TestBed.inject(AppComponent);
    appService = TestBed.inject(AppService);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'jasmine-angular'`, () => {
    expect(component.title).toEqual('jasmine-angular');
  });

  it('should render title', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('main')).toBeTruthy();
  });

  describe('AppComponent Class Methods', () => {
    it('#toggleOnOff() should toggle #isOn', () => {
      expect(component.isOn).withContext('off at first').toBe(false);
      component.toggleOnOff();

      expect(component.isOn).withContext('on after click').toBe(true);
      component.toggleOnOff();

      expect(component.isOn).withContext('off after second click').toBe(false);
    });

    it('#toggleOnOff() should set #message according to currentState', () => {
      expect(component.message).withContext('false at first').toMatch(/false/i);
      component.toggleOnOff();
      expect(component.message)
        .withContext('true after click')
        .toMatch(/true/i);
    });

    it('#products should not have a product list after component construction', () => {
      expect(component.products).toEqual([]);
    });

    it('#getProducts should have been called after #ngOnInit method activation', () => {
      spyOn(component, 'getProducts').and.returnValue();

      component.ngOnInit();
      expect(component.getProducts).toHaveBeenCalledTimes(1);
    });
  });
});
