import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private router: Router) { }


  ngOnInit(): void {
  }

  newGame() {//Start Game
    // game = new Game();
    this.router.navigateByUrl('/game');

  }

}
