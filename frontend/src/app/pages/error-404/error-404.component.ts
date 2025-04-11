import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-404',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './error-404.component.html',
  styleUrl: './error-404.component.scss'
})
export class Error404Component {

}
