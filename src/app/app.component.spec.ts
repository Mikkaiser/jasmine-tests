import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [AppComponent],
      providers: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = TestBed.inject(AppComponent);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'jasmine-angular'`, () => {
    expect(component.title).toEqual('jasmine-angular');
  });

  describe('AppComponent Class Methods', () => {
    it('#isOn should be false before #ngOnInit be called', () => {
      expect(component.isOn).toBe(false);
    });
    it('#isOn should be true after #ngOnInit be called', () => {
      component.ngOnInit();
      expect(component.isOn).toBe(true);
    });
    it('#toggleOnOff() should toggle #isOn', () => {
      expect(component.isOn).withContext('off at first').toBe(false);
      component.toggleOnOff();

      expect(component.isOn).withContext('on after click').toBe(true);
      component.toggleOnOff();

      expect(component.isOn).withContext('off after second click').toBe(false);
    });
  });

  describe('AppComponente Template Elements', () => {
    it('should show the text "turnOff" in button after init', () => {
      const element: HTMLElement = fixture.nativeElement;
      const button = element.querySelector('button');

      fixture.detectChanges();
      expect(button?.textContent).toEqual('Turn Off');
    });

    it('should show the text "turnOn" in button click', () => {
      const element: HTMLElement = fixture.nativeElement;
      const button = element.querySelector('button');

      fixture.detectChanges();
      button?.click();
      fixture.detectChanges();

      expect(button?.textContent).toEqual('Turn On');
    });
  });
});
