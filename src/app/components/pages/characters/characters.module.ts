import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterListComponent } from '@characters/character-list/character-list.component';
import { CharacterDetailsComponent } from '@characters/character-details/character-details.component';

const myComponents = [CharacterDetailsComponent, CharacterListComponent];

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule, RouterModule
  ],
  exports: [...myComponents]
})
export class CharactersModule { }
