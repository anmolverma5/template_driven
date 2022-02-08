import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Users } from '../model/users';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  showMsg: boolean = false;
  // onSubmit() {
  //   //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  // }
  constructor(private apiService:ApiService, private router: Router) {}
 
  ngOnInit() {
  }
 
 
  onSubmit() {
    this.apiService.addPerson(this.model)
      .subscribe(data => {
        console.warn(data)
        const navigationExtras: NavigationExtras = {state: {data: 'Regis'}};
        // this.router.navigate(['/login'], navigationExtras);
      }) 
  }

}
