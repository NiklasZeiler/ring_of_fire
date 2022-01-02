import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DialogAddPlayerComponent } from './dialog-add-player/dialog-add-player.component';
import { GameComponent } from './game/game.component';
import { GameInfoComponent } from './game-info/game-info.component';
import { PlayerComponent } from './player/player.component';
import { StartComponent } from './start/start.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import  {MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { PlayerMobileComponent } from './player-mobile/player-mobile.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    DialogAddPlayerComponent,
    GameComponent,
    GameInfoComponent,
    PlayerComponent,
    StartComponent,
    PlayerMobileComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
