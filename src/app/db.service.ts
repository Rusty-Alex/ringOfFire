

import {
  addDoc, collection, CollectionReference, deleteDoc, doc, getDoc, setDoc, updateDoc,
  Firestore, getDocs, QuerySnapshot, getFirestore, onSnapshot
} from 'firebase/firestore';
import { Injectable, } from '@angular/core';
import { firebaseConfig } from '../environments/environment';
import {  initializeApp } from 'firebase/app';
import { Game } from './models/game';


@Injectable({
  providedIn: 'root'
})
export class DbService {
  gameID!: string;
  private firestore: Firestore;
  constructor() {
    const app = initializeApp(firebaseConfig);
    this.firestore = getFirestore(app);
  }

  async getGameRealtime(id: string, onChange: (data: any) => void) {
    const gameDoc = doc(this.firestore, `game/${id}`);
    
   
    const unsubscribe = onSnapshot(gameDoc, (docSnapshot) => {
      if (docSnapshot.exists()) {
        const gameData = docSnapshot.data();             
        onChange(gameData); 
      } else {
        console.error('Dokument nicht gefunden.');
      }
    });
  
    
    return unsubscribe;
  }

  async saveGame(game: Game, id: string) {  
 
    const gameCollection = doc(this.firestore, `game/${id}`);
    await updateDoc(gameCollection, game.toJSon());
  } 

  async addData(game: Game) {
    const gameCollection = collection(this.firestore, 'game');
    return addDoc(gameCollection, game.toJSon()).then((gameInfo: any) => {
      return  gameInfo.id;
    });
  }

}

