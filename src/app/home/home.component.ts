import { Component, OnInit } from '@angular/core';
import { ConnexionService, User } from '../@shared/connexion.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pseudo : string;

  constructor(private filmService : ConnexionService) { }

  ngOnInit() {
    this.pseudo = this.filmService.getPseudo();
  }

}