import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';



@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 4 },
    { name: 'Tom', type: 'Cat', age: 10},
    { name: 'Frida', type: 'Dog', age: 5},
    { name: 'Bob', type: 'Horse', age: 1}
  ];

  animal_details = '';

  constructor() { }

  ngOnInit(): void {
  }

  show_age(animal: Animal) {
    this.animal_details = 'O pet ' + (animal.name) + ' tem ' + (animal.age) + ' anos!';
  }

}