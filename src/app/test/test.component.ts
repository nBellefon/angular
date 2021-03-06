import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { FilmService, Film } from '../@shared/film.service';
import { ConnexionService, User } from '../@shared/connexion.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  filmForm : FormGroup;
  films : Film [];
  pseudo : string ;

  constructor(
    private fb: FormBuilder,
    private filmService: FilmService,
    private authService : ConnexionService
    ) {

    this.filmForm = this.fb.group({  // Crée une instance de FormGroup
      nom: '',                   // Crée une instance de FormControl
      genre: '',
      real: ''                   // Crée une instance de FormControl
    });
  }

  ngOnInit(){
    this.films = this.filmService.getFilms();
    this.pseudo = this.authService.getPseudo();
  }

  newFilm() {
    
    console.log('Données du formulaire...', this.filmForm.value);
    this.filmService.auth(this.filmForm.value.nom, this.filmForm.value.genre,this.filmForm.value.real, "0", 0);
  }

  like(id : number){
    this.films.find(x => x.id === id).note+=1
  }

  dislike(id : number){
    this.films.find(x => x.id === id).note-=1
  }

  delete(film : Film){
    this.filmService.supprFilm(film);
    this.ngOnInit()
  }

  init() {
    this.filmService.init().subscribe();
  }

}