import { PokeapiService } from './../../services/pokeapi.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  nameFilter = '';
  selectedPkm = null;

  get pokemonList(){
    return this.pokeapi.pokeList.filter(pokemon => {
      return pokemon.name.indexOf(this.nameFilter) !== -1;
    })
  } 

  get pkmSprite(){
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/sunmoon/pokemon/${number}.png`;
  }

  constructor(
    private pokeapi: PokeapiService
  ) { }

  ngOnInit(): void {
    this.pokeapi.listAll();
  }

  selectedPokemon(pkm){
    this.selectedPkm = pkm;
    console.log(pkm)
  }
}
