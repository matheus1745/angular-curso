import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [];

  animal_details = '';

  constructor(private listService: ListService) {
    this.getAnimals()
   }

  ngOnInit(): void {
  }

  show_age(animal: Animal) {
    this.animal_details = 'O pet ' + (animal.name) + ' tem ' + (animal.age) + ' anos!';
  }

  removeAnimal (animal: Animal): void {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.listService.remove(animal.id).subscribe();
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

}
