import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private firestore: AngularFirestore, private router: Router) { }


  ngOnInit(): void {
  }

  newGame() {//Start Game
    let game = new Game();
    this.firestore
      .collection('games')
      .add(game.toJson())
      .then((gameInfo: any) => {// Kann nur einmal aufgerufen werden
        this.router.navigateByUrl('/game/' + gameInfo.id);
      });
  }
}
