import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';


@Component({
  selector: 'app-add-requests-page',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule],
  templateUrl: './add-requests-page.component.html',
  styleUrl: './add-requests-page.component.css'
})
export class AddRequestsPageComponent {
  firstname = new FormControl()
  lastname = new FormControl()
  purchasedate = new FormControl()
  amount = new FormControl()
  description = new FormControl()

}
