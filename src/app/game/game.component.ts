import { Component, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import { log } from 'node:console';
import {PlayerComponent} from '../player/player.component'

@Component({
  selector: 'app-game',
  imports: [CommonModule,PlayerComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent  {
  currentCard: string = '';
  pickedCard = false;
  game!: Game;

  
  constructor() {
    
  }

  ngOnInit(): void {
    this.newGame();
    
  }
newGame() {
  this.game = new Game();
  
}
 
  takeCard() {
    if(!this.pickedCard){
      this.currentCard = this.game.stack.pop() || '';
      console.log(this.currentCard);
      this.pickedCard = true;
      
      console.log("New played cards:",this.game.playedCards);
    }
   

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickedCard = false;       
      
    }, 1000);
  }
}


