import { Component, effect, signal, computed, linkedSignal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {

  constructor() {
    effect(() => {
      console.log("Conter Value is: " + this.counter());
    });


    computed(() => {
      console.log("counterL: " + this.linkedCounter())
    });

    linkedSignal(() => {
      console.log("calue through linkedsignal: " + this.linkedCounter());
    })
  }

  counter = signal(0);
  x: number = 10;


  linkedCounter = linkedSignal(() => this.counter);


  setValue(x: string) {
    if (x === 'inc') {
      this.counter.set(this.counter() + 1)
    } else if (x === 'dec') {
      this.counter.set(this.counter() - 1)
    }
  }




}
