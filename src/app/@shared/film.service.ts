import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { FILMS } from "../data/films";

@Injectable()
export class FilmService {
  film: Film;
  Films: Array<Film> = [];
  compteur: number = 0;

  constructor(private httpClient: HttpClient) {}

  auth(nom: string, genre: string, real: string, id: string, note: number) {
    this.compteur += 1;
    this.film = {
      id: this.compteur,
      nom: nom,
      genre: genre,
      real: real,
      note: note
    };
    this.addFilm(this.film);

    console.log("film ajouté");
  }

  init() {
    // return this.httpClient.get(
    //   "https://crudcrud.com/api/87c531dfb8534405870668de2a1485ea/films"
    // );

    return this.httpClient.post(
      "https://films-7edb6.firebaseio.com/films.json?access_token=AIzaSyALG2aUcrU8ok6WVX-rVkC2OVJMITILNaQ",
      { test: 'test' }
    );
  }

  getId() {
    return this.film.id;
  }

  getNom() {
    return this.film.nom;
  }
  getGenre() {
    return this.film.genre;
  }

  getReal() {
    return this.film.real;
  }

  getFilms() {
    return this.Films;
  }

  getNote() {
    return this.film.note;
  }

  setNote(note: number) {
    this.film.note = note;
  }

  addFilm(film: Film) {
    this.Films.push(film);
  }

  supprFilm(film: Film) {
    this.Films = this.Films.filter(f => f.id != film.id);
  }
}

export class Film {
  id: number;
  nom: string;
  genre: string;
  real: string;
  note: number;
}
