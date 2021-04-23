import { CharacterService } from './../../../../shared/services/character.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {

  characters: Character[] = [];

  private pageNum = 1;
  private query: string;
  private hideScrollHeight = 200;
  private showScrollHeight = 500;

  constructor(private characterSvc: CharacterService) { }

  ngOnInit(): void {
  }

}
