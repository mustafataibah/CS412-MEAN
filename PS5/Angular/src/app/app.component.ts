import { Component } from '@angular/core';
import { MyService } from './my.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  data: any;
  title = 'my-app';
  constructor(private myService: MyService) {}

  getData(query: string) {
    this.myService.sendQuery(query).subscribe((data) => {
      this.data = data;
    });
  }
}
