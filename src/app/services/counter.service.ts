import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  constructor() { }

  incA2I() {
    console.log('Active to inactive: ', ++this.activeToInactiveCounter);
  }

  incI2A() {
    console.log('Inactive to active: ', ++this.inactiveToActiveCounter);
  }
}
