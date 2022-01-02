import { Component, OnInit } from '@angular/core';
import { DialogAddPlayerComponent } from '../dialog-add-player/dialog-add-player.component';
import { Game } from 'src/models/game'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  pickCardAnimation = false;
  currentCard: string = '';
  game: Game;
  gameOver: boolean = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.newGame();
  }

  newGame() {
    this.game = new Game();
    console.log(this.game);

  }

  takeCard() {
    if (this.game.stack.length == 0) {
      this.gameOver = true;
    } else if (this.game.players.length == 0) {
      alert('Please add one player');
    } else if (!this.pickCardAnimation) {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      this.game.currentPlayer++;
      this.game.currentPlayer = this.game.currentPlayer % this.game.players.length;
      //     // this.saveGame();
      setTimeout(() => {
        this.game.playedCards.push(this.currentCard);
        this.pickCardAnimation = false;
        //       // this.saveGame();
      }, 1200);
      //   }

    }
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(DialogAddPlayerComponent);

    dialogRef.afterClosed().subscribe((name: string) => {
      if (name && name.length > 0) {// wenn die variable name existiert und die länge größer als 0 ist wird die funktion ausgeführt
        this.game.players.push(name);
        // this.saveGame();
      }
    });
  }


  // saveGame() {
  //   this
  //     .firestore
  //     .collection('games')
  //     .doc(this.gameId)//holt sich das Doukument von firebase mit der dazugehörigen id
  //     .update(this.game.toJson());
  // }

}
