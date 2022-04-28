import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrls: ['./emitter.component.css']
})
export class EmitterComponent implements OnInit {
  my_number: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  on_change_number() {
    this.my_number= Math.floor(Math.random()* 10);
    }

}
