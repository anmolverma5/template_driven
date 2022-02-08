import { Component } from '@angular/core';
import { UsersService } from './shared/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [];
  title = 'template';
  name: any;
  constructor(private id: UsersService) {}
  parentComponent(data: any) {
    console.warn(data);
  }
}
