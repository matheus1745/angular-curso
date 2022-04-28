import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user_name = 'Matheus';

  user_data = {
    email: 'matheus@gmail.com',
    role:  'Admin'
  };

  title = 'matheus-battisti';
}
