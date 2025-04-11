import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-500',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './error-500.component.html',
  styleUrl: './error-500.component.scss'
})
export class Error500Component {

}
