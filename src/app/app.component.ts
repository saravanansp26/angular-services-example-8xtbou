import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { MyServices } from './myServices';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  datas$:Observable<any>; ;

  constructor(private myServices: MyServices){

    this.datas$ =  this.myServices.sayHello();
    this.myServices.sayHello().subscribe((data)=>{
      console.log(data);
    });
  }
}
