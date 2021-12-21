import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class MyServices {
  constructor() {}

  sayHello() {
    //alert("Hello");
    return of([1, 2, 3]);
  }
}
