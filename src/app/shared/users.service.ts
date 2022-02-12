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
  messageSource = new BehaviorSubject<any>('Total Work TODO=>');
  currentMessage = this.messageSource.asObservable();
  todoitemscount: any;
  data: Users[] = [];
  todoItems = new BehaviorSubject<Users[]>([]);
  todoItemsList$ = this.todoItems.asObservable();
  completed: any;
  constructor(private apiService: ApiService) {
    console.log('Service Chalpadi');
    this.todoItems;
    this.getData()
      .pipe(
        map((res: any) =>
          res.map((data: any) => {
            return {
              id: data.id,
              title: data.email,
            };
          })
        )
      )
      .subscribe((data: any) => {
        console.warn(data);
        this.data = data;
        this.todoItems.next(data);
        this.todoitemscount = this.data.length;
        //console.warn(this.todoitemscount);
      });
  }
  getData(params = {}) {
    return this.apiService.getApiCall(environment.TODO_API, params);
  }
}
