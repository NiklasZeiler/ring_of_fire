import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameComponent } from './game/game.component';
import { StartComponent } from './start/start.component';

const routes: Routes = [
  {path: '', component: StartComponent},
  {path: 'game/:id', component: GameComponent},//alles was nach dem Doppelpunkt kommt ist eine Variable über die die Seite verfügt
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
