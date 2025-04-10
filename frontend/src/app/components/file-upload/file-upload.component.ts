import { Component, Output, EventEmitter } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-file-upload',
  imports: [MatCardModule, MatIconModule, CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  @Output() filesSelected = new EventEmitter<FileList>();

  fileName = '';
  isHovering = false;

  constructor(private snackBar: MatSnackBar) { }

  toggleHover(event: boolean) {
    this.isHovering = event;
  }

  onDrop(files: FileList) {
    this.handleFiles(files);
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.handleFiles(input.files);
    }
  }

  private handleFiles(files: FileList) {
    // Validate files here if needed (size, type, etc.)
    if (files.length > 0) {
      this.fileName = files[0].name;
      this.filesSelected.emit(files);
      this.snackBar.open('File selected: ' + this.fileName, 'Close', {
        duration: 3000
      });
    }
  }
}