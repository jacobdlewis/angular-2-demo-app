import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent implements OnInit {
  availableSides = [
    { display: 'None', value: ''},
    { display: 'Light', value: 'light'},
    { display: 'Dark', value: 'dark'}
  ];
  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  ngOnInit() {
  }

  onSubmit(formValues) {
    if (formValues.invalid) {
      return;
    }
    this.swService.addCharacter(formValues.value.name, formValues.value.side);
  }

}
