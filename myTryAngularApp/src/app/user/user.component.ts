import { Component } from '@angular/core';
import { GamesComponent } from '../games/games.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [GamesComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
variable= "Variable modificada desde un componente angular";
logedIn = false;
user = "Leonels"
favGame="";

getFavorite(gameName : string){
this.favGame = gameName;
}

array = ["pepe", "leo", "ezequiel", "pedro", "noemi"]

greet(){
  alert("Hola");
}

}
