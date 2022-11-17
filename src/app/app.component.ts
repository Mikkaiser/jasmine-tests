import { ProductInterface } from './interfaces/product.interface';
import { AppService } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isOn: boolean = false;
  title: string = 'jasmine-angular';
  constructor() {}

  ngOnInit(): void {
    this.isOn = true;
  }

  toggleOnOff() {
    this.isOn = !this.isOn;
  }

  get message() {
    return `Current state is: ${this.isOn ? 'On' : 'Off'}`;
  }
}
