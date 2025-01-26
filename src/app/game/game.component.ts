

import { Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Game } from '../models/game';
import { PlayerComponent } from '../player/player.component'
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import {
  MatDialog,

} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DiaologAddPlayerComponent } from '../diaolog-add-player/diaolog-add-player.component';
import { GameInfoComponent } from '../game-info/game-info.component';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';



@Component({
  selector: 'app-game',
  imports: [CommonModule, PlayerComponent, MatButtonModule, MatIconModule, 
    MatDialogModule, MatFormFieldModule, MatInputModule, GameInfoComponent,],
  templateUrl: './game.component.html',
  styleUrl: './game.component.scss'
})
export class GameComponent {

  
  game!: Game;
  // readonly dialog = inject(MatDialog);
  gameID!: string;

  

  constructor( private route: ActivatedRoute, private dbService: DbService, public dialog: MatDialog) {
 
  }
  
 

  ngOnInit(): void {
    this.newGame();
    this.route.params.subscribe(params => {
      this.gameID = params['id'];  
      this.dbService.getGameRealtime(this.gameID, (data) => {             
        this.updateLocalGameState(data);
      }); 
    });
  }

  updateLocalGameState(data: any) {
    this.game.currentCard = data.currentCard;
    this.game.currentPlayer = data.currentPlayer;
    this.game.pickedCard = data.pickedCard;
    this.game.playedCards = data.playedCards;
    this.game.stack = data.stack;
    this.game.players = data.players;
  }



  async newGame() {
    this.game = new Game();
        
  }

  



  takeCard() {
    if (!this.game.pickedCard) {
      this.game.currentCard = this.game.stack.pop() || '';
      this.game.pickedCard = true;
      
      this.dbService.saveGame(this.game,this.gameID);
    }
    
    
    setTimeout(() => {
      this.game.playedCards.push(this.game.currentCard);
      this.game.pickedCard = false;
      this.game.currentPlayer = (this.game.currentPlayer + 1) % this.game.players.length;
      this.dbService.saveGame(this.game,this.gameID);

    }, 1250);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DiaologAddPlayerComponent);

    dialogRef.afterClosed().subscribe(name => {

      if (name && name.length > 0) {
        this.game.players.push(name);
        this.dbService.saveGame(this.game,this.gameID);
      }

    });
  }


}


