import { Injectable } from '@angular/core';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { BehaviorSubject } from 'rxjs';
import { concatAll, filter, map, toArray } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ApiService } from './api.service';
import { Users } from '../components/model/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  todoitemscount: any;
  users: Users[] = [];
  todoItems = new BehaviorSubject<Users[]>([]);
  todoItemsList$ = this.todoItems.asObservable();
  completed: any;
  constructor(private apiService: ApiService) {
    console.log('Service Chalpadi');
    this.todoItems;
    this.getData()
      .pipe(
        map((res: any) =>
          res.map((users: any) => {
            return {
              id: users.id,
              email: users.email,
            };
          })
        )
      )
      .subscribe((users: any) => {
        console.warn(users);
        this.users = users;
        this.todoItems.next(users);
        this.todoitemscount = this.users.length;
        //console.warn(this.todoitemscount);
      });
  }
  getData(params = {}) {
    return this.apiService.getApiCall(environment.TODO_API, params);
  }
}
