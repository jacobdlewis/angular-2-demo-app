import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: '' },
    { name: 'Darth Vader', side: '' }
  ];
  private logService: LogService;
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  addCharacter(name, side) {
    const newCharacter = { name: name, side: side };
    this.characters.push(newCharacter);
  }

  fetchCharacters() {
    this.http.get('https://swapi.co/api/people/')
      .map((response: Response) => {
        const data = response.json();
        const characters = data.results;
        const chars = characters.map((char) => {
          return {
            name: char.name,
            side: ''
          };
        });
        return chars;
      })
      .subscribe(
        (data) => {
          console.log(data);
          this.characters = data;
          this.charactersChanged.next();
        }
      );
  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
      return this.characters.slice();
    } else {
      return this.characters.filter((character) => character.side === chosenList);
    }
  }

  onSideChosen(characterInfo) {
    const position = this.characters.findIndex((character) => {
      return character.name === characterInfo.name;
    });
    this.characters[position].side = characterInfo.side;
    // emits the charactersChanged event
    this.charactersChanged.next();
    this.logService.writeLog('Changed side of ' + characterInfo.name + ', new side: ' + characterInfo.side);
    console.log('this.characters', this.characters);
  }

}
