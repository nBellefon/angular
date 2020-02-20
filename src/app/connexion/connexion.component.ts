import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConnexionService} from '../@shared/connexion.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {
  authForm : FormGroup  ;

  constructor(
    private fb: FormBuilder,
    private router : Router,
    private authService: ConnexionService
  ) { }

  ngOnInit() {

      this.authForm = this.fb.group({ 
      email: '',                   
      password: ''          
    });
  }

  newAuth(){
    console.log('Données du formulaire...', this.authForm.value);
    this.authService.auth(this.authForm.value.email, this.authForm.value.password);
    this.router.navigate(['film']);
  }

}