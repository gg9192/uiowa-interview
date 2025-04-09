import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatPrefix } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-add-requests-page',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatPrefix, 
    MatDatepickerModule, MatButtonModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-requests-page.component.html',
  styleUrl: './add-requests-page.component.scss'
})
export class AddRequestsPageComponent {
  firstname = new FormControl()
  lastname = new FormControl()
  purchasedate = new FormControl()
  amount = new FormControl()
  description = new FormControl()

}
