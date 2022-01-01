import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {

  cardAction = [
    { title: 'Waterfall', description: 'Everyone has to start drinking at the same time. As soon as player 1 stops drinking, player 2 may stop drinking. Player 3 may stop as soon as player 2 stops drinking, and so on.' },
    { title: 'You', description: 'You decide who drinks' },
    { title: 'Me', description: 'Congrats! Drink a shot!' },
    { title: 'Floor', description: 'Touch the floor with your hand. The player who touches the floor last must drink a sip.' },
    { title: 'Guys', description: 'All men drink. ' },
    { title: 'Chicks', description: 'All girls drink.' },
    { title: 'Heaven', description: 'Put your hands up! The last player drinks!' },
    { title: 'Mate', description: 'Pick a mate. Your mate must always drink when you drink and the other way around.' },
    { title: 'Rhyme', description: 'Pick a word. In a clockwise direction, the other players have to find a rhyme for it. Whoever repeats a word or can no longer name a new rhyme must drink a sip.' },
    { title: 'Categories', description: 'The card drawer comes up with a category, and you go around the circle coming up with items in that category. (For example, if category is types of dog, people might say “poodle” or “rottweiler.”) If someone gets stuck, they drink, and the turn is over' },
    { title: 'Never have i ever...', description: ' Say something you never did. Everyone who did it has to drink.' },
    { title: 'Question Master', description: 'If you draw a queen, you are the question master. The question master can ask a question at any point, and everyone has to avoid answering it. If someone forgets the rule and answers the question, they have to drink. The question master can use this on people as many times as they want. Typically, to avoid losing, people will respond to the question master’s question with another question, Jeopardy style. (“Hey, what are you drinking?” “Hmm is it a holiday Shiner?”) Once someone draws the next queen, they take over as question master. ' },
    { title: 'Rule', description: 'Whoever draws a king can make a rule that everyone has to follow. Examples include: not using anyone’s name, not saying sentences longer than 5 words, speaking in a weird accent, etc. If someone forgets to follow the rule, they drink. You can either end the rule when someone draws the next king, or let them all compound. ' },
  ];

  title: string = '';
  description: string = '';
  @Input() card: string;

  constructor() { }
  
  ngOnInit(): void {// wird immer nur beim ersten mal ausgeführt
  }

  ngOnChanges() {//wird jedes mal wenn sich etwas ändert ausgeführt
    if (this.card) {
      let cardNumber = +this.card.split('_')[1];// splittet den Kartennamen an der Stelle wo der Unterstrich ist und gibt die beiden Werte in einem Array aus
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }

  }



}
