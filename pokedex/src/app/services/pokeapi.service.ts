import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {
  private url = '//dev.treinaweb.com.br/pokeapi/';
  pokeList = [];

  constructor(
    private http: HttpClient
  ) { }

  listAll(){
    this.http.get(`${this.url}/pokedex/1`).subscribe(
      response => {
        console.log(response);
      }
    )
  }
}
