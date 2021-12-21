import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyServices } from './myServices';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';
  datas$: Observable<any>;

  constructor(private myServices: MyServices) {
    //  Service initializtion
    this.datas$ = this.myServices.sayHello();
    // Old
    // Service subscription form component
    // this.myServices.sayHello().subscribe((data)=>{
    //   console.log(data);
    // });
  }
}
