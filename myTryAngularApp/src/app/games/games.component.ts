import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
  <h1>Los juegos favoritos de {{user}}</h1>
    <ul>
      @for(game of games; track game.id){
        <li (click)="fav(game.name)">{{game.name}}</li>
      }
    </ul>
  `,
  styles: ``
})
export class GamesComponent {
  @Input() user = "";
  @Output() addFavoriteEvent = new EventEmitter<string>();

  fav(gameNme: string) {
    this.addFavoriteEvent.emit(gameNme);
  }

  games = [
    {
      id: 1,
      name: "GTA VI"
    },
    {
      id: 2,
      name: "Paradise"
    },
    {
      id: 3,
      name: "Drangon ball"
    }
  ];



}
