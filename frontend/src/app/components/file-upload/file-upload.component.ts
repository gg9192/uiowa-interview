import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatError } from '@angular/material/input';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule, MatError],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  @Output() filesSelected = new EventEmitter<File>();

  fileName = '';
  isHovering = false;
  isEmpty = false;
  isInvalid = false

  isValid(): boolean {
    this.isEmpty = false;
    this.isInvalid = false

    this.isEmpty = this.fileName === '' ? true : false;

    return !this.isEmpty
  }
  constructor(private snackBar: MatSnackBar) { }

  @ViewChild('fileinput') fileInput!: ElementRef<HTMLInputElement>;


  triggerFileDialog() {
    this.fileInput.nativeElement.click();
  }


  onDrop(event: DragEvent) {
    event.preventDefault();
    this.isHovering = false;

    if (event.dataTransfer?.files) {
      const files = Array.from(event.dataTransfer.files);
      this.handleFiles(files);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const files = Array.from(input.files);
      this.handleFiles(files);
    }
  }

  private handleFiles(files: File[]) {
    if (files.length === 0) {
      return
    }

    this.isEmpty = false;
    this.isInvalid = false;

    const fileExt = files[0]!.name!.split('.').at(-1)
    console.log(fileExt)
    if (!(['png', 'jpeg', 'jpg'].includes(fileExt!.toLowerCase()))) {
      this.isInvalid = true;
      this.fileName = ""
      return
    }
    this.fileName = files[0].name;
    this.filesSelected.emit(files[0]);
    this.snackBar.open(`${files.length} file(s) selected`, 'Close', {
      duration: 3000
    });
    this.isEmpty = false
  }

  onDragOver(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isHovering = true;
  }

  onDragLeave(event: DragEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.isHovering = false;
  }
}