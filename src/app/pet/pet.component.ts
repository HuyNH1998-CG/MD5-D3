import { Component, OnInit } from '@angular/core';
import {Pet} from '../pet';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet: Pet = {
    name: 'elira',
    image: 'https://i.redd.it/oqt0dmsrsyn71.png',
  }

  constructor() { }

  ngOnInit(): void {
  }

}
