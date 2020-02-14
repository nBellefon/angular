import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import {  AuthService, User } from '../@shared/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  loginForm : FormGroup;
  users : User [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
    ) { 

    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      email: '',                   // Crée une instance de FormControl
      password: '',                   // Crée une instance de FormControl
    });



  }

  ngOnInit(){
    this.users = this.authService.getUsers();
  }

  login() {
    
    console.log('Données du formulaire...', this.loginForm.value);
    this.authService.auth(this.loginForm.value.email, this.loginForm.value.password, "0");
    
  }

}