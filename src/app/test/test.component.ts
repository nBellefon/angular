import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  loginForm : FormGroup;

  constructor(private fb: FormBuilder) { 

    this.loginForm = this.fb.group({  // Crée une instance de FormGroup
      email: '',                   // Crée une instance de FormControl
      password: '',                   // Crée une instance de FormControl
    });

  }

ngOnInit() {
    this.loginForm.get(email)
  }

  login() {
    console.log('Données du formulaire...', this.loginForm.value);
  }

}