import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-file-upload',
  standalone: true,  
  imports: [MatCardModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent {
  @Output() filesSelected = new EventEmitter<File[]>();
  
  fileName = '';
  isHovering = false;

  constructor(private snackBar: MatSnackBar) {}

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
    if (files.length > 0) {
      this.fileName = files[0].name;
      this.filesSelected.emit(files);
      this.snackBar.open(`${files.length} file(s) selected`, 'Close', {
        duration: 3000
      });
    }
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