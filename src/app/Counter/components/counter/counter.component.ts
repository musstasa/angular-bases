import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p>
    Counter: {{ counter }}
  </p>


  <button (click)="increaseBy(+1)">+1</button>
  <button (click)="resetCounter()">Reset</button>
  <button (click)="increaseBy(-1)">-1</button>
  `
})
export class CounterComponent {

  counter: number = 10;

  increaseBy( value: number ): void{
    this.counter += value;
  }

  resetCounter(){
    this.counter = 10;
  }

}
