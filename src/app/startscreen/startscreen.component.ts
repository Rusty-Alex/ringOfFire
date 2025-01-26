import { Component, } from '@angular/core';
import { addDoc, collection, CollectionReference, deleteDoc, doc, getDoc, setDoc, updateDoc, 
  Firestore, getDocs, QuerySnapshot, getFirestore, onSnapshot } from 'firebase/firestore';
import { Router } from '@angular/router';
import { Game } from '../models/game';
import { DbService } from '../db.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  imports: [],
  templateUrl: './startscreen.component.html',
  styleUrl: './startscreen.component.scss'
})
export class StartscreenComponent {
  gameId!: string;
  

  constructor(private dbService: DbService,  private router: Router,private route: ActivatedRoute,) { }
async newgame() {
  let game = new Game();
  let id = await this.dbService.addData(game);   
  this.router.navigateByUrl('/game/' + id);  
  
}
}
