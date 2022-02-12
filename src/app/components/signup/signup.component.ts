import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Users } from '../model/users';
import { NavigationExtras, Router } from '@angular/router';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  model: any = {};
  showMsg: boolean = false;
  getEmail: any = {};
  // onSubmit() {
  //   //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  // }
  constructor(private apiService:ApiService, private router: Router,public service: UsersService ) {}
 
  ngOnInit() {
  }
 
 
  onSubmit() {
    this.apiService.addPerson(this.model)
      .subscribe(data => {
        console.warn(data)
        var anmol = 'anmol@gmail.com';
        console.warn(this.service.users);
        if (this.model.email !== anmol){
        const navigationExtras: NavigationExtras = {state: {data: 'Registerd successfully'}};
        this.router.navigate(['/login'], navigationExtras);
        } else{
          alert('This Email Already Registered');
        }
      }) 
  }

}
