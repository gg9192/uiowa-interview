import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatPrefix } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { FileUploadComponent } from '../../components/file-upload/file-upload.component';
import { GenericFormErrorStateMatcher } from '../../utils/errorstatematcher';
import { ViewChild } from '@angular/core';
import { AddRequestServiceService } from '../../services/add-request-service';
import formatDate from '../../utils/dateseralizer';



@Component({
  selector: 'app-add-requests-page',
  imports: [ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatCardModule, MatPrefix, 
    MatDatepickerModule, MatButtonModule, FileUploadComponent],
  providers: [provideNativeDateAdapter()],
  templateUrl: './add-requests-page.component.html',
  styleUrl: './add-requests-page.component.scss'
})
export class AddRequestsPageComponent {
  firstname = new FormControl('', [Validators.required])
  lastname = new FormControl('', [Validators.required])
  purchasedate = new FormControl<Date | null>(null, [Validators.required])
  amount = new FormControl('', [Validators.required, Validators.pattern(/^\d+(\.\d{2})?$/)])
  description = new FormControl('', [Validators.required])
  matcher = new GenericFormErrorStateMatcher()
  private file: File | null = null

  @ViewChild('fileupload') fileUpload!: FileUploadComponent

  constructor (private uploadService: AddRequestServiceService) {}

  submit() {
    const fileValid = this.fileUpload.isValid()
    console.log(this.purchasedate.value)
    if (!fileValid) {
      return;
    }

    if (! (this.firstname.valid && this.lastname.valid && this.amount.valid && this.purchasedate.valid && this.purchasedate.valid)) {
      return;
    }

    const data = {
      firstName: this.firstname.value,
      lastName: this.lastname.value,
      amount: this.amount.value,
      purchaseDate: formatDate(this.purchasedate.value!),
      file: this.file! //for sure not null
    }


    this.uploadService.createRequest(data)

  }

}
