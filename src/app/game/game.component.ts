import { Component, inject,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import {PlayerComponent} from '../player/player.component'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {  
  MatDialog,
 
} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { DiaologAddPlayerComponent } from '../diaolog-add-player/diaolog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';

@Component({
  selector: 'app-game',
  imports: [CommonModule,PlayerComponent,MatButtonModule,MatIconModule,MatDialogModule,MatFormFieldModule,MatInputModule,GameInfoComponent],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent  {
  currentCard: string = '';
  pickedCard = false;
  game!: Game;
  
  readonly dialog = inject(MatDialog);
  
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
      this.pickedCard = true;          
    }
   this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;

    setTimeout(() => {
      this.game.playedCards.push(this.currentCard);
      this.pickedCard = false;       
      
    }, 1000);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiaologAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {    
     
     if(name &&name.length > 0){
       this.game.players.push(name);
     }
     
    });
  }
  

}


